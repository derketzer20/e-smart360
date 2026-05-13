"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { trackPricingEvent } from "@/lib/analytics/pricing";
import type { BillingCycle, PricingCurrency } from "@/lib/pricing-data";

type Props = {
  locale: "es" | "en";
  currency: PricingCurrency;
  billingCycle: BillingCycle;
  onCurrency: (c: PricingCurrency) => void;
  onBilling: (b: BillingCycle) => void;
};

const ANNUAL_SAVE_PCT = 17;

export function PricingToggles({ locale, currency, billingCycle, onCurrency, onBilling }: Props) {
  return (
    <div className="mx-auto mt-10 flex max-w-3xl flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-center">
      <div
        className="flex rounded-full border border-border/80 bg-muted/40 p-1 shadow-[var(--shadow-card-sm)]"
        role="group"
        aria-label={locale === "en" ? "Billing period" : "Periodo de facturación"}
      >
        {(["monthly", "annual"] as const).map((cycle) => {
          const active = billingCycle === cycle;
          return (
            <button
              key={cycle}
              type="button"
              aria-pressed={active}
              onClick={() => {
                onBilling(cycle);
                trackPricingEvent("pricing_billing_toggle", { billingCycle: cycle });
              }}
              className={cn(
                "relative flex-1 rounded-full px-4 py-2.5 text-xs font-medium transition-colors sm:min-w-[140px]",
                active
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {active ? (
                <motion.span
                  layoutId="billing-pill"
                  className="absolute inset-0 rounded-full bg-background shadow-[var(--shadow-card-sm)] ring-1 ring-[var(--accent-meta)]/20"
                  transition={{ type: "spring", stiffness: 400, damping: 34 }}
                />
              ) : null}
              <span className="relative z-10 flex flex-col items-center gap-0.5">
                <span>
                  {cycle === "monthly"
                    ? locale === "en"
                      ? "Monthly"
                      : "Mensual"
                    : locale === "en"
                      ? "Yearly"
                      : "Anual"}
                </span>
                {cycle === "annual" ? (
                  <span className="rounded-full bg-[var(--accent-meta-pink)]/15 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wide text-[var(--accent-meta-pink)]">
                    {locale === "en" ? `Save ~${ANNUAL_SAVE_PCT}%` : `Ahorra ~${ANNUAL_SAVE_PCT}%`}
                  </span>
                ) : null}
              </span>
            </button>
          );
        })}
      </div>

      <div
        className="flex justify-center rounded-full border border-border/80 bg-background/80 p-1"
        role="group"
        aria-label={locale === "en" ? "Currency" : "Moneda"}
      >
        {(["MXN", "USD"] as const).map((code) => {
          const active = currency === code;
          return (
            <button
              key={code}
              type="button"
              aria-pressed={active}
              onClick={() => {
                onCurrency(code);
                trackPricingEvent("pricing_currency_toggle", { currency: code });
              }}
              className={cn(
                "rounded-full px-5 py-2 text-xs font-mono uppercase tracking-widest transition-colors",
                active
                  ? "bg-[var(--accent-meta)]/12 text-[var(--accent-meta)] ring-1 ring-[var(--accent-meta)]/25"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {code}
            </button>
          );
        })}
      </div>
    </div>
  );
}
