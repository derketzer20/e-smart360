import type { Locale } from "./types";

type Messages = {
  nav: Record<string, string>;
  dropdown: Record<string, string>;
  products: Record<string, { label: string; description: string }>;
  features: Record<string, string>;
  integrations: Record<string, string>;
  resources: Record<string, string>;
  footer: Record<string, string>;
  pricingPage: Record<string, string>;
  docs: Record<string, string>;
};

const es: Messages = {
  nav: {
    platform: "Plataforma",
    features: "Características",
    cases: "Casos de Uso",
    integrations: "Integraciones",
    resources: "Recursos",
    pricing: "Precios",
    login: "Iniciar Sesión",
    cta: "Comienza Gratis",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    core: "CORE",
  },
  dropdown: {
    products: "Productos",
    featuresTitle: "Funciones clave",
    casesDept: "Por Departamento",
    casesIndustry: "Por Industria",
    integrationsTitle: "Conecta tus herramientas",
    resourcesTitle: "Recursos",
  },
  products: {
    chatbots: {
      label: "Chatbots Omnicanal",
      description: "WhatsApp, Facebook, Instagram y más",
    },
    voice: {
      label: "Agentes de Voz IA",
      description: "Llamadas telefónicas inteligentes 24/7",
    },
    virtual: {
      label: "Oficina Virtual",
      description: "Videollamadas y agendamiento integrado",
    },
    nfc: {
      label: "Tarjetas Digitales NFC",
      description: "Networking profesional con IA",
    },
  },
  features: {
    flows: "Constructor de Flujos",
    inbox: "Bandeja Omnicanal Unificada",
    voiceFunnels: "Embudos de Voz IA",
    campaigns: "Campañas Masivas",
    iq: "Análisis IQ con IA",
    webhooks: "Webhooks e Integraciones",
  },
  integrations: {
    wa: "WhatsApp / Meta",
    shop: "Shopify & WooCommerce",
    sheets: "Google Sheets & Calendar",
    pay: "Stripe & PayPal",
    zap: "Zapier & Make (n8n)",
    twilio: "Twilio SMS",
  },
  resources: {
    docs: "Documentación",
    blog: "Blog",
    agency: "Programa de Agencias",
  },
  footer: {
    colPlatform: "Plataforma",
    colFeatures: "Características",
    colCases: "Casos de Uso",
    colIntegrations: "Integraciones",
    colCompany: "Empresa",
    colLegal: "Legal",
    tagline:
      "La plataforma IA #1 para atención y soporte al cliente 24/7. Chatbots omnicanal y Agentes de Voz para automatizar tu negocio.",
    metaPartner: "META Business Partner Oficial",
    copyright: "© 2024 E-SMART360. Todos los derechos reservados. Fundada en México.",
    systemsOk: "Todos los sistemas operativos",
    platform: "Plataforma",
    features: "Características",
    cases: "Casos de Uso",
    integrations: "Integraciones",
    company: "Empresa",
    legal: "Legal",
    pricing: "Precios",
    chatbots: "Chatbots Omnicanal",
    voice: "Agentes de Voz IA",
    virtual: "Oficina Virtual",
    nfc: "Tarjetas Digitales NFC",
    flows: "Constructor de Flujos",
    inbox: "Bandeja Omnicanal",
    mass: "Campañas Masivas",
    iq: "Análisis IQ",
    webhooks: "Webhooks & API",
    medical: "Sector Médico",
    ecommerce: "E-commerce",
    education: "Educación",
    realestate: "Agencias Inmobiliarias",
    marketing: "Marketing y Ventas",
    industry: "Industria",
    privacy: "Privacidad",
    terms: "Términos y Condiciones",
    warranty: "Garantía de Respaldo",
    about: "Nosotros",
    blog: "Blog",
    docs: "Documentación",
    contact: "Contacto",
    agencyProgram: "Programa de Agencias",
  },
  pricingPage: {
    eyebrow: "Precios transparentes",
    title: "Elige tu plataforma o un paquete",
    subtitle:
      "Montos en pesos mexicanos (MXN). Los enlaces de pago con Stripe se activan cuando contrates.",
    byProduct: "Por plataforma",
    bundles: "Paquetes",
    perMonth: "/mes",
    included: "Incluye",
    cta: "Contratar / Checkout",
    stripeNote:
      "Los checkout de Stripe y price IDs se conectan aquí cuando tengas los productos creados en el dashboard.",
    bundleProducts: "Productos incluidos",
    popular: "Popular",
  },
  docs: {
    title: "Documentación",
    home: "Inicio docs",
    searchPlaceholder: "Buscar…",
    toc: "En esta página",
  },
};

