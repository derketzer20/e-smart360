import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProductCard({
  title,
  href,
  badge,
  children,
}: {
  title: string;
  href: string;
  badge?: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col rounded-2xl border border-border bg-background/80 p-5 shadow-sm transition-all",
        "hover:border-[var(--accent-meta,#0668E1)]/35 hover:shadow-md",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg text-foreground">{title}</h3>
        <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
      </div>
      {badge ? (
        <span className="mt-2 inline-flex w-fit rounded-full border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          {badge}
        </span>
      ) : null}
      <div className="mt-3 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </Link>
  );
}
