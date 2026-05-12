"use client";

import { useMemo } from "react";
import { ArrowUpRight } from "lucide-react";
import { AnimatedWave } from "./animated-wave";
import { useI18n } from "@/components/i18n/i18n-provider";

const socialLinks = [
  { name: "WhatsApp", href: "https://www.e-smart360.com/demo" },
  { name: "Instagram", href: "#" },
  { name: "Facebook", href: "#" },
];

export function FooterSection() {
  const { t } = useI18n();

  const columns = useMemo(
    () => [
      {
        title: t("footer.colPlatform"),
        links: [
          { name: t("products.chatbots.label"), href: "/plataforma/chatbots-omnicanal" },
          { name: t("products.voice.label"), href: "/plataforma/agente-voz-ia" },
          { name: t("products.virtual.label"), href: "/plataforma/oficina-virtual" },
          { name: t("products.nfc.label"), href: "/plataforma/tarjetas-digitales-nfc" },
          { name: t("footer.pricing"), href: "/precios" },
        ],
      },
      {
        title: t("footer.colFeatures"),
        links: [
          { name: t("footer.flows"), href: "#features" },
          { name: t("footer.inbox"), href: "#features" },
          { name: t("footer.mass"), href: "#features" },
          { name: t("footer.iq"), href: "#features" },
          { name: t("footer.webhooks"), href: "#features" },
        ],
      },
      {
        title: t("footer.colCases"),
        links: [
          { name: t("footer.medical"), href: "#" },
          { name: t("footer.ecommerce"), href: "#" },
          { name: t("footer.education"), href: "#" },
          { name: t("footer.realestate"), href: "#" },
          { name: t("footer.marketing"), href: "#" },
          { name: t("footer.industry"), href: "#" },
        ],
      },
      {
        title: t("footer.colIntegrations"),
        links: [
          { name: t("integrations.wa"), href: "#" },
          { name: t("integrations.shop"), href: "#" },
          { name: t("integrations.sheets"), href: "#" },
          { name: t("integrations.pay"), href: "#" },
          { name: t("integrations.zap"), href: "#" },
          { name: t("integrations.twilio"), href: "#" },
        ],
      },
      {
        title: t("footer.colCompany"),
        links: [
          { name: t("footer.about"), href: "#" },
          { name: t("footer.agencyProgram"), href: "https://www.e-smart360.com/precios-pro" },
          { name: t("footer.blog"), href: "#" },
          { name: t("footer.docs"), href: "/docs" },
          { name: t("footer.contact"), href: "https://www.e-smart360.com/demo" },
        ],
      },
      {
        title: t("footer.colLegal"),
        links: [
          { name: t("footer.privacy"), href: "#" },
          { name: t("footer.terms"), href: "#" },
          { name: t("footer.warranty"), href: "#" },
        ],
      },
    ],
    [t],
  );

  return (
    <footer className="relative border-t border-foreground/10">
      <div className="absolute inset-0 h-64 overflow-hidden opacity-20 pointer-events-none">
        <AnimatedWave />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-2 gap-12 md:grid-cols-3 lg:grid-cols-7 lg:gap-8">
            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              <a href="/" className="mb-6 inline-flex items-center gap-2">
                <span className="font-display text-xl">E-SMART360</span>
              </a>
              <p className="mb-6 max-w-xs text-sm leading-relaxed text-muted-foreground">{t("footer.tagline")}</p>
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-foreground/10 px-3 py-1.5 font-mono text-xs text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  {t("footer.metaPartner")}
                </span>
              </div>
              <div className="flex gap-5">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="group flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                    <ArrowUpRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </a>
                ))}
              </div>
            </div>

            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="mb-5 font-mono text-xs uppercase tracking-widest text-foreground">{col.title}</h3>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-foreground/10 py-8 md:flex-row">
          <p className="text-sm text-muted-foreground">{t("footer.copyright")}</p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              {t("footer.systemsOk")}
            </span>
            <a href="https://app.e-smart360.com/login" className="transition-colors hover:text-foreground">
              {t("nav.login")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
