#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const root = process.cwd();
const docsRoot = path.join(root, "content", "docs");
const matrixPath = path.join(root, "scripts", "docs-taxonomy-matrix.json");
const registryPath = path.join(root, "scripts", "docs-source-registry.json");
const outPath = path.join(docsRoot, "_source-coverage-report.json");

function listDocs(dir = docsRoot, relDir = "") {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((entry) => {
      const abs = path.join(dir, entry.name);
      const rel = relDir ? `${relDir}/${entry.name}` : entry.name;
      if (entry.isDirectory()) {
        if (entry.name === "imported" || entry.name.startsWith("_") || entry.name.startsWith(".")) return [];
        return listDocs(abs, rel);
      }
      return /\.(md|mdx)$/i.test(entry.name) ? [{ abs, route: rel.replace(/\.(md|mdx)$/i, "").replace(/\\/g, "/") }] : [];
    });
}

const matrix = JSON.parse(fs.readFileSync(matrixPath, "utf8"));
const registry = JSON.parse(fs.readFileSync(registryPath, "utf8"));
const docs = listDocs();
const routeSet = new Set(docs.map((doc) => doc.route));
const docMeta = new Map(
  docs.map((doc) => {
    const parsed = matter(fs.readFileSync(doc.abs, "utf8"));
    return [doc.route, parsed.data];
  }),
);

const groups = matrix.coverageGroups.map((group) => {
  const routes = group.expectedRoutes.map((route) => {
    const exists = routeSet.has(route);
    return {
      route,
      exists,
      source: exists ? docMeta.get(route)?.source ?? null : null,
      tags: exists ? docMeta.get(route)?.tags ?? [] : [],
    };
  });
  const missing = routes.filter((route) => !route.exists);
  return {
    id: group.id,
    label: group.label,
    section: group.section,
    providers: group.providers ?? [],
    expected: routes.length,
    present: routes.length - missing.length,
    missing: missing.map((route) => route.route),
    status: missing.length === 0 ? "pass" : "fail",
    routes,
  };
});

const report = {
  generatedAt: new Date().toISOString(),
  providers: registry.providers.map((provider) => ({
    id: provider.id,
    sources: provider.sources.length,
    sections: Array.from(new Set(provider.sources.flatMap((source) => source.sections ?? []))),
  })),
  groups,
  expectedRoutes: groups.reduce((sum, group) => sum + group.expected, 0),
  presentRoutes: groups.reduce((sum, group) => sum + group.present, 0),
  missingRoutes: groups.flatMap((group) => group.missing),
};

fs.writeFileSync(outPath, JSON.stringify(report, null, 2), "utf8");
console.log(`Expected routes: ${report.expectedRoutes}`);
console.log(`Present routes: ${report.presentRoutes}`);
console.log(`Missing routes: ${report.missingRoutes.length}`);
console.log(`Report: ${path.relative(root, outPath)}`);
if (report.missingRoutes.length > 0) process.exitCode = 1;
