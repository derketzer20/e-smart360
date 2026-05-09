"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ChevronDown,
  MessageSquare,
  Phone,
  Video,
  CreditCard,
  Layers,
  Inbox,
  Megaphone,
  Workflow,
  Users,
  HeartPulse,
  ShoppingCart,
  GraduationCap,
  Building2,
  Zap,
  BookOpen,
  FileText,
  Handshake,
  ArrowRight,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const productItems = [
  {
    icon: MessageSquare,
    label: "Chatbots Omnicanal",
    description: "WhatsApp, Facebook, Instagram y más",
    href: "#",
    featured: true,
  },
  {
    icon: Phone,
    label: "Agentes de Voz IA",
    description: "Llamadas telefónicas inteligentes 24/7",
    href: "#",
    featured: true,
  },
  {
    icon: Video,
    label: "Oficina Virtual",
    description: "Videollamadas y agendamiento integrado",
    href: "#",
    featured: false,
  },
  {
    icon: CreditCard,
    label: "Tarjetas Digitales NFC",
    description: "Networking profesional con IA",
    href: "#",
    featured: false,
  },
];

const featureItems = [
  { icon: Workflow, label: "Constructor de Flujos", href: "#features" },
  { icon: Inbox, label: "Bandeja Omnicanal Unificada", href: "#features" },
  { icon: Phone, label: "Embudos de Voz IA", href: "#features" },
  { icon: Megaphone, label: "Campañas Masivas", href: "#features" },
  { icon: Layers, label: "Análisis IQ con IA", href: "#features" },
  { icon: Zap, label: "Webhooks e Integraciones", href: "#features" },
];

type CasoDeUso = { title: string; slug: string };

/**
 * Mapa slug → ícono para los casos de uso por industria. Los slugs no
 * incluidos caen al ícono por defecto (`Building2`). Mantener este mapa aquí
 * permite que el JSX siga consumiendo la misma forma `{ icon, label, href }`
 * sin alterar el diseño base.
 */
const INDUSTRY_ICON_BY_SLUG: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  "fitness-wellness": HeartPulse,
  "retail-e-commerce": ShoppingCart,
  "education-training": GraduationCap,
  "real-estate": Building2,
  "home-services": Building2,
  "automotive-services": Building2,
  "food-hospitality": Building2,
  "professional-services": Building2,
};

const integrationItems = [
  { label: "WhatsApp / Meta", href: "#" },
  { label: "Shopify & WooCommerce", href: "#" },
  { label: "Google Sheets & Calendar", href: "#" },
  { label: "Stripe & PayPal", href: "#" },
  { label: "Zapier & Make (n8n)", href: "#" },
  { label: "Twilio SMS", href: "#" },
];

const resourceItems = [
  { icon: BookOpen, label: "Documentación", href: "#" },
  { icon: FileText, label: "Blog", href: "#" },
  { icon: Handshake, label: "Programa de Agencias", href: "#" },
];

/* ------------------------------------------------------------------ */
/*  Mega-dropdown component                                            */
/* ------------------------------------------------------------------ */

