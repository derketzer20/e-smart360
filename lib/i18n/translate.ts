import type { Locale } from "./types";
import { messages } from "./messages";

function getLeaf(tree: unknown, parts: string[]): string | undefined {
  let cur: unknown = tree;
  for (const p of parts) {
    if (cur === null || cur === undefined || typeof cur !== "object") return undefined;
    cur = (cur as Record<string, unknown>)[p];
  }
  return typeof cur === "string" ? cur : undefined;
}

export function translate(locale: Locale, path: string): string {
  const parts = path.split(".");
  const fromLocale = getLeaf(messages[locale], parts);
  if (fromLocale) return fromLocale;
  const fallback = getLeaf(messages.es, parts);
  return fallback ?? path;
}
