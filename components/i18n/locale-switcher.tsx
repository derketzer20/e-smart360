"use client";

import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n/types";
import { useI18n } from "@/components/i18n/i18n-provider";

export function LocaleSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useI18n();

  const btn = (code: Locale, label: string) => (
    <button
      type="button"
      key={code}
      onClick={() => setLocale(code)}
      className={cn(
        "rounded-full px-2.5 py-1 text-[11px] font-mono uppercase tracking-wide transition-colors",
        locale === code
          ? "bg-foreground text-background"
          : "text-muted-foreground hover:text-foreground hover:bg-foreground/5",
      )}
      aria-pressed={locale === code}
    >
      {label}
    </button>
  );

  return (
    <div
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full border border-foreground/10 bg-background/60 p-0.5 backdrop-blur",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      {btn("es", "ES")}
      {btn("en", "EN")}
    </div>
  );
}
