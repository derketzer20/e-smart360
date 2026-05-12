import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const DOCS_DIR = path.join(process.cwd(), "content", "docs");

export type DocSection =
  | "vision-general"
  | "primeros-pasos"
  | "sectores"
  | "chatbots-omnicanal"
  | "broadcasting"
  | "ecommerce"
  | "telegram"
  | "agente-voz"
  | "oficina-virtual"
  | "tarjetas-nfc"
  | "integracion"
  | "operacion-meta"
  | "api-referencia"
  | "agencias"
  | "ayuda";

export type DocAudience = "cliente" | "agencia" | "developer" | "ventas" | "soporte" | "admin";
export type DocPlatform = "chatbots" | "voice" | "virtual-office" | "nfc" | "all";
export type DocUseCase =
  | "ecommerce"
  | "healthcare"
  | "education"
  | "real-estate"
  | "professional-services"
  | "agency"
  | "sales"
  | "support";
export type DocSource = "manual" | "fulldoc" | "scrape";

export type DocMeta = {
  title: string;
  description?: string;
  order?: number;
  /** Agrupa el ítem en la barra lateral (orden fijo en `SECTION_ORDER`). */
  section: DocSection;
  audience?: DocAudience[];
  platform?: DocPlatform[];
  useCase?: DocUseCase[];
  source?: DocSource;
  sourceSlug?: string;
  canonicalGroup?: string;
  tags?: string[];
  /** Ocultar del índice / búsqueda */
  draft?: boolean;
};

export type DocFile = DocMeta & {
  /** Ruta sin extensión, p. ej. `chatbots/intro` */
  route: string;
  /** Contenido sin frontmatter */
  body: string;
  format: "md" | "mdx";
};

const SECTION_ORDER: DocSection[] = [
  "vision-general",
  "primeros-pasos",
  "sectores",
  "chatbots-omnicanal",
  "broadcasting",
  "ecommerce",
  "telegram",
  "agente-voz",
  "oficina-virtual",
  "tarjetas-nfc",
  "integracion",
  "operacion-meta",
  "api-referencia",
  "agencias",
  "ayuda",
];

export const DOC_SECTION_LABELS: Record<DocSection, string> = {
  "vision-general": "Visión general",
  "primeros-pasos": "Primeros pasos",
  sectores: "Sectores y casos de uso",
  "chatbots-omnicanal": "Chatbots omnicanal",
  broadcasting: "Broadcasting y plantillas",
  ecommerce: "E-commerce conversacional",
  telegram: "Telegram y comunidades",
  "agente-voz": "Agente de voz IA",
  "oficina-virtual": "Oficina virtual",
  "tarjetas-nfc": "Tarjetas digitales NFC",
  integracion: "Integración del ecosistema",
  "operacion-meta": "Operación Meta",
  "api-referencia": "API y webhooks",
  agencias: "Agencias y revendedores",
  ayuda: "Ayuda",
};

function isDocFile(name: string): boolean {
  return name.endsWith(".md") || name.endsWith(".mdx");
}

function stripExt(rel: string): string {
  return rel.replace(/\.(md|mdx)$/i, "").replace(/\\/g, "/");
}

/** Lista rutas lógicas (sin extensión) de todos los .md / .mdx bajo content/docs. */
export function listDocRoutes(): string[] {
  if (!fs.existsSync(DOCS_DIR)) return [];
  const out: string[] = [];

  function walk(relDir: string) {
    const abs = path.join(DOCS_DIR, relDir);
    const entries = fs.readdirSync(abs, { withFileTypes: true });
    for (const ent of entries) {
      if (ent.name.startsWith(".")) continue;
      const rel = relDir ? `${relDir}/${ent.name}` : ent.name;
      if (ent.isDirectory()) walk(rel);
      else if (ent.isFile() && isDocFile(ent.name)) {
        out.push(stripExt(rel));
      }
    }
  }

  walk("");
  return out;
}

function resolveFile(route: string): { abs: string; format: "md" | "mdx" } | null {
  const base = path.join(DOCS_DIR, route);
  const mdx = `${base}.mdx`;
  const md = `${base}.md`;
  if (fs.existsSync(mdx)) return { abs: mdx, format: "mdx" };
  if (fs.existsSync(md)) return { abs: md, format: "md" };
  return null;
}

function parseSection(raw: unknown): DocSection {
  const s = typeof raw === "string" ? raw : "";
  const allowed = new Set<string>(SECTION_ORDER);
  if (allowed.has(s)) return s as DocSection;
  return "vision-general";
}

