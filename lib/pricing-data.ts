import type { Locale } from "@/lib/i18n/types";

export type PricingCurrency = "MXN" | "USD";
export type BillingCycle = "monthly" | "annual";
export type PlanAvailability = "free" | "trial" | "paidOnly" | "bundleOnly";
export type PlanCtaType = "checkout" | "demo" | "contact-sales" | "agency-form";

export type ProductLineId =
  | "messaging"
  | "voice"
  | "digital-card"
  | "virtual-office"
  | "bundle"
  | "agency-concierge";

export type LocalizedText = {
  es: string;
  en: string;
};

export type PricingFeature = {
  id: string;
  label: LocalizedText;
  tooltip: LocalizedText;
  legalNote?: LocalizedText;
  unit?: "channels" | "minutes" | "cards" | "contacts" | "tokens" | "campaigns" | "seats";
};

export type PublicPlan = {
  id: string;
  lineId: ProductLineId;
  name: LocalizedText;
  tagline: LocalizedText;
  summary: LocalizedText;
  availability: PlanAvailability;
  ctaType: PlanCtaType;
  highlight?: boolean;
  trialDays?: number;
  monthlyPriceMxn: number;
  annualPriceMxn?: number;
  stripePriceIdMonthly?: string;
  stripePriceIdAnnual?: string;
  features: string[];
  limits: Record<string, number | string | boolean>;
};

export type BundlePlan = {
  id: string;
  name: LocalizedText;
  tagline: LocalizedText;
  includesPlans: string[];
  ctaType: PlanCtaType;
  highlight?: boolean;
  monthlyPriceMxn: number;
  annualPriceMxn?: number;
  stripePriceIdMonthly?: string;
  stripePriceIdAnnual?: string;
};

export type ConciergePackage = {
  id: string;
  name: LocalizedText;
  tagline: LocalizedText;
  included: LocalizedText[];
  ctaType: PlanCtaType;
};

export type ComparisonRow = {
  id: string;
  label: LocalizedText;
  tooltip: LocalizedText;
  values: Record<string, string>;
};

export const USD_PER_MXN = 0.058;

export const PRODUCT_LINES: Array<{ id: ProductLineId; label: LocalizedText }> = [
  { id: "messaging", label: { es: "Plataforma de mensajería", en: "Messaging platform" } },
  { id: "voice", label: { es: "Plataforma de voz IA", en: "AI voice platform" } },
  { id: "digital-card", label: { es: "Digital Card / NFC", en: "Digital Card / NFC" } },
  { id: "virtual-office", label: { es: "Oficina virtual", en: "Virtual office" } },
  { id: "bundle", label: { es: "Bundles estratégicos", en: "Strategic bundles" } },
  { id: "agency-concierge", label: { es: "Solución concierge salud", en: "Healthcare concierge solution" } },
];

