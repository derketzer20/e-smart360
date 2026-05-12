import type { Locale } from "@/lib/i18n/types";

/** MXN display: es-MX for Spanish, en-US for English copy (still MXN). */
export function formatMxn(amount: number, locale: Locale): string {
  const tag = locale === "en" ? "en-US" : "es-MX";
  return new Intl.NumberFormat(tag, {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatCurrency(
  amount: number,
  locale: Locale,
  currency: "MXN" | "USD",
): string {
  const tag = locale === "en" ? "en-US" : "es-MX";
  return new Intl.NumberFormat(tag, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}
