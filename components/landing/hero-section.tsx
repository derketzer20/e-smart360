"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import { AnimatedSphere } from "./animated-sphere";

const platforms = ["WhatsApp", "Instagram", "Facebook", "Telegram", "Webchat"];

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [platformIndex, setPlatformIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlatformIndex((prev) => (prev + 1) % platforms.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Animated sphere */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] opacity-40 pointer-events-none">
        <AnimatedSphere />
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-foreground/10"
            style={{ top: `${12.5 * (i + 1)}%`, left: 0, right: 0 }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-foreground/10"
            style={{ left: `${8.33 * (i + 1)}%`, top: 0, bottom: 0 }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-40">
        {/* Eyebrow */}
        <div
          className={`mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground">
            <span className="w-8 h-px bg-foreground/30" />
            META Business Partner Oficial
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          </span>
        </div>

        {/* Main headline */}
        <div className="mb-10">
          <h1
            className={`text-[clamp(2.8rem,9vw,8.5rem)] font-display leading-[0.9] tracking-tight transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block">La IA que</span>
            <span className="block">Ejecuta.</span>
            <span className="block mt-2 text-[clamp(1.6rem,5vw,5rem)] text-muted-foreground font-light">
              Chatbots y Agentes de Voz
            </span>
            <span className="block text-[clamp(1.6rem,5vw,5rem)] text-muted-foreground font-light">
              para tu Negocio
            </span>
          </h1>
        </div>

        {/* Rotating platform badge */}
        <div
          className={`mb-10 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="inline-flex items-center gap-3 border border-foreground/10 rounded-full px-4 py-2 bg-background/50 backdrop-blur-sm">
            <span className="text-sm text-muted-foreground">Automatiza en</span>
            <span
              key={platformIndex}
              className="text-sm font-medium text-foreground animate-char-in"
            >
              {platforms[platformIndex]}
            </span>
            <span className="w-px h-4 bg-foreground/20" />
            {platforms.map((_, i) => (
              <span
                key={i}
                className={`w-1 h-1 rounded-full transition-all duration-300 ${
                  i === platformIndex ? "bg-foreground" : "bg-foreground/20"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Description + CTAs */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end">
          <p
            className={`text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Automatiza el ciclo de vida completo del cliente: desde la captación
            y el soporte hasta el cobro y el seguimiento. Sin riesgo de bloqueo,
            con respaldo oficial de Meta.
          </p>

          <div
            className={`flex flex-col sm:flex-row items-start gap-4 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group"
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
              className="h-14 px-8 text-base rounded-full border-foreground/20 hover:bg-foreground/5"
              asChild
            >
              <a href="#pricing">Ver Planes</a>
            </Button>
          </div>
        </div>

        {/* Trust badges */}
        <div
          className={`mt-16 flex flex-wrap items-center gap-6 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Shield className="w-4 h-4" />
            Garantía de respaldo 30 días
          </div>
          <span className="w-px h-4 bg-foreground/20" />
          <div className="text-sm text-muted-foreground">
            +100K usuarios en la plataforma
          </div>
          <span className="w-px h-4 bg-foreground/20" />
          <div className="text-sm text-muted-foreground">
            API Oficial de Meta
          </div>
        </div>
      </div>

      {/* Stats marquee */}
      <div
        className={`absolute bottom-20 left-0 right-0 transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex gap-16 marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16">
              {[
                { value: "+100K", label: "usuarios activos", company: "GLOBAL" },
                { value: "24/7", label: "atención automatizada", company: "SIEMPRE" },
                { value: "5 min", label: "tiempo de configuración", company: "RÁPIDO" },
                { value: "0%", label: "comisiones extra", company: "TRANSPARENTE" },
              ].map((stat) => (
                <div key={`${stat.company}-${i}`} className="flex items-baseline gap-4">
                  <span className="text-4xl lg:text-5xl font-display">{stat.value}</span>
                  <span className="text-sm text-muted-foreground">
                    {stat.label}
                    <span className="block font-mono text-xs mt-1">{stat.company}</span>
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
