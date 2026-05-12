"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const PRIMARY: { href: string; label: string }[] = [
  { href: "/docs", label: "Inicio" },
  { href: "/docs/overview", label: "Comenzar" },
  { href: "/docs/chatbots/intro", label: "Plataformas" },
  { href: "/docs/sectores/salud", label: "Casos de uso" },
  { href: "/docs/integracion/ecosistema", label: "Integraciones" },
  { href: "/docs/api/overview", label: "Developers" },
  { href: "/docs/ayuda/soporte", label: "Soporte" },
];

export function DocsPrimaryNav() {
  const pathname = usePathname();

  return (
    <nav
      className="flex items-center gap-1 overflow-x-auto border-b border-border/80 px-4 py-0 sm:px-6 lg:px-8"
      aria-label="Secciones de documentación"
    >
      {PRIMARY.map((link) => {
        const active =
          link.href === "/docs"
            ? pathname === "/docs"
            : pathname === link.href || pathname.startsWith(`${link.href}/`);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "shrink-0 border-b-2 border-transparent px-3 py-3 text-sm transition-colors",
              active
                ? "border-[var(--accent-meta,#0668E1)] font-medium text-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
