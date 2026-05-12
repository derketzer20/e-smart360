import Link from "next/link";

export function PrevisualizarBanner() {
  return (
    <div className="mb-6 rounded-xl border border-amber-500/35 bg-amber-500/10 px-4 py-3 text-center text-xs leading-relaxed text-amber-950 dark:text-amber-50">
      <strong className="font-semibold">PREVISUALIZACIÓN</strong> — Wireframes temporales. Sin llamadas a API
      real; botones deshabilitados o solo muestran aviso. Revise la variable{" "}
      <code className="rounded bg-background/60 px-1 font-mono">NEXT_PUBLIC_SHOW_WIREFRAMES</code> en su{" "}
      <code className="rounded bg-background/60 px-1 font-mono">.env.local</code>.{" "}
      <Link href="/" className="underline underline-offset-2 hover:text-foreground">
        Volver al inicio
      </Link>
    </div>
  );
}