const en: Messages = {
  nav: {
    platform: "Platform",
    features: "Features",
    cases: "Use cases",
    integrations: "Integrations",
    resources: "Resources",
    pricing: "Pricing",
    login: "Log in",
    cta: "Start free",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    core: "CORE",
  },
  dropdown: {
    products: "Products",
    featuresTitle: "Key capabilities",
    casesDept: "By team",
    casesIndustry: "By industry",
    integrationsTitle: "Connect your stack",
    resourcesTitle: "Resources",
  },
  products: {
    chatbots: {
      label: "Omnichannel chatbots",
      description: "WhatsApp, Facebook, Instagram, and more",
    },
    voice: {
      label: "AI voice agents",
      description: "Smart phone calls 24/7",
    },
    virtual: {
      label: "Virtual office",
      description: "Video calls and built-in scheduling",
    },
    nfc: {
      label: "Digital NFC cards",
      description: "Professional networking with AI",
    },
  },
  features: {
    flows: "Flow builder",
    inbox: "Unified omnichannel inbox",
    voiceFunnels: "AI voice funnels",
    campaigns: "Mass campaigns",
    iq: "IQ analytics with AI",
    webhooks: "Webhooks & integrations",
  },
  integrations: {
    wa: "WhatsApp / Meta",
    shop: "Shopify & WooCommerce",
    sheets: "Google Sheets & Calendar",
    pay: "Stripe & PayPal",
    zap: "Zapier & Make (n8n)",
    twilio: "Twilio SMS",
  },
  resources: {
    docs: "Documentation",
    blog: "Blog",
    agency: "Agency program",
  },
  footer: {
    colPlatform: "Platform",
    colFeatures: "Features",
    colCases: "Use cases",
    colIntegrations: "Integrations",
    colCompany: "Company",
    colLegal: "Legal",
    tagline:
      "The #1 AI platform for 24/7 customer care and support. Omnichannel chatbots and voice agents to automate your business.",
    metaPartner: "Official META Business Partner",
    copyright: "© 2024 E-SMART360. All rights reserved. Based in Mexico.",
    systemsOk: "All systems operational",
    platform: "Platform",
    features: "Features",
    cases: "Use cases",
    integrations: "Integrations",
    company: "Company",
    legal: "Legal",
    pricing: "Pricing",
    chatbots: "Omnichannel chatbots",
    voice: "AI voice agents",
    virtual: "Virtual office",
    nfc: "Digital NFC cards",
    flows: "Flow builder",
    inbox: "Omnichannel inbox",
    mass: "Mass campaigns",
    iq: "IQ analytics",
    webhooks: "Webhooks & API",
    medical: "Healthcare",
    ecommerce: "E-commerce",
    education: "Education",
    realestate: "Real estate",
    marketing: "Marketing & sales",
    industry: "Industry",
    privacy: "Privacy",
    terms: "Terms & conditions",
    warranty: "Service warranty",
    about: "About",
    blog: "Blog",
    docs: "Documentation",
    contact: "Contact",
    agencyProgram: "Agency program",
  },
  pricingPage: {
    eyebrow: "Transparent pricing",
    title: "Pick a platform or a bundle",
    subtitle:
      "Amounts in Mexican Pesos (MXN). Stripe checkout links go live when you subscribe.",
    byProduct: "By platform",
    bundles: "Bundles",
    perMonth: "/mo",
    included: "Includes",
    cta: "Subscribe / Checkout",
    stripeNote:
      "Stripe checkout buttons and price IDs wire in here once products exist in your Stripe dashboard.",
    bundleProducts: "Included products",
    popular: "Popular",
  },
  docs: {
    title: "Documentation",
    home: "Docs home",
    searchPlaceholder: "Search…",
    toc: "On this page",
  },
};

export const messages: Record<Locale, Messages> = {
  es,
  en,
};
