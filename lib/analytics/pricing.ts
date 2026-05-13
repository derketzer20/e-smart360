type PricingEventName =
  | "pricing_currency_toggle"
  | "pricing_billing_toggle"
  | "pricing_tab_change"
  | "pricing_cta_click"
  | "pricing_calculator_update"
  | "pricing_compare_toggle"
  | "pricing_compare_section_toggle"
  | "pricing_topup_select"
  | "pricing_competitor_select"
  | "pricing_calc_focus_toggle"
  | "pricing_bundle_row_hover";

type Payload = Record<string, string | number | boolean | null | undefined>;

/**
 * Lightweight analytics bridge:
 * - pushes to dataLayer if present
 * - falls back silently when no analytics provider is configured
 */
export function trackPricingEvent(name: PricingEventName, payload: Payload = {}) {
  if (typeof window === "undefined") return;
  const dataLayer = (window as unknown as { dataLayer?: unknown[] }).dataLayer;
  if (Array.isArray(dataLayer)) {
    dataLayer.push({
      event: name,
      ...payload,
    });
  }
}
