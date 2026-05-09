import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type CasoDeUso = {
  title: string;
  slug: string;
};

export type CasoDeUsoFull = CasoDeUso & {
  category: string;
  content: string;
};

const CASOS_DIR = path.join(process.cwd(), "content", "casos-de-uso");

function readAllFiles(): string[] {
  return fs.readdirSync(CASOS_DIR).filter((file) => file.endsWith(".md"));
}

/**
 * Limpia y reescribe el cuerpo markdown de un caso de uso para que encaje
 * con la marca y el sistema visual del sitio:
 *
 *  - Imágenes inline tipo "icono + texto" (`![](closeIcon)Texto`) se
 *    convierten en items de lista markdown reales.
 *  - Cualquier otra imagen externa se elimina (suelen ser assets propietarios
 *    de dialora.ai que no cargan o se ven desproporcionados).
 *  - Enlaces hacia dialora.ai se redirigen al CTA de E-Smart360.
 *  - Menciones a `Dialora` se reescriben como `E-Smart360`.
 *  - Se eliminan artefactos del scrape (Skip to Content, Permalink…, banner
 *    de cookies).
 */
function sanitizeContent(content: string): string {
  let out = content;

  // 1. Imagen + texto en la misma línea → bullet de lista
  //    `![alt](url)Texto algo`  →  `- Texto algo`
  out = out.replace(
    /^!\[[^\]]*\]\(https?:\/\/[^)]*\)\s*(\S[^\n]*)$/gm,
    "- $1",
  );

  // 2. Resto de imágenes externas: fuera (suelen ser dialora.ai)
  out = out.replace(/!\[[^\]]*\]\(https?:\/\/[^)]*\)\s*/g, "");

  // 3. Enlaces a dialora.ai → CTA de E-Smart360 conservando el texto
  out = out.replace(
    /\[([^\]]+)\]\(https?:\/\/(?:www\.)?dialora\.ai[^)]*\)/g,
    "[$1](https://www.e-smart360.com/demo)",
  );

  // 4. Branding
  out = out
    .replace(/\bDIALORA\b/g, "E-SMART360")
    .replace(/\bDialora\b/g, "E-Smart360")
    .replace(/\bdialora\b/g, "E-Smart360");

  // 5. Artefactos del scrape (nextra)
  out = out
    .replace(/\[Skip to Content\]\([^)]+\)\s*/g, "")
    .replace(/\s*\[Permalink for this section\]\([^)]+\)/g, "")
    .replace(/^Copy page\s*$/gm, "");

  // 6. Sección de cookies completa al final del documento
  out = out.replace(/##\s+We use cookies[\s\S]*$/m, "");

  // 7. Compactar saltos de línea triplicados que pudieron quedar
  out = out.replace(/\n{3,}/g, "\n\n");

  return out.trim();
}

function parseFile(file: string): CasoDeUsoFull | null {
  const fullPath = path.join(CASOS_DIR, file);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  const title = typeof data.title === "string" ? data.title : "";
  const slug =
    typeof data.slug === "string" ? data.slug : file.replace(/\.md$/, "");
  const category =
    typeof data.category === "string" ? data.category : "casos-de-uso";

  if (!title || !slug) return null;

  return {
    title: title.replace(/\bDialora\b/gi, "E-Smart360"),
    slug,
    category,
    content: sanitizeContent(content),
  };
}

/**
 * Lee todos los archivos `.md` de `content/casos-de-uso` en tiempo de
 * compilación y devuelve únicamente el frontmatter relevante para la
 * navegación (`title` y `slug`).
 *
 * Esta función debe ejecutarse exclusivamente en el servidor (Server
 * Components, route handlers, generación estática). El resultado se serializa
 * y se entrega al Client Component `Navigation` mediante props.
 */
export function getCasosDeUso(): CasoDeUso[] {
  return readAllFiles()
    .map((file) => parseFile(file))
    .filter((c): c is CasoDeUsoFull => c !== null)
    .map(({ title, slug }) => ({ title, slug }))
    .sort((a, b) => a.slug.localeCompare(b.slug));
}

/**
 * Devuelve todos los slugs disponibles. Pensado para `generateStaticParams`
 * en la ruta dinámica `app/casos-de-uso/[slug]`.
 */
export function getAllCasoSlugs(): string[] {
  return readAllFiles()
    .map((file) => parseFile(file))
    .filter((c): c is CasoDeUsoFull => c !== null)
    .map((c) => c.slug);
}

/**
 * Devuelve el caso de uso completo (frontmatter + contenido markdown) para
 * un slug determinado, o `null` si no existe. Evita lanzar errores para que
 * la ruta dinámica pueda dispararle un `notFound()` controlado.
 */
export function getCasoDeUsoBySlug(slug: string): CasoDeUsoFull | null {
  const files = readAllFiles();

  for (const file of files) {
    const caso = parseFile(file);
    if (caso && caso.slug === slug) return caso;
  }

  return null;
}
