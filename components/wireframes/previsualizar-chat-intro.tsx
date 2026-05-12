import type { ReactNode } from "react";

/**
 * Bloque de texto listo para copiar a un chat interno (Slack, WhatsApp, etc.).
 */
export function PrevisualizarChatIntro({ children }: { children: ReactNode }) {
  return (
    <aside className="rounded-xl border border-border bg-muted/25 p-4 text-sm leading-relaxed text-foreground">
      <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent-meta,#0668E1)]">
        Texto para tu chat (copiar / pegar)
      </p>
      <div className="mt-3 space-y-2 text-muted-foreground [&_strong]:text-foreground">{children}</div>
    </aside>
  );
}