export const PRICING_FEATURES: PricingFeature[] = [
  {
    id: "meta-channel",
    label: { es: "Canales Meta incluidos", en: "Meta channels included" },
    tooltip: {
      es: "Define cuántos canales activos (WhatsApp, Instagram, Facebook Messenger) opera cada plan.",
      en: "Defines how many active channels (WhatsApp, Instagram, Facebook Messenger) each plan can run.",
    },
    unit: "channels",
  },
  {
    id: "voice-minutes",
    label: { es: "Minutos de voz IA", en: "AI voice minutes" },
    tooltip: {
      es: "Minutos de voz consumibles por mes para llamadas automáticas y confirmaciones.",
      en: "Monthly consumable voice minutes for automated calls and confirmations.",
    },
    legalNote: {
      es: "Minutos adicionales se compran como top-up. La voz no incluye plan gratuito.",
      en: "Additional minutes are purchased as top-up. Voice has no free plan.",
    },
    unit: "minutes",
  },
  {
    id: "campaigns",
    label: { es: "Campañas y broadcast", en: "Campaigns and broadcast" },
    tooltip: {
      es: "Capacidad para ejecutar campañas masivas respetando políticas de canal.",
      en: "Ability to run mass campaigns while respecting channel policies.",
    },
    unit: "campaigns",
  },
  {
    id: "ai",
    label: { es: "IA operativa", en: "Operational AI" },
    tooltip: {
      es: "Todos los planes pagan infraestructura; la IA se comunica como ilimitada con política de uso justo.",
      en: "All plans pay for infrastructure; AI can be positioned as unlimited with fair-use policy.",
    },
    unit: "tokens",
  },
  {
    id: "team",
    label: { es: "Equipo y bandeja", en: "Team and inbox" },
    tooltip: {
      es: "Número de agentes internos con acceso a bandeja omnicanal compartida.",
      en: "Number of internal agents with access to a shared omnichannel inbox.",
    },
    unit: "seats",
  },
  {
    id: "cards",
    label: { es: "Digital cards activas", en: "Active digital cards" },
    tooltip: {
      es: "Tarjetas NFC y perfiles digitales con analítica y enlaces vivos.",
      en: "NFC cards and digital profiles with analytics and live links.",
    },
    unit: "cards",
  },
];

