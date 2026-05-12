"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { List } from "lucide-react";
import { cn } from "@/lib/utils";

type TocItem = { id: string; text: string; level: number };

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function DocsToc() {
  const pathname = usePathname();
  const [items, setItems] = useState<TocItem[]>([]);

  useEffect(() => {
    const root = document.getElementById("docs-article");
    if (!root) return;

    const headings = root.querySelectorAll("h2[id], h3[id]");
    const next: TocItem[] = [];
    headings.forEach((el) => {
      const id = el.getAttribute("id");
      if (!id) return;
      const level = el.tagName === "H2" ? 2 : 3;
      const text = el.textContent?.trim() ?? id;
      next.push({ id, text, level });
    });
    setItems(next);
  }, [pathname]);

  if (items.length === 0) return null;

  return (
    <aside className="hidden w-52 shrink-0 xl:block">
      <div className="sticky top-28 space-y-3 border-l border-border/60 pl-5">
        <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          <List className="h-3.5 w-3.5" aria-hidden />
          En esta página
        </p>
        <nav className="space-y-1 text-sm">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "block border-l-2 border-transparent py-1 pl-3 -ml-px text-muted-foreground transition-colors hover:text-foreground",
                item.level === 3 && "pl-5 text-xs",
              )}
            >
              {item.text}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
