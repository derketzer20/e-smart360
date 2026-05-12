#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const root = process.cwd();
const sourceDir = path.join(root, ".source-docs", "fulldoc", "docs", "esmart360");
const importMode = process.env.DOCS_IMPORT_MODE === "final" ? "final" : "staging";
const outRoot =
  importMode === "final" ? path.join(root, "content", "docs") : path.join(root, "content", "docs", "imported");
const reportPath = path.join(root, "content", "docs", "_ingestion-report.json");

const SECTION_RULES = [
  {
    section: "broadcasting",
    folder: "broadcasting",
    tokens: ["broadcast", "plantilla", "carrusel", "mensaje-masivo", "24-horas", "campana"],
  },
  {
    section: "ecommerce",
    folder: "ecommerce",
    tokens: ["woocommerce", "shopify", "catalogo", "pay", "pago", "carrito", "cod", "pedido"],
  },
  {
    section: "integracion",
    folder: "integracion",
    tokens: ["webhook", "workflow", "google-sheets", "zapier", "make", "api", "http", "integracion"],
  },
  {
    section: "telegram",
    folder: "telegram",
    tokens: ["telegram", "grupo", "comunidad", "anti-spam", "antispam"],
  },
  {
    section: "operacion-meta",
    folder: "operacion-meta",
    tokens: ["verificacion", "meta", "business-api", "rechazo", "limite", "calidad", "numero"],
  },
  {
    section: "agencias",
    folder: "agencias",
    tokens: ["afiliado", "afiliados", "reseller", "revendedor", "white-label", "marca-blanca"],
  },
  {
    section: "chatbots-omnicanal",
    folder: "chatbots",
    tokens: ["chatbot", "bot", "whatsapp", "instagram", "facebook", "live-chat", "bandeja"],
  },
];

const BRAND_REPLACEMENTS = [
  [/BotSailor/gi, "E-SMART360"],
  [/WhatChimp/gi, "E-SMART360"],
  [/Dialora(?:\\.AI)?/gi, "E-SMART360"],
  [/WATI/gi, "otra plataforma"],
];

function listFiles(dir) {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((entry) => {
      const abs = path.join(dir, entry.name);
      if (entry.isDirectory()) return listFiles(abs);
      return entry.isFile() && /\.(md|mdx)$/i.test(entry.name) ? [abs] : [];
    })
    .sort((a, b) => a.localeCompare(b));
}

function slugify(input) {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 90);
}

function sanitizeSourceName(input) {
  return input
    .replace(/botsailor\.com_blog_/gi, "source-")
    .replace(/BotSailor/gi, "esmart360")
    .replace(/botsailor/gi, "esmart360")
    .replace(/WhatChimp/gi, "esmart360")
    .replace(/whatchimp/gi, "esmart360")
    .replace(/Dialora(?:\\.AI)?/gi, "voice")
    .replace(/dialora/gi, "voice");
}

function canonicalize(input) {
  return slugify(input)
    .replace(/(^|-)esmart360(-|$)/g, "-")
    .replace(/(^|-)e-smart360(-|$)/g, "-")
    .replace(/(^|-)guia(-|$)/g, "-")
    .replace(/(^|-)completa(-|$)/g, "-")
    .replace(/(^-|-$)/g, "");
}

function contentFingerprint(input) {
  const words = input
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[^a-z0-9\s]+/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 4)
    .slice(0, 180);
  return Array.from(new Set(words)).sort().join(" ");
}

function classify(slug, title) {
  const haystack = `${slug} ${title}`.toLowerCase();
  for (const rule of SECTION_RULES) {
    if (rule.tokens.some((t) => haystack.includes(t))) return rule;
  }
  return { section: "chatbots-omnicanal", folder: "chatbots", tokens: [] };
}

function inferAudience(section, slug) {
  if (section === "api-referencia" || slug.includes("api") || slug.includes("webhook")) return ["developer"];
  if (section === "agencias" || slug.includes("afiliado") || slug.includes("reseller")) return ["agencia"];
  if (slug.includes("soporte") || slug.includes("support")) return ["soporte"];
  if (slug.includes("venta") || slug.includes("sales") || slug.includes("ecommerce")) return ["ventas"];
  return ["cliente"];
}

function inferPlatform(section, slug) {
  if (section === "agente-voz") return ["voice"];
  if (section === "oficina-virtual") return ["virtual-office"];
  if (section === "tarjetas-nfc") return ["nfc"];
  if (slug.includes("telegram")) return ["chatbots"];
  return ["chatbots"];
}