export const PUBLIC_PLANS: PublicPlan[] = [
  {
    id: "msg-spark-free",
    lineId: "messaging",
    name: { es: "Spark Free", en: "Spark Free" },
    tagline: { es: "Entrada estratégica para probar WhatsApp", en: "Strategic entry to test WhatsApp" },
    summary: { es: "Solo WhatsApp, útil y limitado.", en: "WhatsApp-only, useful and limited." },
    availability: "free",
    ctaType: "checkout",
    monthlyPriceMxn: 0,
    annualPriceMxn: 0,
    features: ["meta-channel", "team", "ai"],
    limits: {
      channels: "WhatsApp 1",
      contacts: 300,
      campaigns: "No",
      seats: 1,
      aiFairUse: true,
    },
  },
  {
    id: "msg-whatsapp",
    lineId: "messaging",
    name: { es: "Cloud WhatsApp", en: "Cloud WhatsApp" },
    tagline: { es: "Ventas y soporte en WhatsApp API", en: "Sales and support on WhatsApp API" },
    summary: { es: "Core conversacional para PyME.", en: "Conversational core for SMB." },
    availability: "paidOnly",
    ctaType: "checkout",
    monthlyPriceMxn: 899,
    annualPriceMxn: 8990,
    features: ["meta-channel", "campaigns", "team", "ai"],
    limits: { channels: "WhatsApp 1", campaigns: 5, contacts: 5000, seats: 2, aiFairUse: true },
    highlight: true,
  },
  {
    id: "msg-growth",
    lineId: "messaging",
    name: { es: "Growth Omnicanal", en: "Omnichannel Growth" },
    tagline: { es: "WhatsApp + Instagram + bandeja unificada", en: "WhatsApp + Instagram + unified inbox" },
    summary: { es: "Escala comercial con campañas.", en: "Commercial scale with campaigns." },
    availability: "paidOnly",
    ctaType: "checkout",
    monthlyPriceMxn: 1690,
    annualPriceMxn: 16900,
    features: ["meta-channel", "campaigns", "team", "ai"],
    limits: { channels: "WhatsApp + Instagram", campaigns: 20, contacts: 25000, seats: 5, aiFairUse: true },
  },
  {
    id: "msg-orbit",
    lineId: "messaging",
    name: { es: "Orbit Full Channel", en: "Orbit Full Channel" },
    tagline: { es: "Todos los canales + operaciones de alto volumen", en: "All channels + high-volume operations" },
    summary: { es: "Diseñado para equipos con flujo continuo.", en: "Designed for teams with continuous flow." },
    availability: "paidOnly",
    ctaType: "checkout",
    monthlyPriceMxn: 2490,
    annualPriceMxn: 24900,
    features: ["meta-channel", "campaigns", "team", "ai"],
    limits: { channels: "Meta + Telegram + Webchat", campaigns: "Ilimitadas*", contacts: 80000, seats: 12, aiFairUse: true },
  },
  {
    id: "voice-core",
    lineId: "voice",
    name: { es: "Voice Core 150", en: "Voice Core 150" },
    tagline: { es: "150 min de voz IA para seguimiento", en: "150 AI voice minutes for follow-up" },
    summary: { es: "Sin plan free, solo pago por valor real.", en: "No free plan, paid-only for real value." },
    availability: "paidOnly",
    ctaType: "checkout",
    monthlyPriceMxn: 1490,
    annualPriceMxn: 14900,
    features: ["voice-minutes", "team", "ai"],
    limits: { voiceMinutes: 150, seats: 2, campaigns: "No", aiFairUse: true },
    highlight: true,
  },
  {
    id: "voice-pro",
    lineId: "voice",
    name: { es: "Voice Pro 250", en: "Voice Pro 250" },
    tagline: { es: "250 min + campañas de voz", en: "250 min + voice campaigns" },
    summary: { es: "Llamadas salientes y confirmaciones.", en: "Outbound calls and confirmations." },
    availability: "paidOnly",
    ctaType: "checkout",
    monthlyPriceMxn: 2290,
    annualPriceMxn: 22900,
    features: ["voice-minutes", "campaigns", "team", "ai"],
    limits: { voiceMinutes: 250, campaigns: "Sí", seats: 5, aiFairUse: true },
  },
  {
    id: "voice-scale",
    lineId: "voice",
    name: { es: "Voice Scale 500", en: "Voice Scale 500" },
    tagline: { es: "500 min + automatización avanzada", en: "500 min + advanced automation" },
    summary: { es: "Para clínicas y operaciones multi-sede.", en: "For clinics and multi-site operations." },
    availability: "paidOnly",
    ctaType: "contact-sales",
    monthlyPriceMxn: 3790,
    annualPriceMxn: 37900,
    features: ["voice-minutes", "campaigns", "team", "ai"],
    limits: { voiceMinutes: 500, campaigns: "Sí", seats: 10, aiFairUse: true },
  },
  {
    id: "card-trial",
    lineId: "digital-card",
    name: { es: "Digital Card Trial", en: "Digital Card Trial" },
    tagline: { es: "15 días para validar adopción", en: "15 days to validate adoption" },
    summary: { es: "Incluye tarjeta básica y QR.", en: "Includes basic card and QR." },
    availability: "trial",
    ctaType: "demo",
    monthlyPriceMxn: 0,
    annualPriceMxn: 0,
    trialDays: 15,
    features: ["cards"],
    limits: { cards: 1, branding: "E-SMART360", analytics: "Básica" },
  },
  {
    id: "card-business",
    lineId: "digital-card",
    name: { es: "Business Card Annual", en: "Business Card Annual" },
    tagline: { es: "Plan anual individual", en: "Individual annual plan" },
    summary: { es: "Precio anual de referencia del producto.", en: "Reference annual product price." },
    availability: "paidOnly",
    ctaType: "checkout",
    monthlyPriceMxn: Math.round(2200 / 12),
    annualPriceMxn: 2200,
    features: ["cards", "ai"],
    limits: { cards: 1, analytics: "Avanzada", aiFairUse: true },
    highlight: true,
  },
  {
    id: "card-team",
    lineId: "digital-card",
    name: { es: "Business Card Team", en: "Business Card Team" },
    tagline: { es: "Equipos comerciales y agencias", en: "Sales teams and agencies" },
    summary: { es: "Multi-tarjeta con control centralizado.", en: "Multi-card with centralized controls." },
    availability: "paidOnly",
    ctaType: "contact-sales",
    monthlyPriceMxn: 1490,
    annualPriceMxn: 14900,
    features: ["cards", "team", "ai"],
    limits: { cards: 25, seats: 5, analytics: "Equipo", aiFairUse: true },
  },
  {
    id: "virtual-consulto-core",
    lineId: "virtual-office",
    name: { es: "Consulto Core", en: "Consulto Core" },
    tagline: { es: "Agenda + videollamadas base", en: "Scheduling + core video calls" },
    summary: { es: "Producto operado con marca Consolto.", en: "Product operated with Consolto brand." },
    availability: "paidOnly",
    ctaType: "checkout",
    monthlyPriceMxn: 990,
    annualPriceMxn: 9900,
    features: ["team"],
    limits: { seats: 2, calendar: "Sí", reminders: "Sí" },
  },
  {
    id: "virtual-consulto-clinic",
    lineId: "virtual-office",
    name: { es: "Consulto Clinic", en: "Consulto Clinic" },
    tagline: { es: "Operación clínica con agenda avanzada", en: "Clinic operation with advanced scheduling" },
    summary: { es: "Pensado para consultorios con mayor flujo.", en: "Built for clinics with higher flow." },
    availability: "paidOnly",
    ctaType: "contact-sales",
    monthlyPriceMxn: 1890,
    annualPriceMxn: 18900,
    features: ["team"],
    limits: { seats: 8, calendar: "Sí", reminders: "Sí", waitingRoom: "Sí" },
  },
];

