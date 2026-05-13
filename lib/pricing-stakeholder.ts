/**
 * Pending inputs from stakeholder (full feature matrix + Concierge SLA/pricing).
 * Wire new rows in pricing-data.ts when documentation arrives.
 */
export const STAKEHOLDER_PENDING = {
  fullPlanFeatureMatrix: true,
  conciergePricingAndSla: true,
  stripePriceIdAudit: true,
} as const;
