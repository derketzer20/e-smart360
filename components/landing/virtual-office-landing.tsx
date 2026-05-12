"use client";

import CountUp from "react-countup";
import { motion, useReducedMotion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ProductHoverCard } from "@/components/landing/product-hover-card";
import { DEMO_HREF } from "@/lib/demo-href";
import {
  ArrowRight,
  Bell,
  CalendarClock,
  Headset,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
  Video,
  Webcam,
} from "lucide-react";

type StatLine = {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
  decimals?: number;
};

const stats: StatLine[] = [
  { value: 42, suffix: "%", label: "menos ausencias con recordatorios automáticos" },
  { value: 3, suffix: "×", label: "más reuniones reservadas desde el widget web" },
  { value: 99, suffix: "%", label: "calidad de videollamada en redes típicas" },
  { value: 24, suffix: "/7", label: "disponibilidad del canal de agendamiento" },
];

const personaCards = [
  {
    icon: Headset,
    title: "Para soporte y ventas",
    short: "Un enlace: agenda, sala y seguimiento.",
    detail:
      "El cliente elige horario, recibe confirmación y entra a una sala con marca blanca. Tu equipo ve historial y notas en un solo panel.",
  },
  {
    icon: Users,
    title: "Para clínicas y consultorios",
    short: "Sala de espera y videollamada sin fricción.",
    detail:
      "Flujo pensado para citas recurrentes, documentos previos y mensajes de recordatorio. Menos cancelaciones de último minuto.",
  },
  {
    icon: MonitorSmartphone,
    title: "Para equipos remotos",
    short: "Agenda integrada en web y campañas.",
    detail:
      "Incrusta el widget donde ya conviertes (landing, WhatsApp, email). Las reuniones se sincronizan con tu operación diaria.",
  },
  {
    icon: Sparkles,
    title: "Para agencias",
    short: "Varias marcas, misma infraestructura.",
    detail:
      "Escala servicios de videoconferencia y agendamiento para clientes sin multiplicar herramientas ni cuentas sueltas.",
  },
];

const modules = [
  {
    icon: Video,
    title: "Videollamadas HD",
    body: "Salas con enlace único, compartir pantalla y experiencia estable en escritorio y móvil.",
  },
  {
    icon: CalendarClock,
    title: "Agenda en tu web",
    body: "Disponibilidad en tiempo real, zonas horarias y confirmaciones que reducen inasistencias.",
  },
  {
    icon: Bell,
    title: "Recordatorios inteligentes",
    body: "Notificaciones por el canal que elijas para que el cliente llegue preparado a la sesión.",
  },
  {
    icon: Webcam,
    title: "Widget embebible",
    body: "Un solo snippet para convertir visitas en citas sin salir de tu sitio o embudo.",
  },
];

const workflowSteps = [
  {
    title: "Publica tu disponibilidad",
    body: "Define servicios, duración y reglas de cancelación en minutos.",
    icon: CalendarClock,
  },
  {
    title: "Comparte tu enlace",
    body: "Sitio web, redes, firma de correo o campañas: el mismo punto de reserva.",
    icon: MonitorSmartphone,
  },
  {
    title: "Atiende con contexto",
    body: "Entra a la videollamada con notas, historial y mensajes previos visibles.",
    icon: Video,
  },
];

const faqItems = [
  {
    q: "¿Qué incluye la Oficina Virtual de E-SMART360?",
    a: "Agendamiento en línea, salas de videollamada, recordatorios, widget para tu web y flujos pensados para que el cliente llegue sin fricción. Se complementa con el resto de la plataforma cuando necesites mensajería o voz.",
  },
  {
    q: "¿Puedo usarlo solo para citas sin videollamada?",
    a: "Sí. Puedes priorizar la reserva y usar la videollamada solo cuando el caso lo requiera. La configuración se adapta a tu modelo de servicio.",
  },
  {
    q: "¿Es adecuado para equipos en México y clientes en Estados Unidos?",
    a: "Sí. Zonas horarias y mensajes se pueden ajustar para audiencias binacionales, algo frecuente en servicios profesionales y salud.",
  },
  {
    q: "¿Cómo se integra con mis campañas actuales?",
    a: "El widget y los enlaces de reserva se insertan en landings, Meta, correos o WhatsApp. Así mantienes un solo flujo de captación hacia la cita.",
  },
];

