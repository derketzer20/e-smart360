"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { Locale } from "@/lib/i18n/types";

const MX_FAQ: { id: string; q: Record<Locale, string>; a: Record<Locale, string> }[] = [
  {
    id: "mx-1",
    q: {
      es: "¿Necesito Meta Business Suite y la API oficial para operar en serio?",
      en: "Do I need Meta Business Suite and the official API to operate seriously?",
    },
    a: {
      es: "Sí, para WhatsApp Cloud API con facturación y políticas Meta alineadas. E-SMART360 se apoya en flujos oficiales: reduces riesgo de cortes y mejoras soporte cuando escalas envíos y automatización.",
      en: "Yes, for WhatsApp Cloud API with billing and Meta-aligned policies. E-SMART360 follows official flows: lower disruption risk and better support as you scale sends and automation.",
    },
  },
  {
    id: "mx-2",
    q: {
      es: "¿Qué es la coexistencia del número y por qué importa en México?",
      en: "What is phone coexistence and why does it matter in Mexico?",
    },
    a: {
      es: "La coexistencia permite usar el mismo número en WhatsApp Business app y en la API según reglas Meta. Es clave para equipos que aún atienden desde el celular mientras automatizan en la nube; el onboarding debe hacerse con cuidado para no romper el registro del número.",
      en: "Coexistence lets one number run on WhatsApp Business app and the API under Meta rules. It matters for teams still answering from the phone while automating in the cloud; onboarding must follow steps so the number registration stays healthy.",
    },
  },
  {
    id: "mx-3",
    q: {
      es: "¿Puedo hacer envíos masivos sin que Meta me penalice?",
      en: "Can I run mass sends without Meta penalties?",
    },
    a: {
      es: "Los envíos masivos deben usar plantillas aprobadas, audiencias opt-in y buena calidad de señal (quejas, bloqueos, tiempos de respuesta). Ninguna herramienta “mágica” elimina políticas: la diferencia es operar con API oficial, segmentación y métricas claras.",
      en: "Mass sends must use approved templates, opted-in audiences, and strong quality signals (complaints, blocks, response times). No tool removes policies: the win is official API, segmentation, and clear metrics.",
    },
  },
  {
    id: "mx-4",
    q: {
      es: "¿Hay riesgo de bloqueo si uso soluciones no oficiales o “grises”?",
      en: "Is there ban risk with unofficial or “grey” solutions?",
    },
    a: {
      es: "Sí. Canales no alineados a Cloud API, scraping o envíos sin opt-in aumentan riesgo de baneos y pérdida del número. Para negocio estable en centro–norte, prioriza proveedores transparentes sobre políticas Meta y trazabilidad de mensajes.",
      en: "Yes. Channels not aligned to Cloud API, scraping, or non opt-in sends raise ban and number-loss risk. For stable business, prefer vendors transparent about Meta policies and message traceability.",
    },
  },
  {
    id: "mx-5",
    q: {
      es: "¿Por qué no recomiendan Evolution API para mi empresa?",
      en: "Why don’t you recommend Evolution API for my company?",
    },
    a: {
      es: "Evolution y similares suelen ser self-hosted: útiles para prototipos, pero la responsabilidad de compliance, parches, anti-abuso y continuidad recae en ti. Sin relación directa con Meta como BSP, soporte y escalabilidad para clientes pagadores son más frágiles que con Cloud API + partner serio.",
      en: "Evolution-style stacks are often self-hosted: fine for prototypes, but compliance, patching, anti-abuse, and uptime are on you. Without Meta BSP-style support, paid-customer reliability is weaker than Cloud API with a serious partner.",
    },
  },
  {
    id: "mx-6",
    q: {
      es: "¿Las conversaciones de Meta se cobran aparte?",
      en: "Are Meta conversations billed separately?",
    },
    a: {
      es: "Meta cobra conversaciones según categoría y país. E-SMART360 posiciona cuota de plataforma/bundles separada de ese consumo para que veas margen real. Revisa la tabla de precios Meta vigente en developers.facebook.com/docs/whatsapp/pricing.",
      en: "Meta bills conversations by category and country. E-SMART360 separates platform/bundle fees from that usage so margin stays visible. Check Meta’s current WhatsApp pricing page for your region.",
    },
  },
  {
    id: "mx-7",
    q: {
      es: "¿Puedo migrar desde otro BSP o desde chat no oficial?",
      en: "Can I migrate from another BSP or unofficial chat?",
    },
    a: {
      es: "Sí, con ventana de migración y re-verificación del WABA según reglas Meta. Planifica con tu equipo ventas/soporte para no cortar atención: duplicar números no es viable; sí hay rutas de transición documentadas con proveedor origen y destino.",
      en: "Yes, with a migration window and WABA re-verification per Meta rules. Plan with sales/support to avoid service gaps: you can’t truly duplicate numbers; transition paths depend on source and destination providers.",
    },
  },
];

const COMMERCIAL_FAQ: { id: string; q: Record<Locale, string>; a: Record<Locale, string> }[] = [
  {
    id: "co-1",
    q: { es: "¿Puedo empezar gratis y subir de plan después?", en: "Can I start free and upgrade later?" },
    a: {
      es: "Sí. Mensajería incluye nivel free estratégico. Voz es solo de pago por diseño.",
      en: "Yes. Messaging includes a strategic free tier. Voice is paid-only by design.",
    },
  },
  {
    id: "co-2",
    q: { es: "¿Qué significa IA ilimitada?", en: "What does unlimited AI mean?" },
    a: {
      es: "Uso operativo ilimitado bajo política de uso justo y controles anti-abuso.",
      en: "Operational usage is unlimited under fair-use and anti-abuse controls.",
    },
  },
  {
    id: "co-3",
    q: {
      es: "¿Los bundles incluyen Digital Card y oficina virtual?",
      en: "Do bundles include Digital Card and virtual office?",
    },
    a: {
      es: "Sí, según el bundle. Signature integra la línea de oficina virtual.",
      en: "Yes, depending on bundle. Signature includes the virtual office line.",
    },
  },
];

export function PricingFaqMx({ locale }: { locale: Locale }) {
  const all = [...MX_FAQ, ...COMMERCIAL_FAQ];

  return (
    <>
      <h2 className="text-center font-display text-2xl text-foreground md:text-4xl">
        {locale === "en" ? "FAQ — Mexico & pricing" : "FAQ — México y precios"}
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-muted-foreground">
        {locale === "en"
          ? "Common questions from Meta Business API, coexistence, mass sends, and unofficial stacks."
          : "Preguntas frecuentes sobre Meta Business API, coexistencia, envíos masivos y stacks no oficiales."}
      </p>
      <Accordion type="single" collapsible defaultValue="mx-1" className="mt-8 rounded-2xl border border-border bg-background px-4 sm:px-5">
        {all.map((item) => (
          <AccordionItem key={item.id} value={item.id} className="border-border/80">
            <AccordionTrigger className="text-left text-foreground hover:text-[var(--accent-meta)] hover:no-underline">
              {item.q[locale]}
            </AccordionTrigger>
            <AccordionContent className="rounded-lg border border-[var(--accent-meta-pink)]/15 bg-[var(--accent-meta-pink)]/[0.04] px-3 py-3 text-sm leading-relaxed text-muted-foreground">
              {item.a[locale]}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