export const BUNDLE_PLANS: BundlePlan[] = [
  {
    id: "bundle-whatsapp-card",
    name: { es: "Bundle Connect", en: "Connect Bundle" },
    tagline: { es: "WhatsApp + Digital Card para captación rápida", en: "WhatsApp + Digital Card for quick capture" },
    includesPlans: ["msg-whatsapp", "card-business"],
    ctaType: "checkout",
    monthlyPriceMxn: 990,
    annualPriceMxn: 9900,
    highlight: true,
  },
  {
    id: "bundle-social-card",
    name: { es: "Bundle Expand", en: "Expand Bundle" },
    tagline: { es: "WhatsApp + Instagram + Digital Card", en: "WhatsApp + Instagram + Digital Card" },
    includesPlans: ["msg-growth", "card-business"],
    ctaType: "checkout",
    monthlyPriceMxn: 1890,
    annualPriceMxn: 18900,
  },
  {
    id: "bundle-omnivoice",
    name: { es: "Bundle Momentum", en: "Momentum Bundle" },
    tagline: { es: "Omnicanal + voz 250 min + campañas", en: "Omnichannel + 250 voice minutes + campaigns" },
    includesPlans: ["msg-orbit", "voice-pro"],
    ctaType: "checkout",
    monthlyPriceMxn: 3990,
    annualPriceMxn: 39900,
    highlight: true,
  },
  {
    id: "bundle-signature",
    name: { es: "Bundle Signature", en: "Signature Bundle" },
    tagline: { es: "Suite completa + oficina virtual", en: "Full suite + virtual office" },
    includesPlans: ["msg-orbit", "voice-pro", "card-team", "virtual-consulto-core"],
    ctaType: "contact-sales",
    monthlyPriceMxn: 5490,
    annualPriceMxn: 54900,
  },
];

export const AGENCY_CONCIERGE_PACKAGE: ConciergePackage = {
  id: "health-concierge",
  name: { es: "Concierge Salud 360", en: "360 Health Concierge" },
  tagline: {
    es: "Implementación especializada para clínicas: voz + WhatsApp + agenda inteligente.",
    en: "Specialized clinic implementation: voice + WhatsApp + smart scheduling.",
  },
  included: [
    {
      es: "Número de voz IP y enrutamiento clínico",
      en: "Voice IP number and clinic routing",
    },
    {
      es: "Triage automático y asignación multi-paciente",
      en: "Automated triage and multi-patient assignment",
    },
    {
      es: "Notificación en tiempo real a doctor y staff",
      en: "Real-time doctor and staff notifications",
    },
    {
      es: "Conector calendario y agenda inteligente",
      en: "Calendar connector and smart scheduling",
    },
  ],
  ctaType: "agency-form",
};

