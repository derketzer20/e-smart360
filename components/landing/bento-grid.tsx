"use client";

import { MessageSquare, Phone, Megaphone, Zap, BarChart3, Shield } from "lucide-react";

const bentoCards = [
  {
    id: 1,
    icon: MessageSquare,
    title: "Chatbots Omnicanal con IA",
    description:
      "Despliega agentes conversacionales en WhatsApp, Instagram, Messenger, Telegram y tu web desde un único panel. Sin riesgo de bloqueo gracias a la API Oficial de Meta.",
    span: "lg:col-span-2 lg:row-span-2",
    size: "large",
  },
  {
    id: 2,
    icon: Phone,
    title: "Agentes de Voz IA 24/7",
    description:
      "Responde llamadas, califica leads y agenda citas automáticamente. Tu recepcionista de voz nunca duerme.",
    span: "lg:col-span-1 lg:row-span-2",
    size: "medium",
  },
  {
    id: 3,
    icon: Megaphone,
    title: "Campañas Masivas",
    description:
      "Envía miles de mensajes con respaldo oficial de Meta, sin baneos ni restricciones.",
    span: "lg:col-span-1",
    size: "small",
  },
  {
    id: 4,
    icon: Zap,
    title: "Automatizaciones sin límite",
    description:
      "Conecta Webhooks, Make, n8n, Shopify, Stripe y más. Diseña flujos conversacionales complejos con el constructor visual.",
    span: "lg:col-span-1",
    size: "small",
  },
  {
    id: 5,
    icon: BarChart3,
    title: "Análisis IQ de conversaciones",
    description:
      "AI Intent Detection identifica la intención real de cada mensaje y activa el flujo correcto en tiempo real.",
    span: "lg:col-span-1",
    size: "small",
  },
  {
    id: 6,
    icon: Shield,
    title: "Infraestructura Enterprise",
    description:
      "API Oficial de Meta. Certificada, segura y sin riesgos de bloqueo para tu número de WhatsApp Business.",
    span: "lg:col-span-1",
    size: "small",
  },
];

export function BentoGrid() {
  return (
    <section className="relative py-24 lg:py-32 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
            Plataforma Dual
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-6 leading-[0.95]">
            Chat + Voz.
            <br />
            <span className="text-stroke">Un solo panel.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Todo el poder de la automatización conversacional y la voz artificial
            reunidos en una plataforma diseñada para escalar tu negocio.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10 rounded-2xl overflow-hidden">
          {bentoCards.map((card) => (
            <div
              key={card.id}
              className={`bg-background p-8 lg:p-10 flex flex-col gap-4 hover:bg-foreground/[0.02] transition-colors group ${card.span}`}
            >
              <div className="w-10 h-10 rounded-xl bg-foreground/8 border border-foreground/10 flex items-center justify-center group-hover:bg-foreground group-hover:border-foreground transition-all duration-300">
                <card.icon className="w-5 h-5 text-foreground group-hover:text-background transition-colors duration-300" />
              </div>
              <h3
                className={`font-display tracking-tight text-foreground leading-tight ${
                  card.size === "large"
                    ? "text-3xl lg:text-4xl"
                    : card.size === "medium"
                    ? "text-2xl lg:text-3xl"
                    : "text-xl lg:text-2xl"
                }`}
              >
                {card.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
