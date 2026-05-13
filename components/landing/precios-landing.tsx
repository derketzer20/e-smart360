"use client";

import { useMemo, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { Check, ShieldCheck, Sparkles, Wallet } from "lucide-react";
import { useI18n } from "@/components/i18n/i18n-provider";
import { formatCurrency } from "@/lib/format-currency";
import {
  AGENCY_CONCIERGE_PACKAGE,
  BUNDLE_PLANS,
  PLAN_COMPARISON_SECTIONS,
  PRODUCT_LINES,
  PRICING_FEATURES,
  PUBLIC_PLANS,
  VOICE_TOPUP_PRESETS_MXN,
  bundleListPriceMxn,
  bundlePriceMxn,
  bundleSavingsMxn,
  annualSavingsPercentApprox,
  currencyCode,
  plansForLine,
  priceForDisplay,
  publicPlanById,
  toLocaleText,
  type BillingCycle,
  type BundlePlan,
  type PricingCurrency,
  type ProductLineId,
  type PublicPlan,
} from "@/lib/pricing-data";
import { STAKEHOLDER_PENDING } from "@/lib/pricing-stakeholder";
import { trackPricingEvent } from "@/lib/analytics/pricing";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { DEMO_HREF } from "@/lib/demo-href";
import { PricingToggles } from "@/components/landing/pricing-toggles";
import { PricingTrustCarousel } from "@/components/landing/pricing-trust-carousel";
import { PricingBspComparison } from "@/components/landing/pricing-bsp-comparison";
import { PricingFaqMx } from "@/components/landing/pricing-faq-mx";

const LINE_DOT: Partial<Record<ProductLineId, string>> = {
  messaging: "bg-[var(--accent-meta)]",
  voice: "bg-[var(--accent-meta-pink)]",
  "digital-card": "bg-[var(--accent-whatsapp-green)]",
  "virtual-office": "bg-violet-400/80",
};

type CalcFocus = "bundle" | "platform";

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
  const [calcFocus, setCalcFocus] = useState<CalcFocus>("bundle");

  const lineTabs = useMemo(
    () => PRODUCT_LINES.filter((line) => line.id !== "bundle" && line.id !== "agency-concierge"),
    [],
  );

  /** Bundle-first: scale → Signature / Momentum; cards + volume → Expand; default Connect. */
  const recommendedBundleId = useMemo(() => {
    if (estimatedConversations > 15000 && estimatedVoiceMinutes > 400 && estimatedCards >= 20) {
      return "bundle-signature";
    }
    if (estimatedConversations > 6000 && estimatedVoiceMinutes > 200) {
      return "bundle-omnivoice";
    }
    if (estimatedCards >= 10 || estimatedConversations > 2500) {
      return "bundle-social-card";
    }
    return "bundle-whatsapp-card";
  }, [estimatedConversations, estimatedVoiceMinutes, estimatedCards]);

  const recommendedMessagingPlanId = useMemo(() => {
    if (estimatedConversations <= 400) return "msg-spark-free";
    if (estimatedConversations <= 5500) return "msg-whatsapp";
    if (estimatedConversations <= 35000) return "msg-growth";
    return "msg-orbit";
  }, [estimatedConversations]);

  const recommendedBundle = useMemo(
    () => BUNDLE_PLANS.find((b) => b.id === recommendedBundleId) ?? BUNDLE_PLANS[0],
    [recommendedBundleId],
  );

  const recommendedMessagingPlan = useMemo(
    () => publicPlanById(recommendedMessagingPlanId),
    [recommendedMessagingPlanId],
  );

  const visibleComparisonSections = showCompareAll ? PLAN_COMPARISON_SECTIONS : PLAN_COMPARISON_SECTIONS.slice(0, 2);

  return (
    <div id="pricing-main" className="relative z-10">
      <div
        className="page-grid-bg pointer-events-none fixed inset-0 -z-10 opacity-[0.45]"
        aria-hidden
      />

      <section className="mx-auto max-w-7xl px-4 pb-8 pt-28 sm:px-6 lg:px-8 lg:pt-36">
        <p className="text-center text-xs font-mono uppercase tracking-widest text-[var(--accent-meta)]">
          {t("pricingPage.eyebrow")}
        </p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 text-center font-display text-4xl tracking-tight text-foreground md:text-6xl lg:text-7xl"
        >
          {locale === "en" ? "Bundles first. Platforms on demand." : "Bundles primero. Plataformas a demanda."}
        </motion.h1>
        <p className="mx-auto mt-5 max-w-3xl text-center text-lg text-muted-foreground">
          {locale === "en"
            ? "Lead with strategic sets (voice + messaging + card), then tune each platform tab. Meta bills conversations separately — we keep platform fees transparent."
            : "Lidera con sets estratégicos (voz + mensajería + tarjeta) y luego ajusta cada pestaña de plataforma. Meta cobra conversaciones aparte: nosotros mantenemos la cuota de plataforma clara."}
        </p>

        <PricingToggles
          locale={locale}
          currency={currency}
          billingCycle={billingCycle}
          onCurrency={setCurrency}
          onBilling={setBillingCycle}
        />
      </section>

      <section id="pricing-bundles" className="scroll-mt-24 border-y border-border/70 bg-gradient-to-b from-muted/30 via-background to-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-[var(--accent-meta-pink)]">
                {locale === "en" ? "Recommended path" : "Ruta recomendada"}
              </p>
              <h2 className="mt-1 font-display text-2xl text-foreground md:text-4xl">
                {locale === "en" ? "Strategic bundles" : "Bundles estratégicos"}
              </h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              {locale === "en"
                ? "Each bundle merges products you already sell separately — clearer ROI for teams promoting voice AI."
                : "Cada bundle fusiona productos que ya vendes por separado: ROI más claro para equipos que empujan voz IA."}
            </p>
          </div>
          <div className="mt-10 grid gap-6 xl:grid-cols-4">
            {BUNDLE_PLANS.map((bundle, i) => (
              <BundleCard
                key={bundle.id}
                index={i}
                bundle={bundle}
                locale={locale}
                currency={currency}
                billingCycle={billingCycle}
                isRecommended={bundle.id === recommendedBundleId}
              />
            ))}
          </div>
        </div>
      </section>

      <PricingTrustCarousel
        locale={locale}
        eyebrow={locale === "en" ? "Payments" : "Pagos"}
        title={
          locale === "en"
            ? "Checkout stack your customers recognize"
            : "Stack de cobro que tus clientes reconocen"
        }
      />

      <section className="mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-mono uppercase tracking-widest text-[var(--accent-whatsapp-green)]">
          {locale === "en" ? "By platform" : "Por plataforma"}
        </p>
        <h2 className="mt-2 text-center font-display text-2xl text-foreground md:text-3xl">
          {locale === "en" ? "Tune components inside each bundle" : "Ajusta componentes dentro de cada bundle"}
        </h2>
        <Tabs
          value={lineTab}
          onValueChange={(value) => {
            setLineTab(value as ProductLineId);
            trackPricingEvent("pricing_tab_change", { lineId: value });
          }}
          className="mt-10"
        >
          <TabsList className="h-auto w-full flex-wrap rounded-2xl bg-muted/50 p-2 shadow-[var(--shadow-card-sm)]">
            {lineTabs.map((line) => (
              <TabsTrigger
                key={line.id}
                value={line.id}
                className="min-w-[140px] gap-2 rounded-xl py-2.5 data-[state=active]:bg-background data-[state=active]:shadow-[var(--shadow-card-sm)]"
              >
                <span className={cn("h-2 w-2 shrink-0 rounded-full", LINE_DOT[line.id] ?? "bg-muted-foreground")} />
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
                    const mxnPrice =
                      billingCycle === "annual"
                        ? (plan.annualPriceMxn ?? plan.monthlyPriceMxn * 12)
                        : plan.monthlyPriceMxn;
                    const displayPrice = priceForDisplay(mxnPrice, currency);
                    const code = currencyCode(currency);
                    const isFree = mxnPrice === 0;
                    const limitEntries = Object.entries(plan.limits);

                    return (
                      <motion.article
                        key={plan.id}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (lineIndex + i) * 0.04, duration: 0.35 }}
                        className={cn(
                          "group relative flex min-h-[520px] flex-col rounded-3xl border bg-background/95 p-6 shadow-[var(--shadow-card-sm)] backdrop-blur transition-shadow hover:shadow-[var(--shadow-card-md)]",
                          plan.highlight &&
                            "border-[var(--accent-meta)]/40 ring-1 ring-[var(--accent-meta)]/15",
                        )}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <h3 className="font-display text-xl text-foreground">{toLocaleText(locale, plan.name)}</h3>
                          {plan.highlight ? (
                            <span className="rounded-full bg-[var(--accent-meta-pink)]/12 px-2 py-1 text-[10px] font-mono uppercase tracking-wide text-[var(--accent-meta-pink)]">
                              {t("pricingPage.popular")}
                            </span>
                          ) : null}
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {toLocaleText(locale, plan.tagline)}
                        </p>
                        <p className="mt-6 font-display text-5xl tracking-tight text-foreground">
                          {isFree ? (
                            locale === "en" ? (
                              "Free"
                            ) : (
                              "Gratis"
                            )
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
                          <p className="mt-2 rounded-lg border border-[var(--accent-whatsapp-green)]/30 bg-[var(--accent-whatsapp-green)]/10 px-2 py-1 text-xs text-foreground">
                            {locale === "en"
                              ? `${plan.trialDays} day trial`
                              : `Trial ${plan.trialDays} días`}
                          </p>
                        ) : null}

                        <p className="mt-6 text-[10px] font-mono uppercase tracking-widest text-[var(--accent-meta)]">
                          {locale === "en" ? "Includes" : "Incluye"}
                        </p>
                        <ul className="mt-2 flex-1 space-y-2">
                          {plan.features.map((featureId) => {
                            const feature = PRICING_FEATURES.find((f) => f.id === featureId);
                            if (!feature) return null;
                            return (
                              <li key={feature.id} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-meta)]" />
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

                        <p className="mt-6 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                          {locale === "en" ? "Limits" : "Límites"}
                        </p>
                        <ul className="mt-2 space-y-1.5">
                          {limitEntries.map(([key, val]) => (
                            <li
                              key={key}
                              className="flex justify-between gap-3 rounded-lg border border-transparent px-1 py-1 text-xs text-muted-foreground transition-colors group-hover:border-border/60"
                            >
                              <span className="capitalize">{key}</span>
                              <span className="text-right font-mono text-foreground/90">{String(val)}</span>
                            </li>
                          ))}
                        </ul>

                        <Button
                          className={cn(
                            "mt-7 w-full rounded-full",
                            plan.highlight
                              ? "bg-[var(--accent-meta)] text-white hover:bg-[#0554c4]"
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
        <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
          <h2 className="font-display text-2xl text-foreground md:text-4xl">
            {locale === "en" ? "Comparison by product line" : "Comparativa por línea de producto"}
          </h2>
          <button
            type="button"
            onClick={() => {
              setShowCompareAll((prev) => !prev);
              trackPricingEvent("pricing_compare_toggle", { expanded: !showCompareAll });
            }}
            className="rounded-full border border-border px-4 py-2 text-xs font-mono uppercase tracking-widest text-muted-foreground transition-colors hover:border-[var(--accent-meta)]/40 hover:text-foreground"
          >
            {showCompareAll
              ? locale === "en"
                ? "Show fewer sections"
                : "Menos secciones"
              : locale === "en"
                ? "Show all sections"
                : "Todas las secciones"}
          </button>
        </div>

        <Accordion
          type="multiple"
          key={showCompareAll ? "compare-all" : "compare-partial"}
          defaultValue={visibleComparisonSections.map((s) => s.id)}
          className="space-y-4"
          onValueChange={(v) => {
            trackPricingEvent("pricing_compare_section_toggle", {
              openCount: Array.isArray(v) ? v.length : 0,
            });
          }}
        >
          {visibleComparisonSections.map((section) => (
            <AccordionItem
              key={section.id}
              value={section.id}
              className="overflow-hidden rounded-3xl border border-b-0 border-border bg-background/95 shadow-[var(--shadow-card-sm)] last:border-b-0"
            >
              <AccordionTrigger className="px-5 py-4 text-left font-display text-lg hover:no-underline">
                {toLocaleText(locale, section.title)}
              </AccordionTrigger>
              <AccordionContent className="px-0 pb-0">
                <div className="overflow-x-auto border-t border-border">
                  <table className="min-w-[640px] w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-muted/40">
                        <th className="sticky left-0 z-[1] bg-muted/95 px-4 py-3 text-left font-mono text-[10px] uppercase tracking-widest text-muted-foreground backdrop-blur">
                          {locale === "en" ? "Feature" : "Característica"}
                        </th>
                        {section.planIds.map((planId) => {
                          const plan = PUBLIC_PLANS.find((p) => p.id === planId);
                          if (!plan) return null;
                          return (
                            <th
                              key={planId}
                              className="min-w-[120px] border-l border-border px-3 py-3 text-left font-medium text-foreground"
                            >
                              {toLocaleText(locale, plan.name)}
                            </th>
                          );
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {section.rows.map((row) => (
                        <tr
                          key={row.id}
                          className="border-b border-border/60 transition-colors hover:bg-[var(--accent-meta)]/[0.03] last:border-b-0"
                        >
                          <td className="sticky left-0 z-[1] bg-background/95 px-4 py-3 align-top text-muted-foreground backdrop-blur">
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
                          {section.planIds.map((planId) => (
                            <td key={planId} className="border-l border-border px-3 py-3 text-foreground/85">
                              {row.values[planId] ?? "—"}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <PricingBspComparison locale={locale} />

      <section id="pricing-calculator" className="border-y border-border bg-muted/20 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
          <div>
            <h2 className="font-display text-2xl text-foreground md:text-4xl">
              {locale === "en" ? "Estimator & usage" : "Calculadora de estimación y consumo"}
            </h2>
            <p className="mt-3 text-muted-foreground">
              {locale === "en"
                ? "Estimate load, then read either the recommended bundle or the standalone messaging tier."
                : "Estima carga y lee el bundle recomendado o el nivel de mensajería independiente."}
            </p>

            <div className="mt-6 inline-flex rounded-full border border-border bg-background p-1 shadow-[var(--shadow-card-sm)]">
              <button
                type="button"
                aria-pressed={calcFocus === "bundle"}
                onClick={() => {
                  setCalcFocus("bundle");
                  trackPricingEvent("pricing_calc_focus_toggle", { mode: "bundle" });
                }}
                className={cn(
                  "rounded-full px-4 py-2 text-xs font-medium transition-colors",
                  calcFocus === "bundle"
                    ? "bg-[var(--accent-meta)] text-white shadow-sm"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {locale === "en" ? "Bundles" : "Bundles"}
              </button>
              <button
                type="button"
                aria-pressed={calcFocus === "platform"}
                onClick={() => {
                  setCalcFocus("platform");
                  trackPricingEvent("pricing_calc_focus_toggle", { mode: "platform" });
                }}
                className={cn(
                  "rounded-full px-4 py-2 text-xs font-medium transition-colors",
                  calcFocus === "platform"
                    ? "bg-[var(--accent-meta-pink)] text-white shadow-sm"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {locale === "en" ? "Messaging only" : "Solo mensajería"}
              </button>
            </div>

            <div className="mt-8 space-y-5">
              <RangeInput
                label={locale === "en" ? "Monthly conversations (est.)" : "Conversaciones mensuales (est.)"}
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
            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              {locale === "en"
                ? "Meta conversation charges are billed by Meta by category and country — not included in platform fees shown here."
                : "Las conversaciones Meta se facturan por categoría y país en tu cuenta Meta: no están incluidas en las cuotas de plataforma mostradas aquí."}
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-background p-6 shadow-[var(--shadow-card-xl)]">
            {calcFocus === "bundle" && recommendedBundle ? (
              <>
                <p className="text-xs font-mono uppercase tracking-widest text-[var(--accent-meta)]">
                  {locale === "en" ? "Recommended bundle" : "Bundle recomendado"}
                </p>
                <h3 className="mt-2 font-display text-3xl text-foreground">
                  {toLocaleText(locale, recommendedBundle.name)}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {toLocaleText(locale, recommendedBundle.tagline)}
                </p>
                <div className="mt-4 rounded-2xl border border-[var(--accent-whatsapp-green)]/25 bg-[var(--accent-whatsapp-green)]/5 px-4 py-3 text-xs text-muted-foreground">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent-whatsapp-green)]">
                    {locale === "en" ? "Stack breakdown" : "Desglose del stack"}
                  </p>
                  <ul className="mt-2 space-y-1">
                    {recommendedBundle.includesPlans.map((pid) => {
                      const p = publicPlanById(pid);
                      const part = bundleComponentPrice(p, billingCycle);
                      return (
                        <li key={pid} className="flex justify-between gap-2">
                          <span>{p ? toLocaleText(locale, p.name) : pid}</span>
                          <span className="shrink-0 font-mono text-foreground">
                            {formatCurrency(priceForDisplay(part, currency), locale, currencyCode(currency))}
                          </span>
                        </li>
                      );
                    })}
                    <li className="flex justify-between border-t border-border/60 pt-2 font-medium text-foreground">
                      <span>{locale === "en" ? "List total" : "Suma lista"}</span>
                      <span className="font-mono">
                        {formatCurrency(
                          priceForDisplay(bundleListPriceMxn(recommendedBundle, billingCycle), currency),
                          locale,
                          currencyCode(currency),
                        )}
                      </span>
                    </li>
                    <li className="flex justify-between text-[var(--accent-meta-pink)]">
                      <span>{locale === "en" ? "Bundle savings" : "Ahorro bundle"}</span>
                      <span className="font-mono">
                        +
                        {formatCurrency(
                          priceForDisplay(bundleSavingsMxn(recommendedBundle, billingCycle), currency),
                          locale,
                          currencyCode(currency),
                        )}
                      </span>
                    </li>
                  </ul>
                </div>
                <p className="mt-6 font-display text-5xl text-foreground">
                  {formatCurrency(
                    priceForDisplay(bundlePriceMxn(recommendedBundle, billingCycle), currency),
                    locale,
                    currencyCode(currency),
                  )}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {billingCycle === "annual"
                    ? locale === "en"
                      ? "annual bundle"
                      : "bundle anual"
                    : locale === "en"
                      ? "monthly bundle"
                      : "bundle mensual"}
                </p>
                <Button className="mt-7 w-full rounded-full bg-[var(--accent-meta)] text-white hover:bg-[#0554c4]" asChild>
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
              </>
            ) : null}

            {calcFocus === "platform" && recommendedMessagingPlan ? (
              <>
                <p className="text-xs font-mono uppercase tracking-widest text-[var(--accent-meta-pink)]">
                  {locale === "en" ? "Messaging tier (standalone)" : "Nivel de mensajería (solo)"}
                </p>
                <h3 className="mt-2 font-display text-3xl text-foreground">
                  {toLocaleText(locale, recommendedMessagingPlan.name)}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {toLocaleText(locale, recommendedMessagingPlan.summary)}
                </p>
                <p className="mt-6 font-display text-5xl text-foreground">
                  {formatCurrency(
                    priceForDisplay(planChargeMxn(recommendedMessagingPlan, billingCycle), currency),
                    locale,
                    currencyCode(currency),
                  )}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {billingCycle === "annual"
                    ? locale === "en"
                      ? "annual"
                      : "anual"
                    : locale === "en"
                      ? "per month"
                      : "por mes"}
                </p>
                <Button className="mt-7 w-full rounded-full bg-[var(--accent-meta-pink)] text-white hover:opacity-90" asChild>
                  <a
                    href={resolvePlanHref(recommendedMessagingPlan)}
                    onClick={() =>
                      trackPricingEvent("pricing_cta_click", {
                        planId: recommendedMessagingPlan.id,
                        lineId: recommendedMessagingPlan.lineId,
                        ctaType: recommendedMessagingPlan.ctaType,
                      })
                    }
                  >
                    {labelForCta(recommendedMessagingPlan.ctaType, locale)}
                  </a>
                </Button>
              </>
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
                      ? "border-[var(--accent-meta)] bg-[var(--accent-meta)]/10 shadow-[var(--shadow-card-sm)]"
                      : "border-border hover:border-[var(--accent-meta)]/40",
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
                    <p className="text-sm font-medium text-foreground">{locale === "en" ? "Preview" : "Vista previa"}</p>
                    <span className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">demo</span>
                  </div>
                  <p className="mt-7 font-display text-6xl text-foreground">
                    {formatCurrency(priceForDisplay(selected.mxn, currency), locale, currencyCode(currency))}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {selected.credits.toLocaleString()} {locale === "en" ? "credits" : "créditos"} · $
                    {(selected.mxn / Math.max(selected.estimatedMinutes, 1)).toFixed(2)}/
                    {locale === "en" ? "minute" : "minuto"}
                  </p>
                  <div className="mt-8 grid grid-cols-2 gap-3">
                    <Button variant="outline" className="rounded-full">
                      {locale === "en" ? "Cancel" : "Cancelar"}
                    </Button>
                    <Button className="rounded-full bg-[var(--accent-meta)] text-white hover:bg-[#0554c4]" asChild>
                      <a href={DEMO_HREF}>{locale === "en" ? "Buy credits" : "Comprar créditos"}</a>
                    </Button>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      </section>

      <section id="pricing-agency" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 rounded-3xl border border-border bg-background p-8 shadow-[var(--shadow-card-md)] lg:grid-cols-[1fr_0.7fr]">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-[var(--accent-meta)]">
              {locale === "en" ? "Special package" : "Paquete especial"}
            </p>
            <h3 className="mt-2 font-display text-3xl text-foreground">
              {toLocaleText(locale, AGENCY_CONCIERGE_PACKAGE.name)}
            </h3>
            <p className="mt-3 text-muted-foreground">{toLocaleText(locale, AGENCY_CONCIERGE_PACKAGE.tagline)}</p>
            {AGENCY_CONCIERGE_PACKAGE.stakeholderNote ? (
              <p className="mt-4 rounded-xl border border-[var(--accent-meta-pink)]/25 bg-[var(--accent-meta-pink)]/5 px-3 py-2 text-sm text-muted-foreground">
                {toLocaleText(locale, AGENCY_CONCIERGE_PACKAGE.stakeholderNote)}
              </p>
            ) : null}
            {STAKEHOLDER_PENDING.conciergePricingAndSla ? (
              <p className="mt-2 text-xs font-mono text-[var(--accent-meta-pink)]">
                {locale === "en"
                  ? "Stakeholder: full SLA & commercial wrap pending."
                  : "Stakeholder: pendiente detalle comercial y SLA completo."}
              </p>
            ) : null}
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              {AGENCY_CONCIERGE_PACKAGE.included.map((item) => (
                <li key={item.es} className="flex gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-meta)]" />
                  {toLocaleText(locale, item)}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-center gap-4 rounded-2xl border border-[var(--accent-meta)]/25 bg-[var(--accent-meta)]/8 p-5">
            <p className="text-sm text-foreground">
              {locale === "en"
                ? "For clinics and consultancies with custom orchestration, deployment is consultative."
                : "Para clínicas y consultorios con orquestación personalizada, el despliegue es consultivo."}
            </p>
            <Button className="rounded-full bg-[var(--accent-meta)] text-white hover:bg-[#0554c4]" asChild>
              <a href="https://www.e-smart360.com/precios-pro">{labelForCta("agency-form", locale)}</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="pricing-trust" className="border-y border-border bg-muted/20 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
          <TrustCard
            icon={<ShieldCheck className="h-5 w-5 text-[var(--accent-meta)]" />}
            title={locale === "en" ? "Meta aligned operation" : "Operación alineada a Meta"}
            body={
              locale === "en"
                ? "Official APIs and policy-aware messaging reduce operational risk."
                : "APIs oficiales y mensajería alineada a políticas reducen riesgo operativo."
            }
          />
          <TrustCard
            icon={<Wallet className="h-5 w-5 text-[var(--accent-whatsapp-green)]" />}
            title={locale === "en" ? "Transparent pricing logic" : "Lógica de precios transparente"}
            body={
              locale === "en"
                ? "Base fee + explicit variable consumption with top-up controls."
                : "Cuota base + consumo variable explícito con controles de top-up."
            }
          />
          <TrustCard
            icon={<Sparkles className="h-5 w-5 text-[var(--accent-meta-pink)]" />}
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
        <PricingFaqMx locale={locale} />
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
              <a href={DEMO_HREF}>{locale === "en" ? "Schedule a demo" : "Agendar demo"}</a>
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

function bundleComponentPrice(plan: PublicPlan | undefined, cycle: BillingCycle): number {
  if (!plan) return 0;
  return cycle === "annual" ? (plan.annualPriceMxn ?? plan.monthlyPriceMxn * 12) : plan.monthlyPriceMxn;
}

function planChargeMxn(
  plan: NonNullable<ReturnType<typeof publicPlanById>>,
  cycle: BillingCycle,
): number {
  return cycle === "annual" ? (plan.annualPriceMxn ?? plan.monthlyPriceMxn * 12) : plan.monthlyPriceMxn;
}

function BundleCard({
  bundle,
  locale,
  currency,
  billingCycle,
  index,
  isRecommended,
}: {
  bundle: BundlePlan;
  locale: "es" | "en";
  currency: PricingCurrency;
  billingCycle: BillingCycle;
  index: number;
  isRecommended: boolean;
}) {
  const save = bundleSavingsMxn(bundle, billingCycle);
  const price = bundlePriceMxn(bundle, billingCycle);

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      onMouseEnter={() => trackPricingEvent("pricing_bundle_row_hover", { bundleId: bundle.id })}
      className={cn(
        "relative flex flex-col rounded-3xl border bg-background/95 p-6 shadow-[var(--shadow-card-sm)] transition-shadow hover:shadow-[var(--shadow-card-md)]",
        bundle.highlight && "border-[var(--accent-meta)]/35 ring-1 ring-[var(--accent-meta)]/20",
        isRecommended && "ring-2 ring-[var(--accent-whatsapp-green)]/35",
      )}
    >
      {isRecommended ? (
        <span className="absolute -top-2 right-4 rounded-full bg-[var(--accent-whatsapp-green)] px-2 py-0.5 text-[10px] font-mono font-medium uppercase tracking-wide text-white">
          {locale === "en" ? "Estimator pick" : "Pick calculadora"}
        </span>
      ) : null}
      <h3 className="font-display text-xl text-foreground">{toLocaleText(locale, bundle.name)}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{toLocaleText(locale, bundle.tagline)}</p>
      <p className="mt-6 font-display text-4xl text-foreground">
        {formatCurrency(priceForDisplay(price, currency), locale, currencyCode(currency))}
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
      {save > 0 ? (
        <p className="mt-2 text-xs font-medium text-[var(--accent-meta-pink)]">
          {locale === "en" ? "vs sum of parts: save " : "vs suma de partes: ahorra "}
          {formatCurrency(priceForDisplay(save, currency), locale, currencyCode(currency))}
        </p>
      ) : null}
      {billingCycle === "annual" && annualSavingsPercentApprox(bundle) > 0 ? (
        <p className="mt-1 text-[11px] text-muted-foreground">
          {locale === "en" ? "Approx. annual discount vs monthly ×12: " : "Dto. anual aprox. vs mensual ×12: "}
          ~{annualSavingsPercentApprox(bundle)}%
        </p>
      ) : null}
      <ul className="mt-5 flex-1 space-y-1.5 text-sm text-muted-foreground">
        {bundle.includesPlans.map((planId) => {
          const plan = PUBLIC_PLANS.find((item) => item.id === planId);
          return (
            <li key={planId} className="flex gap-2">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-meta)]" />
              <span>{plan ? toLocaleText(locale, plan.name) : planId}</span>
            </li>
          );
        })}
      </ul>
      <Button
        className="mt-6 rounded-full"
        variant={bundle.highlight ? "default" : "outline"}
        asChild
      >
        <a
          href={resolveBundleHref(bundle.ctaType)}
          onClick={() =>
            trackPricingEvent("pricing_cta_click", { bundleId: bundle.id, ctaType: bundle.ctaType })
          }
        >
          {labelForCta(bundle.ctaType, locale)}
        </a>
      </Button>
    </motion.article>
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
  return DEMO_HREF;
}

function resolveBundleHref(ctaType: "checkout" | "demo" | "contact-sales" | "agency-form") {
  if (ctaType === "contact-sales" || ctaType === "agency-form") {
    return "https://www.e-smart360.com/precios-pro";
  }
  return DEMO_HREF;
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
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-muted accent-[var(--accent-meta)]"
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
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-muted">{icon}</div>
      <h3 className="text-base font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </article>
  );
}