function VideoHeroGraphic() {
  const reduceMotion = useReducedMotion();
  return (
    <div className="relative h-[280px] w-full overflow-hidden rounded-[2rem] border border-border/70 bg-background/60 shadow-[0_30px_80px_-36px_rgba(15,23,42,0.28)] backdrop-blur-xl sm:h-[320px] xl:h-[360px]">
      <div className="absolute -left-12 top-10 h-52 w-52 rounded-full bg-[var(--accent-meta,#0668E1)]/12 blur-3xl" />
      <div className="absolute -right-8 bottom-6 h-56 w-56 rounded-full bg-[var(--pastel-mint,#7dd3c0)]/20 blur-3xl" />
      <div className="relative flex h-full flex-col items-center justify-center gap-4 p-8">
        <motion.div
          animate={reduceMotion ? {} : { scale: [1, 1.03, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-24 w-24 items-center justify-center rounded-3xl border border-border bg-background/90 shadow-lg"
        >
          <Video className="h-10 w-10 text-[var(--accent-meta,#0668E1)]" />
        </motion.div>
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="h-2 w-2 rounded-full bg-muted-foreground/40"
              animate={reduceMotion ? {} : { opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
        <p className="text-center text-xs font-mono uppercase tracking-widest text-muted-foreground">
          Sala lista · cliente en camino
        </p>
      </div>
    </div>
  );
}

export function VirtualOfficeLanding() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative z-10">
      <div
        className="page-grid-bg pointer-events-none fixed inset-0 -z-10 opacity-[0.45]"
        aria-hidden
      />

      <section className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pt-28 pb-14 sm:px-6 lg:px-8 lg:pt-32 xl:grid-cols-[0.95fr_1.05fr] xl:gap-12 xl:pt-40">
        <div className="absolute left-8 top-32 h-56 w-56 rounded-full bg-[var(--pastel-lavender,#c4b5fd)]/25 blur-3xl" />
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-[var(--accent-meta,#0668E1)]/10 blur-3xl" />

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-1.5 text-xs font-mono text-muted-foreground backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-meta,#0668E1)]" />
            META Business Partner · Oficina Virtual
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-6 font-display text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Tu consultorio digital,
            <span className="block text-muted-foreground">siempre abierto.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            Videollamadas profesionales, agenda en tu sitio y recordatorios que convierten
            visitas en citas confirmadas. Pensado para equipos en México y clientes en Estados Unidos.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.18 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button
              className="rounded-full bg-[var(--accent-meta,#0668E1)] px-7 text-white hover:bg-[#0554c4]"
              asChild
            >
              <a href={DEMO_HREF}>
                Agendar demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" className="rounded-full border-border bg-background/60 backdrop-blur" asChild>
              <a href="/precios">Ver precios</a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="relative"
        >
          <VideoHeroGraphic />
        </motion.div>
      </section>

      <section className="border-y border-border/80 bg-muted/30 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="text-center"
            >
              <p className="font-display text-4xl text-foreground md:text-5xl">
                {reduceMotion ? (
                  <>
                    {stat.prefix}
                    {stat.value}
                    {stat.suffix}
                  </>
                ) : (
                  <>
                    {stat.prefix}
                    <CountUp end={stat.value} duration={2} decimals={stat.decimals ?? 0} separator="," />
                    {stat.suffix}
                  </>
                )}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-[var(--accent-meta,#0668E1)]">
            Módulos esenciales
          </p>
          <h2 className="mt-3 font-display text-3xl text-foreground md:text-5xl">
            Todo lo que esperas de una oficina, en un solo flujo
          </h2>
          <p className="mt-4 text-muted-foreground">
            Sin saltar entre calendarios sueltos y enlaces de terceros: reserva, recordatorio y sala
            alineados con tu marca.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {modules.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.45 }}
              className="rounded-2xl border border-border bg-background/80 p-6 shadow-[0_18px_50px_-36px_rgba(15,23,42,0.25)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--accent-meta,#0668E1)]/10 text-[var(--accent-meta,#0668E1)]">
                <m.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-semibold text-foreground">{m.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden py-24 text-background">
        <div
          className="absolute inset-0 bg-[oklch(0.22_0.03_264)]"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] page-grid-bg-invert" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-mono uppercase tracking-widest text-background/60">
              Confianza y claridad
            </p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl">
              Experiencia sobria, sin ruido visual
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-background/75">
              La franja oscura no es negro puro: es un azul grafito que enmarca mensajes de valor y
              separa esta historia del resto de la página, igual que en tu home principal.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Marca blanca",
                body: "Logos, colores y enlaces con tu identidad Smart 360 frente al cliente.",
              },
              {
                title: "Seguridad con sentido",
                body: "Flujos conscientes de datos sensibles y buenas prácticas para videollamadas profesionales.",
              },
              {
                title: "Escalable",
                body: "Desde un consultorio hasta redes de sucursales con la misma base técnica.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="rounded-2xl border border-background/15 bg-background/5 p-6 backdrop-blur-sm"
              >
                <ShieldCheck className="h-6 w-6 text-[var(--pastel-mint,#7dd3c0)]" />
                <h3 className="mt-4 font-semibold text-background">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-background/70">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-[var(--pastel-mint,#0d9488)]">
            Perfiles de uso
          </p>
          <h2 className="mt-3 font-display text-3xl text-foreground md:text-5xl">
            Un mensaje claro para cada decisor
          </h2>
          <p className="mt-4 text-muted-foreground">
            Pasa el cursor sobre cada tarjeta para ver el detalle: misma interacción elegante que en
            Chatbots Omnicanal.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {personaCards.map((card, i) => (
            <ProductHoverCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              short={card.short}
              detail={card.detail}
              index={i}
              activeBorderClass="border-[var(--accent-meta,#0668E1)]/35"
              glowPrimaryClassName="bg-[var(--accent-meta,#0668E1)]/0 group-hover:bg-[var(--accent-meta,#0668E1)]/12"
              glowSecondaryClassName="bg-[#25D366]/0 group-hover:bg-[#25D366]/12"
              iconWrapClassName="bg-[var(--accent-meta,#0668E1)]/10 text-[var(--accent-meta,#0668E1)]"
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 xl:grid-cols-2 xl:gap-12">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-[var(--accent-meta,#0668E1)]">
              De la reserva a la reunión
            </p>
            <h2 className="mt-3 font-display text-3xl text-foreground md:text-5xl">
              Tres pasos, sin fricción operativa
            </h2>
            <p className="mt-5 text-muted-foreground">
              Alineamos el recorrido con lo que ya haces en marketing: captar, confirmar y atender
              con la misma calidad presencial, ahora digital.
            </p>
            <div className="mt-8 space-y-4">
              {workflowSteps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="flex gap-4 rounded-2xl border border-border bg-background p-4 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted text-foreground">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative rounded-[2rem] border border-border bg-background/70 p-5 shadow-[0_30px_90px_-45px_rgba(6,104,225,0.28)] backdrop-blur">
            <VideoHeroGraphic />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-[var(--pastel-mint,#0d9488)]">
            FAQ
          </p>
          <h2 className="mt-3 font-display text-3xl text-foreground md:text-5xl">Dudas frecuentes</h2>
        </div>
        <Accordion type="single" collapsible className="mt-10 rounded-2xl border border-border bg-background/80 px-5 shadow-sm">
          {faqItems.map((item, i) => (
            <AccordionItem key={item.q} value={`faq-vo-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-foreground hover:text-[var(--accent-meta,#0668E1)] hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-foreground px-6 py-14 text-center text-background shadow-[0_30px_90px_-40px_rgba(15,23,42,0.45)]">
          <h2 className="font-display text-3xl md:text-5xl">Haz que cada cita cuente</h2>
          <p className="mx-auto mt-4 max-w-2xl text-background/70">
            Te ayudamos a configurar tu primera experiencia de oficina virtual y a conectarla con el
            resto de tus canales E-SMART360.
          </p>
          <Button className="mt-8 rounded-full bg-background px-8 text-foreground hover:bg-background/90" asChild>
            <a href={DEMO_HREF}>
              Hablar con un especialista
              <Rocket className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
