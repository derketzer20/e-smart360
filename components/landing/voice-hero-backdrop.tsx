"use client";

import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { barPattern, speechLevel } from "@/components/landing/voice-spectrum";

const ACCENT_RGB = "0,112,243";

/** Intensidad de color del espectro (alphas × factor, tope 1). */
const SPECTRUM_COLOR_INTENSITY = 6;

function mulA(a: number): number {
  return Math.min(1, a * SPECTRUM_COLOR_INTENSITY);
}

/** Opacidad global del bloque decorativo (sube sin tapar del todo el hero). */
function mulWrapOpacity(v: number): number {
  return Math.min(0.97, v * 2.65);
}

export type VoiceHeroBackdropVariant = "prism" | "chromatic" | "field";

function resolveVariant(prop?: VoiceHeroBackdropVariant): VoiceHeroBackdropVariant {
  const v = process.env.NEXT_PUBLIC_VOICE_HERO_VARIANT;
  if (v === "prism" || v === "chromatic" || v === "field") return v;
  return prop ?? "field";
}

/* -------------------------------------------------------------------------- */
/*  Prism: capas DOM + perspectiva + “ghost” desfasado (profundidad real).    */
/* -------------------------------------------------------------------------- */

function PrismLayer({
  bars,
  norms,
  reduceMotion,
  opacityClass,
  gapClass,
  barWidthClass,
}: {
  bars: number;
  norms: number[];
  reduceMotion: boolean | null;
  opacityClass: string;
  gapClass: string;
  barWidthClass: string;
}) {
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
        el.style.height = `${Math.round(20 + norm * 72)}%`;
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
        const s = speechLevel(t * 0.88, i, norms[i]!);
        const pct = 14 + s * 86;
        el.style.height = `${Math.min(98, Math.round(pct))}%`;
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
      className={cn("flex h-full min-h-[220px] items-end justify-center", gapClass, opacityClass)}
    >
      {norms.map((norm, i) => {
        const hot = Math.abs(i / Math.max(1, bars - 1) - 0.5) < 0.38;
        const h0 = `${Math.round(18 + norm * 62)}%`;
        return (
          <span
            key={i}
            ref={(el) => {
              refs.current[i] = el;
            }}
            style={{
              height: reduceMotion ? h0 : "18%",
              boxShadow: hot
                ? `0 0 22px rgba(${ACCENT_RGB},${mulA(0.35)}), 0 0 48px rgba(${ACCENT_RGB},${mulA(0.12)}), 0 0 80px rgba(${ACCENT_RGB},${mulA(0.06)})`
                : `0 0 12px rgba(15,23,42,${mulA(0.06)})`,
            }}
            className={cn(
              barWidthClass,
              "shrink-0 origin-bottom rounded-full will-change-[height]",
              "bg-gradient-to-t",
              hot
                ? "from-foreground/[0.38] via-foreground/75 to-[#0070f3]/95"
                : "from-foreground/[0.28] via-foreground/65 to-foreground/55",
            )}
          />
        );
      })}
    </div>
  );
}

function VoiceHeroBackdropPrism({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();
  const bars = 64;
  const norms = useMemo(
    () => Array.from({ length: bars }, (_, i) => barPattern(i, bars)),
    [bars],
  );

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      style={{ opacity: mulWrapOpacity(0.42) }}
      aria-hidden
    >
      <div
        className="absolute inset-x-[-8%] bottom-[-18%] top-[28%] sm:bottom-[-12%]"
        style={{
          maskImage:
            "radial-gradient(ellipse 85% 75% at 50% 100%, black 0%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 75% at 50% 100%, black 0%, transparent 72%)",
        }}
      >
        <div
          className="relative mx-auto flex h-full max-w-5xl justify-center"
          style={{ perspective: "1100px" }}
        >
          {/* Capa fantasma (profundidad) */}
          <div
            className="absolute inset-0 flex items-end justify-center"
            style={{
              transform: "rotateX(26deg) rotateY(-10deg) translateZ(-40px) scale(0.94)",
              transformStyle: "preserve-3d",
            }}
          >
            <PrismLayer
              bars={bars}
              norms={norms}
              reduceMotion={reduceMotion}
              opacityClass="opacity-[0.58]"
              gapClass="gap-0.5 sm:gap-1"
              barWidthClass="w-[3px] sm:w-1"
            />
          </div>
          {/* Capa principal */}
          <div
            className="relative flex h-full w-full max-w-4xl items-end justify-center px-4"
            style={{
              transform: "rotateX(18deg) rotateY(-6deg)",
              transformStyle: "preserve-3d",
            }}
          >
            <PrismLayer
              bars={bars}
              norms={norms}
              reduceMotion={reduceMotion}
              opacityClass="opacity-100"
              gapClass="gap-1 sm:gap-1.5"
              barWidthClass="w-0.5 sm:w-1"
            />
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-[8%] left-1/2 h-48 w-[min(92vw,780px)] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          opacity: mulA(0.5),
          background: `radial-gradient(ellipse at center, rgba(${ACCENT_RGB},${mulA(0.16)}) 0%, rgba(${ACCENT_RGB},${mulA(0.06)}) 42%, transparent 68%)`,
        }}
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Chromatic: canvas 2D, acumulación tipo bloom (sin dependencias extra).   */
/* -------------------------------------------------------------------------- */

