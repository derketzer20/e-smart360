import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { AlertCircle, Info, Lightbulb, ShieldAlert } from "lucide-react";

const styles = {
  info: "border-[var(--accent-meta,#0668E1)]/35 bg-[var(--accent-meta,#0668E1)]/6",
  tip: "border-emerald-500/30 bg-emerald-500/6",
  success: "border-emerald-500/30 bg-emerald-500/6",
  warn: "border-amber-500/40 bg-amber-500/6",
  warning: "border-amber-500/40 bg-amber-500/6",
  danger: "border-destructive/40 bg-destructive/6",
} as const;

const icons = {
  info: Info,
  tip: Lightbulb,
  success: Lightbulb,
  warn: ShieldAlert,
  warning: ShieldAlert,
  danger: AlertCircle,
} as const;

export function Callout({
  type = "info",
  title,
  children,
}: {
  type?: keyof typeof styles;
  title?: string;
  children: ReactNode;
}) {
  const Icon = icons[type];
  return (
    <aside
      className={cn(
        "my-8 flex gap-4 rounded-2xl border px-5 py-4 text-sm leading-relaxed text-muted-foreground",
        styles[type],
      )}
    >
      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-foreground/70" aria-hidden />
      <div className="min-w-0">
        {title ? <p className="mb-2 font-medium text-foreground">{title}</p> : null}
        <div className="space-y-2 [&>p]:mb-0">{children}</div>
      </div>
    </aside>
  );
}
