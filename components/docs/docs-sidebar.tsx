"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { DocNavGroup } from "@/lib/docs";

export function DocsSidebar({ groups }: { groups: DocNavGroup[] }) {
  const pathname = usePathname();
  const active = pathname.replace(/^\/docs\/?/, "").replace(/\/$/, "") || "";

  return (
    <aside className="hidden w-56 shrink-0 lg:block">
      <div className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto border-r border-border/60 pr-4">
        {groups.map((group) => (
          <div key={group.section} className="mb-8 last:mb-0">
            <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {group.label}
            </p>
            <nav className="space-y-0.5">
              {group.items.slice(0, 14).map((item) => {
                const isActive = active === item.route;
                return (
                  <Link
                    key={item.route}
                    href={`/docs/${item.route}`}
                    className={cn(
                      "block rounded-lg px-2 py-1.5 text-sm transition-colors",
                      isActive
                        ? "bg-[var(--accent-meta,#0668E1)]/10 font-medium text-[var(--accent-meta,#0668E1)]"
                        : "text-muted-foreground hover:bg-foreground/5 hover:text-foreground",
                    )}
                  >
                    {item.title}
                  </Link>
                );
              })}
              {group.items.length > 14 ? (
                <p className="px-2 pt-1 text-[11px] text-muted-foreground/70">
                  + {group.items.length - 14} guías más en búsqueda
                </p>
              ) : null}
            </nav>
          </div>
        ))}
      </div>
    </aside>
  );
}
