/**
 * Quita locks de Next (.next/lock, .next/dev/lock) para evitar
 * "Unable to acquire lock ... is another instance of next running?"
 * tras un dev server colgado o un build interrumpido.
 */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
for (const rel of [".next/lock", ".next/dev/lock"]) {
  try {
    fs.unlinkSync(path.join(root, rel));
  } catch {
    /* no existe o ya liberado */
  }
}
