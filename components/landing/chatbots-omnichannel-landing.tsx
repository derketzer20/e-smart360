"use client";

import { useMemo, useState } from "react";
import CountUp from "react-countup";
import { motion, useReducedMotion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  BarChart3,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Eye,
  GitBranch,
  LineChart,
  MessageCircle,
  MousePointerClick,
  Network,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  UserRound,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import {
  FaAws,
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaPaypal,
  FaShopify,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa6";
import {
  SiCloudflare,
  SiGooglesheets,
  SiHubspot,
  SiMailchimp,
  SiN8N,
  SiOpenai,
  SiStripe,
  SiTwilio,
  SiWoo,
  SiZapier,
} from "react-icons/si";
import type { IconType } from "react-icons";

type Integration = {
  name: string;
  icon: IconType;
  color: string;
};

const integrationsRowOne: Integration[] = [
  { name: "WhatsApp", icon: FaWhatsapp, color: "#25D366" },
  { name: "Instagram", icon: FaInstagram, color: "#E4405F" },
  { name: "Facebook", icon: FaFacebookF, color: "#1877F2" },
  { name: "Telegram", icon: FaTelegram, color: "#26A5E4" },
  { name: "Shopify", icon: FaShopify, color: "#7AB55C" },
  { name: "Stripe", icon: SiStripe, color: "#635BFF" },
  { name: "PayPal", icon: FaPaypal, color: "#003087" },
  { name: "Google", icon: FaGoogle, color: "#4285F4" },
];

const integrationsRowTwo: Integration[] = [
  { name: "OpenAI", icon: SiOpenai, color: "#111827" },
  { name: "Google Sheets", icon: SiGooglesheets, color: "#34A853" },
  { name: "WooCommerce", icon: SiWoo, color: "#96588A" },
  { name: "Zapier", icon: SiZapier, color: "#FF4F00" },
  { name: "HubSpot", icon: SiHubspot, color: "#FF7A59" },
  { name: "Twilio", icon: SiTwilio, color: "#F22F46" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Cloudflare", icon: SiCloudflare, color: "#F38020" },
];

const integrationsRowThree: Integration[] = [
  { name: "n8n", icon: SiN8N, color: "#EA4B71" },
  { name: "Mailchimp", icon: SiMailchimp, color: "#FFE01B" },
  { name: "WhatsApp Ads", icon: FaWhatsapp, color: "#25D366" },
  { name: "Messenger", icon: FaFacebookF, color: "#0084FF" },
  { name: "Instagram DM", icon: FaInstagram, color: "#C13584" },
  { name: "Stripe Checkout", icon: SiStripe, color: "#635BFF" },
  { name: "Google Forms", icon: FaGoogle, color: "#673AB7" },
  { name: "Automations", icon: SiZapier, color: "#FF4F00" },
];

const stats = [
  { value: 73, suffix: "%", label: "más conversión con flujos guiados" },
  { value: 275, suffix: "%", label: "ROI para agencias y revendedores" },
  { value: 84, suffix: "%", label: "satisfacción en soporte y onboarding" },
  { value: 200, suffix: " ms", label: "respuesta inicial promedio" },
  { value: 1.3, decimals: 1, suffix: "M+", label: "contactos y eventos procesados" },
  { value: 0.02, decimals: 2, prefix: "$", label: "coste estimado por conversación" },
];

const growthCards = [
  {
    icon: LineChart,
    title: "Para Growth Hackers",
    short: "Alertas, embudos y recuperación automática.",
    detail:
      "Activa campañas de carrito, stock, recordatorios y mensajes de reenganche según comportamiento real del usuario.",
  },
  {
    icon: Eye,
    title: "Para influencers",
    short: "Convierte comentarios en leads de WhatsApp.",
    detail:
      "Responde comentarios, filtra intención y mueve prospectos a una conversación privada sin perder el contexto social.",
  },
  {
    icon: Code2,
    title: "Para desarrolladores",
    short: "Webhooks, API y nodos personalizables.",
    detail:
      "Sincroniza CRM, ERP, pagos y bases de datos con flujos deterministas, trazables y fáciles de mantener.",
  },
  {
    icon: Users,
    title: "Para agencias",
    short: "Opera automatización para varias marcas.",
    detail:
      "Gestiona cuentas, plantillas, reportes y servicios recurrentes con una infraestructura preparada para escalar.",
  },
];

const workflowSteps = [
  {
    title: "Conecta canales",
    body: "WhatsApp, Instagram, Facebook, Telegram y webchat quedan en un solo panel.",
    icon: MessageCircle,
  },
  {
    title: "Entrena la IA",
    body: "Sube FAQs, documentos, URLs o catálogos para respuestas con fuente de verdad.",
    icon: BrainCircuit,
  },
  {
    title: "Ejecuta acciones",
    body: "Dispara webhooks, pagos, citas, etiquetas y secuencias según intención.",
    icon: Workflow,
  },
];

const faqItems = [
  {
    q: "¿Qué es un chatbot omnicanal de E-SMART360?",
    a: "Es un agente conversacional conectado a varios canales que no solo responde: califica leads, captura datos, dispara flujos, agenda citas y conecta con tus herramientas comerciales.",
  },
  {
    q: "¿Puedo conectar WhatsApp, Instagram y Facebook al mismo tiempo?",
    a: "Sí. La experiencia está pensada para centralizar canales sociales y de mensajería en una misma operación, con reglas distintas por canal y reportes consolidados.",
  },
  {
    q: "¿La IA puede ejecutar acciones reales?",
    a: "Sí. Puedes combinar respuestas con acciones deterministas: webhooks, actualización de hojas, creación de oportunidades, envío de recordatorios, pagos, etiquetas o handoff a un humano.",
  },
  {
    q: "¿Qué tan rápido puedo publicar un primer flujo?",
    a: "Un primer flujo de captación o soporte puede estar listo en horas si ya tienes FAQs, catálogo o formularios. Para flujos complejos recomendamos una implementación asistida por etapas.",
  },
];

function WorkflowHeroGraphic() {
  const reduceMotion = useReducedMotion();
  const nodes = [
    { x: 12, y: 52, label: "DM" },
    { x: 32, y: 28, label: "IA" },
    { x: 52, y: 55, label: "CRM" },
    { x: 70, y: 25, label: "Pago" },
    { x: 88, y: 50, label: "Cita" },
    { x: 44, y: 80, label: "Humano" },
  ];

  return (
    <div className="relative h-[280px] w-full overflow-hidden rounded-[2rem] border border-border/70 bg-background/60 shadow-[0_30px_80px_-36px_rgba(15,23,42,0.28)] backdrop-blur-xl sm:h-[340px] xl:h-[380px]">
      <div className="absolute -left-16 top-8 h-56 w-56 rounded-full bg-[#25D366]/15 blur-3xl" />
      <div className="absolute -right-10 bottom-8 h-64 w-64 rounded-full bg-[#0070f3]/15 blur-3xl" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="workflow-line" x1="0" x2="1">
            <stop offset="0%" stopColor="#25D366" stopOpacity="0.18" />
            <stop offset="55%" stopColor="#0070f3" stopOpacity="0.42" />
            <stop offset="100%" stopColor="#25D366" stopOpacity="0.14" />
          </linearGradient>
        </defs>
        {[
          "M12 52 C20 28 24 22 32 28 C42 38 42 54 52 55 C62 56 62 30 70 25 C80 18 84 38 88 50",
          "M32 28 C34 52 38 70 44 80 C48 86 53 69 52 55",
          "M12 52 C24 64 32 76 44 80",
        ].map((d, i) => (
          <motion.path
            key={d}
            d={d}
            fill="none"
            stroke="url(#workflow-line)"
            strokeWidth={i === 0 ? 0.7 : 0.42}
            strokeLinecap="round"
            initial={false}
            animate={reduceMotion ? {} : { pathLength: [0.18, 1, 0.18], opacity: [0.35, 0.95, 0.35] }}
            transition={{ duration: 4 + i * 0.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.25 }}
          />
        ))}
      </svg>

      {nodes.map((node, index) => (
        <motion.div
          key={node.label}
          className="absolute flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-border bg-background/90 text-[10px] font-medium text-foreground shadow-[0_12px_40px_-20px_rgba(15,23,42,0.35)] sm:h-16 sm:w-16 sm:rounded-2xl sm:text-xs"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          animate={reduceMotion ? {} : { y: [0, -8, 0], scale: [1, 1.035, 1] }}
          transition={{ duration: 2.8 + index * 0.18, repeat: Infinity, ease: "easeInOut", delay: index * 0.12 }}
        >
          <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-[#25D366] shadow-[0_0_18px_rgba(37,211,102,0.55)]" />
          {node.label}
        </motion.div>
      ))}
    </div>
  );
}

function IntegrationCard({ item }: { item: Integration }) {
  const Icon = item.icon;
  return (
    <div className="flex min-w-[116px] shrink-0 flex-col items-center gap-2 rounded-2xl border border-border bg-background/90 p-4 shadow-[0_10px_30px_-18px_rgba(15,23,42,0.22)]">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted shadow-sm">
        <Icon className="h-6 w-6" style={{ color: item.color }} />
      </div>
      <span className="text-center text-xs leading-tight text-muted-foreground">{item.name}</span>
    </div>
  );
}

function IntegrationMarqueeRow({
  items,
  reverse = false,
}: {
  items: Integration[];
  reverse?: boolean;
}) {
  return (
    <div className="omni-marquee-row">
      <div className={cn(reverse ? "omni-marquee-track-right" : "omni-marquee-track-left", "gap-4 pr-4")}>
        {[...items, ...items, ...items].map((item, i) => (
          <IntegrationCard key={`${item.name}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export function ChatbotsOmnichannelLanding() {
  const [activeGrowth, setActiveGrowth] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();

  const featureGrid = useMemo(
    () => [
      {
        icon: Bot,
        title: "IA que entiende intención",
        body: "Detecta leads calientes, tickets urgentes y oportunidades comerciales sin depender de menús rígidos.",
      },
      {
        icon: ShoppingBag,
        title: "Ventas dentro del chat",
        body: "Catálogos, carritos, pagos y recordatorios para convertir conversaciones en ingresos.",
      },
      {
        icon: GitBranch,
        title: "Flujos con acciones",
        body: "Cada respuesta puede etiquetar, asignar, actualizar CRM o activar una automatización externa.",
      },
      {
        icon: ShieldCheck,
        title: "Operación con control",
        body: "Handoff a humanos, notas, reglas, auditoría y plantillas para mantener calidad y gobierno.",
      },
    ],
    [],
  );

  return (
    <div className="relative z-10">
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.45]"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(0.12 0.01 60 / 0.06) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.12 0.01 60 / 0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
        aria-hidden
      />

      <section className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pt-28 pb-14 sm:px-6 lg:px-8 lg:pt-32 xl:grid-cols-[0.95fr_1.05fr] xl:gap-12 xl:pt-40">
        <div className="absolute left-10 top-36 h-48 w-48 rounded-full bg-[#25D366]/12 blur-3xl" />
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-[#0070f3]/12 blur-3xl" />

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-7 inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground"
          >
            <span className="h-px w-8 bg-foreground/30" />
            Motor omnicanal con IA
            <span className="h-1.5 w-1.5 rounded-full bg-[#25D366] shadow-[0_0_14px_rgba(37,211,102,0.6)]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.6 }}
            className="font-display text-[clamp(2.6rem,7vw,5.8rem)] leading-[0.9] tracking-tight text-foreground 2xl:text-[clamp(3rem,7vw,7rem)]"
          >
            Chatbots que ejecutan.
            <span className="mt-4 block text-[clamp(1.55rem,4vw,3.7rem)] font-light leading-[1] text-muted-foreground 2xl:text-[clamp(1.75rem,4.5vw,4.5rem)]">
              Automatización omnicanal para vender, atender y dar seguimiento.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.55 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            E-SMART360 convierte conversaciones fragmentadas en flujos medibles: captura leads,
            responde FAQs, procesa pedidos, coordina pagos y escala a tu equipo cuando la IA necesita apoyo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.5 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button className="h-12 rounded-full bg-foreground px-7 text-background hover:bg-foreground/90" asChild>
              <a href="https://www.e-smart360.com/demo">
                Solicita una demo
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" className="h-12 rounded-full border-border bg-background/70 px-7 shadow-sm" asChild>
              <a href="#integraciones">Ver integraciones</a>
            </Button>
          </motion.div>

          <div className="mt-10 flex flex-wrap gap-4 text-xs text-muted-foreground">
            {["API oficial de Meta", "Garantía de respaldo", "+100K usuarios habilitados"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#25D366]" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.65 }}
          className="relative"
        >
          <WorkflowHeroGraphic />
        </motion.div>
      </section>

      <section className="border-y border-border bg-muted/25 py-14">
        <div className="mx-auto grid max-w-6xl gap-5 px-4 sm:grid-cols-2 md:grid-cols-3 lg:px-8 xl:grid-cols-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.45 }}
              className="rounded-2xl border border-border bg-background/80 p-5 text-center shadow-sm"
            >
              <p className="font-display text-3xl text-foreground">
                {stat.prefix}
                <CountUp
                  end={stat.value}
                  decimals={stat.decimals ?? 0}
                  duration={2}
                  enableScrollSpy
                  scrollSpyOnce
                />
                {stat.suffix}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="integraciones" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-[#0070f3]">Aplicaciones conectadas</p>
          <h2 className="mt-3 font-display text-3xl text-foreground md:text-5xl">
            La capa de automatización encima de tu stack actual
          </h2>
          <p className="mt-4 text-muted-foreground">
            No reemplaces tus herramientas: coordínalas. Canales, pagos, CRM, hojas, email,
            webhooks y campañas trabajando como un solo sistema.
          </p>
        </div>

        <div className="mt-12 space-y-4 rounded-[2rem] border border-border bg-background/60 p-4 shadow-[0_28px_80px_-40px_rgba(15,23,42,0.22)] backdrop-blur">
          <IntegrationMarqueeRow items={integrationsRowOne} />
          <IntegrationMarqueeRow items={integrationsRowTwo} reverse />
          <IntegrationMarqueeRow items={integrationsRowThree} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-[#25D366]">Soluciones especializadas</p>
          <h2 className="mt-3 font-display text-3xl text-foreground md:text-5xl">
            Diseñado para quienes viven de convertir conversaciones
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tarjetas con información extendida al pasar el cursor: cada perfil obtiene un ángulo distinto de crecimiento.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {growthCards.map((card, i) => {
            const active = activeGrowth === card.title;
            return (
              <motion.article
                key={card.title}
                onMouseEnter={() => setActiveGrowth(card.title)}
                onMouseLeave={() => setActiveGrowth(null)}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.45 }}
                whileHover={reduceMotion ? {} : { y: -7 }}
                className={cn(
                  "group relative min-h-[250px] overflow-hidden rounded-2xl border border-border bg-background p-6 shadow-[0_18px_60px_-35px_rgba(15,23,42,0.35)] transition-colors",
                  active && "border-[#0070f3]/30",
                )}
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#0070f3]/0 blur-2xl transition-colors group-hover:bg-[#0070f3]/12" />
                <div className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-[#25D366]/0 blur-2xl transition-colors group-hover:bg-[#25D366]/12" />

                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0070f3]/10 text-[#0070f3]">
                  <card.icon className="h-5 w-5" />
                </div>
                <h3 className="relative mt-8 text-lg font-semibold text-foreground">{card.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">{card.short}</p>
                <motion.div
                  className="relative mt-5 rounded-xl border border-border bg-muted/40 p-4 text-sm leading-relaxed text-muted-foreground"
                  initial={false}
                  animate={active ? { opacity: 1, y: 0 } : { opacity: 0.72, y: 8 }}
                  transition={{ duration: 0.22 }}
                >
                  {card.detail}
                </motion.div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 xl:grid-cols-2 xl:gap-12">
          <div className="relative rounded-[2rem] border border-border bg-background/70 p-5 shadow-[0_30px_90px_-45px_rgba(0,112,243,0.35)] backdrop-blur">
            <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-[#25D366]/14 blur-3xl" />
            <div className="absolute -right-10 bottom-10 h-44 w-44 rounded-full bg-[#0070f3]/14 blur-3xl" />
            <WorkflowHeroGraphic />
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-[#0070f3]">IA agentic para chat</p>
            <h2 className="mt-3 font-display text-3xl text-foreground md:text-5xl">
              No solo conversa: ejecuta flujos completos
            </h2>
            <p className="mt-5 text-muted-foreground">
              Mientras un bot tradicional sigue guiones, E-SMART360 interpreta intención,
              usa memoria con datos propios y dispara acciones verificables para cerrar el ciclo.
            </p>
            <div className="mt-8 space-y-4">
              {featureGrid.map((feature) => (
                <div key={feature.title} className="flex gap-4 rounded-2xl border border-border bg-background p-4 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#25D366]">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{feature.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{feature.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-[#0070f3]/20 bg-gradient-to-br from-[#0070f3]/10 via-background to-[#25D366]/10 p-6 shadow-[0_30px_90px_-48px_rgba(0,112,243,0.4)] md:p-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-mono uppercase tracking-widest text-[#0070f3]">Vivo en menos de 5 minutos</p>
            <h2 className="mt-3 font-display text-3xl text-foreground md:text-5xl">Conecta, entrena y publica</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {workflowSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.45 }}
                className="rounded-2xl border border-border bg-background/80 p-6 shadow-sm"
              >
                <span className="font-display text-4xl text-[#0070f3]">0{i + 1}</span>
                <div className="mt-6 flex h-11 w-11 items-center justify-center rounded-xl bg-muted text-foreground">
                  <step.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-[#25D366]">Preguntas útiles</p>
          <h2 className="mt-3 font-display text-3xl text-foreground md:text-5xl">
            Lo que conviene saber antes de automatizar
          </h2>
        </div>
        <Accordion type="single" collapsible className="mt-10 rounded-2xl border border-border bg-background/80 px-5 shadow-sm">
          {faqItems.map((item, i) => (
            <AccordionItem key={item.q} value={`faq-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-foreground hover:text-[#0070f3] hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-foreground px-6 py-14 text-center text-background shadow-[0_30px_90px_-40px_rgba(15,23,42,0.45)]">
          <h2 className="font-display text-3xl md:text-5xl">Convierte tus canales en una máquina de atención y ventas</h2>
          <p className="mx-auto mt-4 max-w-2xl text-background/70">
            Diseñamos contigo un primer flujo de alto impacto y lo conectamos con tus herramientas actuales.
          </p>
          <Button className="mt-8 rounded-full bg-background px-8 text-foreground hover:bg-background/90" asChild>
            <a href="https://www.e-smart360.com/demo">
              Empezar con E-SMART360
              <Rocket className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