function MegaDropdown({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50">
      <div className="bg-background/95 backdrop-blur-2xl border border-foreground/10 rounded-2xl shadow-2xl shadow-black/20 overflow-hidden min-w-[520px]">
        {children}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Navigation                                                         */
/* ------------------------------------------------------------------ */

export function Navigation({
  casosDeUso = [],
}: {
  casosDeUso?: CasoDeUso[];
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileSections, setMobileSections] = useState<Record<string, boolean>>({});
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Inyección de datos: los enlaces estáticos previos se reemplazan por
  // metadatos extraídos en build-time desde `content/casos-de-uso/*.md`.
  // Mantenemos las MISMAS formas (`{label, href}` y `{icon, label, href}`)
  // para no alterar el JSX ni las clases Tailwind del diseño base.
  const useCasesDept = casosDeUso
    .filter((c) => c.slug.startsWith("ai-"))
    .map((c) => ({
      label: c.title,
      href: `/casos-de-uso/${c.slug}`,
    }));

  const useCasesIndustry = casosDeUso
    .filter((c) => !c.slug.startsWith("ai-"))
    .map((c) => ({
      icon: INDUSTRY_ICON_BY_SLUG[c.slug] ?? Building2,
      label: c.title,
      href: `/casos-de-uso/${c.slug}`,
    }));

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openMenu = (name: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(name);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 150);
  };

  const toggleMobileSection = (key: string) =>
    setMobileSections((prev) => ({ ...prev, [key]: !prev[key] }));

  const navItems = [
    { key: "plataforma", label: "Plataforma" },
    { key: "caracteristicas", label: "Características" },
    { key: "casos", label: "Casos de Uso" },
    { key: "integraciones", label: "Integraciones" },
    { key: "recursos", label: "Recursos" },
  ];

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ${
        isScrolled ? "top-4 left-4 right-4" : "top-0 left-0 right-0"
      }`}
    >
      <nav
        className={`mx-auto transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? "bg-background/80 backdrop-blur-xl border border-foreground/10 rounded-2xl shadow-lg max-w-[1200px]"
            : "bg-transparent max-w-[1400px]"
        }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-500 px-6 lg:px-8 ${
            isScrolled ? "h-14" : "h-20"
          }`}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            <span
              className={`font-display tracking-tight transition-all duration-500 ${
                isScrolled ? "text-xl" : "text-2xl"
              }`}
            >
              E-SMART360
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.key}
                className="relative"
                onMouseEnter={() => openMenu(item.key)}
                onMouseLeave={scheduleClose}
              >
                <button
                  className={`flex items-center gap-1 px-3 py-2 text-sm rounded-lg transition-colors ${
                    activeMenu === item.key
                      ? "text-foreground bg-foreground/5"
                      : "text-foreground/70 hover:text-foreground hover:bg-foreground/5"
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeMenu === item.key ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Plataforma dropdown */}
                {item.key === "plataforma" && activeMenu === "plataforma" && (
                  <MegaDropdown>
                    <div className="p-6">
                      <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
                        Productos
                      </p>
                      <div className="space-y-1">
                        {productItems.map((p) => (
                          <a
                            key={p.label}
                            href={p.href}
                            className={`flex items-start gap-3 p-3 rounded-xl hover:bg-foreground/5 transition-colors group ${
                              p.featured ? "border border-foreground/10" : ""
                            }`}
                          >
                            <div
                              className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                                p.featured
                                  ? "bg-foreground text-background"
                                  : "bg-foreground/10 text-foreground"
                              }`}
                            >
                              <p.icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-foreground group-hover:text-foreground flex items-center gap-2">
                                {p.label}
                                {p.featured && (
                                  <span className="text-[10px] px-1.5 py-0.5 bg-foreground text-background font-mono rounded">
                                    CORE
                                  </span>
                                )}
                              </div>
                              <div className="text-xs text-muted-foreground mt-0.5">
                                {p.description}
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </MegaDropdown>
                )}

                {/* Características dropdown */}
                {item.key === "caracteristicas" && activeMenu === "caracteristicas" && (
                  <MegaDropdown>
                    <div className="p-6">
                      <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
                        Funciones clave
                      </p>
                      <div className="grid grid-cols-2 gap-1">
                        {featureItems.map((f) => (
                          <a
                            key={f.label}
                            href={f.href}
                            className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-foreground/5 transition-colors group"
                          >
                            <f.icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
                            <span className="text-sm text-foreground/80 group-hover:text-foreground transition-colors">
                              {f.label}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </MegaDropdown>
                )}

                {/* Casos de Uso dropdown */}
                {item.key === "casos" && activeMenu === "casos" && (
                  <MegaDropdown>
                    <div className="p-6 grid grid-cols-2 gap-6">
                      <div>
                        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
                          Por Departamento
                        </p>
                        <div className="space-y-1">
                          {useCasesDept.map((d) => (
                            <a
                              key={d.label}
                              href={d.href}
                              className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-foreground/5 transition-colors group"
                            >
                              <span className="text-sm text-foreground/80 group-hover:text-foreground">
                                {d.label}
                              </span>
                              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1 group-hover:translate-x-0 transition-transform" />
                            </a>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
                          Por Industria
                        </p>
                        <div className="space-y-1">
                          {useCasesIndustry.map((ind) => (
                            <a
                              key={ind.label}
                              href={ind.href}
                              className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-foreground/5 transition-colors group"
                            >
                              <ind.icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
                              <span className="text-sm text-foreground/80 group-hover:text-foreground">
                                {ind.label}
                              </span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </MegaDropdown>
                )}

                {/* Integraciones dropdown */}
                {item.key === "integraciones" && activeMenu === "integraciones" && (
                  <MegaDropdown>
                    <div className="p-6">
                      <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
                        Conecta tus herramientas
                      </p>
                      <div className="grid grid-cols-2 gap-1">
                        {integrationItems.map((it) => (
                          <a
                            key={it.label}
                            href={it.href}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-foreground/5 transition-colors group"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 group-hover:bg-foreground transition-colors shrink-0" />
                            <span className="text-sm text-foreground/80 group-hover:text-foreground">
                              {it.label}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </MegaDropdown>
                )}

                {/* Recursos dropdown */}
                {item.key === "recursos" && activeMenu === "recursos" && (
                  <MegaDropdown>
                    <div className="p-6">
                      <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
                        Recursos
                      </p>
                      <div className="space-y-1">
                        {resourceItems.map((r) => (
                          <a
                            key={r.label}
                            href={r.href}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-foreground/5 transition-colors group"
                          >
                            <r.icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                            <span className="text-sm text-foreground/80 group-hover:text-foreground">
                              {r.label}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </MegaDropdown>
                )}
              </div>
            ))}

            {/* Precios - enlace directo */}
            <a
              href="#pricing"
              className="px-3 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-foreground/5 rounded-lg transition-colors"
            >
              Precios
            </a>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://app.e-smart360.com/login"
              className={`text-foreground/70 hover:text-foreground transition-all duration-300 ${
                isScrolled ? "text-xs" : "text-sm"
              }`}
            >
              Iniciar Sesión
            </a>
            <Button
              size="sm"
              className={`bg-foreground hover:bg-foreground/90 text-background rounded-full transition-all duration-300 ${
                isScrolled ? "px-4 h-8 text-xs" : "px-5"
              }`}
              asChild
            >
              <a href="https://www.e-smart360.com/demo">Comienza Gratis</a>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Abrir menú"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-background z-40 transition-all duration-500 overflow-y-auto ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-6 pt-28 pb-12">
          {/* Sections */}
          {[
            { key: "plataforma", label: "Plataforma", items: productItems.map((p) => ({ label: p.label, href: p.href })) },
            { key: "caracteristicas", label: "Características", items: featureItems.map((f) => ({ label: f.label, href: f.href })) },
            { key: "integraciones", label: "Integraciones", items: integrationItems },
            { key: "recursos", label: "Recursos", items: resourceItems.map((r) => ({ label: r.label, href: r.href })) },
          ].map((section, i) => (
            <div key={section.key} className="border-b border-foreground/10 py-4">
              <button
                onClick={() => toggleMobileSection(section.key)}
                className={`flex items-center justify-between w-full text-left transition-all duration-500 ${
                  isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? `${i * 50}ms` : "0ms" }}
              >
                <span className="text-xl font-display">{section.label}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
                    mobileSections[section.key] ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileSections[section.key] && (
                <div className="mt-3 space-y-1 pl-2">
                  {section.items.map((it) => (
                    <a
                      key={it.label}
                      href={it.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span className="w-1 h-1 rounded-full bg-foreground/30" />
                      {it.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="border-b border-foreground/10 py-4">
            <a
              href="#pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-xl font-display"
            >
              Precios
            </a>
          </div>

          {/* CTAs */}
          <div className="flex gap-4 pt-8">
            <Button
              variant="outline"
              className="flex-1 rounded-full h-14 text-base"
              onClick={() => setIsMobileMenuOpen(false)}
              asChild
            >
              <a href="https://app.e-smart360.com/login">Iniciar Sesión</a>
            </Button>
            <Button
              className="flex-1 bg-foreground text-background rounded-full h-14 text-base"
              onClick={() => setIsMobileMenuOpen(false)}
              asChild
            >
              <a href="https://www.e-smart360.com/demo">Comienza Gratis</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
