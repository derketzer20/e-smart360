import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type WireframeShellProps = {
  title: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
};

/**
 * Marco visual tipo wireframe (bloques y bordes punteados) alineado al sistema del sitio.
 */
export function WireframeShell({ title, eyebrow, children, className }: WireframeShellProps) {
  return (
    <section
      className={cn(
        "rounded-2xl border border-dashed border-foreground/25 bg-background/80 p-5 shadow-sm backdrop-blur-sm md:p-8",
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-xs font-mono uppercase tracking-widest text-[var(--accent-meta,#0668E1)]">{eyebrow}</p>
      ) : null}
      <h2 className="mt-2 font-display text-2xl tracking-tight text-foreground md:text-3xl">{title}</h2>
      <div className="mt-6 space-y-4">{children}</div>
    </section>
  );
}
