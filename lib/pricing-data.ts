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
  /** When true, UI shows “detail pending from stakeholder” instead of fixed price. */
  detailPending?: boolean;
  stakeholderNote?: LocalizedText;
};

export type ComparisonRow = {
  id: string;
  label: LocalizedText;
  tooltip: LocalizedText;
  values: Record<string, string>;
};

/** Grouped comparison tables (Consolto-style): fewer columns per view, clearer scan. */
export type PlanComparisonSection = {
  id: string;
  lineId: ProductLineId;
  title: LocalizedText;
  planIds: string[];
  rows: ComparisonRow[];
};

/**
 * Palette note (Meta Conversations–style marketing UI): sampled blues/pinks/greens
 * aligned with globals.css — keep in sync when rebranding.
 */
export const PRICING_DESIGN_PALETTE_NOTE =
  "Accent tokens: --accent-fb-blue / --accent-meta, --accent-meta-pink, --accent-whatsapp-green (see globals.css :root).";

export type CompetitorRegion = "global" | "mx";

export type CompetitorProfile = {
  id: string;
  name: string;
  region: CompetitorRegion;
  /** Illustrative % markup on Meta conversation pass-through (public positioning; verify before legal). */
  illustrativeMarkupPercent: number | null;
  officialMetaApi: boolean;
  shortNote: LocalizedText;
};

/** Desk research snippets (non-binding; verify before paid claims). */
export const PRICING_DESK_RESEARCH = {
  manychatModel:
    "ManyChat: subscription tiers by active contacts plus WhatsApp template / Meta conversation costs billed per Meta rules — see manychat.com/pricing and help center WhatsApp pricing guide.",
} as const;


