"use client";

import { useMemo, useState } from "react";
import { BSP_COMPARISON_ROWS, BSP_COMPETITORS, PRICING_BENCHMARK_REVISION, toLocaleText } from "@/lib/pricing-data";
import type { Locale } from "@/lib/i18n/types";
import { trackPricingEvent } from "@/lib/analytics/pricing";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function PricingBspComparison({ locale }: { locale: Locale }) {
  const [competitorId, setCompetitorId] = useState(BSP_COMPETITORS[0].id);

  const competitor = useMemo(
    () => BSP_COMPETITORS.find((c) => c.id === competitorId) ?? BSP_COMPETITORS[0],
    [competitorId],
  );

  return (
    <section id="pricing-bsp-compare" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-[var(--accent-whatsapp-green)]">
            {locale === "en" ? "Price / value" : "Precio / valor"}
          </p>
          <h2 className="mt-2 font-display text-2xl text-foreground md:text-4xl">
            {locale === "en" ? "Compare with popular BSPs" : "Comparativa con BSP populares"}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {locale === "en"
              ? "Three global-style platforms plus three widely adopted options in Mexico (centre–north). Figures are desk research for positioning — validate before paid campaigns."
              : "Tres plataformas de estilo global más tres opciones muy adoptadas en México (centro–norte). Cifras de escritorio para posicionamiento: validar antes de campañas pagadas."}
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            {locale === "en" ? "Benchmark revision:" : "Revisión benchmark:"}{" "}
            <span className="font-mono">{PRICING_BENCHMARK_REVISION}</span>
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-background/95 p-5 shadow-[var(--shadow-card-md)]">
          <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            {locale === "en" ? "Competitor" : "Competidor"}
          </label>
          <Select
            value={competitorId}
            onValueChange={(v) => {
              setCompetitorId(v);
              trackPricingEvent("pricing_competitor_select", { competitorId: v });
            }}
          >
            <SelectTrigger className="mt-2 h-11 rounded-xl border-border/80">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {BSP_COMPETITORS.map((c) => (
                <SelectItem key={c.id} value={c.id}>
                  {c.name}{" "}
                  <span className="text-muted-foreground">
                    ({c.region === "mx" ? "MX" : "Global"})
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="mt-3 text-xs text-muted-foreground">{toLocaleText(locale, competitor.shortNote)}</p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
            <table className="w-full min-w-[420px] text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-3 py-2 text-left font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {locale === "en" ? "Topic" : "Tema"}
                  </th>
                  <th className="border-l border-border px-3 py-2 text-left font-medium text-[var(--accent-meta)]">
                    E-SMART360
                  </th>
                  <th className="border-l border-border px-3 py-2 text-left font-medium text-foreground">
                    {competitor.name}
                  </th>
                </tr>
              </thead>
              <tbody>
                {BSP_COMPARISON_ROWS.map((row) => (
                  <tr
                    key={row.id}
                    className="border-b border-border/60 transition-colors last:border-b-0 hover:bg-[var(--accent-meta-pink)]/[0.04]"
                  >
                    <td className="px-3 py-2.5 align-top text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <span>{toLocaleText(locale, row.label)}</span>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              type="button"
                              className="rounded-full border border-border px-1 text-[10px] font-mono text-muted-foreground"
                            >
                              i
                            </button>
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs text-xs">
                            {toLocaleText(locale, row.tooltip)}
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </td>
                    <td className="border-l border-border px-3 py-2.5 align-top text-foreground/90">
                      {toLocaleText(locale, row.self)}
                    </td>
                    <td className="border-l border-border px-3 py-2.5 align-top text-foreground/90">
                      {toLocaleText(
                        locale,
                        row.byCompetitorId[competitor.id] ?? {
                          es: "—",
                          en: "—",
                        },
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
