"use client";

import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import CountUp from "react-countup";
import { motion, useReducedMotion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/components/i18n/i18n-provider";
import { cn } from "@/lib/utils";
import { PUBLIC_PLANS, toLocaleText } from "@/lib/pricing-data";
import { formatCurrency } from "@/lib/format-currency";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Building2,
  CheckCircle2,
  CreditCard,
  ExternalLink,
  Fingerprint,
  Layers3,
  Link2,
  Mail,
  MousePointerClick,
  QrCode,
  ScanLine,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
  WalletCards,
  Zap,
} from "lucide-react";

const asset = (path: string) => `/brand-assets/nfc/${path}`;

const stats = [
  { value: 10, suffix: "K+", label: "profesionales listos para compartir" },
  { value: 90, suffix: "%", label: "adopción estimada en primeros 30 días" },
  { value: 4, suffix: "x", label: "más seguimiento frente a tarjetas físicas" },
  { value: 0, suffix: " apps", label: "para recibir tus datos" },
];

const steps = [
  {
    number: "01",
    title: "Crea tu tarjeta digital",
    body: "Configura tu perfil o el de todo tu equipo. Datos, redes, calendario, archivos y CTA en una sola página.",
    icon: CreditCard,
  },
  {
    number: "02",
    title: "Compártela en cualquier canal",
    body: "NFC, QR, enlaces, email signatures y wallet digital. Cada presentación se convierte en una oportunidad medible.",
    icon: ScanLine,
  },
  {
    number: "03",
    title: "Captura leads automáticamente",
    body: "Quien visite tu perfil puede guardar tus datos y dejar los suyos con un gesto. Sin tarjetas perdidas ni captura manual.",
    icon: MousePointerClick,
  },
  {
    number: "04",
    title: "Sincroniza y da seguimiento",
    body: "Envía contactos al CRM, segmenta por fuente y activa automatizaciones con contexto de la interacción.",
    icon: BarChart3,
  },
];

const audienceCards = [
  {
    title: "Profesionales",
    body: "Una tarjeta elegante que se actualiza siempre y hace fácil que te contacten después de una reunión.",
    icon: Users,
    hover: "Ideal para consultores, fundadores, ventas, agentes y perfiles que viven del networking.",
  },
  {
    title: "Equipos",
    body: "Consistencia de marca, control centralizado y métricas para cada colaborador.",
    icon: Building2,
    hover: "Administra usuarios, plantillas, enlaces, activos comerciales y actividad desde un solo panel.",
  },
  {
    title: "Agencias y white label",
    body: "Ofrece tarjetas digitales y captura de leads bajo tu propia operación comercial.",
    icon: Layers3,
    hover: "Dominio, marca, clientes y paquetes de servicio para convertirlo en una línea recurrente.",
  },
];

const shareChannels = [
  { title: "Tarjeta NFC", body: "Un toque abre tu perfil en cualquier smartphone moderno.", icon: Fingerprint },
  { title: "Apple / Google Wallet", body: "Acceso inmediato desde el teléfono, sin buscar links.", icon: WalletCards },
  { title: "Firmas de email", body: "Cada correo puede capturar visitas, clics y contactos.", icon: Mail },
  { title: "QR y enlace inteligente", body: "Comparte por redes, mensajes, eventos, folletos y stands.", icon: QrCode },
];

const reasons = [
  {
    title: "Genera más leads y sincroniza al CRM",
    result: "Sin contactos perdidos ni captura manual después del evento.",
  },
  {
    title: "Centraliza activos de marketing y ventas",
    result: "Cada perfil comparte links, casos, calendarios y materiales siempre actualizados.",
  },
  {
    title: "Admin dashboard para equipos",
    result: "Altas, bajas, grupos, analíticas y gobierno sin perseguir archivos sueltos.",
  },
  {
    title: "White label para empresas y partners",
    result: "Tu marca, tu dominio y una solución lista para escalar con clientes o sucursales.",
  },
];

const faqItems = [
  {
    q: "¿La persona que recibe mi tarjeta necesita instalar una app?",
    a: "No. La tarjeta digital abre en navegador desde NFC, QR o enlace. La experiencia está pensada para ser inmediata y sin fricción.",
  },
  {
    q: "¿Puedo actualizar mis datos después de compartir la tarjeta?",
    a: "Sí. Actualizas tu perfil una vez y todos los enlaces, QR y tarjetas NFC apuntan a la versión vigente.",
  },
  {
    q: "¿Sirve para equipos comerciales?",
    a: "Sí. Puedes mantener perfiles consistentes, controlar materiales de marca y revisar actividad por usuario o grupo.",
  },
  {
    q: "¿Se puede ofrecer como white label?",
    a: "Sí. Es una solución ideal para agencias y partners que quieren ofrecer tarjetas digitales, captura de leads y seguimiento bajo su propia propuesta.",
  },
];

function NfcHeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-border/70 bg-background/70 p-5 shadow-[0_30px_90px_-42px_rgba(15,23,42,0.35)] backdrop-blur-xl">
      <div className="absolute -left-16 top-10 h-52 w-52 rounded-full bg-[#0070f3]/12 blur-3xl" />
      <div className="absolute -right-12 bottom-8 h-60 w-60 rounded-full bg-[#25D366]/16 blur-3xl" />

      <motion.div
        className="absolute left-5 top-7 h-44 w-[285px] rounded-3xl border border-foreground/10 bg-foreground p-5 text-background shadow-[0_26px_70px_-30px_rgba(15,23,42,0.55)]"
        animate={reduceMotion ? {} : { y: [0, -10, 0], rotate: [-7, -5, -7] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
        style={{ rotate: -7 }}
      >
        <div className="flex items-center justify-between">
          <span className="font-display text-lg">E-SMART360</span>
          <Fingerprint className="h-6 w-6 text-[#25D366]" />
        </div>
        <div className="mt-10">
          <p className="text-xs text-background/50">NFC Digital Card</p>
          <p className="mt-1 text-xl font-medium">Tap. Connect. Convert.</p>
        </div>
        <div className="absolute bottom-5 right-5 h-8 w-12 rounded-full border border-background/20" />
      </motion.div>

      <motion.div
        className="absolute right-8 top-14 w-[230px] rounded-[2.2rem] border border-foreground/10 bg-background p-3 shadow-[0_26px_80px_-34px_rgba(15,23,42,0.45)]"
        animate={reduceMotion ? {} : { y: [0, 12, 0], rotate: [4, 2, 4] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.25 }}
        style={{ rotate: 4 }}
      >
        <div className="rounded-[1.7rem] border border-border bg-muted/35 p-4">
          <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full border-4 border-background shadow-md">
            <Image
              src={asset("set-a/Group 1597882206@2x.png")}
              alt="Perfil digital E-SMART360"
              fill
              className="object-cover"
              sizes="80px"
              unoptimized
            />
          </div>
          <div className="mt-4 text-center">
            <p className="font-semibold text-foreground">Laura Méndez</p>
            <p className="text-xs text-muted-foreground">Directora Comercial</p>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {["Web", "CRM", "Demo"].map((item) => (
              <div key={item} className="rounded-xl bg-background px-2 py-2 text-center text-[10px] text-muted-foreground">
                {item}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 w-[265px] -translate-x-1/2 rounded-3xl border border-border bg-background/95 p-5 shadow-[0_24px_70px_-35px_rgba(0,112,243,0.5)]"
        animate={reduceMotion ? {} : { y: [0, -8, 0], scale: [1, 1.015, 1] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.45 }}
      >
        <div className="flex items-center gap-3">
          <div className="rounded-2xl border border-border bg-muted p-2">
            <QRCodeSVG value="https://www.e-smart360.com/demo" size={74} level="M" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Escanea y guarda</p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">Perfil, calendario, redes y lead form.</p>
          </div>
        </div>
      </motion.div>

      <div className="absolute left-8 top-1/2 hidden -translate-y-1/2 sm:block">
        <motion.div
          className="flex h-14 w-14 items-center justify-center rounded-full border border-[#25D366]/30 bg-[#25D366]/10 text-[#25D366]"
          animate={reduceMotion ? {} : { scale: [1, 1.18, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Zap className="h-6 w-6" />
        </motion.div>
      </div>
    </div>
  );
}

function AssetShowcase() {
  const items = [
    { src: asset("set-b/Scene.png"), alt: "Escena de diseño white label" },
    { src: asset("set-b/ASSET..png"), alt: "Asset visual de tarjeta digital" },
    { src: asset("set-a/Dashboard.png"), alt: "Dashboard de tarjetas digitales" },
    { src: asset("set-a/390w light.png"), alt: "Vista móvil de perfil digital" },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-4">
      {items.map((item, i) => (
        <motion.div
          key={item.src}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, duration: 0.45 }}
          whileHover={{ y: -6, scale: 1.015 }}
          className={cn(
            "relative overflow-hidden rounded-2xl border border-border bg-background shadow-[0_20px_60px_-36px_rgba(15,23,42,0.35)]",
            i === 0 ? "md:col-span-2" : "",
          )}
        >
          <div className="relative aspect-[4/3]">
            <Image src={item.src} alt={item.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 25vw" unoptimized />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function NfcDigitalCardsLanding() {
  const reduceMotion = useReducedMotion();
  const { locale } = useI18n();
  const digitalCardPlans = PUBLIC_PLANS.filter((plan) => plan.lineId === "digital-card").slice(0, 3);

  return (
    <div className="relative z-10">
      <div
        className="page-grid-bg pointer-events-none fixed inset-0 -z-10 opacity-[0.45]"
        aria-hidden
      />

      <section className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pt-28 pb-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:pt-36">
        <div className="absolute left-8 top-32 h-56 w-56 rounded-full bg-[#0070f3]/10 blur-3xl" />
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-[#25D366]/12 blur-3xl" />

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-7 inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground"
          >
            <span className="h-px w-8 bg-foreground/30" />
            Tarjetas digitales NFC
            <span className="h-1.5 w-1.5 rounded-full bg-[#25D366] shadow-[0_0_14px_rgba(37,211,102,0.6)]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.6 }}
            className="font-display text-[clamp(2.6rem,7vw,5.8rem)] leading-[0.9] tracking-tight text-foreground 2xl:text-[clamp(3rem,7vw,7rem)]"
          >
            La forma más inteligente de capturar leads.
            <span className="mt-4 block text-[clamp(1.55rem,4vw,3.7rem)] font-light leading-[1] text-muted-foreground">
              Tarjetas NFC, QR y perfiles digitales para equipos modernos.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.55 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            E-SMART360 reemplaza tarjetas impresas por perfiles vivos que se comparten con un toque,
            capturan contactos automáticamente y convierten cada introducción en seguimiento medible.
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
              <a href="#como-funciona">Cómo funciona</a>
            </Button>
          </motion.div>

          <div className="mt-10 flex flex-wrap gap-4 text-xs text-muted-foreground">
            {["Sin app para recibir", "Perfil siempre actualizado", "CRM y analytics"].map((item) => (
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
          transition={{ delay: 0.16, duration: 0.65 }}
          className="relative"
        >
          <NfcHeroVisual />
        </motion.div>
      </section>

      <section className="border-y border-border bg-muted/25 py-14">
        <div className="mx-auto grid max-w-6xl gap-5 px-4 sm:grid-cols-2 md:grid-cols-4 lg:px-8">
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
                <CountUp end={stat.value} duration={2} enableScrollSpy scrollSpyOnce />
                {stat.suffix}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="como-funciona" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-[#0070f3]">Cómo funciona</p>
          <h2 className="mt-3 font-display text-3xl text-foreground md:text-5xl">
            Crea, comparte y captura leads en cuatro pasos
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, i) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
              whileHover={reduceMotion ? {} : { y: -7 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-background p-6 shadow-[0_18px_60px_-36px_rgba(15,23,42,0.35)]"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#0070f3]/0 blur-2xl transition-colors group-hover:bg-[#0070f3]/12" />
              <span className="font-display text-4xl text-[#0070f3]">{step.number}</span>
              <div className="mt-6 flex h-11 w-11 items-center justify-center rounded-xl bg-muted text-foreground">
                <step.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-semibold text-foreground">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-[#25D366]">Assets de marca incluidos</p>
            <h2 className="mt-3 font-display text-3xl text-foreground md:text-5xl">
              Perfiles y dashboards listos para una experiencia white label
            </h2>
            <p className="mt-5 text-muted-foreground">
              Usé los assets que compartiste como base visual para mockups de perfil, dashboards y escenas comerciales.
              La landing conserva el estilo E-SMART360 con fondos claros, blur y sombras suaves.
            </p>
          </div>
          <AssetShowcase />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-[#0070f3]">Para personas, equipos y partners</p>
          <h2 className="mt-3 font-display text-3xl text-foreground md:text-5xl">
            Una tarjeta digital para cada forma de vender
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {audienceCards.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
              whileHover={reduceMotion ? {} : { y: -8, rotateX: 2 }}
              className="group relative min-h-[290px] overflow-hidden rounded-2xl border border-border bg-background p-6 shadow-[0_18px_60px_-36px_rgba(15,23,42,0.35)]"
            >
              <div className="absolute -bottom-14 -right-14 h-40 w-40 rounded-full bg-[#25D366]/0 blur-3xl transition-colors group-hover:bg-[#25D366]/12" />
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0070f3]/10 text-[#0070f3]">
                <card.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-8 text-xl font-semibold text-foreground">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
              <div className="mt-6 rounded-xl border border-border bg-muted/45 p-4 text-sm leading-relaxed text-muted-foreground opacity-80 transition-opacity group-hover:opacity-100">
                {card.hover}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-[#0070f3]/20 bg-gradient-to-br from-[#0070f3]/10 via-background to-[#25D366]/10 p-6 shadow-[0_30px_90px_-48px_rgba(0,112,243,0.38)] md:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-[#0070f3]">Comparte en todos lados</p>
              <h2 className="mt-3 font-display text-3xl text-foreground md:text-5xl">
                Una sola identidad, múltiples puntos de contacto
              </h2>
              <p className="mt-5 text-muted-foreground">
                La tarjeta funciona como punto central para eventos, ventas, firmas, redes sociales y campañas.
                Sin apps ni fricción para la persona que recibe tus datos.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {shareChannels.map((channel) => (
                <div key={channel.title} className="rounded-2xl border border-border bg-background/80 p-5 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#25D366]">
                    <channel.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-semibold text-foreground">{channel.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{channel.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-mono uppercase tracking-widest text-[#25D366]">Por qué cambiar</p>
            <h2 className="mt-3 font-display text-3xl text-foreground md:text-5xl">
              Networking medible, actualizado y listo para equipos
            </h2>
            <p className="mt-5 text-muted-foreground">
              La tarjeta física termina en una cartera. Una tarjeta digital inicia una relación con datos, contexto y seguimiento.
            </p>
          </div>
          <div className="space-y-4">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.45 }}
                className="rounded-2xl border border-border bg-background p-5 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#0070f3]/10 text-[#0070f3]">
                    <BadgeCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{reason.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      <span className="font-medium text-foreground">Resultado:</span> {reason.result}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-[#0070f3]">Preguntas útiles</p>
          <h2 className="mt-3 font-display text-3xl text-foreground md:text-5xl">
            Lo esencial antes de lanzar tarjetas digitales
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

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-[var(--accent-meta,#0668E1)]">
            Digital Card pricing
          </p>
          <h2 className="mt-3 font-display text-3xl text-foreground md:text-5xl">
            Estructura de planes Digital Card
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Bloque inspirado en el pricing maestro para mantener coherencia de oferta y diseño.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {digitalCardPlans.map((plan, i) => (
            <motion.article
              key={plan.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className={cn(
                "rounded-3xl border bg-background/90 p-6 shadow-[var(--shadow-card-sm)]",
                plan.highlight && "border-[var(--accent-meta,#0668E1)]/35 ring-1 ring-[var(--accent-meta,#0668E1)]/20",
              )}
            >
              <h3 className="font-display text-xl text-foreground">{toLocaleText(locale, plan.name)}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{toLocaleText(locale, plan.tagline)}</p>
              <p className="mt-6 font-display text-4xl text-foreground">
                {plan.monthlyPriceMxn === 0
                  ? "Trial"
                  : formatCurrency(plan.annualPriceMxn ?? plan.monthlyPriceMxn, locale, "MXN")}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {plan.monthlyPriceMxn === 0 ? "15 días" : "facturación anual sugerida"}
              </p>
              <ul className="mt-5 space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="text-sm text-muted-foreground">
                    · {feature}
                  </li>
                ))}
              </ul>
              <Button className="mt-6 w-full rounded-full" variant={plan.highlight ? "default" : "outline"} asChild>
                <a href="/precios">Ver pricing completo</a>
              </Button>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-foreground px-6 py-14 text-center text-background shadow-[0_30px_90px_-40px_rgba(15,23,42,0.45)]">
          <h2 className="font-display text-3xl md:text-5xl">Tu próxima oportunidad puede empezar con un toque</h2>
          <p className="mx-auto mt-4 max-w-2xl text-background/70">
            Diseñamos el perfil, la tarjeta NFC y el flujo de captura para tu equipo o propuesta white label.
          </p>
          <Button className="mt-8 rounded-full bg-background px-8 text-foreground hover:bg-background/90" asChild>
            <a href="https://www.e-smart360.com/demo">
              Empezar con E-SMART360
              <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
