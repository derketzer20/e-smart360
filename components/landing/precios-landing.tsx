"use client";

import { useMemo, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { Check, ShieldCheck, Sparkles, Wallet } from "lucide-react";
import { useI18n } from "@/components/i18n/i18n-provider";
import { formatCurrency } from "@/lib/format-currency";
import {
  AGENCY_CONCIERGE_PACKAGE,
  BUNDLE_PLANS,
  COMPARISON_ROWS,
  PRODUCT_LINES,
  PRICING_FEATURES,
  PUBLIC_PLANS,
  VOICE_TOPUP_PRESETS_MXN,
  currencyCode,
  plansForLine,
  priceForDisplay,
  toLocaleText,
  type BillingCycle,
  type PricingCurrency,
  type ProductLineId,
} from "@/lib/pricing-data";
import { trackPricingEvent } from "@/lib/analytics/pricing";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export function PreciosLanding() {
  const { locale, t } = useI18n();
  const [currency, setCurrency] = useState<PricingCurrency>("MXN");
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");
  const [lineTab, setLineTab] = useState<ProductLineId>("messaging");
  const [estimatedConversations, setEstimatedConversations] = useState(3000);
  const [estimatedVoiceMinutes, setEstimatedVoiceMinutes] = useState(200);
  const [estimatedCards, setEstimatedCards] = useState(5);
  const [selectedTopupId, setSelectedTopupId] = useState<string>("voice-topup-250");
  const [showCompareAll, setShowCompareAll] = useState(false);

  const lineTabs = useMemo(
    () =>
      PRODUCT_LINES.filter((line) => line.id !== "bundle" && line.id !== "agency-concierge"),
    [],
  );

  const comparePlanIds = useMemo(
    () => [
      "msg-spark-free",
      "msg-whatsapp",
      "msg-growth",
      "msg-orbit",
      "voice-core",
      "voice-pro",
      "card-business",
      "card-team",
    ],
    [],
  );

  const recommendedPlan = useMemo(() => {
    if (estimatedVoiceMinutes > 0 && estimatedConversations > 5000) return "bundle-omnivoice";
    if (estimatedCards >= 10) return "bundle-social-card";
    if (estimatedConversations > 1200) return "msg-growth";
    return "bundle-whatsapp-card";
  }, [estimatedConversations, estimatedVoiceMinutes, estimatedCards]);

  const recommendedBundle = useMemo(
    () => BUNDLE_PLANS.find((bundle) => bundle.id === recommendedPlan),
    [recommendedPlan],
  );

  return (
    <div id="pricing-main" className="relative z-10">
      <div
        className="page-grid-bg pointer-events-none fixed inset-0 -z-10 opacity-[0.45]"
        aria-hidden
      />

      <section className="mx-auto max-w-7xl px-4 pb-12 pt-28 sm:px-6 lg:px-8 lg:pt-36">
        <p className="text-center text-xs font-mono uppercase tracking-widest text-[var(--accent-meta,#0668E1)]">
          {t("pricingPage.eyebrow")}
        </p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 text-center font-display text-4xl tracking-tight text-foreground md:text-6xl lg:text-7xl"
        >
          {locale === "en"
            ? "Pricing that matches your growth architecture"
            : "Precios pensados para crecer por fases"}
        </motion.h1>
        <p className="mx-auto mt-5 max-w-3xl text-center text-lg text-muted-foreground">
          {locale === "en"
            ? "Start free in messaging, scale by channels, and add voice, Digital Card, and virtual office without losing margin control."
            : "Comienza gratis en mensajería, escala por canales y agrega voz, Digital Card y oficina virtual sin perder control de margen."}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => {
              setCurrency("MXN");
              trackPricingEvent("pricing_currency_toggle", { currency: "MXN" });
            }}
            className={cn(
              "rounded-full border px-4 py-2 text-xs font-mono uppercase tracking-widest transition-colors",
              currency === "MXN"
                ? "border-[var(--accent-meta,#0668E1)] bg-[var(--accent-meta,#0668E1)]/10 text-[var(--accent-meta,#0668E1)]"
                : "border-border text-muted-foreground hover:text-foreground",
            )}
          >
            MXN (base)
          </button>
          <button
            type="button"
            onClick={() => {
              setCurrency("USD");
              trackPricingEvent("pricing_currency_toggle", { currency: "USD" });
            }}
            className={cn(
              "rounded-full border px-4 py-2 text-xs font-mono uppercase tracking-widest transition-colors",
              currency === "USD"
                ? "border-[var(--accent-meta,#0668E1)] bg-[var(--accent-meta,#0668E1)]/10 text-[var(--accent-meta,#0668E1)]"
                : "border-border text-muted-foreground hover:text-foreground",
            )}
          >
            USD (toggle)
          </button>
          <button
            type="button"
            onClick={() => {
              const next = billingCycle === "monthly" ? "annual" : "monthly";
              setBillingCycle(next);
              trackPricingEvent("pricing_billing_toggle", { billingCycle: next });
            }}
            className="rounded-full border border-border px-4 py-2 text-xs font-mono uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
          >
            {billingCycle === "monthly"
              ? locale === "en"
                ? "Switch to annual"
                : "Cambiar a anual"
              : locale === "en"
                ? "Switch to monthly"
                : "Cambiar a mensual"}
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <Tabs
          value={lineTab}
          onValueChange={(value) => {
            setLineTab(value as ProductLineId);
            trackPricingEvent("pricing_tab_change", { lineId: value });
          }}
        >
          <TabsList className="h-auto w-full flex-wrap rounded-2xl bg-muted/60 p-2">
            {lineTabs.map((line) => (
              <TabsTrigger key={line.id} value={line.id} className="min-w-[150px] rounded-xl py-2">
                {toLocaleText(locale, line.label)}
              </TabsTrigger>
            ))}
          </TabsList>

          {lineTabs.map((line, lineIndex) => {
            const plans = plansForLine(line.id);
            return (
              <TabsContent key={line.id} value={line.id} className="mt-8">
                <div className="grid gap-6 xl:grid-cols-4">
                  {plans.map((plan, i) => {
                    const mxnPrice = billingCycle === "annual"
                      ? (plan.annualPriceMxn ?? plan.monthlyPriceMxn * 12)
                      : plan.monthlyPriceMxn;
                    const displayPrice = priceForDisplay(mxnPrice, currency);
                    const code = currencyCode(currency);
                    const isFree = mxnPrice === 0;

                    return (
                      <motion.article
                        key={plan.id}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (lineIndex + i) * 0.04, duration: 0.35 }}
                        className={cn(
                          "relative flex min-h-[490px] flex-col rounded-3xl border bg-background/90 p-6 shadow-[var(--shadow-card-sm)] backdrop-blur",
                          plan.highlight && "border-[var(--accent-meta,#0668E1)]/45 ring-1 ring-[var(--accent-meta,#0668E1)]/20",
                        )}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <h3 className="font-display text-xl text-foreground">{toLocaleText(locale, plan.name)}</h3>
                          {plan.highlight ? (
                            <span className="rounded-full bg-[var(--accent-meta,#0668E1)]/10 px-2 py-1 text-[10px] font-mono uppercase tracking-wide text-[var(--accent-meta,#0668E1)]">
                              {t("pricingPage.popular")}
                            </span>
                          ) : null}
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {toLocaleText(locale, plan.tagline)}
                        </p>
                        <p className="mt-6 font-display text-5xl tracking-tight text-foreground">
                          {isFree ? (
                            locale === "en" ? "Free" : "Gratis"
                          ) : (
                            formatCurrency(displayPrice, locale, code)
                          )}
                        </p>
                        <p className="mt-1 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                          {isFree
                            ? locale === "en"
                              ? "Entry level"
                              : "Nivel de entrada"
                            : billingCycle === "annual"
                              ? locale === "en"
                                ? "annual charge"
                                : "cobro anual"
                              : locale === "en"
                                ? "per month"
                                : "por mes"}
                        </p>
                        {plan.availability === "trial" && plan.trialDays ? (
                          <p className="mt-2 rounded-lg border border-emerald-500/25 bg-emerald-500/10 px-2 py-1 text-xs text-emerald-600">
                            {locale === "en"
                              ? `${plan.trialDays} day trial`
                              : `Trial ${plan.trialDays} días`}
                          </p>
                        ) : null}

                        <ul className="mt-6 flex-1 space-y-2">
                          {plan.features.map((featureId) => {
                            const feature = PRICING_FEATURES.find((f) => f.id === featureId);
                            if (!feature) return null;
                            return (
                              <li key={feature.id} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-meta,#0668E1)]" />
                                <span>{toLocaleText(locale, feature.label)}</span>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <button
                                      type="button"
                                      className="ml-1 rounded-full border border-border px-1.5 text-[10px] font-mono text-muted-foreground"
                                    >
                                      ?
                                    </button>
                                  </TooltipTrigger>
                                  <TooltipContent sideOffset={8} className="max-w-[260px] text-[11px] leading-relaxed">
                                    <p>{toLocaleText(locale, feature.tooltip)}</p>
                                    {feature.legalNote ? (
                                      <p className="mt-2 border-t border-background/20 pt-2 opacity-90">
                                        {toLocaleText(locale, feature.legalNote)}
                                      </p>
                                    ) : null}
                                  </TooltipContent>
                                </Tooltip>
                              </li>
                            );
                          })}
                        </ul>

                        <Button
                          className={cn(
                            "mt-7 w-full rounded-full",
                            plan.highlight
                              ? "bg-[var(--accent-meta,#0668E1)] text-white hover:bg-[#0554c4]"
                              : "bg-foreground text-background hover:bg-foreground/90",
                          )}
                          asChild
                        >
                          <a
                            href={resolvePlanHref(plan)}
                            onClick={() =>
                              trackPricingEvent("pricing_cta_click", {
                                planId: plan.id,
                                lineId: plan.lineId,
                                ctaType: plan.ctaType,
                              })
                            }
                          >
                            {labelForCta(plan.ctaType, locale)}
                          </a>
                        </Button>
                      </motion.article>
                    );
                  })}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </section>

      <section id="pricing-compare" className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mb-5 flex items-center justify-between gap-4">
          <h2 className="font-display text-2xl text-foreground md:text-4xl">
            {locale === "en" ? "Feature comparison table" : "Tabla comparativa de características"}
          </h2>
          <button
            type="button"
            onClick={() => {
              setShowCompareAll((prev) => !prev);
              trackPricingEvent("pricing_compare_toggle", { expanded: !showCompareAll });
            }}
            className="rounded-full border border-border px-4 py-2 text-xs font-mono uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
          >
            {showCompareAll
              ? locale === "en"
                ? "Compact view"
                : "Vista compacta"
              : locale === "en"
                ? "Expanded view"
                : "Vista expandida"}
          </button>
        </div>
        <div className="hidden overflow-x-auto rounded-3xl border border-border bg-background/90 shadow-[var(--shadow-card-sm)] lg:block">
          <table className="min-w-[980px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th className="px-4 py-3 text-left font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {locale === "en" ? "Feature" : "Característica"}
                </th>
                {comparePlanIds.map((planId) => {
                  const plan = PUBLIC_PLANS.find((p) => p.id === planId);
                  if (!plan) return null;
                  return (
                    <th
                      key={planId}
                      className="min-w-[140px] border-l border-border px-3 py-3 text-left font-medium text-foreground"
                    >
                      {toLocaleText(locale, plan.name)}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {(showCompareAll ? COMPARISON_ROWS : COMPARISON_ROWS.slice(0, 3)).map((row) => (
                <tr key={row.id} className="border-b border-border/60 last:border-b-0">
                  <td className="px-4 py-3 align-top text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <span>{toLocaleText(locale, row.label)}</span>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button
                            type="button"
                            className="rounded-full border border-border px-1.5 text-[10px] font-mono text-muted-foreground"
                          >
                            i
                          </button>
                        </TooltipTrigger>
                        <TooltipContent sideOffset={8} className="max-w-[260px] text-[11px]">
                          {toLocaleText(locale, row.tooltip)}
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </td>
                  {comparePlanIds.map((planId) => (
                    <td key={planId} className="border-l border-border px-3 py-3 text-foreground/85">
                      {row.values[planId] ?? "—"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="lg:hidden">
          <Accordion type="multiple" className="rounded-2xl border border-border bg-background/90 px-4">
            {(showCompareAll ? COMPARISON_ROWS : COMPARISON_ROWS.slice(0, 3)).map((row, idx) => (
              <AccordionItem key={row.id} value={`comp-${idx}`}>
                <AccordionTrigger className="text-left text-sm text-foreground">
                  {toLocaleText(locale, row.label)}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    {comparePlanIds.map((planId) => {
                      const plan = PUBLIC_PLANS.find((p) => p.id === planId);
                      if (!plan) return null;
                      return (
                        <div key={planId} className="flex justify-between gap-4 text-xs">
                          <span className="text-muted-foreground">{toLocaleText(locale, plan.name)}</span>
                          <span className="text-foreground">{row.values[planId] ?? "—"}</span>
                        </div>
                      );
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="pricing-calculator" className="border-y border-border bg-muted/20 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
          <div>
            <h2 className="font-display text-2xl text-foreground md:text-4xl">
              {locale === "en" ? "Plan estimator and usage calculator" : "Calculadora de estimación y consumo"}
            </h2>
            <p className="mt-3 text-muted-foreground">
              {locale === "en"
                ? "Estimate monthly demand and detect the package that protects margin while keeping enough capacity."
                : "Estima demanda mensual y detecta el paquete que protege margen sin quedarte corto."}
            </p>
            <div className="mt-8 space-y-5">
              <RangeInput
                label={locale === "en" ? "Monthly conversations" : "Conversaciones mensuales"}
                value={estimatedConversations}
                min={500}
                max={12000}
                step={500}
                onChange={(value) => {
                  setEstimatedConversations(value);
                  trackPricingEvent("pricing_calculator_update", { field: "conversations", value });
                }}
              />
              <RangeInput
                label={locale === "en" ? "Voice minutes" : "Minutos de voz"}
                value={estimatedVoiceMinutes}
                min={0}
                max={1000}
                step={50}
                onChange={(value) => {
                  setEstimatedVoiceMinutes(value);
                  trackPricingEvent("pricing_calculator_update", { field: "voiceMinutes", value });
                }}
              />
              <RangeInput
                label={locale === "en" ? "Digital cards" : "Tarjetas digitales"}
                value={estimatedCards}
                min={1}
                max={50}
                step={1}
                onChange={(value) => {
                  setEstimatedCards(value);
                  trackPricingEvent("pricing_calculator_update", { field: "cards", value });
                }}
              />
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-background p-6 shadow-[var(--shadow-card-xl)]">
            <p className="text-xs font-mono uppercase tracking-widest text-[var(--accent-meta,#0668E1)]">
              {locale === "en" ? "Recommended bundle" : "Bundle recomendado"}
            </p>
            <h3 className="mt-2 font-display text-3xl text-foreground">
              {recommendedBundle ? toLocaleText(locale, recommendedBundle.name) : "—"}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {recommendedBundle ? toLocaleText(locale, recommendedBundle.tagline) : ""}
            </p>
            {recommendedBundle ? (
              <p className="mt-6 font-display text-5xl text-foreground">
                {formatCurrency(
                  priceForDisplay(
                    billingCycle === "annual"
                      ? (recommendedBundle.annualPriceMxn ?? recommendedBundle.monthlyPriceMxn * 12)
                      : recommendedBundle.monthlyPriceMxn,
                    currency,
                  ),
                  locale,
                  currencyCode(currency),
                )}
              </p>
            ) : null}
            <p className="mt-1 text-xs text-muted-foreground">
              {billingCycle === "annual"
                ? locale === "en"
                  ? "annual estimate"
                  : "estimación anual"
                : locale === "en"
                  ? "monthly estimate"
                  : "estimación mensual"}
            </p>
            {recommendedBundle ? (
              <Button className="mt-7 w-full rounded-full bg-[var(--accent-meta,#0668E1)] text-white hover:bg-[#0554c4]" asChild>
                <a
                  href={resolveBundleHref(recommendedBundle.ctaType)}
                  onClick={() =>
                    trackPricingEvent("pricing_cta_click", {
                      bundleId: recommendedBundle.id,
                      ctaType: recommendedBundle.ctaType,
                    })
                  }
                >
                  {labelForCta(recommendedBundle.ctaType, locale)}
                </a>
              </Button>
            ) : null}
          </div>
        </div>
      </section>

      <section id="pricing-topup" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-display text-2xl text-foreground md:text-4xl">
              {locale === "en" ? "Voice credit top-up" : "Recarga de créditos de voz"}
            </h2>
            <p className="mt-3 text-muted-foreground">
              {locale === "en"
                ? "When your monthly quota is not enough, recharge in predefined blocks with better cost per minute."
                : "Cuando el cupo mensual no alcanza, recarga en bloques predefinidos con mejor costo por minuto."}
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {VOICE_TOPUP_PRESETS_MXN.map((pack) => (
                <button
                  key={pack.id}
                  type="button"
                  onClick={() => {
                    setSelectedTopupId(pack.id);
                    trackPricingEvent("pricing_topup_select", { topupId: pack.id, mxn: pack.mxn });
                  }}
                  className={cn(
                    "rounded-2xl border px-4 py-3 text-left transition-colors",
                    selectedTopupId === pack.id
                      ? "border-[var(--accent-meta,#0668E1)] bg-[var(--accent-meta,#0668E1)]/10"
                      : "border-border hover:border-[var(--accent-meta,#0668E1)]/40",
                  )}
                >
                  <p className="font-display text-2xl text-foreground">
                    {formatCurrency(priceForDisplay(pack.mxn, currency), locale, currencyCode(currency))}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {pack.credits.toLocaleString()} {locale === "en" ? "credits" : "créditos"} · ~{pack.estimatedMinutes}{" "}
                    {locale === "en" ? "min" : "min"}
                  </p>
                </button>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-background p-6 shadow-[var(--shadow-card-sm)]">
            {(() => {
              const selected = VOICE_TOPUP_PRESETS_MXN.find((p) => p.id === selectedTopupId) ?? VOICE_TOPUP_PRESETS_MXN[1];
              return (
                <>
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-medium text-foreground">{locale === "en" ? "Current balance" : "Saldo actual"}</p>
                    <span className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">3,399 créditos</span>
                  </div>
                  <p className="mt-7 font-display text-6xl text-foreground">
                    {formatCurrency(priceForDisplay(selected.mxn, currency), locale, currencyCode(currency))}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {selected.credits.toLocaleString()} {locale === "en" ? "credits" : "créditos"} · ${" "}
                    {(selected.mxn / Math.max(selected.estimatedMinutes, 1)).toFixed(2)}
                    /{locale === "en" ? "minute" : "minuto"}
                  </p>
                  <div className="mt-8 grid grid-cols-2 gap-3">
                    <Button variant="outline" className="rounded-full">
                      {locale === "en" ? "Cancel" : "Cancelar"}
                    </Button>
                    <Button className="rounded-full bg-[var(--accent-meta,#0668E1)] text-white hover:bg-[#0554c4]" asChild>
                      <a href="https://www.e-smart360.com/demo">
                        {locale === "en" ? "Buy credits" : "Comprar créditos"}
                      </a>
                    </Button>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      </section>

      <section id="pricing-bundles" className="border-t border-border bg-muted/20 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl text-foreground md:text-4xl">
            {locale === "en" ? "Bundles and strategic sets" : "Bundles y sets estratégicos"}
          </h2>
          <div className="mt-10 grid gap-6 xl:grid-cols-4">
            {BUNDLE_PLANS.map((bundle, i) => (
              <motion.article
                key={bundle.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className={cn(
                  "flex flex-col rounded-3xl border bg-background p-6 shadow-[var(--shadow-card-sm)]",
                  bundle.highlight && "border-[var(--accent-meta,#0668E1)]/35",
                )}
              >
                <h3 className="font-display text-xl text-foreground">{toLocaleText(locale, bundle.name)}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{toLocaleText(locale, bundle.tagline)}</p>
                <p className="mt-6 font-display text-4xl text-foreground">
                  {formatCurrency(
                    priceForDisplay(
                      billingCycle === "annual"
                        ? (bundle.annualPriceMxn ?? bundle.monthlyPriceMxn * 12)
                        : bundle.monthlyPriceMxn,
                      currency,
                    ),
                    locale,
                    currencyCode(currency),
                  )}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {billingCycle === "annual"
                    ? locale === "en"
                      ? "annual package"
                      : "paquete anual"
                    : locale === "en"
                      ? "monthly package"
                      : "paquete mensual"}
                </p>
                <ul className="mt-5 flex-1 space-y-1 text-sm text-muted-foreground">
                  {bundle.includesPlans.map((planId) => {
                    const plan = PUBLIC_PLANS.find((item) => item.id === planId);
                    return <li key={planId}>· {plan ? toLocaleText(locale, plan.name) : planId}</li>;
                  })}
                </ul>
                <Button className="mt-6 rounded-full" variant={bundle.highlight ? "default" : "outline"} asChild>
                  <a href={resolveBundleHref(bundle.ctaType)}>{labelForCta(bundle.ctaType, locale)}</a>
                </Button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing-agency" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 rounded-3xl border border-border bg-background p-8 shadow-[var(--shadow-card-sm)] lg:grid-cols-[1fr_0.7fr]">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-[var(--accent-meta,#0668E1)]">
              {locale === "en" ? "Special package" : "Paquete especial"}
            </p>
            <h3 className="mt-2 font-display text-3xl text-foreground">
              {toLocaleText(locale, AGENCY_CONCIERGE_PACKAGE.name)}
            </h3>
            <p className="mt-3 text-muted-foreground">
              {toLocaleText(locale, AGENCY_CONCIERGE_PACKAGE.tagline)}
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              {AGENCY_CONCIERGE_PACKAGE.included.map((item) => (
                <li key={item.es} className="flex gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-meta,#0668E1)]" />
                  {toLocaleText(locale, item)}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-center gap-4 rounded-2xl border border-[var(--accent-meta,#0668E1)]/25 bg-[var(--accent-meta,#0668E1)]/8 p-5">
            <p className="text-sm text-foreground">
              {locale === "en"
                ? "For clinics and consultancies with custom orchestration, deployment is consultative."
                : "Para clínicas y consultorios con orquestación personalizada, el despliegue es consultivo."}
            </p>
            <Button className="rounded-full bg-[var(--accent-meta,#0668E1)] text-white hover:bg-[#0554c4]" asChild>
              <a href="https://www.e-smart360.com/precios-pro">{labelForCta("agency-form", locale)}</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="pricing-trust" className="border-y border-border bg-muted/20 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
          <TrustCard
            icon={<ShieldCheck className="h-5 w-5 text-[var(--accent-meta,#0668E1)]" />}
            title={locale === "en" ? "Meta aligned operation" : "Operación alineada a Meta"}
            body={
              locale === "en"
                ? "Official APIs and policy-aware messaging reduce operational risk."
                : "APIs oficiales y mensajería alineada a políticas reducen riesgo operativo."
            }
          />
          <TrustCard
            icon={<Wallet className="h-5 w-5 text-[#25D366]" />}
            title={locale === "en" ? "Transparent pricing logic" : "Lógica de precios transparente"}
            body={
              locale === "en"
                ? "Base fee + explicit variable consumption with top-up controls."
                : "Cuota base + consumo variable explícito con controles de top-up."
            }
          />
          <TrustCard
            icon={<Sparkles className="h-5 w-5 text-[#f43f5e]" />}
            title={locale === "en" ? "Bundles designed for margin" : "Bundles diseñados para margen"}
            body={
              locale === "en"
                ? "Cross-platform sets improve perceived value without overwhelming users."
                : "Sets multi-plataforma elevan valor percibido sin abrumar al cliente."
            }
          />
        </div>
      </section>

      <section id="pricing-faq" className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-2xl text-foreground md:text-4xl">
          {locale === "en" ? "Pricing FAQ" : "FAQ comercial de precios"}
        </h2>
        <Accordion type="single" collapsible className="mt-8 rounded-2xl border border-border bg-background px-5">
          <AccordionItem value="faq-1">
            <AccordionTrigger className="text-left">
              {locale === "en"
                ? "Can I start free and upgrade later?"
                : "¿Puedo empezar gratis y subir de plan después?"}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {locale === "en"
                ? "Yes. Messaging includes a free strategic tier. Voice plans are paid-only by design."
                : "Sí. Mensajería incluye nivel free estratégico. Voz es solo de pago por diseño."}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-2">
            <AccordionTrigger className="text-left">
              {locale === "en"
                ? "What does unlimited AI mean?"
                : "¿Qué significa IA ilimitada?"}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {locale === "en"
                ? "Operational usage is unlimited under fair-use policy and anti-abuse controls."
                : "Uso operativo ilimitado bajo política de uso justo y controles anti-abuso."}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-3">
            <AccordionTrigger className="text-left">
              {locale === "en"
                ? "Do bundles include Digital Card and virtual office?"
                : "¿Los bundles incluyen Digital Card y oficina virtual?"}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {locale === "en"
                ? "Yes, depending on selected bundle. Signature includes virtual office line."
                : "Sí, según el bundle. Signature integra la línea de oficina virtual."}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-foreground px-6 py-14 text-center text-background shadow-[0_30px_90px_-40px_rgba(15,23,42,0.45)]">
          <h2 className="font-display text-3xl md:text-5xl">
            {locale === "en"
              ? "Build your stack without losing focus"
              : "Construye tu stack sin perder foco comercial"}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-background/70">
            {locale === "en"
              ? "Start with messaging, scale with voice, and connect Digital Card + virtual office based on your demand stage."
              : "Empieza por mensajería, escala con voz y conecta Digital Card + oficina virtual según tu fase de demanda."}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button className="rounded-full bg-background px-8 text-foreground hover:bg-background/90" asChild>
              <a href="https://www.e-smart360.com/demo">
                {locale === "en" ? "Schedule a demo" : "Agendar demo"}
              </a>
            </Button>
            <Button className="rounded-full border border-background/30 bg-transparent text-background hover:bg-background/10" asChild>
              <a href="/plataforma/tarjetas-digitales-nfc">
                {locale === "en" ? "View Digital Card landing" : "Ver landing Digital Card"}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolvePlanHref(plan: {
  ctaType: "checkout" | "demo" | "contact-sales" | "agency-form";
  stripePriceIdMonthly?: string;
}) {
  if (plan.ctaType === "checkout" && plan.stripePriceIdMonthly) {
    return `https://buy.stripe.com/${plan.stripePriceIdMonthly}`;
  }
  if (plan.ctaType === "contact-sales" || plan.ctaType === "agency-form") {
    return "https://www.e-smart360.com/precios-pro";
  }
  return "https://www.e-smart360.com/demo";
}

function resolveBundleHref(ctaType: "checkout" | "demo" | "contact-sales" | "agency-form") {
  if (ctaType === "contact-sales" || ctaType === "agency-form") {
    return "https://www.e-smart360.com/precios-pro";
  }
  return "https://www.e-smart360.com/demo";
}

function labelForCta(
  ctaType: "checkout" | "demo" | "contact-sales" | "agency-form",
  locale: "es" | "en",
) {
  if (ctaType === "checkout") return locale === "en" ? "Go to checkout" : "Ir a checkout";
  if (ctaType === "contact-sales") return locale === "en" ? "Contact sales" : "Contactar ventas";
  if (ctaType === "agency-form") return locale === "en" ? "Request concierge package" : "Solicitar paquete concierge";
  return locale === "en" ? "Book demo" : "Agendar demo";
}

function RangeInput({
  label,
  value,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-mono text-foreground">{value.toLocaleString()}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-muted accent-[var(--accent-meta,#0668E1)]"
      />
    </div>
  );
}

function TrustCard({
  icon,
  title,
  body,
}: {
  icon: ReactNode;
  title: string;
  body: string;
}) {
  return (
    <article className="rounded-2xl border border-border bg-background p-5 shadow-[var(--shadow-card-sm)]">
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </article>
  );
}