function VoiceHeroBackdropChromatic({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const t0 = useRef<number | null>(null);
  const bars = 72;
  const norms = useMemo(
    () => Array.from({ length: bars }, (_, i) => barPattern(i, bars)),
    [bars],
  );

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const ro = new ResizeObserver(() => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { width, height } = wrap.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      canvas.style.width = `${Math.floor(width)}px`;
      canvas.style.height = `${Math.floor(height)}px`;
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    });
    ro.observe(wrap);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (reduceMotion) {
      const drawStatic = () => {
        const w = canvas.clientWidth;
        const h = canvas.clientHeight;
        if (w < 2 || h < 2) return;
        ctx.clearRect(0, 0, w, h);
        const bw = w / bars;
        for (let i = 0; i < bars; i++) {
          const norm = norms[i]!;
          const s = norm * 0.62;
          const bh = Math.max(8, s * h * 0.55);
          const x = i * bw + bw * 0.22;
          const gw = bw * 0.56;
          const g = ctx.createLinearGradient(x, h, x, h - bh);
          g.addColorStop(0, `rgba(${ACCENT_RGB},${mulA(0.05)})`);
          g.addColorStop(0.45, `rgba(${ACCENT_RGB},${mulA(0.22)})`);
          g.addColorStop(1, `rgba(6,182,212,${mulA(0.28)})`);
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.roundRect(x, h - bh, gw, bh, gw / 2);
          ctx.fill();
        }
      };
      drawStatic();
      const ro = new ResizeObserver(drawStatic);
      if (wrapRef.current) ro.observe(wrapRef.current);
      return () => ro.disconnect();
    }

    let id = 0;
    const tick = (now: number) => {
      if (t0.current === null) t0.current = now;
      const t = (now - t0.current) / 1000;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (w > 2 && h > 2) {
        ctx.clearRect(0, 0, w, h);
        const bw = w / bars;
        const scan = (Math.sin(t * 0.7) * 0.5 + 0.5) * bars;

        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        for (let pass = 0; pass < 2; pass++) {
          ctx.filter = pass === 0 ? "blur(10px)" : "none";
          for (let i = 0; i < bars; i++) {
            const norm = norms[i]!;
            const s = speechLevel(t * 0.95, i, norm);
            const proximity = 1 - Math.min(1, Math.abs(i - scan) / 14);
            const boost = 0.78 + proximity * 0.35;
            const bh = Math.max(10, s * h * 0.62 * boost);
            const x = i * bw + bw * 0.18;
            const gw = bw * (pass === 0 ? 0.72 : 0.5);
            const g = ctx.createLinearGradient(x, h, x, h - bh);
            const a0 = mulA(pass === 0 ? 0.08 : 0.12);
            const a1 = mulA(pass === 0 ? 0.18 : 0.42);
            g.addColorStop(0, `rgba(15,23,42,${a0})`);
            g.addColorStop(0.35, `rgba(${ACCENT_RGB},${a1})`);
            g.addColorStop(1, `rgba(34,211,238,${mulA(pass === 0 ? 0.12 : 0.35)})`);
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.roundRect(x, h - bh, gw, bh, Math.min(gw / 2, 10));
            ctx.fill();
          }
        }
        ctx.restore();
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
      ref={wrapRef}
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      style={{ opacity: mulWrapOpacity(0.4) }}
      aria-hidden
    >
      <canvas
        ref={canvasRef}
        className="h-full w-full"
        style={{
          maskImage:
            "linear-gradient(to top, transparent 0%, black 18%, black 62%, transparent 92%), radial-gradient(ellipse 90% 70% at 50% 100%, black 0%, transparent 75%)",
          WebkitMaskImage:
            "linear-gradient(to top, transparent 0%, black 18%, black 62%, transparent 92%), radial-gradient(ellipse 90% 70% at 50% 100%, black 0%, transparent 75%)",
        }}
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Field: ondas + espectro (osciloscopio “broadcast” premium).                */
/* -------------------------------------------------------------------------- */

function VoiceHeroBackdropField({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const t0 = useRef<number | null>(null);
  const bars = 56;
  const norms = useMemo(
    () => Array.from({ length: bars }, (_, i) => barPattern(i, bars)),
    [bars],
  );

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ro = new ResizeObserver(() => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { width, height } = wrap.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      canvas.style.width = `${Math.floor(width)}px`;
      canvas.style.height = `${Math.floor(height)}px`;
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    });
    ro.observe(wrap);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (reduceMotion) {
      const drawStatic = () => {
        const w = canvas.clientWidth;
        const h = canvas.clientHeight;
        if (w < 2 || h < 2) return;
        ctx.clearRect(0, 0, w, h);
        const mid = h * 0.42;
        ctx.strokeStyle = `rgba(${ACCENT_RGB},${mulA(0.2)})`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        for (let x = 0; x < w; x += 4) {
          const t = x / w;
          const y = mid + Math.sin(t * Math.PI * 6) * h * 0.04;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      };
      drawStatic();
      const ro = new ResizeObserver(drawStatic);
      if (wrapRef.current) ro.observe(wrapRef.current);
      return () => ro.disconnect();
    }

    let id = 0;
    const tick = (now: number) => {
      if (t0.current === null) t0.current = now;
      const t = (now - t0.current) / 1000;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (w < 2 || h < 2) {
        id = requestAnimationFrame(tick);
        return;
      }
      ctx.clearRect(0, 0, w, h);

      const baseY = h * 0.38;
      const lines = 5;
      ctx.lineWidth = 1.65;
      for (let L = 0; L < lines; L++) {
        const phase = t * (1.1 + L * 0.17) + L * 0.9;
        const amp = h * (0.028 + L * 0.011);
        ctx.beginPath();
        ctx.strokeStyle = `rgba(${ACCENT_RGB},${mulA(0.07 + L * 0.045)})`;
        for (let x = 0; x <= w; x += 3) {
          const nx = x / w;
          const y =
            baseY +
            L * 14 +
            Math.sin(nx * Math.PI * 7 + phase) * amp +
            Math.sin(nx * Math.PI * 14 - phase * 1.3) * amp * 0.35;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      const barW = w / bars;
      const floor = h * 0.92;
      const maxBarH = h * 0.42;
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      for (let i = 0; i < bars; i++) {
        const norm = norms[i]!;
        const s = speechLevel(t * 0.9, i, norm);
        const bh = 12 + s * maxBarH;
        const x = i * barW + barW * 0.2;
        const bw = barW * 0.48;
        const g = ctx.createLinearGradient(x, floor, x, floor - bh);
        g.addColorStop(0, `rgba(15,23,42,${mulA(0.04)})`);
        g.addColorStop(0.5, `rgba(${ACCENT_RGB},${mulA(0.28)})`);
        g.addColorStop(1, `rgba(34,211,238,${mulA(0.32)})`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.roundRect(x, floor - bh, bw, bh, bw / 2);
        ctx.fill();
      }
      ctx.restore();

      const grd = ctx.createRadialGradient(w * 0.5, h * 0.55, 0, w * 0.5, h * 0.55, w * 0.55);
      grd.addColorStop(0, `rgba(${ACCENT_RGB},${mulA(0.07)})`);
      grd.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, w, h);

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
      ref={wrapRef}
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      style={{ opacity: mulWrapOpacity(0.42) }}
      aria-hidden
    >
      <canvas
        ref={canvasRef}
        className="h-full w-full"
        style={{
          maskImage:
            "radial-gradient(ellipse 100% 85% at 50% 45%, black 0%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 100% 85% at 50% 45%, black 0%, transparent 72%)",
        }}
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  API pública                                                                */
/* -------------------------------------------------------------------------- */

export type VoiceHeroBackdropProps = {
  /**
   * - `prism`: barras con perspectiva 3D y capa fantasma (DOM).
   * - `chromatic`: espectro con bloom en canvas (acumulación “lighter”).
   * - `field`: ondas tipo broadcast + espectro inferior (canvas).
   *
   * Override opcional: `NEXT_PUBLIC_VOICE_HERO_VARIANT=prism|chromatic|field`
   */
  variant?: VoiceHeroBackdropVariant;
  className?: string;
};

export function VoiceHeroBackdrop({ variant: variantProp, className }: VoiceHeroBackdropProps) {
  const v = resolveVariant(variantProp);
  switch (v) {
    case "prism":
      return <VoiceHeroBackdropPrism className={className} />;
    case "chromatic":
      return <VoiceHeroBackdropChromatic className={className} />;
    case "field":
    default:
      return <VoiceHeroBackdropField className={className} />;
  }
}
