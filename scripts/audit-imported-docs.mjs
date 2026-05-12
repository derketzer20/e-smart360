#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const root = process.cwd();
const importedRoot = path.join(root, "content", "docs", "imported");
const reportPath = path.join(root, "content", "docs", "_imported-audit-report.json");

function listFiles(dir = importedRoot) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((entry) => {
      const abs = path.join(dir, entry.name);
      if (entry.isDirectory()) return listFiles(abs);
      return /\.(md|mdx)$/i.test(entry.name) ? [abs] : [];
    });
}

function normalize(input) {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/e-?smart360/g, "")
    .replace(/guia|completa|paso|pasos|202[0-9]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function words(content) {
  return (content.match(/[\p{L}\p{N}][\p{L}\p{N}'-]*/gu) ?? []).length;
}

const rows = listFiles().map((abs) => {
  const raw = fs.readFileSync(abs, "utf8");
  const parsed = matter(raw);
  const route = path.relative(path.join(root, "content", "docs"), abs).replace(/\.(md|mdx)$/i, "").replace(/\\/g, "/");
  const title = parsed.data.title ?? route;
  const canonical = parsed.data.canonicalGroup ?? normalize(title);
  const count = words(parsed.content);
  const headings = (parsed.content.match(/^\s{0,3}#{2,4}\s+/gm) ?? []).length;
  return {
    route,
    file: path.relative(root, abs).replace(/\\/g, "/"),
    title,
    section: parsed.data.section ?? null,
    canonical,
    words: count,
    headings,
    score: count + headings * 20,
  };
});

const clusters = new Map();
for (const row of rows) {
  const key = normalize(row.canonical || row.title);
  const current = clusters.get(key) ?? [];
  current.push(row);
  clusters.set(key, current);
}

const canonicalRows = [];
const duplicateRows = [];
for (const [key, items] of clusters) {
  const sorted = items.sort((a, b) => b.score - a.score || a.route.localeCompare(b.route));
  canonicalRows.push({ key, selected: sorted[0], alternatives: sorted.slice(1).map((item) => item.route) });
  duplicateRows.push(...sorted.slice(1).map((item) => ({ ...item, duplicateOf: sorted[0].route })));
}

const bySection = rows.reduce((acc, row) => {
  const key = row.section ?? "unknown";
  acc[key] ??= { total: 0, canonical: 0, duplicates: 0 };
  acc[key].total += 1;
  return acc;
}, {});
for (const row of canonicalRows) bySection[row.selected.section ?? "unknown"].canonical += 1;
for (const row of duplicateRows) bySection[row.section ?? "unknown"].duplicates += 1;

const report = {
  generatedAt: new Date().toISOString(),
  total: rows.length,
  canonical: canonicalRows.length,
  duplicates: duplicateRows.length,
  bySection,
  canonicalRows,
  duplicateRows,
};

fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), "utf8");
console.log(`Imported pages: ${report.total}`);
console.log(`Canonical topics: ${report.canonical}`);
console.log(`Duplicate alternatives: ${report.duplicates}`);
console.log(`Report: ${path.relative(root, reportPath)}`);
