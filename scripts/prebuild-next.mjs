/**
 * Limpia `.next` antes de `npm run build` para evitar en Windows:
 * - lock huérfano (.next/lock)
 * - ENOTEMPTY / árbol .next inconsistente tras builds o dev interrumpidos
 *
 * No se ejecuta en `next dev` salvo que uses un script npm que lo invoque.
 */
import fs from "node:fs";
import path from "node:path";

const nextDir = path.join(process.cwd(), ".next");
try {
  fs.rmSync(nextDir, { recursive: true, force: true });
} catch {
  /* ignorar si no existe o está bloqueado por otro proceso */
}