function inferUseCase(section, slug) {
  const out = [];
  if (section === "ecommerce" || /shopify|woocommerce|catalogo|carrito|pedido/.test(slug)) out.push("ecommerce");
  if (/salud|medic|cita|appointment/.test(slug)) out.push("healthcare");
  if (/educacion|curso|training/.test(slug)) out.push("education");
  if (/agencia|afiliado|reseller/.test(slug)) out.push("agency");
  if (/venta|lead|marketing|broadcast/.test(slug)) out.push("sales");
  return out;
}

function cleanBody(body) {
  let out = body;
  out = out.replace(/^import\s+.*?from\s+['"]\/src\/components['"];?\s*$/gm, "");
  out = out.replace(/^import\s+\{[\s\S]*?\}\s+from\s+['"]\/src\/components['"];?\s*$/gm, "");
  out = out.replace(/type="warning"/g, 'type="warn"');
  // Los archivos importados vienen de muchas fuentes y algunos tienen JSX
  // anidado inválido para MDX. Para importación masiva priorizamos robustez:
  // convertimos wrappers visuales a Markdown seguro y dejamos las páginas
  // curadas manualmente usando componentes MDX ricos.
  out = out.replace(/<Steps>\s*/g, "");
  out = out.replace(/<\/Steps>\s*/g, "");
  out = out.replace(/<Step\s+title="([^"]+)"\s*>\s*/g, "\n### $1\n\n");
  out = out.replace(/<\/Step>\s*/g, "\n");
  out = out.replace(/<Callout(?:\s+[^>]*)?>\s*/g, "\n> ");
  out = out.replace(/<\/Callout>\s*/g, "\n");
  out = out.replace(/<Expandable\s+title="([^"]+)"\s*>\s*/g, "\n### $1\n\n");
  out = out.replace(/<\/Expandable>\s*/g, "\n");
  out = out.replace(/<Columns(?:\s+[^>]*)?>\s*/g, "\n");
  out = out.replace(/<\/Columns>\s*/g, "\n");
  out = out.replace(/<Card\s+title="([^"]+)"\s*>\s*/g, "\n### $1\n\n");
  out = out.replace(/<\/Card>\s*/g, "\n");
  out = out.replace(/<Tabs>\s*/g, "\n");
  out = out.replace(/<\/Tabs>\s*/g, "\n");
  out = out.replace(/<Tab\s+title="([^"]+)"\s*>\s*/g, "\n### $1\n\n");
  out = out.replace(/<\/Tab>\s*/g, "\n");
  out = out.replace(/<Update\s+title="([^"]+)"\s+date="([^"]+)"\s*>\s*/g, "\n> **$1 ($2)**\n> ");
  out = out.replace(/<Update\s+title="([^"]+)"\s*>\s*/g, "\n> **$1**\n> ");
  out = out.replace(/<\/Update>\s*/g, "\n");
  out = out.replace(/<CodeGroup(?:\s+[^>]*)?>\s*/g, "\n");
  out = out.replace(/<\/CodeGroup>\s*/g, "\n");
  out = out.replace(/<CodeGroupItem\s+title="([^"]+)"\s*>\s*/g, "\n#### $1\n\n");
  out = out.replace(/<\/CodeGroupItem>\s*/g, "\n");
  out = out.replace(/<p>([\s\S]*?)<\/p>/g, "$1");
  out = out.replace(/<ol>([\s\S]*?)<\/ol>/g, "$1");
  out = out.replace(/<ul>([\s\S]*?)<\/ul>/g, "$1");
  out = out.replace(/<li>([\s\S]*?)<\/li>/g, "- $1");
  for (const [from, to] of BRAND_REPLACEMENTS) out = out.replace(from, to);
  // Evita que textos con logos externos queden como imágenes rotas o marcadas.
  out = out.replace(/!\[[^\]]*?(?:logo|brand|BotSailor|WhatChimp|Dialora)[^\]]*?\]\([^)]+\)\s*/gi, "");
  return out.trim();
}

function yamlArray(values) {
  if (!values || values.length === 0) return "[]";
  return `[${values.map((v) => `"${v}"`).join(", ")}]`;
}