function parseStringArray<T extends string>(raw: unknown, allowed?: readonly T[]): T[] | undefined {
  const values = Array.isArray(raw) ? raw : typeof raw === "string" ? [raw] : [];
  const normalized = values.filter((v): v is string => typeof v === "string" && v.length > 0);
  if (normalized.length === 0) return undefined;
  if (!allowed) return normalized as T[];
  const allowedSet = new Set<string>(allowed);
  const filtered = normalized.filter((v): v is T => allowedSet.has(v));
  return filtered.length > 0 ? filtered : undefined;
}

const AUDIENCES: DocAudience[] = ["cliente", "agencia", "developer", "ventas", "soporte", "admin"];
const PLATFORMS: DocPlatform[] = ["chatbots", "voice", "virtual-office", "nfc", "all"];
const USE_CASES: DocUseCase[] = [
  "ecommerce",
  "healthcare",
  "education",
  "real-estate",
  "professional-services",
  "agency",
  "sales",
  "support",
];
const SOURCES: DocSource[] = ["manual", "fulldoc", "scrape"];

function parseSource(raw: unknown): DocSource | undefined {
  if (typeof raw !== "string") return undefined;
  return (SOURCES as string[]).includes(raw) ? (raw as DocSource) : undefined;
}

export function getDocByRoute(route: string): DocFile | null {
  const resolved = resolveFile(route);
  if (!resolved) return null;
  const raw = fs.readFileSync(resolved.abs, "utf8");
  const { data, content } = matter(raw);
  const title = typeof data.title === "string" ? data.title : route;
  const description = typeof data.description === "string" ? data.description : undefined;
  const order = typeof data.order === "number" ? data.order : 0;
  const draft = Boolean(data.draft);
  const section = parseSection(data.section);
  const audience = parseStringArray<DocAudience>(data.audience, AUDIENCES);
  const platform = parseStringArray<DocPlatform>(data.platform, PLATFORMS);
  const useCase = parseStringArray<DocUseCase>(data.useCase, USE_CASES);
  const source = parseSource(data.source);
  const sourceSlug = typeof data.sourceSlug === "string" ? data.sourceSlug : undefined;
  const canonicalGroup = typeof data.canonicalGroup === "string" ? data.canonicalGroup : undefined;
  const tags = parseStringArray<string>(data.tags);

  return {
    route,
    title,
    description,
    order,
    section,
    audience,
    platform,
    useCase,
    source,
    sourceSlug,
    canonicalGroup,
    tags,
    draft,
    body: content.trim(),
    format: resolved.format,
  };
}

export type DocSummary = {
  route: string;
  title: string;
  description?: string;
  section: DocSection;
  order: number;
  audience?: DocAudience[];
  platform?: DocPlatform[];
  useCase?: DocUseCase[];
  source?: DocSource;
  tags?: string[];
};

export function getAllDocSummaries(): DocSummary[] {
  const out: DocSummary[] = [];
  for (const route of listDocRoutes()) {
    const doc = getDocByRoute(route);
    if (!doc || doc.draft) continue;
    out.push({
      route: doc.route,
      title: doc.title,
      description: doc.description,
      section: doc.section,
      order: doc.order ?? 0,
      audience: doc.audience,
      platform: doc.platform,
      useCase: doc.useCase,
      source: doc.source,
      tags: doc.tags,
    });
  }
  out.sort((a, b) => {
    const si = SECTION_ORDER.indexOf(a.section);
    const sj = SECTION_ORDER.indexOf(b.section);
    if (si !== sj) return si - sj;
    if (a.order !== b.order) return a.order - b.order;
    return a.title.localeCompare(b.title, "es");
  });
  return out;
}

export type DocNavGroup = {
  section: DocSection;
  label: string;
  items: { route: string; title: string }[];
};

export function getDocsNavGroups(): DocNavGroup[] {
  const summaries = getAllDocSummaries();
  const bySection = new Map<DocSection, DocNavGroup>();

  for (const s of SECTION_ORDER) {
    bySection.set(s, { section: s, label: DOC_SECTION_LABELS[s], items: [] });
  }

  for (const d of summaries) {
    const g = bySection.get(d.section);
    if (g) g.items.push({ route: d.route, title: d.title });
  }

  return SECTION_ORDER.map((s) => bySection.get(s)!).filter((g) => g.items.length > 0);
}

export function generateStaticParamsForDocs(): { slug: string[] }[] {
  return listDocRoutes().map((route) => ({ slug: route.split("/").filter(Boolean) }));
}
