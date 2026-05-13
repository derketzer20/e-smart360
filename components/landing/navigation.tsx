"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DEMO_HREF } from "@/lib/demo-href";
import { useI18n } from "@/components/i18n/i18n-provider";
import { LocaleSwitcher } from "@/components/i18n/locale-switcher";
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

const PRODUCT_DEFS = [
  {
    id: "chatbots" as const,
    icon: MessageSquare,
    href: "/plataforma/chatbots-omnicanal",
    featured: true,
  },
  {
    id: "voice" as const,
    icon: Phone,
    href: "/plataforma/agente-voz-ia",
    featured: true,
  },
  {
    id: "nfc" as const,
    icon: CreditCard,
    href: "/plataforma/tarjetas-digitales-nfc",
    featured: true,
  },
  {
    id: "virtual" as const,
    icon: Video,
    href: "/plataforma/oficina-virtual",
    featured: false,
  },
];

const FEATURE_DEFS = [
  { id: "flows" as const, icon: Workflow, href: "/plataforma/chatbots-omnicanal" },
  { id: "inbox" as const, icon: Inbox, href: "/plataforma/chatbots-omnicanal" },
  { id: "voiceFunnels" as const, icon: Phone, href: "/plataforma/agente-voz-ia" },
  { id: "campaigns" as const, icon: Megaphone, href: "#features" },
  { id: "iq" as const, icon: Layers, href: "#features" },
  { id: "webhooks" as const, icon: Zap, href: "#features" },
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

const INTEGRATION_DEFS = [
  { id: "wa" as const, href: "#" },
  { id: "shop" as const, href: "#" },
  { id: "sheets" as const, href: "#" },
  { id: "pay" as const, href: "#" },
  { id: "zap" as const, href: "#" },
  { id: "twilio" as const, href: "#" },
];

const RESOURCE_DEFS = [
  { id: "docs" as const, icon: BookOpen, href: "/docs" },
  { id: "blog" as const, icon: FileText, href: "#" },
  {
    id: "agency" as const,
    icon: Handshake,
    href: "https://www.e-smart360.com/precios-pro",
  },
];

/**
 * Enlaces a wireframes `/previsualizar/*`:
 * - `next run dev`: visibles por defecto (para que no dependan de .env).
 * - `next build` + producción: ocultos salvo `NEXT_PUBLIC_SHOW_WIREFRAMES=true`.
 * - Forzar ocultar en local: `NEXT_PUBLIC_SHOW_WIREFRAMES=false`.
 */
function showWireframeNav(): boolean {
  if (process.env.NEXT_PUBLIC_SHOW_WIREFRAMES === "false") return false;
  if (process.env.NEXT_PUBLIC_SHOW_WIREFRAMES === "true") return true;
  return process.env.NODE_ENV === "development";
}

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
  ctaClassName,
}: {
  casosDeUso?: CasoDeUso[];
  /** Estilo opcional del CTA principal (p. ej. acento azul en landing de producto). */
  ctaClassName?: string;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileSections, setMobileSections] = useState<Record<string, boolean>>({});
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { t } = useI18n();

  const productItems = useMemo(
    () =>
      PRODUCT_DEFS.map((d) => ({
        ...d,
        label: t(`products.${d.id}.label`),
        description: t(`products.${d.id}.description`),
      })),
    [t],
  );

  const featureItems = useMemo(
    () =>
      FEATURE_DEFS.map((f) => ({
        ...f,
        label: t(`features.${f.id}`),
      })),
    [t],
  );

  const integrationItems = useMemo(
    () =>
      INTEGRATION_DEFS.map((i) => ({
        href: i.href,
        label: t(`integrations.${i.id}`),
      })),
    [t],
  );

  const resourceItems = useMemo(
    () =>
      RESOURCE_DEFS.map((r) => ({
        icon: r.icon,
        href: r.href,
        label: t(`resources.${r.id}`),
      })),
    [t],
  );

  const navItems = useMemo(
    () => [
      { key: "plataforma", label: t("nav.platform") },
      { key: "caracteristicas", label: t("nav.features") },
      { key: "casos", label: t("nav.cases") },
      { key: "integraciones", label: t("nav.integrations") },
      { key: "recursos", label: t("nav.resources") },
    ],
    [t],
  );

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

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const openMenu = (name: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(name);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 150);
  };

  const toggleMobileSection = (key: string) =>
    setMobileSections((prev) => ({ ...prev, [key]: !prev[key] }));

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
          className={`flex items-center justify-between transition-all duration-500 px-5 sm:px-6 lg:px-5 xl:px-8 ${
            isScrolled ? "h-14" : "h-20"
          }`}
        >
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 shrink-0">
            <span
              className={`font-display tracking-tight transition-all duration-500 ${
                isScrolled ? "text-xl" : "text-xl xl:text-2xl"
              }`}
            >
              E-SMART360
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0 xl:gap-1">
            {navItems.map((item) => (
              <div
                key={item.key}
                className="relative"
                onMouseEnter={() => openMenu(item.key)}
                onMouseLeave={scheduleClose}
              >
                <button
                  className={`flex items-center gap-1 rounded-lg px-2 py-2 text-xs transition-colors xl:px-3 xl:text-sm ${
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
                        {t("dropdown.products")}
                      </p>
                      <div className="space-y-1">
                        {productItems.map((p) => (
                          <a
                            key={p.id}
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
                                    {t("nav.core")}
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
                        {t("dropdown.featuresTitle")}
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
                          {t("dropdown.casesDept")}
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
                          {t("dropdown.casesIndustry")}
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
                        {t("dropdown.integrationsTitle")}
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
                        {t("dropdown.resourcesTitle")}
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
              href="/precios"
              className="rounded-lg px-2 py-2 text-xs text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-foreground xl:px-3 xl:text-sm"
            >
              {t("nav.pricing")}
            </a>
            {showWireframeNav() ? (
              <div className="ml-1 flex items-center gap-1.5 border-l border-foreground/10 pl-2 xl:pl-3">
                <span className="hidden text-[10px] font-mono uppercase tracking-wider text-amber-700 dark:text-amber-400 xl:inline">
                  PREV
                </span>
                <a
                  href="/previsualizar/panel-revendedor"
                  className="rounded-lg px-2 py-2 text-xs text-foreground/80 transition-colors hover:bg-amber-500/10 hover:text-foreground xl:px-2.5 xl:text-sm"
                >
                  Revendedor
                </a>
                <span className="text-[10px] text-muted-foreground">|</span>
                <a
                  href="/previsualizar/panel-cliente"
                  className="rounded-lg px-2 py-2 text-xs text-foreground/80 transition-colors hover:bg-amber-500/10 hover:text-foreground xl:px-2.5 xl:text-sm"
                >
                  Cliente
                </a>
              </div>
            ) : null}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3">
            <LocaleSwitcher />
            <a
              href="https://app.e-smart360.com/login"
              className={`text-foreground/70 hover:text-foreground transition-all duration-300 ${
                isScrolled ? "text-xs" : "text-xs xl:text-sm"
              }`}
            >
              {t("nav.login")}
            </a>
            <Button
              size="sm"
              className={cn(
                "bg-foreground hover:bg-foreground/90 text-background rounded-full transition-all duration-300",
                isScrolled ? "px-4 h-8 text-xs" : "px-4 text-xs xl:px-5 xl:text-sm",
                ctaClassName,
              )}
              asChild
            >
              <a href={DEMO_HREF}>{t("nav.cta")}</a>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-full hover:bg-foreground/5 transition-colors"
            aria-label={isMobileMenuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-background z-[60] transition-all duration-500 ease-out overflow-y-auto ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0 scale-100"
            : "opacity-0 pointer-events-none -translate-y-3 scale-[0.985]"
        }`}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-5 bg-background/85 backdrop-blur-xl border-b border-foreground/10">
          <a
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-display text-2xl tracking-tight"
          >
            E-SMART360
          </a>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(false)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-foreground/10 bg-background shadow-sm transition-all duration-300 hover:rotate-90 hover:bg-foreground hover:text-background"
            aria-label={t("nav.closeMenu")}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="px-6 pt-6 pb-12">
          <div className="mb-6 flex justify-end">
            <LocaleSwitcher />
          </div>
          {/* Sections */}
          {[
            {
              key: "plataforma",
              label: t("nav.platform"),
              items: productItems.map((p) => ({ label: p.label, href: p.href })),
            },
            {
              key: "caracteristicas",
              label: t("nav.features"),
              items: featureItems.map((f) => ({ label: f.label, href: f.href })),
            },
            {
              key: "casos",
              label: t("nav.cases"),
              items: [...useCasesDept, ...useCasesIndustry].map((c) => ({ label: c.label, href: c.href })),
            },
            {
              key: "integraciones",
              label: t("nav.integrations"),
              items: integrationItems,
            },
            {
              key: "recursos",
              label: t("nav.resources"),
              items: resourceItems.map((r) => ({ label: r.label, href: r.href })),
            },
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
              href="/precios"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-xl font-display"
            >
              {t("nav.pricing")}
            </a>
          </div>

          {showWireframeNav() ? (
            <div className="border-b border-foreground/10 py-4">
              <p className="mb-2 text-xs font-mono uppercase tracking-widest text-amber-700 dark:text-amber-400">
                PREV · Wireframes (temporal)
              </p>
              <a
                href="/previsualizar/panel-revendedor"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-lg font-display text-foreground/90"
              >
                Panel revendedor
              </a>
              <a
                href="/previsualizar/panel-cliente"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-lg font-display text-foreground/90"
              >
                Panel cliente
              </a>
            </div>
          ) : null}

          {/* CTAs */}
          <div className="flex gap-4 pt-8">
            <Button
              variant="outline"
              className="flex-1 rounded-full h-14 text-base"
              onClick={() => setIsMobileMenuOpen(false)}
              asChild
            >
              <a href="https://app.e-smart360.com/login">{t("nav.login")}</a>
            </Button>
            <Button
              className="flex-1 bg-foreground text-background rounded-full h-14 text-base"
              onClick={() => setIsMobileMenuOpen(false)}
              asChild
            >
              <a href={DEMO_HREF}>{t("nav.cta")}</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
