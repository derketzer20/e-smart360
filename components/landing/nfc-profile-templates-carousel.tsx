"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const asset = (path: string) => `/brand-assets/nfc/${path}`;

const slides = [
  {
    title: "Perfil minimal",
    body: "CTA claros, bio corta y enlaces priorizados para conversiones rápidas.",
    src: asset("set-a/390w light.png"),
    alt: "Vista móvil de perfil digital",
  },
  {
    title: "Escena de marca",
    body: "Hero visual, storytelling y bloques modulares listos para campañas.",
    src: asset("set-b/Scene.png"),
    alt: "Escena de diseño white label",
  },
  {
    title: "Dashboard de equipo",
    body: "Métricas por usuario, plantillas y control de activos comerciales.",
    src: asset("set-a/Dashboard.png"),
    alt: "Dashboard de tarjetas digitales",
  },
  {
    title: "Asset comercial",
    body: "Bloques para casos, PDFs y agendamiento sin salir del perfil.",
    src: asset("set-b/ASSET..png"),
    alt: "Asset visual de tarjeta digital",
  },
];

/**
 * Carrusel con **Embla Carousel** (librería moderna ya en el proyecto) —
 * deslizamiento fluido, loop y controles accesibles.
 */
export function NfcProfileTemplatesCarousel({ className }: { className?: string }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    dragFree: false,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section
      className={cn(
        "relative overflow-hidden border-y border-border bg-gradient-to-b from-muted/30 to-background py-14 sm:py-16",
        className,
      )}
    >
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-[#0070f3]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[#25D366]/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#0070f3]">
              Embla carousel
            </p>
            <h2 className="mt-2 font-display text-2xl tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Plantillas de perfil que se sienten premium
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Explora escenarios reales con deslizamiento suave, snap y loop — el mismo motor de carrusel que usan
              equipos de producto en apps modernas.
            </p>
          </div>
          <div className="flex shrink-0 gap-2 self-end sm:self-auto">
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="h-11 w-11 rounded-full border-border bg-background/80 shadow-sm"
              onClick={scrollPrev}
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="h-11 w-11 rounded-full border-border bg-background/80 shadow-sm"
              onClick={scrollNext}
              aria-label="Siguiente"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl" ref={emblaRef}>
          <div className="flex touch-pan-y cursor-grab active:cursor-grabbing">
            {slides.map((slide) => (
              <div
                key={slide.title}
                className="min-w-0 shrink-0 grow-0 pl-0 pr-4 [flex:0_0_88%] sm:[flex:0_0_52%] sm:pr-5 lg:[flex:0_0_38%]"
              >
                <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-background/90 shadow-[0_22px_70px_-40px_rgba(15,23,42,0.4)] transition-shadow duration-300 hover:shadow-[0_28px_90px_-36px_rgba(0,112,243,0.25)]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted/40">
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 88vw, (max-width: 1024px) 52vw, 38vw"
                      unoptimized
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-90" />
                  </div>
                  <div className="space-y-2 p-5">
                    <h3 className="font-semibold text-foreground">{slide.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{slide.body}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
