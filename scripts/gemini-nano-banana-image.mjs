#!/usr/bin/env node
/**
 * Genera imágenes con la API de Gemini (marca interna "Nano Banana").
 *
 * Modelos recomendados (Gemini API, ver documentación oficial):
 *   - gemini-3.1-flash-image-preview   (Nano Banana 2, rápido)
 *   - gemini-3-pro-image-preview       (Nano Banana Pro, más calidad)
 *   - gemini-2.5-flash-image           (Nano Banana / 2.5 Flash Image)
 *
 * Requisitos:
 *   - Node 20+
 *   - Variable de entorno GEMINI_API_KEY (Google AI Studio)
 *
 * Uso:
 *   GEMINI_API_KEY=... node scripts/gemini-nano-banana-image.mjs --prompt "..." --out ./public/generated.png
 *   npm run gemini:image -- --prompt "..." --out ./public/generated.png
 *
 * @see https://ai.google.dev/gemini-api/docs/image-generation
 */

import * as fs from "node:fs";
import * as path from "node:path";
import process from "node:process";
import { GoogleGenAI } from "@google/genai";

const DEFAULT_MODEL = "gemini-3.1-flash-image-preview";

function parseArgs(argv) {
  const args = { prompt: null, out: null, model: DEFAULT_MODEL, help: false };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--help" || a === "-h") args.help = true;
    else if (a === "--prompt" && argv[i + 1]) {
      args.prompt = argv[++i];
    } else if (a === "--out" && argv[i + 1]) {
      args.out = argv[++i];
    } else if (a === "--model" && argv[i + 1]) {
      args.model = argv[++i];
    }
  }
  return args;
}

function collectImageParts(response) {
  const parts = [];
  const candidates = response?.candidates ?? response?.response?.candidates;
  const first = candidates?.[0];
  const contentParts = first?.content?.parts ?? first?.content?.Parts;
  if (!Array.isArray(contentParts)) return parts;
  for (const part of contentParts) {
    const inline = part?.inlineData ?? part?.inline_data;
    if (inline?.data) parts.push(inline.data);
  }
  return parts;
}

async function main() {
  const args = parseArgs(process.argv);
  if (args.help || !args.prompt || !args.out) {
    console.error(`
Uso:
  npm run gemini:image -- --prompt "tu descripción" --out ./ruta/salida.png [--model ${DEFAULT_MODEL}]

Modelos (--model):
  ${DEFAULT_MODEL}          (Nano Banana 2)
  gemini-3-pro-image-preview (Nano Banana Pro)
  gemini-2.5-flash-image     (2.5 Flash Image)

Entorno: GEMINI_API_KEY requerida.
`);
    process.exit(args.help ? 0 : 1);
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("Error: define GEMINI_API_KEY (clave de Google AI Studio).");
    process.exit(1);
  }

  const outAbs = path.resolve(process.cwd(), args.out);
  fs.mkdirSync(path.dirname(outAbs), { recursive: true });

  const ai = new GoogleGenAI({ apiKey });

  const response = await ai.models.generateContent({
    model: args.model,
    contents: args.prompt,
  });

  const blobs = collectImageParts(response);
  if (!blobs.length) {
    console.error(
      "No se recibió imagen en la respuesta. Revisa el modelo, la facturación de la API y el prompt.",
    );
    if (response?.text) console.error("Texto devuelto:", response.text);
    process.exit(2);
  }

  const buffer = Buffer.from(blobs[0], "base64");
  fs.writeFileSync(outAbs, buffer);
  console.log("Imagen guardada en:", outAbs);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
