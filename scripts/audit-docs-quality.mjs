#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const root = process.cwd();
const docsRoot = path.join(root, "content", "docs");
const reportPath = path.join(docsRoot, "_quality-report.json");

const requiredMeta = [
  "title",
  "description",
  "section",
  "order",
  "audience",
  "platform",
  "useCase",
  "source",
  "canonicalGroup",
  "tags",
];

const placeholders = [
  /pr[oó]ximamente/i,
  /pendiente/i,
  /estamos consolidando/i,
  /cuando consolidemos/i,
  /centralizar[aá]/i,
  /gu[ií]a importada y rebrandeada/i,
  /placeholder/i,
  /\bTODO\b/,
];

const forbiddenBrands = [/BotSailor/i, /WhatChimp/i, /Dialora/i, /WATI/i];

function isDocFile(name) {
  return /\.(md|mdx)$/i.test(name);
}

function shouldSkipDir(relDir) {
  return relDir
    .split(/[\\/]/)
    .filter(Boolean)
    .some((part) => part.startsWith("_") || part.startsWith(".") || part === "imported");
}

function listDocs(dir = docsRoot, relDir = "") {
  if (shouldSkipDir(relDir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((entry) => {
      const abs = path.join(dir, entry.name);
      const rel = relDir ? `${relDir}/${entry.name}` : entry.name;
      if (entry.isDirectory()) return listDocs(abs, rel);
      return entry.isFile() && isDocFile(entry.name) ? [{ abs, rel }] : [];
    })
    .sort((a, b) => a.rel.localeCompare(b.rel));
}

function stripFrontmatterAndCode(content) {
  return content
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\{[^}]*\}/g, " ");
}

function wordCount(content) {
  const text = stripFrontmatterAndCode(content);
  return (text.match(/[\p{L}\p{N}][\p{L}\p{N}'-]*/gu) ?? []).length;
}

function minWords(route, data) {
  if (data.section === "api-referencia" || route.startsWith("api/")) return 500;
  if (/intro|overview|onboarding|arquitectura|soporte/.test(route)) return 450;
  if (data.section === "sectores") return 650;
  return 550;
}

function requiredSignals(route, data) {
  if (data.section === "api-referencia" || route.startsWith("api/")) {
    return [
      { name: "json", pattern: /```json|payload|evento/i },
      { name: "security", pattern: /seguridad|token|firma|autenticaci[oó]n/i },
      { name: "retry", pattern: /retry|reintento|idempotencia/i },
      { name: "troubleshooting", pattern: /troubleshooting|errores comunes|validaci[oó]n/i },
    ];
  }
  if (data.section === "sectores") {
    return [
      { name: "problem", pattern: /problema|reto|dolor|necesita/i },
      { name: "platforms", pattern: /plataformas recomendadas|stack recomendado|herramientas/i },
      { name: "checklist", pattern: /checklist|lista de verificaci[oó]n/i },
      { name: "metrics", pattern: /m[eé]tricas|indicadores|kpi/i },
    ];
  }
  return [
    { name: "steps", pattern: /<Steps>|## Pasos|## Configuraci[oó]n|### Paso/i },
    { name: "errors", pattern: /errores comunes|problemas frecuentes|troubleshooting|validaci[oó]n/i },
    { name: "metrics", pattern: /m[eé]tricas|validaci[oó]n|c[oó]mo medir|kpi/i },
  ];
}

const docs = listDocs();
const pages = docs.map(({ abs, rel }) => {
  const raw = fs.readFileSync(abs, "utf8");
  const parsed = matter(raw);
  const body = parsed.content.trim();
  const route = rel.replace(/\.(md|mdx)$/i, "").replace(/\\/g, "/");
  const headings = (body.match(/^\s{0,3}#{2,4}\s+/gm) ?? []).length;
  const words = wordCount(body);
  const missingMeta = requiredMeta.filter((key) => {
    const value = parsed.data[key];
    return value === undefined || value === null || (Array.isArray(value) && value.length === 0) || value === "";
  });
  const placeholderHits = placeholders.filter((rx) => rx.test(raw)).map((rx) => rx.source);
  const brandHits = forbiddenBrands.filter((rx) => rx.test(raw)).map((rx) => rx.source);
  const signals = requiredSignals(route, parsed.data);
  const missingSignals = signals.filter((signal) => !signal.pattern.test(body)).map((signal) => signal.name);
  const requiredWords = minWords(route, parsed.data);
  const failures = [
    ...missingMeta.map((key) => `missing-meta:${key}`),
    ...(words < requiredWords ? [`min-words:${words}/${requiredWords}`] : []),
    ...(headings < 5 ? [`min-headings:${headings}/5`] : []),
    ...placeholderHits.map((hit) => `placeholder:${hit}`),
    ...brandHits.map((hit) => `forbidden-brand:${hit}`),
    ...missingSignals.map((hit) => `missing-signal:${hit}`),
  ];

  return {
    route,
    file: path.relative(root, abs).replace(/\\/g, "/"),
    title: parsed.data.title ?? route,
    section: parsed.data.section ?? null,
    source: parsed.data.source ?? null,
    words,
    requiredWords,
    headings,
    missingMeta,
    missingSignals,
    placeholderHits,
    brandHits,
    status: failures.length === 0 ? "pass" : "fail",
    failures,
  };
});

const failed = pages.filter((page) => page.status === "fail");
const bySection = pages.reduce((acc, page) => {
  const key = page.section ?? "unknown";
  acc[key] ??= { total: 0, failed: 0 };
  acc[key].total += 1;
  if (page.status === "fail") acc[key].failed += 1;
  return acc;
}, {});

const report = {
  generatedAt: new Date().toISOString(),
  publicPages: pages.length,
  passed: pages.length - failed.length,
  failed: failed.length,
  bySection,
  pages,
};

fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), "utf8");
console.log(`Public pages: ${report.publicPages}`);
console.log(`Passed: ${report.passed}`);
console.log(`Failed: ${report.failed}`);
console.log(`Report: ${path.relative(root, reportPath)}`);
if (failed.length > 0) process.exitCode = 1;
