"use client";

import { useCallback, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  BarChart3,
  Building2,
  CheckCircle2,
  Globe2,
  Headphones,
  Lock,
  Phone,
  Play,
  Shield,
  Sparkles,
  Upload,
  Users,
  Zap,
} from "lucide-react";

const accent = "#0070f3";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const partners = [
  "Retail Pro",
  "Salud+",
  "Finanzas MX",
  "LogiFleet",
  "EduTech",
  "Hospedaje 360",
  "Legal One",
  "AutoRed",
  "AgroLink",
  "CloudServ",
];

const voiceCards = [
  { name: "Juan", region: "México", role: "Ventas B2B", freq: 180 },
  { name: "Elena", region: "España", role: "Soporte", freq: 220 },
  { name: "Camila", region: "Colombia", role: "Cobranza", freq: 200 },
  { name: "Diego", region: "Argentina", role: "Agendamiento", freq: 190 },
  { name: "Valentina", region: "Chile", role: "Recepción", freq: 210 },
  { name: "Mateo", region: "Perú", role: "Outbound", freq: 175 },
];

const testimonials = [
  {
    quote:
      "Cerramos 3 acuerdos en 7 días con los agentes de E-SMART360 llamando por las tardes. La configuración fue rápida y el tono suena natural.",
    author: "María González",
    role: "Directora de Crecimiento, Nexo Digital",
  },
  {
    quote:
      "Pasamos el 80% de las llamadas de primer nivel al agente de voz. Nuestro equipo solo entra cuando hay intención real de compra.",
    author: "Carlos Ruiz",
    role: "COO, Servicios Integrales Norte",
  },
  {
    quote:
      "Integración con hojas y calendario sin fricción. En una tarde teníamos el flujo de citas médicas funcionando por teléfono.",
    author: "Dra. Ana Martín",
    role: "Clínica Vida Plena",
  },
];

const faqItems = [
  {
    q: "¿Qué es el agente de voz IA de E-SMART360?",
    a: "Es un asistente telefónico con inteligencia artificial que atiende y realiza llamadas entrantes y salientes: califica leads, agenda citas, cobra recordatorios y responde FAQs con el conocimiento de tu negocio, sin necesidad de un operador humano 24/7.",
  },
  {
    q: "¿Cuánto tardo en ponerlo en producción?",
    a: "La mayoría de equipos publica un primer flujo en horas: defines el guion, conectas tu base de conocimiento o documentos, eliges voz y pruebas en un número de prueba. Ajustes finos de tono y CRM suelen hacerse en pocos días.",
  },
  {
    q: "¿Soporta llamadas salientes y campañas?",
    a: "Sí. Puedes programar discados, recordatorios y seguimiento a leads con ventanas horarias y zonas horarias. Las listas se pueden cargar desde integraciones o archivos según tu flujo de trabajo.",
  },
  {
    q: "¿Se integra con mi CRM, calendario o ERP?",
    a: "E-SMART360 está pensado para conectarse con las herramientas que ya usas: calendarios, hojas de cálculo, pasarelas y automatizaciones. Los datos de cada llamada pueden reflejarse en tu sistema para que nada se pierda.",
  },
];

function playVoicePreview(freq: number) {
  try {
    const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new Ctx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.45);
  } catch {
    /* noop */
  }
}

function WaveformMock() {
  const reduce = useReducedMotion();
  const heights = useMemo(() => [12, 28, 18, 40, 22, 36, 16, 44, 20, 32, 14, 38], []);
  return (
    <div className="flex h-24 items-end justify-center gap-1.5 px-4" aria-hidden>
      {heights.map((h, i) => (
        <motion.span
          key={i}
          className="w-1.5 rounded-full bg-gradient-to-t from-[#0070f3] to-cyan-300"
          initial={false}
          animate={
            reduce
              ? { height: h }
              : { height: [h * 0.4, h, h * 0.55, h * 0.85, h * 0.5, h] }
          }
          transition={
            reduce
              ? {}
              : { duration: 1.2 + i * 0.07, repeat: Infinity, ease: "easeInOut" }
          }
        />
      ))}
    </div>
  );
}

