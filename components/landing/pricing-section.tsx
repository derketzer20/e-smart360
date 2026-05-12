"use client";

import { BUNDLE_PLANS, PUBLIC_PLANS, toLocaleText } from "@/lib/pricing-data";
import { useI18n } from "@/components/i18n/i18n-provider";
import { formatCurrency } from "@/lib/format-currency";

export function PricingSection() {
  const { locale } = useI18n();
  const highlighted = PUBLIC_PLANS.filter((plan) => plan.highlight).slice(0, 3);
  const heroBundle = BUNDLE_PLANS.find((bundle) => bundle.highlight) ?? BUNDLE_PLANS[0];

  return (
    <section id="pricing" className="relative py-32 lg:py-40 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
            Precios
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-6 leading-[0.95]">
            {locale === "en" ? "Pricing by platform" : "Precios por plataforma"}
            <br />
            <span className="text-stroke">{locale === "en" ? "and strategic bundles" : "y bundles estratégicos"}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            {locale === "en"
              ? "Explore free-to-scale messaging, paid voice tiers, digital cards, virtual office, and bundled offers."
              : "Explora mensajería free-to-scale, voz de pago, digital cards, oficina virtual y ofertas combinadas."}
          </p>
        </div>

        <div className="grid gap-px bg-foreground/10 md:grid-cols-3">
          {highlighted.map((plan) => (
            <article key={plan.id} className="bg-background p-8">
              <h3 className="font-display text-2xl text-foreground">{toLocaleText(locale, plan.name)}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{toLocaleText(locale, plan.tagline)}</p>
              <p className="mt-6 font-display text-5xl text-foreground">
                {plan.monthlyPriceMxn === 0 ? (locale === "en" ? "Free" : "Gratis") : formatCurrency(plan.monthlyPriceMxn, locale, "MXN")}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{locale === "en" ? "from / month" : "desde / mes"}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-foreground/10 bg-background px-6 py-5">
          <p className="text-sm text-muted-foreground">
            {locale === "en" ? "Featured bundle:" : "Bundle destacado:"}{" "}
            <span className="font-medium text-foreground">{toLocaleText(locale, heroBundle.name)}</span> ·{" "}
            {formatCurrency(heroBundle.monthlyPriceMxn, locale, "MXN")} / {locale === "en" ? "month" : "mes"}
          </p>
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          {locale === "en" ? "See full matrix, calculator, top-up, and FAQs on" : "Consulta matriz completa, calculadora, top-up y FAQs en"}{" "}
          <a href="/precios" className="underline underline-offset-4 hover:text-foreground transition-colors">
            /precios
          </a>
        </p>
      </div>
    </section>
  );
}
