"use client";

import { useEffect, useMemo, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/** Envolvente estática por barra (forma general del espectro). */
export function barPattern(i: number, total: number) {
  const t = i / Math.max(1, total - 1);
  const wave =
    Math.sin(t * Math.PI * 5 + 0.4) * 0.35 +
    Math.sin(t * Math.PI * 11) * 0.2 +
    Math.cos(t * Math.PI * 3) * 0.15;
  return 0.35 + wave * 0.65;
}

/**
 * Movimiento tipo “voz hablando”: varias sinusoides desfasadas en el tiempo
 * y en el índice (misma idea fluida que la esfera del inicio, con time incremental).
 */
export function speechLevel(t: number, index: number, norm: number): number {
  const i = index;
  const wobble =
    Math.sin(t * 2.6 + i * 0.42) * 0.42 +
    Math.sin(t * 5.8 + i * 0.15) * 0.32 +
    Math.cos(t * 1.55 - i * 0.09) * 0.24 +
    Math.sin(t * 8.1 + i * 0.31) * 0.18;
  const burst = Math.max(0, Math.sin(t * 3.2)) * 0.15 * Math.sin(i * 0.5 + t);
  const level = norm * (0.48 + wobble * 0.52 + burst);
  return Math.min(1, Math.max(0.12, level));
}

type VoiceSpectrumBarsProps = {
  bars?: number;
  maxHeightClass?: string;
  className?: string;
  density?: "airy" | "comfortable";
  /** Altura mínima en px (barras más “grandes” visualmente) */
  minPx?: number;
  /** Altura máxima en px */
  maxPx?: number;
};

/**
 * Espectro de voz: líneas más altas y animación continua (rAF) como la esfera del hero.
 */
export function VoiceSpectrumBars({
  bars = 40,
  maxHeightClass = "h-24",
  className,
  density = "comfortable",
  minPx = 28,
  maxPx = 148,
}: VoiceSpectrumBarsProps) {
  const reduceMotion = useReducedMotion();
  const gap = density === "airy" ? "gap-[3px] sm:gap-1" : "gap-1 sm:gap-1.5";
  const width = density === "airy" ? "w-0.5 sm:w-1" : "w-1 sm:w-1.5";

  const norms = useMemo(
    () => Array.from({ length: bars }, (_, i) => barPattern(i, bars)),
    [bars],
  );

  const refs = useRef<(HTMLSpanElement | null)[]>([]);
  const t0 = useRef<number | null>(null);

  useEffect(() => {
    refs.current.length = bars;
  }, [bars]);

  useEffect(() => {
    if (reduceMotion) {
      norms.forEach((norm, i) => {
        const el = refs.current[i];
        if (!el) return;
        const h = minPx + norm * (maxPx - minPx) * 0.72;
        el.style.height = `${Math.round(h)}px`;
      });
      return;
    }

    let id = 0;
    const tick = (now: number) => {
      if (t0.current === null) t0.current = now;
      const t = (now - t0.current) / 1000;
      for (let i = 0; i < bars; i++) {
        const el = refs.current[i];
        if (!el) continue;
        const s = speechLevel(t, i, norms[i]);
        const px = minPx + s * (maxPx - minPx);
        el.style.height = `${Math.round(px)}px`;
      }
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(id);
      t0.current = null;
    };
  }, [bars, norms, reduceMotion, minPx, maxPx]);

  return (
    <div
      className={cn("flex items-end justify-center", gap, maxHeightClass, className)}
      aria-hidden
    >
      {norms.map((norm, i) => {
        const mid = Math.abs(i / Math.max(1, bars - 1) - 0.5) < 0.36;
        const hStatic = Math.round(minPx + norm * (maxPx - minPx) * 0.65);
        return (
          <span
            key={i}
            ref={(el) => {
              refs.current[i] = el;
            }}
            style={{ height: reduceMotion ? hStatic : minPx }}
            className={cn(
              width,
              "shrink-0 origin-bottom rounded-full will-change-[height]",
              "bg-gradient-to-t transition-[opacity] duration-300",
              mid
                ? "from-foreground/[0.1] via-foreground/30 to-[#0070f3]/35"
                : "from-foreground/[0.08] via-foreground/22 to-foreground/[0.18]",
            )}
          />
        );
      })}
    </div>
  );
}

export function VoiceSpectrumHeroDecor({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();
  const bars = 56;
  const norms = useMemo(
    () => Array.from({ length: bars }, (_, i) => barPattern(i, bars)),
    [bars],
  );

  const refs = useRef<(HTMLSpanElement | null)[]>([]);
  const t0 = useRef<number | null>(null);

  useEffect(() => {
    refs.current.length = bars;
  }, [bars]);

  useEffect(() => {
    if (reduceMotion) {
      norms.forEach((norm, i) => {
        const el = refs.current[i];
        if (!el) return;
        el.style.height = `${Math.round(26 + norm * 58)}%`;
      });
      return;
    }

    let id = 0;
    const tick = (now: number) => {
      if (t0.current === null) t0.current = now;
      const t = (now - t0.current) / 1000;
      for (let i = 0; i < bars; i++) {
        const el = refs.current[i];
        if (!el) continue;
        const s = speechLevel(t * 0.92, i, norms[i]);
        const pct = 18 + s * 82;
        el.style.height = `${Math.min(96, Math.round(pct))}%`;
      }
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(id);
      t0.current = null;
    };
  }, [bars, norms, reduceMotion]);

  return (
    <div
      className={cn(
        "pointer-events-none absolute right-0 top-[42%] hidden -translate-y-1/2 lg:block",
        "w-[min(46vw,560px)] max-w-2xl",
        className,
      )}
      aria-hidden
    >
      <div
        className="relative flex h-[min(62vh,500px)] items-end justify-end gap-1.5 pr-2 opacity-[0.32] sm:opacity-[0.4]"
        style={{
          maskImage: "linear-gradient(to left, black 58%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to left, black 58%, transparent 100%)",
        }}
      >
        <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-foreground/18 to-transparent" />

        {norms.map((norm, i) => {
          const accent = i % 9 === 4 || i % 9 === 5;
          const h0 = `${Math.round(22 + norm * 52)}%`;
          return (
            <span
              key={i}
              ref={(el) => {
                refs.current[i] = el;
              }}
              style={{ height: reduceMotion ? h0 : "22%" }}
              className={cn(
                "w-0.5 shrink-0 rounded-full sm:w-1",
                "bg-gradient-to-t",
                accent
                  ? "from-foreground/[0.08] via-foreground/28 to-[#0070f3]/32"
                  : "from-foreground/[0.04] via-foreground/20 to-foreground/[0.12]",
              )}
            />
          );
        })}
      </div>

      <div className="pointer-events-none absolute -right-12 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-foreground/[0.055] blur-3xl" />
    </div>
  );
}
