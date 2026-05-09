import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  Layers,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { CtaSection } from "@/components/landing/cta-section";
import { Button } from "@/components/ui/button";
import { MarkdownContent } from "@/components/casos-de-uso/markdown-content";
import {
  getAllCasoSlugs,
  getCasoDeUsoBySlug,
  getCasosDeUso,
} from "@/lib/casos-de-uso";

const HIGHLIGHTS = [
  {
    icon: Bot,
    title: "Agente IA 24/7",
    description:
      "Atiende WhatsApp, llamadas y formularios sin perder un solo lead.",
  },
  {
    icon: Layers,
    title: "Flujos a la medida",
    description:
      "Configuramos contigo guiones, derivaciones y reglas de calificación.",
  },
  {
    icon: ShieldCheck,
    title: "Respaldo Meta oficial",
    description:
      "Plataforma con API oficial y garantía de respaldo de 30 días.",
  },
];

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllCasoSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const caso = getCasoDeUsoBySlug(slug);
  if (!caso) return { title: "Caso de uso no encontrado | E-SMART360" };

  return {
    title: `${caso.title} | Casos de Uso · E-SMART360`,
    description: `Caso de uso de E-SMART360: ${caso.title}. Automatización omnicanal con IA para tu negocio.`,
  };
}

export default async function CasoDeUsoPage({ params }: PageProps) {
  const { slug } = await params;
  const caso = getCasoDeUsoBySlug(slug);

  if (!caso) notFound();

  const casosDeUso = getCasosDeUso();

  // Sugerencias: hasta 3 casos diferentes al actual.
  const related = casosDeUso.filter((c) => c.slug !== caso.slug).slice(0, 3);

  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation casosDeUso={casosDeUso} />

      {/* Hero */}
      <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-24 border-b border-foreground/10 overflow-hidden">
        {/* Grid lines (mismo recurso visual que el hero principal) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute h-px bg-foreground/10"
              style={{ top: `${12.5 * (i + 1)}%`, left: 0, right: 0 }}
            />
          ))}
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={`v-${i}`}
              className="absolute w-px bg-foreground/10"
              style={{ left: `${8.33 * (i + 1)}%`, top: 0, bottom: 0 }}
            />
          ))}
        </div>

        {/* Halo decorativo a la derecha (reemplaza las imágenes externas) */}
        <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-foreground/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors group"
              >
                <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                <span className="w-8 h-px bg-foreground/30 group-hover:bg-foreground transition-colors" />
                Casos de Uso
              </Link>
            </nav>

            {/* Eyebrow */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-3 text-xs font-mono tracking-widest uppercase text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                {caso.category.replace(/-/g, " ")}
              </span>
            </div>

            {/* Título */}
            <h1 className="font-display text-[clamp(2.2rem,6vw,4.5rem)] leading-[1.0] tracking-tight">
              {caso.title}
            </h1>

            <p className="mt-6 text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Implementa este caso de uso con E-SMART360. Te acompañamos 1:1 en
              la configuración para que la automatización se ajuste a tus
              procesos.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="bg-foreground hover:bg-foreground/90 text-background px-7 h-12 text-sm rounded-full group"
                asChild
              >
                <a href="https://www.e-smart360.com/demo">
                  Solicita una Demo
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-7 text-sm rounded-full border-foreground/20 hover:bg-foreground/5"
                asChild
              >
                <a href="/#pricing">Ver Planes</a>
              </Button>
            </div>
          </div>

          {/* Tarjeta lateral con destacados (sustituye los assets visuales del MD) */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-foreground/10 bg-background/60 backdrop-blur-xl p-6">
              <span className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-muted-foreground mb-5">
                <Sparkles className="w-3.5 h-3.5" />
                Destacados
              </span>
              <ul className="space-y-4">
                {HIGHLIGHTS.map((h) => (
                  <li key={h.title} className="flex items-start gap-3">
                    <div className="w-9 h-9 shrink-0 rounded-lg bg-foreground/8 border border-foreground/10 flex items-center justify-center">
                      <h.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {h.title}
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                        {h.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido del caso */}
      <section className="relative py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Columna principal */}
          <article className="lg:col-span-8">
            <MarkdownContent content={caso.content} />
          </article>

          {/* Sidebar de casos relacionados */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <div className="rounded-2xl border border-foreground/10 bg-background/50 backdrop-blur-xl p-6 lg:p-8">
                <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground block mb-5">
                  Otros Casos de Uso
                </span>
                <ul className="space-y-1">
                  {related.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/casos-de-uso/${c.slug}`}
                        className="flex items-center justify-between gap-3 px-3 py-3 rounded-lg hover:bg-foreground/5 transition-colors group border border-transparent hover:border-foreground/10"
                      >
                        <span className="text-sm text-foreground/80 group-hover:text-foreground transition-colors">
                          {c.title}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-foreground/10">
                  <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground block mb-3">
                    ¿Necesitas algo a medida?
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    Implementación asistida 1:1 con nuestro equipo en menos de 7
                    días.
                  </p>
                  <Button
                    size="sm"
                    className="bg-foreground hover:bg-foreground/90 text-background rounded-full px-5 group"
                    asChild
                  >
                    <a href="https://www.e-smart360.com/demo">
                      Hablar con un experto
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CtaSection />
      <FooterSection />
    </main>
  );
}
