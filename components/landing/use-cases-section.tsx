"use client";

import { ArrowRight, HeartPulse, ShoppingCart, GraduationCap, Building2, Megaphone, Briefcase } from "lucide-react";
import { DEMO_HREF } from "@/lib/demo-href";

const cases = [
  {
    icon: HeartPulse,
    title: "Sector Médico",
    description:
      "Agenda citas, recuerda consultas y mejora el seguimiento clínico. Confirma turnos automáticamente desde WhatsApp.",
    href: "#",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Recupera carritos abandonados, confirma pedidos COD y notifica envíos. Integración nativa con Shopify y WooCommerce.",
    href: "#",
  },
  {
    icon: GraduationCap,
    title: "Educación",
    description:
      "Automatiza inscripciones, resuelve dudas y envía recordatorios de fechas clave a alumnos y padres.",
    href: "#",
  },
  {
    icon: Building2,
    title: "Agencias Inmobiliarias",
    description:
      "Califica prospectos, agenda visitas y lanza campañas de seguimiento automáticas desde WhatsApp e Instagram.",
    href: "#",
  },
  {
    icon: Megaphone,
    title: "Marketing y Ventas",
    description:
      "Captura leads desde anuncios, segmenta por intención y dispara flujos de conversión conectados a tu CRM.",
    href: "#",
  },
  {
    icon: Briefcase,
    title: "Industria & Empresas",
    description:
      "Responde cotizaciones, solicitudes técnicas y soporte 24/7. Conecta tu bot a ERP o sistemas logísticos.",
    href: "#",
  },
];

export function UseCasesSection() {
  return (
    <section className="relative py-24 lg:py-32 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
            Casos de Uso
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-6 leading-[0.95]">
            Diseñado para
            <br />
            <span className="text-stroke">tu industria</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Implementamos contigo 1:1, adaptando los flujos de automatización a
            los procesos reales de tu sector.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10">
          {cases.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group bg-background p-8 flex flex-col gap-4 hover:bg-foreground/[0.02] transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-foreground/8 border border-foreground/10 flex items-center justify-center group-hover:bg-foreground group-hover:border-foreground transition-all duration-300">
                  <item.icon className="w-5 h-5 text-foreground group-hover:text-background transition-colors duration-300" />
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </div>
              <h3 className="font-display text-xl text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href={DEMO_HREF}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            Solicitar implementación asistida 1:1
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
