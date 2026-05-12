import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Bot,
  Building2,
  Code2,
  GraduationCap,
  HeartPulse,
  Megaphone,
  MessageSquare,
  Phone,
  ShoppingCart,
  Sparkles,
  Users,
  Video,
  Workflow,
} from "lucide-react";
import { getAllDocSummaries, getDocsNavGroups, DOC_SECTION_LABELS } from "@/lib/docs";

export const metadata: Metadata = {
  title: "Documentación | E-SMART360",
  description:
    "Centro de conocimiento: arquitectura, chatbots omnicanal, agente de voz, oficina virtual Consolto, NFC, integración y API.",
};

export default function DocsIndexPage() {
  const groups = getDocsNavGroups();
  const docs = getAllDocSummaries();
  const importedCount = docs.filter((d) => d.source === "fulldoc").length;
  const totalCount = docs.length;

  const paths = [
    {
      title: "Soy nuevo en E-SMART360",
      description: "Onboarding común: canales, primer flujo, conocimiento base y checklist de lanzamiento.",
      href: "/docs/primeros-pasos/onboarding",
      icon: Sparkles,
    },
    {
      title: "Quiero vender y atender por WhatsApp",
      description: "Chatbots, plantillas, campañas, catálogo, pagos y seguimiento automático.",
      href: "/docs/chatbots/intro",
      icon: MessageSquare,
    },
    {
      title: "Soy developer o integrador",
      description: "API, webhooks, payloads, eventos y patrones de integración con sistemas externos.",
      href: "/docs/api/overview",
      icon: Code2,
    },
  ];

  const sectorCards = [
    {
      title: "Salud y clínicas",
      description: "Citas, recordatorios, voz IA, WhatsApp y oficina virtual.",
      href: "/docs/sectores/salud",
      icon: HeartPulse,
    },
    {
      title: "E-commerce",
      description: "Catálogo, carritos, pagos, WooCommerce, Shopify y postventa.",
      href: "/docs/sectores/ecommerce",
      icon: ShoppingCart,
    },
    {
      title: "Educación",
      description: "Inscripciones, comunidades, recordatorios y soporte a alumnos.",
      href: "/docs/sectores/educacion",
      icon: GraduationCap,
    },
    {
      title: "Agencias",
      description: "Marca blanca, cuentas, clientes, paquetes y operación recurrente.",
      href: "/docs/sectores/agencias",
      icon: Users,
    },
    {
      title: "Ventas B2B",
      description: "Prospección, calificación, agenda de demos y seguimiento por voz/chat.",
      href: "/docs/sectores/ventas",
      icon: Workflow,
    },
    {
      title: "Servicios profesionales",
      description: "Captación, reservas, videollamadas y atención consultiva.",
      href: "/docs/sectores/servicios-profesionales",
      icon: Building2,
    },
  ];

  const platformCards = [
    { title: "Chatbots omnicanal", href: "/docs/chatbots/intro", icon: Bot },
    { title: "Broadcasting y plantillas", href: "/docs/broadcasting/plantillas-whatsapp", icon: Megaphone },
    { title: "E-commerce conversacional", href: "/docs/ecommerce/catalogo-y-pagos-whatsapp", icon: ShoppingCart },
    { title: "Agente de voz IA", href: "/docs/agente-voz/intro", icon: Phone },
    { title: "Oficina virtual", href: "/docs/oficina-virtual/intro", icon: Video },
    { title: "API y webhooks", href: "/docs/api/overview", icon: Code2 },
  ];

  return (
    <div className="pb-16">
      <section className="mx-auto max-w-4xl text-center">
        <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-background shadow-[var(--shadow-card-sm)]">
          <BookOpen className="h-5 w-5 text-[var(--accent-meta,#0668E1)]" />
        </div>
        <p className="text-xs font-mono uppercase tracking-widest text-[var(--accent-meta,#0668E1)]">
          Centro de conocimiento
        </p>
        <h1 className="mt-3 font-display text-4xl tracking-tight text-foreground md:text-6xl">
          Aprende E-SMART360 por rol, sector o herramienta
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Documentación rebrandeada y organizada para clientes finales, agencias, equipos de ventas y developers.
          Ya integramos {importedCount} guías importadas de la base fuente, más rutas estratégicas por sector.
        </p>
      </section>

      <section className="mt-14 grid gap-5 lg:grid-cols-3">
        {paths.map((item) => (
          <HomeCard key={item.href} {...item} featured />
        ))}
      </section>

      <section className="mt-16">
        <SectionHeading
          eyebrow="Soluciones por sector"
          title="Empieza desde el problema real del cliente"
          description="Cada sector combina plataformas distintas: WhatsApp, voz IA, agenda, pagos, tarjetas NFC, webhooks y soporte humano."
        />
        <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {sectorCards.map((item) => (
            <HomeCard key={item.href} {...item} />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <SectionHeading
          eyebrow="Herramientas"
          title="Busca por plataforma o capacidad"
          description="Si ya sabes qué módulo necesitas, entra directo a la documentación técnica y operativa."
        />
        <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {platformCards.map((item) => (
            <CompactCard key={item.href} {...item} />
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-[2rem] border border-border bg-background/80 p-6 shadow-[var(--shadow-card-sm)]">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Biblioteca completa</p>
            <h2 className="mt-2 font-display text-2xl text-foreground md:text-3xl">
              {totalCount} artículos organizados por tema
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              La lista técnica queda más abajo como mapa completo para soporte y búsqueda profunda.
            </p>
          </div>
          <Link
            href="/docs/imported/chatbots/002-guia-paso-a-paso-para-crear-un-chatbot-de-whatsapp-esmart360"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-foreground/90"
          >
            Ver guía importada
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <div className="mt-14 space-y-10">
        {groups.map((group) => (
          <section key={group.section}>
            <h2 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {DOC_SECTION_LABELS[group.section]}
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {group.items.slice(0, 8).map((item) => (
                <li key={item.route}>
                  <Link
                    href={`/docs/${item.route}`}
                    className="group flex items-center justify-between rounded-2xl border border-border bg-background/80 px-5 py-4 shadow-sm transition-colors hover:border-[var(--accent-meta,#0668E1)]/35"
                  >
                    <span className="font-medium text-foreground">{item.title}</span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent-meta,#0668E1)]">{eyebrow}</p>
      <h2 className="mt-2 font-display text-3xl tracking-tight text-foreground">{title}</h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}

function HomeCard({
  title,
  description,
  href,
  icon: Icon,
  featured,
}: {
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  featured?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group relative overflow-hidden rounded-2xl border bg-background p-6 shadow-[var(--shadow-card-sm)] transition-all hover:-translate-y-0.5 hover:border-[var(--accent-meta,#0668E1)]/35 hover:shadow-[var(--shadow-card-xl)] ${
        featured ? "border-[var(--accent-meta,#0668E1)]/25" : "border-border"
      }`}
    >
      <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[var(--accent-meta,#0668E1)]/0 blur-2xl transition-colors group-hover:bg-[var(--accent-meta,#0668E1)]/12" />
      <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--accent-meta,#0668E1)]/10 text-[var(--accent-meta,#0668E1)]">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="relative mt-5 font-display text-xl text-foreground">{title}</h3>
      <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <span className="relative mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground">
        Abrir ruta
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}

function CompactCard({
  title,
  href,
  icon: Icon,
}: {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-3 rounded-2xl border border-border bg-background/80 p-4 shadow-sm transition-colors hover:border-[var(--accent-meta,#0668E1)]/35"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted text-foreground">
        <Icon className="h-5 w-5" />
      </span>
      <span className="font-medium text-foreground">{title}</span>
      <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground" />
    </Link>
  );
}