function writeDoc({ sourceFile, slug, data, body, section, folder, order }) {
  const sourceSlug = sanitizeSourceName(path.basename(sourceFile).replace(/\.(md|mdx)$/i, ""));
  const title = typeof data.title === "string" ? data.title.replace(/BotSailor|WhatChimp|Dialora/gi, "E-SMART360") : sourceSlug;
  const description =
    typeof data.description === "string"
      ? data.description.replace(/BotSailor|WhatChimp|Dialora/gi, "E-SMART360")
      : `Guía importada y rebrandeada desde la documentación fuente de E-SMART360.`;
  const audience = inferAudience(section, slug);
  const platform = inferPlatform(section, slug);
  const useCase = inferUseCase(section, slug);
  const tags = Array.from(new Set([section, folder, ...useCase])).slice(0, 8);

  const frontmatter = [
    "---",
    `title: ${JSON.stringify(title)}`,
    `description: ${JSON.stringify(description)}`,
    `section: "${section}"`,
    `order: ${order}`,
    `audience: ${yamlArray(audience)}`,
    `platform: ${yamlArray(platform)}`,
    `useCase: ${yamlArray(useCase)}`,
    `source: "fulldoc"`,
    `sourceSlug: "${sourceSlug}"`,
    `canonicalGroup: "${canonicalize(title)}"`,
    `tags: ${yamlArray(tags)}`,
    ...(importMode === "staging" ? [`staging: true`] : []),
    "---",
    "",
  ].join("\n");

  const outDir = path.join(outRoot, folder);
  fs.mkdirSync(outDir, { recursive: true });
  const outFile = path.join(outDir, `${slug}.md`);
  fs.writeFileSync(outFile, `${frontmatter}${cleanBody(body)}\n`, "utf8");
  return outFile;
}

if (!fs.existsSync(sourceDir)) {
  console.error(`No existe la fuente: ${sourceDir}`);
  process.exit(1);
}

fs.rmSync(outRoot, { recursive: true, force: true });
fs.mkdirSync(outRoot, { recursive: true });

const files = listFiles(sourceDir);
const seen = new Set();
const seenFingerprints = new Map();
const imported = [];
const skipped = [];
let order = 100;

for (const file of files) {
  const raw = fs.readFileSync(file, "utf8");
  const parsed = matter(raw);
  const sourceSlug = sanitizeSourceName(path.basename(file).replace(/\.(md|mdx)$/i, ""));
  const title = typeof parsed.data.title === "string" ? parsed.data.title : sourceSlug;
  const canonical = canonicalize(title || sourceSlug);
  const fingerprint = contentFingerprint(parsed.content);
  const slug = slugify(sourceSlug);
  if (!slug || !parsed.content.trim()) {
    skipped.push({ file, reason: "empty" });
    continue;
  }
  if (seen.has(canonical)) {
    skipped.push({ file, reason: "duplicate", canonical });
    continue;
  }
  if (fingerprint && seenFingerprints.has(fingerprint)) {
    skipped.push({ file, reason: "content-duplicate", canonical, duplicateOf: seenFingerprints.get(fingerprint) });
    continue;
  }
  seen.add(canonical);
  if (fingerprint) seenFingerprints.set(fingerprint, canonical);
  const rule = classify(slug, title);
  const outFile = writeDoc({
    sourceFile: file,
    slug,
    data: parsed.data,
    body: parsed.content,
    section: rule.section,
    folder: rule.folder,
    order: order++,
  });
  imported.push({ source: file, output: outFile, section: rule.section, canonical });
}

const report = {
  generatedAt: new Date().toISOString(),
  mode: importMode,
  sourceDir,
  outRoot,
  total: files.length,
  imported: imported.length,
  skipped: skipped.length,
  skippedByReason: skipped.reduce((acc, item) => {
    acc[item.reason] = (acc[item.reason] ?? 0) + 1;
    return acc;
  }, {}),
  imported: imported.map((item) => ({
    source: sanitizeSourceName(path.basename(item.source)),
    output: path.relative(root, item.output).replace(/\\/g, "/"),
    section: item.section,
    canonical: item.canonical,
  })),
  skipped: skipped.map((item) => ({
    source: sanitizeSourceName(path.basename(item.file)),
    reason: item.reason,
    canonical: item.canonical,
  })),
};

fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), "utf8");
console.log(`Importados: ${imported.length}`);
console.log(`Omitidos: ${skipped.length}`);
console.log(`Reporte: ${reportPath}`);