export function VoiceAgentLanding() {
  const reduceMotion = useReducedMotion();
  const [wizardStep, setWizardStep] = useState(0);
  const [playingId, setPlayingId] = useState<string | null>(null);

  const wizardSteps = useMemo(
    () => [
      {
        title: "Sube tu conocimiento",
        desc: "Documentos, web o FAQ para respuestas alineadas a tu marca.",
        icon: Upload,
      },
      {
        title: "Configura la voz",
        desc: "Elige idioma, ritmo y personalidad del agente.",
        icon: Headphones,
      },
      {
        title: "Conecta canales",
        desc: "Teléfono, CRM, calendario y automatizaciones.",
        icon: Zap,
      },
      {
        title: "Publica y mide",
        desc: "Graba, transcribe y optimiza con analíticas en vivo.",
        icon: BarChart3,
      },
    ],
    [],
  );

  const onPlayVoice = useCallback((id: string, freq: number) => {
    setPlayingId(id);
    playVoicePreview(freq);
    window.setTimeout(() => setPlayingId((p) => (p === id ? null : p)), 500);
  }, []);

  return (
    <div className="relative">
      {/* Fondo rejilla + resplandor */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[#0b0b0b]"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)`,
          backgroundSize: "56px 56px",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none fixed top-[-20%] left-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-[120px]"
        style={{ background: `radial-gradient(circle, ${accent}33 0%, transparent 70%)` }}
        aria-hidden
      />
      <div
        className="pointer-events-none fixed bottom-[10%] right-[-10%] -z-10 h-[380px] w-[380px] rounded-full blur-[100px]"
        style={{ background: `radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)` }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 pt-28 pb-6 sm:px-6 lg:px-8 lg:pt-32">
        {/* Hero */}
        <section id="producto" className="text-center">
          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0}
            className="mb-4 text-xs font-mono uppercase tracking-[0.2em] text-white/50"
          >
            E-SMART360 · Agentes de voz
          </motion.p>
          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={1}
            className="mx-auto max-w-4xl font-display text-4xl font-normal leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Tu agente de voz con IA para ventas, soporte y prospección{" "}
            <span className="bg-gradient-to-r from-[#0070f3] to-cyan-300 bg-clip-text text-transparent">
              24/7
            </span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={2}
            className="mx-auto mt-6 max-w-2xl text-lg text-white/65"
          >
            Lanza campañas de salida, atiende llamadas entrantes, califica leads y agenda reuniones,
            con la misma calidad de mensaje en cada interacción.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={3}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button
              size="lg"
              className="h-12 rounded-full border-0 bg-[#0070f3] px-8 text-white shadow-[0_0_32px_-8px_#0070f3] hover:bg-[#0060d0]"
              asChild
            >
              <a href="https://www.e-smart360.com/demo">Agendar una demo</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-white/20 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10"
              asChild
            >
              <a href="https://app.e-smart360.com/login">Probar gratis</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="relative mx-auto mt-16 max-w-4xl"
          >
            <div
              className="rounded-2xl border border-[#0070f3]/40 bg-zinc-950/80 p-6 shadow-[0_0_60px_-12px_rgba(0,112,243,0.45)] backdrop-blur-md"
              style={{ boxShadow: `0 0 0 1px rgba(0,112,243,0.2), 0 0 80px -20px ${accent}` }}
            >
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </span>
                  Llamada en curso · Agente E-SMART360
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
                  Transcripción en vivo
                </span>
              </div>
              <WaveformMock />
              <p className="mt-4 text-center text-xs text-white/45">
                Vista ilustrativa del panel · Compatible con despliegue en Vercel y tu stack actual
              </p>
            </div>
          </motion.div>
        </section>

        {/* Confianza */}
        <section className="mt-24 overflow-hidden border-y border-white/10 py-10" aria-label="Empresas que confían">
          <p className="mb-6 text-center text-xs font-mono uppercase tracking-widest text-white/40">
            Operaciones que ya automatizan con E-SMART360
          </p>
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0b0b0b] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0b0b0b] to-transparent" />
            <motion.div
              className="flex w-max gap-10"
              animate={reduceMotion ? {} : { x: ["0%", "-50%"] }}
              transition={reduceMotion ? {} : { duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {[...partners, ...partners].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm text-white/35"
                >
                  <Building2 className="h-4 w-4 opacity-50" />
                  {name}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Valor */}
        <section id="soluciones" className="mt-24">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={0}
            className="mx-auto max-w-3xl text-center font-display text-3xl text-white md:text-4xl"
          >
            ¿Qué pasaría si tu mejor vendedor fuera una IA que nunca duerme?
          </motion.h2>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Phone,
                title: "Agentes de voz en tiempo real",
                body: "Latencia baja y turn-taking natural para conversaciones fluidas por teléfono.",
              },
              {
                icon: Sparkles,
                title: "Interacciones cercanas al humano",
                body: "Entonación, pausas y reformulaciones acordes a tu guion y políticas.",
              },
              {
                icon: Globe2,
                title: "Soporte multi-idioma",
                body: "Atiende en varios idiomas y acentos según tu audiencia y mercado.",
              },
            ].map((c, i) => (
              <motion.div
                key={c.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                whileHover={reduceMotion ? {} : { y: -4 }}
                className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 shadow-lg backdrop-blur-sm transition-shadow hover:border-[#0070f3]/35 hover:shadow-[0_0_40px_-16px_rgba(0,112,243,0.35)]"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#0070f3]/15 text-[#0070f3]">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{c.body}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Wizard */}
        <section className="mt-28" aria-label="Cómo empezar">
          <div className="text-center">
            <p className="text-xs font-mono uppercase tracking-widest text-[#0070f3]">Cómo funciona</p>
            <h2 className="mt-3 font-display text-3xl text-white md:text-4xl">De cero a llamadas en cuatro pasos</h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {wizardSteps.map((s, i) => {
              const active = wizardStep === i;
              return (
                <button
                  key={s.title}
                  type="button"
                  onClick={() => setWizardStep(i)}
                  className={`rounded-2xl border p-5 text-left transition-all ${
                    active
                      ? "border-[#0070f3]/60 bg-[#0070f3]/10 shadow-[0_0_32px_-12px_rgba(0,112,243,0.5)]"
                      : "border-white/10 bg-zinc-900/40 hover:border-white/20"
                  }`}
                >
                  <div className="mb-3 flex items-center gap-2">
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-mono ${
                        active ? "bg-[#0070f3] text-white" : "bg-white/10 text-white/70"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <s.icon className="h-5 w-5 text-[#0070f3]" />
                  </div>
                  <h3 className="font-medium text-white">{s.title}</h3>
                  <p className="mt-2 text-sm text-white/55">{s.desc}</p>
                </button>
              );
            })}
          </div>
          <div className="mt-6 flex justify-center gap-2">
            {wizardSteps.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Paso ${i + 1}`}
                onClick={() => setWizardStep(i)}
                className={`h-2 rounded-full transition-all ${
                  wizardStep === i ? "w-8 bg-[#0070f3]" : "w-2 bg-white/20 hover:bg-white/35"
                }`}
              />
            ))}
          </div>
        </section>

        {/* Split features */}
        <section className="mt-28 space-y-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="order-2 lg:order-1"
            >
              <div className="flex flex-wrap gap-2">
                {["Ventas", "Soporte", "Cobranza"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="mt-4 font-display text-3xl text-white">Campañas salientes que suenan personales</h2>
              <p className="mt-4 text-white/60">
                Programa discados, respeta husos horarios y personaliza el guion con datos del CRM. El agente deja
                notas estructuradas y próximos pasos automáticos.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-white/70">
                {["Listas y segmentación", "Reintentos inteligentes", "Handoff a humano cuando haga falta"].map(
                  (t) => (
                    <li key={t} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#0070f3]" />
                      {t}
                    </li>
                  ),
                )}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-1 lg:order-2"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-800 to-zinc-950 shadow-2xl">
                <div className="flex h-full flex-col justify-end p-8">
                  <Users className="mb-4 h-12 w-12 text-[#0070f3]" />
                  <p className="text-sm text-white/50">Outbound + calificación automática</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-10 shadow-2xl"
            >
              <Headphones className="h-12 w-12 text-cyan-400" />
              <p className="mt-6 text-sm text-white/50">Entrantes 24/7 · CRM sincronizado</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <div className="flex flex-wrap gap-2">
                {["CRM", "API", "Automatización"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="mt-4 font-display text-3xl text-white">Cada llamada alimenta tu embudo</h2>
              <p className="mt-4 text-white/60">
                Transcripciones, resúmenes y extracción de datos listos para disparar workflows. Tus equipos revisan
                excepciones, no el trabajo repetitivo.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Métricas */}
        <section className="mt-28 rounded-3xl border border-white/10 bg-zinc-900/40 px-6 py-14 backdrop-blur-md">
          <div className="grid gap-10 text-center md:grid-cols-3">
            {[
              { label: "Llamadas procesadas", value: "2.3K+", suffix: "" },
              { label: "Ingresos atribuibles", value: "$300K+", suffix: "" },
              { label: "Minutos de voz", value: "1.2M+", suffix: "" },
            ].map((m, i) => (
              <motion.div
                key={m.label}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <p className="font-display text-4xl text-[#0070f3] md:text-5xl">{m.value}</p>
                <p className="mt-2 text-sm text-white/55">{m.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Voces */}
        <section className="mt-28">
          <h2 className="text-center font-display text-3xl text-white md:text-4xl">
            Impulsa tu negocio en cualquier idioma
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-white/55">
            Biblioteca de voces con matices regionales. La vista previa es un tono de demostración en el navegador.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {voiceCards.map((v, i) => {
              const id = `${v.name}-${v.region}`;
              const isPlaying = playingId === id;
              return (
                <motion.div
                  key={id}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-zinc-900/50 p-4"
                >
                  <div>
                    <p className="font-medium text-white">
                      {v.name} · {v.region}
                    </p>
                    <p className="text-xs text-white/45">{v.role}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onPlayVoice(id, v.freq)}
                    className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors ${
                      isPlaying
                        ? "border-[#0070f3] bg-[#0070f3] text-white"
                        : "border-white/20 text-white/70 hover:border-[#0070f3]/50 hover:text-white"
                    }`}
                    aria-label={`Reproducir muestra de ${v.name}`}
                  >
                    <Play className="h-4 w-4" fill="currentColor" />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Testimonios */}
        <section className="mt-28">
          <h2 className="mx-auto max-w-3xl text-center font-display text-3xl text-white md:text-4xl">
            Resultados reales con agentes de voz E-SMART360
          </h2>
          <div className="relative mx-auto mt-12 max-w-3xl px-4 md:px-16">
            <Carousel opts={{ loop: true }} className="w-full">
              <CarouselContent>
                {testimonials.map((t, i) => (
                  <CarouselItem key={i}>
                    <div
                      className="mx-1 rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900/90 to-black/90 p-8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] md:p-10"
                      style={{ boxShadow: `inset 0 1px 0 0 rgba(255,255,255,0.06), 0 0 60px -20px ${accent}33` }}
                    >
                      <div className="mb-4 flex gap-1 text-amber-400">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <span key={j} aria-hidden>
                            ★
                          </span>
                        ))}
                      </div>
                      <p className="text-lg leading-relaxed text-white/85">&ldquo;{t.quote}&rdquo;</p>
                      <p className="mt-6 text-sm font-medium text-white">{t.author}</p>
                      <p className="text-xs text-white/45">{t.role}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-2 border-white/20 bg-zinc-900 text-white hover:bg-zinc-800 md:-left-4" />
              <CarouselNext className="-right-2 border-white/20 bg-zinc-900 text-white hover:bg-zinc-800 md:-right-4" />
            </Carousel>
          </div>
        </section>

        {/* Cumplimiento */}
        <section className="mt-28">
          <h2 className="text-center font-display text-3xl text-white">Cumplimiento en el que puedes confiar</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-white/50">
            E-SMART360 prioriza la integridad de datos y buenas prácticas para equipos que operan con información sensible.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Shield, t: "Seguridad de datos", d: "Controles de acceso y buenas prácticas de arquitectura." },
              { icon: Lock, t: "Cifrado", d: "Protección en tránsito y en reposo según estándares modernos." },
              { icon: CheckCircle2, t: "Privacidad", d: "Alineación con marcos como GDPR / HIPAA según tu despliegue y contrato." },
              { icon: Users, t: "SSO y roles", d: "Acceso seguro para equipos y agencias." },
              { icon: BarChart3, t: "Auditoría", d: "Visibilidad de actividad para gobierno interno." },
              { icon: Building2, t: "Residencia de datos", d: "Opciones de despliegue acordes a tu región." },
            ].map((item, i) => (
              <motion.div
                key={item.t}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="rounded-2xl border border-white/10 bg-zinc-900/30 p-5"
              >
                <item.icon className="h-8 w-8 text-[#0070f3]" />
                <h3 className="mt-3 font-medium text-white">{item.t}</h3>
                <p className="mt-1 text-sm text-white/50">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section id="precios" className="mt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-[#0070f3]/30 bg-gradient-to-br from-[#0070f3]/25 via-zinc-900 to-black px-6 py-14 text-center md:px-16"
          >
            <h2 className="font-display text-3xl text-white md:text-4xl">7 días. Te desafiamos a ponernos a prueba.</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/65">
              Prueba con tus leads reales. Cancela cuando quieras; nuestro objetivo es que veas conversiones antes.
            </p>
            <Button
              size="lg"
              className="mt-8 h-12 rounded-full bg-white px-10 text-zinc-950 hover:bg-white/90"
              asChild
            >
              <a href="https://www.e-smart360.com/demo">Comenzar ahora</a>
            </Button>
          </motion.div>
        </section>

        {/* FAQ */}
        <section id="recursos" className="mt-28 pb-8">
          <h2 className="text-center font-display text-3xl text-white">Preguntas frecuentes</h2>
          <Accordion type="single" collapsible className="mx-auto mt-10 w-full max-w-3xl">
            {faqItems.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-white/10">
                <AccordionTrigger className="text-left text-white hover:no-underline hover:text-[#0070f3]">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-white/60">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </div>
    </div>
  );
}