export const VOICE_TOPUP_PRESETS_MXN = [
  { id: "voice-topup-100", mxn: 100, credits: 10000, estimatedMinutes: 100 },
  { id: "voice-topup-250", mxn: 250, credits: 25000, estimatedMinutes: 250 },
  { id: "voice-topup-500", mxn: 500, credits: 50000, estimatedMinutes: 500 },
];

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    id: "channel-access",
    label: { es: "Canales incluidos", en: "Included channels" },
    tooltip: {
      es: "Compara el alcance por canal según plan.",
      en: "Compare channel coverage by plan.",
    },
    values: {
      "msg-spark-free": "WhatsApp",
      "msg-whatsapp": "WhatsApp",
      "msg-growth": "WhatsApp + Instagram",
      "msg-orbit": "Todos",
      "voice-core": "N/A",
      "voice-pro": "N/A",
      "voice-scale": "N/A",
      "card-trial": "1 card",
      "card-business": "1 card",
      "card-team": "25 cards",
    },
  },
  {
    id: "voice-quota",
    label: { es: "Minutos de voz", en: "Voice minutes" },
    tooltip: {
      es: "La plataforma de voz no tiene plan gratis; usa top-up cuando superas cupo.",
      en: "Voice platform has no free plan; use top-up after quota.",
    },
    values: {
      "msg-spark-free": "—",
      "msg-whatsapp": "—",
      "msg-growth": "150 (bundle sugerido)",
      "msg-orbit": "250 (bundle sugerido)",
      "voice-core": "150",
      "voice-pro": "250",
      "voice-scale": "500",
      "card-trial": "—",
      "card-business": "—",
      "card-team": "—",
    },
  },
  {
    id: "campaigns",
    label: { es: "Campañas", en: "Campaigns" },
    tooltip: {
      es: "Capacidad de broadcast y secuencias automáticas.",
      en: "Broadcast and automated sequence capacity.",
    },
    values: {
      "msg-spark-free": "No",
      "msg-whatsapp": "5 / mes",
      "msg-growth": "20 / mes",
      "msg-orbit": "Ilimitadas*",
      "voice-core": "No",
      "voice-pro": "Sí",
      "voice-scale": "Sí",
      "card-trial": "No",
      "card-business": "No",
      "card-team": "Sí",
    },
  },
  {
    id: "team",
    label: { es: "Usuarios de equipo", en: "Team seats" },
    tooltip: {
      es: "Número de usuarios con acceso operativo.",
      en: "Number of users with operational access.",
    },
    values: {
      "msg-spark-free": "1",
      "msg-whatsapp": "2",
      "msg-growth": "5",
      "msg-orbit": "12",
      "voice-core": "2",
      "voice-pro": "5",
      "voice-scale": "10",
      "card-trial": "1",
      "card-business": "1",
      "card-team": "5",
    },
  },
];

export function toLocaleText(locale: Locale, text: LocalizedText): string {
  return locale === "en" ? text.en : text.es;
}

export function priceForDisplay(
  amountMxn: number,
  currency: PricingCurrency,
): number {
  if (currency === "USD") return Math.round(amountMxn * USD_PER_MXN);
  return amountMxn;
}

export function currencyCode(currency: PricingCurrency): "MXN" | "USD" {
  return currency;
}

export function plansForLine(lineId: ProductLineId): PublicPlan[] {
  return PUBLIC_PLANS.filter((plan) => plan.lineId === lineId);
}

export function publicPlanById(id: string): PublicPlan | undefined {
  return PUBLIC_PLANS.find((plan) => plan.id === id);
}
