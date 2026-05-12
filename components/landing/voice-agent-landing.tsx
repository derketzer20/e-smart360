"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import CountUp from "react-countup";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
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
import { cn } from "@/lib/utils";
import { VoiceSpectrumBars, VoiceSpectrumHeroDecor } from "@/components/landing/voice-spectrum";
import {
  BarChart3,
  Building2,
  CheckCircle2,
  Globe2,
  Headphones,
  Lock,
  Pause,
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

/** Avatares (pravatar.cc); banderas (flagcdn). Audio: muestra TTS del navegador por idioma (frase de atención al cliente). */
type AgentMarquee = {
  role: string;
  name: string;
  lang: string;
  flagCode: string;
  avatar: string;
  /** BCP-47 para speechSynthesis */
  speechLang: string;
  /** Frase corta de atención al cliente en el idioma indicado */
  phrase: string;
};

const agentsRowTop: AgentMarquee[] = [
  {
    role: "Asistente de citas — salón",
    name: "Clara",
    lang: "Portugués",
    flagCode: "br",
    avatar: "https://i.pravatar.cc/120?img=32",
    speechLang: "pt-BR",
    phrase:
      "Olá, obrigado por ligar para a E-SMART360. Sou do atendimento ao cliente. Como posso ajudar você hoje?",
  },
  {
    role: "Ventas tarjeta de crédito",
    name: "Marcus",
    lang: "Inglés",
    flagCode: "us",
    avatar: "https://i.pravatar.cc/120?img=12",
    speechLang: "en-US",
    phrase:
      "Thank you for calling E-SMART360 customer care. My name is Marcus. How may I help you today?",
  },
  {
    role: "Agendamiento dental",
    name: "Elena",
    lang: "Español",
    flagCode: "es",
    avatar: "https://i.pravatar.cc/120?img=45",
    speechLang: "es-ES",
    phrase:
      "Gracias por llamar a E-SMART360. Le atiende atención al cliente. ¿En qué puedo ayudarle con su cita?",
  },
  {
    role: "Reclutamiento IA",
    name: "Lina",
    lang: "Francés",
    flagCode: "fr",
    avatar: "https://i.pravatar.cc/120?img=24",
    speechLang: "fr-FR",
    phrase:
      "Bonjour, merci d'avoir contacté le service client d'E-SMART360. Comment puis-je vous aider aujourd'hui ?",
  },
  {
    role: "Reservas restaurante",
    name: "Zyan",
    lang: "Turco",
    flagCode: "tr",
    avatar: "https://i.pravatar.cc/120?img=52",
    speechLang: "tr-TR",
    phrase:
      "E-SMART360 müşteri hizmetlerini aradığınız için teşekkür ederim. Size nasıl yardımcı olabilirim?",
  },
  {
    role: "Soporte fisioterapia",
    name: "Alex",
    lang: "Inglés",
    flagCode: "gb",
    avatar: "https://i.pravatar.cc/120?img=8",
    speechLang: "en-GB",
    phrase:
      "Thank you for calling E-SMART360 support. I'll be happy to assist you. What can I do for you today?",
  },
];

const agentsRowBottom: AgentMarquee[] = [
  {
    role: "Cobranza amable",
    name: "Diego",
    lang: "Español",
    flagCode: "mx",
    avatar: "https://i.pravatar.cc/120?img=15",
    speechLang: "es-MX",
    phrase:
      "Gracias por comunicarse con E-SMART360. Soy del área de atención a clientes. ¿En qué puedo ayudarle hoy?",
  },
  {
    role: "Recepción hotelera",
    name: "Sofía",
    lang: "Español",
    flagCode: "ar",
    avatar: "https://i.pravatar.cc/120?img=38",
    speechLang: "es-AR",
    phrase:
      "Hola, gracias por llamar a E-SMART360. Le saluda recepción y atención al cliente. ¿En qué puedo ayudarla?",
  },
  {
    role: "Outbound B2B",
    name: "Juan",
    lang: "Español",
    flagCode: "co",
    avatar: "https://i.pravatar.cc/120?img=33",
    speechLang: "es-CO",
    phrase:
      "Buenos días, gracias por contactar a E-SMART360. ¿Cómo puedo ayudarle con su consulta comercial?",
  },
  {
    role: "Soporte e-commerce",
    name: "Mina",
    lang: "Inglés",
    flagCode: "ca",
    avatar: "https://i.pravatar.cc/120?img=47",
    speechLang: "en-CA",
    phrase:
      "Thank you for reaching E-SMART360 customer support. How can I help you with your order today?",
  },
  {
    role: "Agendamiento médico",
    name: "Ana",
    lang: "Español",
    flagCode: "cl",
    avatar: "https://i.pravatar.cc/120?img=20",
    speechLang: "es-CL",
    phrase:
      "Gracias por llamar a E-SMART360. Atención al paciente, ¿en qué puedo orientarle con su hora médica?",
  },
  {
    role: "Ventas inmobiliarias",
    name: "Tomás",
    lang: "Español",
    flagCode: "pe",
    avatar: "https://i.pravatar.cc/120?img=11",
    speechLang: "es-PE",
    phrase:
      "Bienvenido a E-SMART360. Gracias por su llamada al servicio de atención al cliente. ¿En qué puedo servirle?",
  },
];

const highlightPanels = [
  {
    id: "close",
    title: "Cierra más ventas con agentes de voz IA",
    bullets: [
      "Vuelve a llamar a nuevos leads en minutos y mejora el cierre sin sumar horas a tu equipo.",
      "Entrena al agente con el conocimiento de tu negocio para respuestas precisas y alineadas a tu marca.",
    ],
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=960&h=720&fit=crop&q=80",
    alt: "Equipo analizando resultados de ventas",
  },
  {
    id: "your-way",
    title: "Tu agente de voz, a tu manera",
    bullets: [
      "Plantillas por industria o entrenamiento con web, PDFs y bases de conocimiento.",
      "Control total del habla: ritmo, longitud de respuesta y estilo conversacional.",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=960&h=720&fit=crop&q=80",
    alt: "Panel de analíticas y métricas",
  },
  {
    id: "outbound",
    title: "Optimiza campañas de llamadas salientes",
    bullets: [
      "Recursos dedicados para alta disponibilidad, velocidad y aislamiento de datos.",
      "Programación por zona horaria y reglas de reintento sin saturar al contacto.",
    ],
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=960&h=720&fit=crop&q=80",
    alt: "Profesionales en llamada",
  },
  {
    id: "history",
    title: "Accede a todo el historial de llamadas",
    bullets: [
      "Transcripciones y grabaciones para control de calidad y mejora del guion.",
      "Análisis de sentimiento y extracción de datos hacia tu CRM automáticamente.",
    ],
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=960&h=720&fit=crop&q=80",
    alt: "Colaboración en oficina moderna",
  },
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

function prefetchSpeechVoices(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  const synth = window.speechSynthesis;
  if (synth.getVoices().length > 0) return Promise.resolve();
  return new Promise((resolve) => {
    const done = () => resolve();
    synth.addEventListener("voiceschanged", done, { once: true });
    window.setTimeout(done, 400);
  });
}

function pickVoiceForLang(lang: string): SpeechSynthesisVoice | null {
  if (typeof window === "undefined") return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null;
  const primary = lang.toLowerCase();
  const [base] = primary.split("-");
  return (
    voices.find((v) => v.lang.replace("_", "-").toLowerCase() === primary) ??
    voices.find((v) => v.lang.toLowerCase().startsWith(`${base}-`)) ??
    voices.find((v) => v.lang.toLowerCase().startsWith(base)) ??
    null
  );
}

function agentCardId(agent: AgentMarquee) {
  return `${agent.name}-${agent.role}`;
}

function AgentCard({
  agent,
  activeVoiceId,
  voicePaused,
  voiceSynthStarted,
  onVoicePress,
}: {
  agent: AgentMarquee;
  activeVoiceId: string | null;
  voicePaused: boolean;
  /** true cuando el utterance ya disparó onstart (audio en curso o listo para pausar) */
  voiceSynthStarted: boolean;
  onVoicePress: (agent: AgentMarquee) => void;
}) {
  const id = agentCardId(agent);
  const isThisCard = activeVoiceId === id;
  const showPauseIcon = isThisCard && !voicePaused && voiceSynthStarted;
  return (
    <div
      className={cn(
        "grid min-w-[300px] shrink-0 grid-cols-[1fr_auto] grid-rows-[auto_auto] gap-x-3 gap-y-1 rounded-2xl border border-border/80 bg-background p-4",
        "shadow-[0_8px_30px_-12px_rgba(15,23,42,0.12),0_0_0_1px_rgba(0,112,243,0.06)]",
      )}
    >
      <p className="self-start text-sm font-medium leading-snug text-foreground">{agent.role}</p>
      <div className="flex flex-col items-center gap-0.5">
        <div className="relative h-11 w-11 overflow-hidden rounded-full ring-2 ring-[#0070f3]/20">
          <Image
            src={agent.avatar}
            alt={`Retrato de ${agent.name}`}
            width={44}
            height={44}
            className="object-cover"
            unoptimized
          />
        </div>
        <span className="text-[11px] text-muted-foreground">{agent.name}</span>
      </div>
      <div className="col-span-2 mt-3 flex items-center justify-between border-t border-border/60 pt-3">
        <div className="flex items-center gap-2">
          <div className="relative h-7 w-7 overflow-hidden rounded-full border border-border shadow-sm">
            <Image
              src={`https://flagcdn.com/w80/${agent.flagCode}.png`}
              alt={`Bandera ${agent.lang}`}
              width={28}
              height={28}
              className="h-full w-full object-cover"
              unoptimized
            />
          </div>
          <span className="text-xs text-muted-foreground">{agent.lang}</span>
        </div>
        <button
          type="button"
          onClick={() => onVoicePress(agent)}
          className={cn(
            "relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors",
            showPauseIcon
              ? "border-[#0070f3] bg-[#0070f3] text-white"
              : "border-border bg-background text-foreground shadow-sm hover:border-[#0070f3]/40",
          )}
          aria-label={
            showPauseIcon
              ? `Pausar muestra de voz de ${agent.name}`
              : isThisCard && voicePaused
                ? `Reanudar muestra de voz de ${agent.name}`
                : `Reproducir muestra de atención al cliente en ${agent.lang}`
          }
        >
          {/* Contenedor fijo: mismo centro para play y pausa (evita salto / desfase visual) */}
          <span
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
            aria-hidden
          >
            {showPauseIcon ? (
              <Pause className="size-[15px] shrink-0 stroke-[2.75] stroke-current" />
            ) : (
              <Play className="size-[15px] shrink-0 translate-x-[2px] stroke-[2.75] stroke-current fill-none" />
            )}
          </span>
        </button>
      </div>
    </div>
  );
}

export function VoiceAgentLanding() {
  const reduceMotion = useReducedMotion();
  const [wizardStep, setWizardStep] = useState(0);
  const [activeVoiceId, setActiveVoiceId] = useState<string | null>(null);
  const [voicePaused, setVoicePaused] = useState(false);
  const [voiceSynthStarted, setVoiceSynthStarted] = useState(false);
  const [activeHighlight, setActiveHighlight] = useState(highlightPanels[0].id);

  const activePanel = highlightPanels.find((p) => p.id === activeHighlight) ?? highlightPanels[0];

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

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined") window.speechSynthesis.cancel();
    };
  }, []);

  const onVoicePress = useCallback(
    async (agent: AgentMarquee) => {
      if (typeof window === "undefined") return;
      const synth = window.speechSynthesis;
      const id = agentCardId(agent);

      if (activeVoiceId === id && voicePaused) {
        try {
          synth.resume();
        } catch {
          /* algunos navegadores móviles limitan resume */
        }
        setVoicePaused(false);
        return;
      }

      if (activeVoiceId === id && !voicePaused && voiceSynthStarted && synth.speaking) {
        try {
          synth.pause();
        } catch {
          synth.cancel();
          setActiveVoiceId(null);
          setVoicePaused(false);
          setVoiceSynthStarted(false);
          return;
        }
        setVoicePaused(true);
        return;
      }

      if (activeVoiceId === id && !voicePaused && !voiceSynthStarted && synth.pending) {
        return;
      }

      synth.cancel();
      setVoicePaused(false);
      setVoiceSynthStarted(false);
      await prefetchSpeechVoices();

      const utter = new SpeechSynthesisUtterance(agent.phrase);
      utter.lang = agent.speechLang;
      utter.rate = 0.93;
      const voice = pickVoiceForLang(agent.speechLang);
      if (voice) utter.voice = voice;

      utter.onstart = () => {
        setVoiceSynthStarted(true);
      };
      utter.onend = () => {
        setVoiceSynthStarted(false);
        setActiveVoiceId(null);
        setVoicePaused(false);
      };
      utter.onerror = () => {
        setVoiceSynthStarted(false);
        setActiveVoiceId(null);
        setVoicePaused(false);
      };

      synth.speak(utter);
      setActiveVoiceId(id);
      setVoicePaused(false);
    },
    [activeVoiceId, voicePaused, voiceSynthStarted],
  );

  const rowTopDup = useMemo(() => [...agentsRowTop, ...agentsRowTop], []);
  const rowBottomDup = useMemo(() => [...agentsRowBottom, ...agentsRowBottom], []);

  return (
    <div className="relative z-10">
      {/* Rejilla suave (estilo sitio principal) */}
      <div
        className="page-grid-bg pointer-events-none fixed inset-0 -z-10 opacity-[0.45]"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed top-0 right-0 -z-10 h-[420px] w-[420px] rounded-full blur-[100px]"
        style={{ background: `radial-gradient(circle, ${accent}18 0%, transparent 72%)` }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 pt-28 pb-6 sm:px-6 lg:px-8 lg:pt-32">
        {/* Hero */}
        <section id="producto" className="relative text-center">
          <VoiceSpectrumHeroDecor />

          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0}
            className="mb-4 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground"
          >
            E-SMART360 · Agentes de voz
          </motion.p>
          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={1}
            className="mx-auto max-w-4xl font-display text-4xl font-normal leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            Tu agente de voz con IA para ventas, soporte y prospección{" "}
            <span className="bg-gradient-to-r from-[#0070f3] to-cyan-500 bg-clip-text text-transparent">
              24/7
            </span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={2}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
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
              className="h-12 rounded-full border-0 bg-[#0070f3] px-8 text-white shadow-[0_8px_28px_-8px_rgba(0,112,243,0.55)] hover:bg-[#0060d0]"
              asChild
            >
              <a href="https://www.e-smart360.com/demo">Agendar una demo</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-border bg-background/80 shadow-sm backdrop-blur-sm hover:bg-muted/50"
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
              className="rounded-2xl border border-border/80 bg-background/90 p-6 shadow-[0_24px_60px_-20px_rgba(15,23,42,0.12),0_0_0_1px_rgba(0,0,0,0.04)] backdrop-blur-md"
            >
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
                <div className="flex items-center gap-2 text-sm text-foreground/85">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-40" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </span>
                  Llamada en curso · Agente E-SMART360
                </div>
                <span className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                  Transcripción en vivo
                </span>
              </div>
              <div className="relative px-2">
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
                <VoiceSpectrumBars
                  bars={52}
                  maxHeightClass="h-44 sm:h-52"
                  density="airy"
                  minPx={36}
                  maxPx={172}
                  className="py-2"
                />
              </div>
              <p className="mt-4 text-center text-xs text-muted-foreground">
                Vista ilustrativa del panel · Listo para desplegar en Vercel
              </p>
            </div>
          </motion.div>
        </section>

        {/* Confianza */}
        <section className="mt-24 overflow-hidden border-y border-border py-10" aria-label="Empresas que confían">
          <p className="mb-6 text-center text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Operaciones que ya automatizan con E-SMART360
          </p>
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
            <motion.div
              className="flex w-max gap-10"
              animate={reduceMotion ? {} : { x: ["0%", "-50%"] }}
              transition={reduceMotion ? {} : { duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {[...partners, ...partners].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-muted/40 px-5 py-2 text-sm text-muted-foreground shadow-sm"
                >
                  <Building2 className="h-4 w-4 opacity-60" />
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
            className="mx-auto max-w-3xl text-center font-display text-3xl text-foreground md:text-4xl"
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
                className="rounded-2xl border border-border bg-background p-6 shadow-[0_12px_40px_-18px_rgba(15,23,42,0.15)] transition-shadow hover:border-[#0070f3]/30 hover:shadow-[0_20px_50px_-24px_rgba(0,112,243,0.18)]"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#0070f3]/10 text-[#0070f3]">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Impacto / números (layout tipo referencia, tema claro + contadores) */}
        <section
          className="mt-28 rounded-3xl border border-border bg-muted/35 px-5 py-12 shadow-[0_24px_60px_-28px_rgba(15,23,42,0.2)] sm:px-8 md:px-10"
          aria-label="Impacto en números"
        >
          <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1.15fr)] md:items-stretch md:gap-0">
            <div className="flex flex-col justify-center text-center md:text-left">
              <p
                className="font-display text-5xl font-semibold tracking-tight text-[#0070f3] sm:text-6xl"
                style={{ textShadow: "0 0 40px rgba(0,112,243,0.2)" }}
              >
                <CountUp
                  end={2.3}
                  decimals={1}
                  duration={2.2}
                  enableScrollSpy
                  scrollSpyOnce
                  suffix="K+"
                />
              </p>
              <p className="mt-3 max-w-xs text-sm text-muted-foreground md:max-w-none">
                Empresas en más de 30 países confían en E-SMART360
              </p>
            </div>

            <div
              className="hidden md:block w-px self-stretch justify-self-center bg-gradient-to-b from-transparent via-[#0070f3]/45 to-transparent md:mx-6"
              aria-hidden
            />

            <div className="grid min-h-[200px] grid-cols-2 overflow-hidden rounded-2xl border border-[#0070f3]/20 bg-background/80 shadow-inner">
              {[
                {
                  node: (
                    <div className="font-display text-2xl text-foreground sm:text-3xl">
                      $
                      <CountUp end={300} duration={2.4} enableScrollSpy scrollSpyOnce suffix="K+" />
                    </div>
                  ),
                  caption: "Ahorro estimado en costes comerciales",
                },
                {
                  node: (
                    <div className="font-display text-2xl font-semibold text-[#0070f3] sm:text-3xl">
                      <CountUp end={112} duration={2.5} enableScrollSpy scrollSpyOnce suffix="K+" />
                    </div>
                  ),
                  caption: "Minutos de voz procesados",
                },
                {
                  node: (
                    <div className="font-display text-2xl text-foreground sm:text-3xl">
                      <CountUp
                        end={11.8}
                        decimals={1}
                        duration={2.3}
                        enableScrollSpy
                        scrollSpyOnce
                        suffix="K"
                      />
                    </div>
                  ),
                  caption: "Agentes de voz activos",
                },
                {
                  node: (
                    <div className="font-display text-xl font-semibold text-foreground sm:text-2xl">
                      <CountUp end={3} decimals={0} duration={1.8} enableScrollSpy scrollSpyOnce suffix="x" />
                      <span className="ml-1 text-sm font-medium text-muted-foreground sm:text-base">
                        {" "}
                        citas agendadas
                      </span>
                    </div>
                  ),
                  caption: "Frente a prospección tradicional",
                },
              ].map((cell, idx) => (
                <div
                  key={cell.caption}
                  className={cn(
                    "flex flex-col justify-center p-4 sm:p-5",
                    idx % 2 === 0 ? "border-r border-[#0070f3]/15" : "",
                    idx < 2 ? "border-b border-[#0070f3]/15" : "",
                  )}
                >
                  {cell.node}
                  <p className="mt-2 text-xs text-muted-foreground sm:text-sm">{cell.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Highlights: lista + imagen dinámica */}
        <section className="mt-28" aria-labelledby="highlights-heading">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="mb-4 flex items-center gap-2 text-sm font-medium text-[#0070f3]">
                <span className="h-2 w-2 rounded-full bg-[#0070f3] shadow-[0_0_12px_#0070f3]" />
                Destacados
              </div>
              <h2
                id="highlights-heading"
                className="font-display text-3xl leading-tight text-foreground md:text-4xl"
              >
                Atiende llamadas, califica leads y agenda citas 24/7 con agentes de voz IA
              </h2>
              <div className="mt-10 divide-y divide-border border-t border-border">
                {highlightPanels.map((panel) => {
                  const open = activeHighlight === panel.id;
                  return (
                    <div key={panel.id} className="py-1">
                      <button
                        type="button"
                        onClick={() => setActiveHighlight(panel.id)}
                        className={cn(
                          "flex w-full items-start justify-between gap-3 py-4 text-left text-base transition-colors",
                          open ? "text-[#0070f3]" : "text-muted-foreground hover:text-foreground",
                        )}
                      >
                        <span className="font-medium">{panel.title}</span>
                        <span className="text-muted-foreground/60">{open ? "−" : "+"}</span>
                      </button>
                      <AnimatePresence initial={false}>
                        {open && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <ul className="space-y-3 pb-4 pl-1">
                              {panel.bullets.map((b) => (
                                <li
                                  key={b}
                                  className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                                >
                                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#0070f3]" />
                                  {b}
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative lg:sticky lg:top-28">
              <div
                className="relative overflow-hidden rounded-2xl border border-border bg-muted/20 shadow-[0_28px_70px_-28px_rgba(15,23,42,0.35),0_0_0_1px_rgba(0,112,243,0.08)]"
                style={{ boxShadow: `0 28px 70px -28px rgba(15,23,42,0.3), 0 0 80px -40px ${accent}33` }}
              >
                <div className="aspect-[4/3] w-full">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activePanel.id}
                      initial={{ opacity: 0, scale: 1.02 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.35 }}
                      className="relative h-full w-full"
                    >
                      <Image
                        src={activePanel.image}
                        alt={activePanel.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        unoptimized
                        priority={activePanel.id === highlightPanels[0].id}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wizard */}
        <section className="mt-28" aria-label="Cómo empezar">
          <div className="text-center">
            <p className="text-xs font-mono uppercase tracking-widest text-[#0070f3]">Cómo funciona</p>
            <h2 className="mt-3 font-display text-3xl text-foreground md:text-4xl">
              De cero a llamadas en cuatro pasos
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {wizardSteps.map((s, i) => {
              const active = wizardStep === i;
              return (
                <button
                  key={s.title}
                  type="button"
                  onClick={() => setWizardStep(i)}
                  className={cn(
                    "rounded-2xl border p-5 text-left transition-all",
                    active
                      ? "border-[#0070f3]/50 bg-[#0070f3]/8 shadow-[0_16px_40px_-20px_rgba(0,112,243,0.35)]"
                      : "border-border bg-background shadow-sm hover:border-[#0070f3]/25",
                  )}
                >
                  <div className="mb-3 flex items-center gap-2">
                    <span
                      className={cn(
                        "flex h-8 w-8 items-center justify-center rounded-full text-sm font-mono",
                        active ? "bg-[#0070f3] text-white" : "bg-muted text-muted-foreground",
                      )}
                    >
                      {i + 1}
                    </span>
                    <s.icon className="h-5 w-5 text-[#0070f3]" />
                  </div>
                  <h3 className="font-medium text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
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
                className={cn(
                  "h-2 rounded-full transition-all",
                  wizardStep === i ? "w-8 bg-[#0070f3]" : "w-2 bg-muted-foreground/25 hover:bg-muted-foreground/45",
                )}
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
                    className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="mt-4 font-display text-3xl text-foreground">Campañas salientes que suenan personales</h2>
              <p className="mt-4 text-muted-foreground">
                Programa discados, respeta husos horarios y personaliza el guion con datos del CRM. El agente deja
                notas estructuradas y próximos pasos automáticos.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
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
              <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-muted to-background shadow-[0_20px_50px_-24px_rgba(15,23,42,0.2)]">
                <div className="flex h-full flex-col justify-end p-8">
                  <Users className="mb-4 h-12 w-12 text-[#0070f3]" />
                  <p className="text-sm text-muted-foreground">Outbound + calificación automática</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border bg-gradient-to-br from-muted/80 to-background p-10 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.18)]"
            >
              <Headphones className="h-12 w-12 text-cyan-600" />
              <p className="mt-6 text-sm text-muted-foreground">Entrantes 24/7 · CRM sincronizado</p>
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
                    className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="mt-4 font-display text-3xl text-foreground">Cada llamada alimenta tu embudo</h2>
              <p className="mt-4 text-muted-foreground">
                Transcripciones, resúmenes y extracción de datos listos para disparar workflows. Tus equipos revisan
                excepciones, no el trabajo repetitivo.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Idiomas — dos filas, direcciones opuestas, pausa en hover */}
        <section className="mt-28" aria-labelledby="languages-heading">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2
              id="languages-heading"
              className="max-w-xl font-display text-3xl text-foreground md:text-4xl"
            >
              Impulsa tu negocio en{" "}
              <span className="font-semibold text-foreground">cualquier idioma</span>
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
              Biblioteca de voces con matices regionales. Pulsa play para escuchar una frase de atención al cliente en
              cada idioma; puedes pausar y reanudar. La voz usa el sintetizador de tu navegador.
            </p>
          </div>

          <div className="mt-10 space-y-5">
            <div className="voice-marquee-row">
              <div className="voice-marquee-track-left gap-4 pr-4">
                {rowTopDup.map((agent, i) => (
                  <AgentCard
                    key={`t-${i}-${agent.name}`}
                    agent={agent}
                    activeVoiceId={activeVoiceId}
                    voicePaused={voicePaused}
                    voiceSynthStarted={voiceSynthStarted}
                    onVoicePress={onVoicePress}
                  />
                ))}
              </div>
            </div>
            <div className="voice-marquee-row">
              <div className="voice-marquee-track-right gap-4 pr-4">
                {rowBottomDup.map((agent, i) => (
                  <AgentCard
                    key={`b-${i}-${agent.name}`}
                    agent={agent}
                    activeVoiceId={activeVoiceId}
                    voicePaused={voicePaused}
                    voiceSynthStarted={voiceSynthStarted}
                    onVoicePress={onVoicePress}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section className="mt-28">
          <h2 className="mx-auto max-w-3xl text-center font-display text-3xl text-foreground md:text-4xl">
            Resultados reales con agentes de voz E-SMART360
          </h2>
          <div className="relative mx-auto mt-12 max-w-3xl px-4 md:px-16">
            <Carousel opts={{ loop: true }} className="w-full">
              <CarouselContent>
                {testimonials.map((t, i) => (
                  <CarouselItem key={i}>
                    <div
                      className="mx-1 rounded-2xl border border-border bg-gradient-to-b from-background to-muted/30 p-8 shadow-[0_20px_50px_-28px_rgba(15,23,42,0.2)] md:p-10"
                    >
                      <div className="mb-4 flex gap-1 text-amber-500">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <span key={j} aria-hidden>
                            ★
                          </span>
                        ))}
                      </div>
                      <p className="text-lg leading-relaxed text-foreground/90">&ldquo;{t.quote}&rdquo;</p>
                      <p className="mt-6 text-sm font-medium text-foreground">{t.author}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-2 border-border bg-background shadow-md md:-left-4" />
              <CarouselNext className="-right-2 border-border bg-background shadow-md md:-right-4" />
            </Carousel>
          </div>
        </section>

        {/* Cumplimiento */}
        <section className="mt-28">
          <h2 className="text-center font-display text-3xl text-foreground">Cumplimiento en el que puedes confiar</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted-foreground">
            E-SMART360 prioriza la integridad de datos y buenas prácticas para equipos que operan con información
            sensible.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Shield, t: "Seguridad de datos", d: "Controles de acceso y buenas prácticas de arquitectura." },
              { icon: Lock, t: "Cifrado", d: "Protección en tránsito y en reposo según estándares modernos." },
              {
                icon: CheckCircle2,
                t: "Privacidad",
                d: "Alineación con marcos como GDPR / HIPAA según tu despliegue y contrato.",
              },
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
                className="rounded-2xl border border-border bg-background p-5 shadow-sm"
              >
                <item.icon className="h-8 w-8 text-[#0070f3]" />
                <h3 className="mt-3 font-medium text-foreground">{item.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.d}</p>
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
            className="rounded-3xl border border-[#0070f3]/25 bg-gradient-to-br from-[#0070f3]/12 via-background to-muted/40 px-6 py-14 text-center shadow-[0_24px_60px_-28px_rgba(0,112,243,0.2)] md:px-16"
          >
            <h2 className="font-display text-3xl text-foreground md:text-4xl">
              7 días. Te desafiamos a ponernos a prueba.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Prueba con tus leads reales. Cancela cuando quieras; nuestro objetivo es que veas conversiones antes.
            </p>
            <Button
              size="lg"
              className="mt-8 h-12 rounded-full bg-[#0070f3] px-10 text-white shadow-lg hover:bg-[#0060d0]"
              asChild
            >
              <a href="https://www.e-smart360.com/demo">Comenzar ahora</a>
            </Button>
          </motion.div>
        </section>

        {/* FAQ */}
        <section id="recursos" className="mt-28 pb-8">
          <h2 className="text-center font-display text-3xl text-foreground">Preguntas frecuentes</h2>
          <Accordion type="single" collapsible className="mx-auto mt-10 w-full max-w-3xl">
            {faqItems.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-foreground hover:no-underline hover:text-[#0070f3]">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </div>
    </div>
  );
}
