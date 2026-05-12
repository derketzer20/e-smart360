#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const registryPath = path.join(root, "scripts", "docs-source-registry.json");
const cacheRoot = path.join(root, ".source-docs", "provider-cache");
const indexPath = path.join(cacheRoot, "index.json");

function slug(input) {
  return input.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function extractLinks(html, baseUrl) {
  const links = [];
  const rx = /href=["']([^"']+)["'][^>]*>(.*?)<\/a>/gis;
  let match;
  while ((match = rx.exec(html))) {
    const href = match[1];
    const label = match[2].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) continue;
    try {
      const url = new URL(href, baseUrl).toString();
      links.push({ label: label.slice(0, 120), url });
    } catch {
      // ignore malformed links
    }
  }
  return links;
}

function extractHeadings(html) {
  const headings = [];
  const rx = /<h([1-4])[^>]*>(.*?)<\/h\1>/gis;
  let match;
  while ((match = rx.exec(html))) {
    headings.push({
      level: Number(match[1]),
      text: match[2].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim(),
    });
  }
  return headings.filter((h) => h.text);
}

function textSnapshot(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 18000);
}

async function fetchSource(source, provider) {
  if (!/^https?:\/\//.test(source.url)) {
    return {
      id: source.id,
      provider: provider.id,
      url: source.url,
      status: "local",
      cachedFile: null,
      headings: [],
      links: [],
      textLength: 0,
    };
  }

  const fileName = `${provider.id}__${source.id}__${slug(source.kind)}.json`;
  const outFile = path.join(cacheRoot, fileName);
  const item = {
    id: source.id,
    provider: provider.id,
    url: source.url,
    kind: source.kind,
    platforms: source.platforms,
    sections: source.sections,
    fetchedAt: new Date().toISOString(),
    cachedFile: path.relative(root, outFile).replace(/\\/g, "/"),
  };

  try {
    const response = await fetch(source.url, {
      headers: {
        "user-agent": "E-SMART360 documentation coverage audit",
        accept: "text/html,application/xhtml+xml,text/plain;q=0.9,*/*;q=0.8",
      },
    });
    const html = await response.text();
    const payload = {
      ...item,
      status: response.status,
      ok: response.ok,
      headings: extractHeadings(html),
      links: extractLinks(html, source.url).slice(0, 250),
      text: textSnapshot(html),
    };
    fs.writeFileSync(outFile, JSON.stringify(payload, null, 2), "utf8");
    return {
      ...item,
      status: response.status,
      ok: response.ok,
      headings: payload.headings.slice(0, 20),
      links: payload.links.length,
      textLength: payload.text.length,
    };
  } catch (error) {
    const payload = { ...item, ok: false, error: error instanceof Error ? error.message : String(error) };
    fs.writeFileSync(outFile, JSON.stringify(payload, null, 2), "utf8");
    return payload;
  }
}

fs.mkdirSync(cacheRoot, { recursive: true });
const registry = JSON.parse(fs.readFileSync(registryPath, "utf8"));
const results = [];

for (const provider of registry.providers) {
  for (const source of provider.sources) {
    results.push(await fetchSource(source, provider));
  }
}

const index = {
  generatedAt: new Date().toISOString(),
  totalSources: results.length,
  ok: results.filter((item) => item.ok || item.status === "local").length,
  failed: results.filter((item) => item.ok === false).length,
  results,
};

fs.writeFileSync(indexPath, JSON.stringify(index, null, 2), "utf8");
console.log(`Sources: ${index.totalSources}`);
console.log(`Cached/available: ${index.ok}`);
console.log(`Failed: ${index.failed}`);
console.log(`Index: ${path.relative(root, indexPath)}`);