export type BspComparisonRow = {
  id: string;
  label: LocalizedText;
  tooltip: LocalizedText;
  self: LocalizedText;
  byCompetitorId: Record<string, LocalizedText>;
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
  detailPending: true,
  stakeholderNote: {
    es: "Precio final, SLA y alcance de implementación se confirman con ventas según tu operación.",
    en: "Final pricing, SLA, and implementation scope are confirmed with sales for your operation.",
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

export const PLAN_COMPARISON_SECTIONS: PlanComparisonSection[] = [
  {
    id: "sec-messaging",
    lineId: "messaging",
    title: { es: "Mensajería y omnicanal", en: "Messaging & omnichannel" },
    planIds: ["msg-spark-free", "msg-whatsapp", "msg-growth", "msg-orbit"],
    rows: [
      {
        id: "ch-m-channels",
        label: { es: "Canales", en: "Channels" },
        tooltip: {
          es: "Canales Meta y extras disponibles por plan.",
          en: "Meta channels and extras available per plan.",
        },
        values: {
          "msg-spark-free": "WhatsApp",
          "msg-whatsapp": "WhatsApp API",
          "msg-growth": "WA + Instagram",
          "msg-orbit": "Meta + Telegram + Webchat",
        },
      },
      {
        id: "ch-m-contacts",
        label: { es: "Contactos / suscriptores (ref.)", en: "Contacts (ref.)" },
        tooltip: {
          es: "Referencia de capacidad; políticas de canal aplican.",
          en: "Capacity reference; channel policies apply.",
        },
        values: {
          "msg-spark-free": "300",
          "msg-whatsapp": "5,000",
          "msg-growth": "25,000",
          "msg-orbit": "80,000",
        },
      },
      {
        id: "ch-m-campaigns",
        label: { es: "Campañas / broadcast", en: "Campaigns" },
        tooltip: {
          es: "Broadcast y automatización respetando políticas Meta.",
          en: "Broadcast and automation respecting Meta policies.",
        },
        values: {
          "msg-spark-free": "No",
          "msg-whatsapp": "5 / mes",
          "msg-growth": "20 / mes",
          "msg-orbit": "Ilimitadas*",
        },
      },
      {
        id: "ch-m-seats",
        label: { es: "Asientos de equipo", en: "Team seats" },
        tooltip: {
          es: "Usuarios con acceso a bandeja y automatización.",
          en: "Users with inbox and automation access.",
        },
        values: {
          "msg-spark-free": "1",
          "msg-whatsapp": "2",
          "msg-growth": "5",
          "msg-orbit": "12",
        },
      },
      {
        id: "ch-m-ai",
        label: { es: "IA operativa", en: "Operational AI" },
        tooltip: {
          es: "IA con política de uso justo en todos los planes de pago.",
          en: "AI with fair-use policy on all paid plans.",
        },
        values: {
          "msg-spark-free": "Uso justo",
          "msg-whatsapp": "Uso justo",
          "msg-growth": "Uso justo",
          "msg-orbit": "Uso justo",
        },
      },
    ],
  },
  {
    id: "sec-voice",
    lineId: "voice",
    title: { es: "Voz IA", en: "AI voice" },
    planIds: ["voice-core", "voice-pro", "voice-scale"],
    rows: [
      {
        id: "ch-v-min",
        label: { es: "Minutos / mes", en: "Minutes / mo" },
        tooltip: {
          es: "Sin plan gratuito; top-ups disponibles.",
          en: "No free tier; top-ups available.",
        },
        values: {
          "voice-core": "150",
          "voice-pro": "250",
          "voice-scale": "500",
        },
      },
      {
        id: "ch-v-camp",
        label: { es: "Campañas de voz", en: "Voice campaigns" },
        tooltip: {
          es: "Secuencias y llamadas salientes según plan.",
          en: "Outbound sequences per plan.",
        },
        values: {
          "voice-core": "No",
          "voice-pro": "Sí",
          "voice-scale": "Sí",
        },
      },
      {
        id: "ch-v-seats",
        label: { es: "Asientos", en: "Seats" },
        tooltip: { es: "Agentes en plataforma de voz.", en: "Agents on voice platform." },
        values: {
          "voice-core": "2",
          "voice-pro": "5",
          "voice-scale": "10",
        },
      },
    ],
  },
  {
    id: "sec-card",
    lineId: "digital-card",
    title: { es: "Digital Card / NFC", en: "Digital Card / NFC" },
    planIds: ["card-trial", "card-business", "card-team"],
    rows: [
      {
        id: "ch-c-cards",
        label: { es: "Tarjetas activas", en: "Active cards" },
        tooltip: { es: "Perfiles NFC y enlaces.", en: "NFC profiles and links." },
        values: {
          "card-trial": "1 (trial)",
          "card-business": "1",
          "card-team": "25",
        },
      },
      {
        id: "ch-c-analytics",
        label: { es: "Analítica", en: "Analytics" },
        tooltip: { es: "Profundidad de métricas.", en: "Analytics depth." },
        values: {
          "card-trial": "Básica",
          "card-business": "Avanzada",
          "card-team": "Equipo",
        },
      },
      {
        id: "ch-c-seats",
        label: { es: "Asientos", en: "Seats" },
        tooltip: { es: "Usuarios para gestión de tarjetas.", en: "Users managing cards." },
        values: {
          "card-trial": "1",
          "card-business": "1",
          "card-team": "5",
        },
      },
    ],
  },
  {
    id: "sec-virtual",
    lineId: "virtual-office",
    title: { es: "Oficina virtual (Consolto)", en: "Virtual office (Consolto)" },
    planIds: ["virtual-consulto-core", "virtual-consulto-clinic"],
    rows: [
      {
        id: "ch-vo-seats",
        label: { es: "Asientos", en: "Seats" },
        tooltip: { es: "Producto con marca partner.", en: "Partner-branded product." },
        values: {
          "virtual-consulto-core": "2",
          "virtual-consulto-clinic": "8",
        },
      },
      {
        id: "ch-vo-cal",
        label: { es: "Agenda / calendario", en: "Scheduling" },
        tooltip: { es: "Citas y recordatorios.", en: "Appointments and reminders." },
        values: {
          "virtual-consulto-core": "Sí",
          "virtual-consulto-clinic": "Sí",
        },
      },
      {
        id: "ch-vo-wait",
        label: { es: "Sala de espera", en: "Waiting room" },
        tooltip: { es: "Flujo clínico.", en: "Clinic flow." },
        values: {
          "virtual-consulto-core": "—",
          "virtual-consulto-clinic": "Sí",
        },
      },
    ],
  },
];

const C_MARKUP = {
  es: "Markup ilustrativo sobre conversaciones Meta (referencias públicas; verificar antes de publicidad pagada).",
  en: "Illustrative markup on Meta conversations (public references; verify before paid ads).",
};

/** Last desk review of competitor positioning (update when changing numbers). */
export const PRICING_BENCHMARK_REVISION = "2026-05-12";

export const BSP_COMPETITORS: CompetitorProfile[] = [
  {
    id: "wati",
    name: "Wati",
    region: "global",
    illustrativeMarkupPercent: 20,
    officialMetaApi: true,
    shortNote: {
      es: "BSP popular en India/MENA; precios en USD.",
      en: "Popular BSP in India/MENA; USD-first pricing.",
    },
  },
  {
    id: "interakt",
    name: "Interakt",
    region: "global",
    illustrativeMarkupPercent: 15,
    officialMetaApi: true,
    shortNote: {
      es: "Enfoque e-commerce y CRM ligero.",
      en: "E-commerce and lightweight CRM angle.",
    },
  },
  {
    id: "aisensy",
    name: "AiSensy",
    region: "global",
    illustrativeMarkupPercent: 18,
    officialMetaApi: true,
    shortNote: {
      es: "Fuerte en PyME India; bundles de mensajes.",
      en: "Strong SMB India positioning; message bundles.",
    },
  },
  {
    id: "manychat",
    name: "ManyChat",
    region: "mx",
    illustrativeMarkupPercent: null,
    officialMetaApi: true,
    shortNote: {
      es: "Muy adoptado en MX/LatAm para automatización + anuncios Click-to-WhatsApp.",
      en: "Widely adopted in MX/LatAm for automation + Click-to-WA ads.",
    },
  },
  {
    id: "respond_io",
    name: "Respond.io",
    region: "mx",
    illustrativeMarkupPercent: 12,
    officialMetaApi: true,
    shortNote: {
      es: "Omnicanal regional; revisar add-ons por canal.",
      en: "Regional omnichannel; check per-channel add-ons.",
    },
  },
  {
    id: "dialog360",
    name: "360dialog",
    region: "mx",
    illustrativeMarkupPercent: 0,
    officialMetaApi: true,
    shortNote: {
      es: "BSP técnico (API); sin suite completa — suele requerir stack propio.",
      en: "Technical BSP (API); not a full suite — often needs your own stack.",
    },
  },
];

export const BSP_COMPARISON_ROWS: BspComparisonRow[] = [
  {
    id: "bsp-markup",
    label: { es: "Markup sobre Meta (referencia)", en: "Markup on Meta (reference)" },
    tooltip: C_MARKUP,
    self: {
      es: "0% markup en plataforma (Meta factura conversaciones aparte).",
      en: "0% platform markup (Meta bills conversations separately).",
    },
    byCompetitorId: {
      wati: { es: "~20% (referencias de mercado)", en: "~20% (market references)" },
      interakt: { es: "~15% (referencias de mercado)", en: "~15% (market references)" },
      aisensy: { es: "~18% (referencias de mercado)", en: "~18% (market references)" },
      manychat: {
        es: "Suscripción por contactos activos + costos de plantillas Meta (ver calculadora Manychat).",
        en: "Active-contact subscription + Meta template costs (see Manychat calculator).",
      },
      respond_io: { es: "~12% (referencias de mercado)", en: "~12% (market references)" },
      dialog360: { es: "0% BSP; hosting y soporte aparte", en: "0% BSP; hosting/support separate" },
    },
  },
  {
    id: "bsp-suite",
    label: { es: "Suite conversacional + voz + tarjeta", en: "Messaging + voice + card suite" },
    tooltip: {
      es: "Qué tan integrado está el stack comercial en un solo proveedor.",
      en: "How integrated the commercial stack is with one vendor.",
    },
    self: {
      es: "Bundles unificados E-SMART360 (mensajería, voz, Digital Card, oficina virtual).",
      en: "Unified E-SMART360 bundles (messaging, voice, Digital Card, virtual office).",
    },
    byCompetitorId: {
      wati: { es: "Mensajería / CRM; voz y NFC no nativos", en: "Messaging/CRM; voice & NFC not native" },
      interakt: { es: "Mensajería + e-commerce; voz limitada", en: "Messaging + e-commerce; limited voice" },
      aisensy: { es: "Mensajería + campañas; voz vía terceros", en: "Messaging + campaigns; voice via third parties" },
      manychat: { es: "Automatización fuerte; API Meta aparte", en: "Strong automation; Meta API separate" },
      respond_io: { es: "Omnicanal; voz según integración", en: "Omnichannel; voice depends on integration" },
      dialog360: { es: "Solo capa API; tú armas producto", en: "API layer only; you assemble product" },
    },
  },
  {
    id: "bsp-compliance",
    label: { es: "Riesgo / compliance API oficial", en: "Official API compliance" },
    tooltip: {
      es: "Uso de Cloud API y políticas Meta.",
      en: "Cloud API use and Meta policies.",
    },
    self: {
      es: "Cloud API + políticas de uso y anti-spam integradas en el producto.",
      en: "Cloud API plus product-level fair-use and anti-spam guidance.",
    },
    byCompetitorId: {
      wati: { es: "API oficial", en: "Official API" },
      interakt: { es: "API oficial", en: "Official API" },
      aisensy: { es: "API oficial", en: "Official API" },
      manychat: { es: "API oficial (según canal conectado)", en: "Official API (per connected channel)" },
      respond_io: { es: "API oficial", en: "Official API" },
      dialog360: { es: "API oficial", en: "Official API" },
    },
  },
  {
    id: "bsp-coexist",
    label: { es: "Coexistencia / número de negocio", en: "Coexistence / business number" },
    tooltip: {
      es: "Soporte a número WhatsApp Business coexistence según implementación.",
      en: "WhatsApp Business coexistence depends on implementation.",
    },
    self: {
      es: "Documentado en guías E-SMART360; onboarding guiado.",
      en: "Documented in E-SMART360 guides; guided onboarding.",
    },
    byCompetitorId: {
      wati: { es: "Soportado (verificar región)", en: "Supported (verify region)" },
      interakt: { es: "Soportado (verificar región)", en: "Supported (verify region)" },
      aisensy: { es: "Soportado (verificar región)", en: "Supported (verify region)" },
      manychat: { es: "Flujos WA; revisar límites por tipo de cuenta", en: "WA flows; check account-type limits" },
      respond_io: { es: "Soportado (verificar región)", en: "Supported (verify region)" },
      dialog360: { es: "Técnico; depende de tu hosting BSP", en: "Technical; depends on your BSP hosting" },
    },
  },
];

export function bundleListPriceMxn(bundle: BundlePlan, cycle: BillingCycle): number {
  return bundle.includesPlans.reduce((sum, planId) => {
    const plan = publicPlanById(planId);
    if (!plan) return sum;
    const part =
      cycle === "annual" ? (plan.annualPriceMxn ?? plan.monthlyPriceMxn * 12) : plan.monthlyPriceMxn;
    return sum + part;
  }, 0);
}

export function bundlePriceMxn(bundle: BundlePlan, cycle: BillingCycle): number {
  return cycle === "annual"
    ? (bundle.annualPriceMxn ?? bundle.monthlyPriceMxn * 12)
    : bundle.monthlyPriceMxn;
}

export function bundleSavingsMxn(bundle: BundlePlan, cycle: BillingCycle): number {
  return Math.max(0, bundleListPriceMxn(bundle, cycle) - bundlePriceMxn(bundle, cycle));
}

export function annualSavingsPercentApprox(bundle: BundlePlan): number {
  const annualList = bundleListPriceMxn(bundle, "annual");
  const annualBundle = bundlePriceMxn(bundle, "annual");
  if (annualList <= 0) return 0;
  return Math.round(((annualList - annualBundle) / annualList) * 100);
}

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
