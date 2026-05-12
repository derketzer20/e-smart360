import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Update({
  title = "Actualización",
  date,
  children,
}: {
  title?: string;
  date?: string;
  children: ReactNode;
}) {
  return (
    <aside className="my-8 rounded-2xl border border-[var(--accent-meta,#0668E1)]/25 bg-[var(--accent-meta,#0668E1)]/5 p-5">
      <div className="flex flex-wrap items-center gap-2">
        <p className="font-medium text-foreground">{title}</p>
        {date ? (
          <span className="rounded-full border border-border bg-background/80 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            {date}
          </span>
        ) : null}
      </div>
      <div className="mt-3 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </aside>
  );
}

export function Expandable({ title, children }: { title: string; children: ReactNode }) {
  return (
    <details className="my-5 rounded-2xl border border-border bg-background/80 p-5 shadow-sm open:bg-muted/20">
      <summary className="cursor-pointer select-none font-medium text-foreground">{title}</summary>
      <div className="mt-4 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </details>
  );
}

export function Columns({
  cols = 2,
  children,
}: {
  cols?: 1 | 2 | 3 | 4 | "1" | "2" | "3" | "4";
  children: ReactNode;
}) {
  const count = typeof cols === "string" ? Number(cols) : cols;
  return (
    <div
      className={cn(
        "my-8 grid gap-4",
        count === 1 && "grid-cols-1",
        count === 2 && "md:grid-cols-2",
        count === 3 && "md:grid-cols-3",
        count === 4 && "md:grid-cols-2 xl:grid-cols-4",
      )}
    >
      {children}
    </div>
  );
}

export function Card({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-background/80 p-5 shadow-sm">
      {title ? <h3 className="font-display text-lg text-foreground">{title}</h3> : null}
      <div className={cn("text-sm leading-relaxed text-muted-foreground", title && "mt-3")}>
        {children}
      </div>
    </div>
  );
}

export function Tabs({ children }: { children: ReactNode }) {
  return <div className="my-8 grid gap-4 md:grid-cols-2">{children}</div>;
}

export function Tab({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-border bg-background/80 p-5 shadow-sm">
      <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{title}</h3>
      <div className="mt-4 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

export function CodeGroup({ children }: { children: ReactNode }) {
  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-border bg-foreground/[0.02]">
      {children}
    </div>
  );
}

export function CodeGroupItem({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className="border-b border-border last:border-b-0">
      {title ? (
        <div className="border-b border-border bg-muted/40 px-4 py-2 font-mono text-xs text-muted-foreground">
          {title}
        </div>
      ) : null}
      <div className="p-4">{children}</div>
    </div>
  );
}
