"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const plans = [
  {
    name: "WhatsApp Pack",
    tagline: "Ideal para emprendedores que quieren iniciar con automatización.",
    price: { monthly: 40, annual: 24 },
    annualTotal: 288,
    features: [
      "0% Sin comisiones extra",
      "Cuenta de usuario: 1",
      "Sistema de citas en WhatsApp: 1",
      "Tu propio número con API oficial",
      "Créditos de mensaje ilimitados",
      "Entrenamiento IA avanzado",
      "500,000 AI Tokens",
      "Campañas masivas sin riesgo de bloqueo",
      "Cobros digitales con catálogos",
      "Campañas de seguimiento automáticas: 3",
      "Widget chat WhatsApp en web",
      "Reconocimiento de documentos, audios e imágenes",
      "Funciones avanzadas de e-commerce",
      "Integraciones webhooks, Make, n8n",
    ],
    cta: "Comenzar ahora",
    ctaHref: "https://www.e-smart360.com/precios",
    popular: false,
  },
  {
    name: "Dual Pack",
    tagline: "WhatsApp e Instagram con IA para automatizar ventas y servicios.",
    price: { monthly: 56, annual: 34 },
    annualTotal: 488,
    features: [
      "Todo lo del WhatsApp Pack",
      "Cuenta de Instagram: 1",
      "Miembros de equipo: 2",
      "Sistema de citas WhatsApp: 2",
      "Suscriptores: 10,000",
      "Cuentas Google: 2",
      "Google Contactos, Calendario, Sheets",
      "2 Millones de AI Tokens",
      "Agente IA en Instagram",
      "Funciones PRO en Instagram",
      "Respuestas automáticas de historias",
      "Campañas de seguimiento automáticas: 10",
    ],
    cta: "Comenzar ahora",
    ctaHref: "https://www.e-smart360.com/precios",
    popular: true,
  },
  {
    name: "META Pack",
    tagline: "Automatiza cada interacción. Gestiona leads omnicanal con integraciones nativas.",
    price: { monthly: 73, annual: 44 },
    annualTotal: 588,
    features: [
      "Todo lo del Dual Pack",
      "Cuenta Messenger: 1",
      "Cuenta Telegram: 1",
      "Miembros de equipo: 5",
      "Suscriptores ilimitados",
      "5 Millones de AI Tokens",
      "Sistema de citas WhatsApp: 5",
      "Cuentas Google: 5",
      "Social Posting: 30 / Mes",
      "Comentarios automáticos ilimitados",
      "WhatsApp Flows ilimitados",
      "HTTP API ilimitadas",
    ],
    cta: "Comenzar ahora",
    ctaHref: "https://www.e-smart360.com/precios",
    popular: false,
  },
  {
    name: "Configuración Asistida",
    tagline: "Nosotros configuramos tu agente IA con la información de tu negocio.",
    price: { monthly: null, annual: null },
    annualTotal: null,
    features: [
      "Configuración inicial personalizada",
      "Características y funciones sin límites",
      "AI Tokens ilimitados",
      "Soporte prioritario dedicado",
      "Sesión 1:1 de onboarding",
      "Actualizaciones continuas gestionadas",
    ],
    cta: "Solicitar configuración",
    ctaHref: "https://www.e-smart360.com/precios-pro",
    popular: false,
    custom: true,
  },
];

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="relative py-32 lg:py-40 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
            Precios
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-6 leading-[0.95]">
            Elige el plan
            <br />
            <span className="text-stroke">que te conviene</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Garantía de respaldo total de 30 días en planes anuales.
            Sin comisiones ocultas, sin sorpresas.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center gap-4 mb-16">
          <span className={`text-sm transition-colors ${!isAnnual ? "text-foreground" : "text-muted-foreground"}`}>
            Mensual
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative w-14 h-7 bg-foreground/10 rounded-full p-1 transition-colors hover:bg-foreground/20"
          >
            <div
              className={`w-5 h-5 bg-foreground rounded-full transition-transform duration-300 ${
                isAnnual ? "translate-x-7" : "translate-x-0"
              }`}
            />
          </button>
          <span className={`text-sm transition-colors ${isAnnual ? "text-foreground" : "text-muted-foreground"}`}>
            Anual
          </span>
          {isAnnual && (
            <span className="ml-2 px-2 py-1 bg-foreground text-background text-xs font-mono">
              Ahorra 40%
            </span>
          )}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-px bg-foreground/10">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`relative p-8 lg:p-10 bg-background flex flex-col ${
                plan.popular ? "border-2 border-foreground -m-px z-10" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-8 px-3 py-1 bg-foreground text-background text-xs font-mono uppercase tracking-widest">
                  Más popular
                </span>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl text-foreground mt-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{plan.tagline}</p>
              </div>

              {/* Price */}
              <div className="mb-8 pb-8 border-b border-foreground/10">
                {plan.custom ? (
                  <span className="font-display text-4xl text-foreground">Personalizado</span>
                ) : (
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-5xl lg:text-6xl text-foreground">
                        ${isAnnual ? plan.price.annual : plan.price.monthly}
                      </span>
                      <span className="text-muted-foreground text-sm">/mes</span>
                    </div>
                    {isAnnual && plan.annualTotal && (
                      <p className="text-xs text-muted-foreground mt-1">
                        Cobro anual ${plan.annualTotal} USD
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-10 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={plan.ctaHref}
                className={`w-full py-4 flex items-center justify-center gap-2 text-sm font-medium transition-all group ${
                  plan.popular
                    ? "bg-foreground text-background hover:bg-foreground/90"
                    : "border border-foreground/20 text-foreground hover:border-foreground hover:bg-foreground/5"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>

        {/* Guarantee note */}
        <p className="mt-12 text-center text-sm text-muted-foreground">
          Garantía de devolución exclusiva para planes anuales (30 días).{" "}
          <a href="https://www.e-smart360.com/precios" className="underline underline-offset-4 hover:text-foreground transition-colors">
            Ver comparación completa de planes
          </a>
        </p>

        {/* Enterprise & Agency row */}
        <div className="mt-16 grid md:grid-cols-2 gap-px bg-foreground/10">
          {[
            {
              label: "Agencias",
              desc: "Comisiones preferenciales, altos márgenes de ganancia, usuarios ilimitados y acceso a la API Developer.",
            },
            {
              label: "Empresas",
              desc: "Solución integral con integraciones a medida, onboarding completo y soporte prioritario dedicado.",
            },
          ].map((item) => (
            <div key={item.label} className="bg-background p-8 flex items-center justify-between gap-8 group">
              <div>
                <h4 className="font-display text-xl text-foreground mb-2">{item.label}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">{item.desc}</p>
              </div>
              <a
                href="https://www.e-smart360.com/precios-pro"
                className="shrink-0 flex items-center gap-2 text-sm font-medium border border-foreground/20 hover:border-foreground hover:bg-foreground/5 px-5 py-3 transition-all group-hover:border-foreground"
              >
                Contáctanos
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
