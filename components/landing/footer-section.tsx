"use client";

import { ArrowUpRight } from "lucide-react";
import { AnimatedWave } from "./animated-wave";

const footerLinks = {
  Plataforma: [
    { name: "Chatbots Omnicanal", href: "#" },
    { name: "Agentes de Voz IA", href: "#" },
    { name: "Oficina Virtual", href: "#" },
    { name: "Tarjetas Digitales NFC", href: "#" },
    { name: "Precios", href: "#pricing" },
  ],
  Características: [
    { name: "Constructor de Flujos", href: "#features" },
    { name: "Bandeja Omnicanal", href: "#features" },
    { name: "Campañas Masivas", href: "#features" },
    { name: "Análisis IQ", href: "#features" },
    { name: "Webhooks & API", href: "#features" },
  ],
  "Casos de Uso": [
    { name: "Sector Médico", href: "#" },
    { name: "E-commerce", href: "#" },
    { name: "Educación", href: "#" },
    { name: "Agencias Inmobiliarias", href: "#" },
    { name: "Marketing y Ventas", href: "#" },
    { name: "Industria", href: "#" },
  ],
  Integraciones: [
    { name: "WhatsApp / Meta", href: "#" },
    { name: "Shopify & WooCommerce", href: "#" },
    { name: "Google Sheets", href: "#" },
    { name: "Stripe & PayPal", href: "#" },
    { name: "Zapier & Make", href: "#" },
    { name: "Twilio SMS", href: "#" },
  ],
  Empresa: [
    { name: "Nosotros", href: "#" },
    { name: "Programa de Agencias", href: "https://www.e-smart360.com/precios-pro" },
    { name: "Blog", href: "#" },
    { name: "Documentación", href: "#" },
    { name: "Contacto", href: "https://www.e-smart360.com/demo" },
  ],
  Legal: [
    { name: "Privacidad", href: "#" },
    { name: "Términos y Condiciones", href: "#" },
    { name: "Garantía de Respaldo", href: "#" },
  ],
};

const socialLinks = [
  { name: "WhatsApp", href: "https://www.e-smart360.com/demo" },
  { name: "Instagram", href: "#" },
  { name: "Facebook", href: "#" },
];

export function FooterSection() {
  return (
    <footer className="relative border-t border-foreground/10">
      {/* Wave background */}
      <div className="absolute inset-0 h-64 opacity-20 pointer-events-none overflow-hidden">
        <AnimatedWave />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              <a href="#" className="inline-flex items-center gap-2 mb-6">
                <span className="text-xl font-display">E-SMART360</span>
              </a>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-xs text-sm">
                La plataforma IA #1 para atención y soporte al cliente 24/7.
                Chatbots omnicanal y Agentes de Voz para automatizar tu negocio.
              </p>
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground border border-foreground/10 rounded-full px-3 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  META Business Partner Oficial
                </span>
              </div>
              <div className="flex gap-5">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-xs font-mono uppercase tracking-widest text-foreground mb-5">
                  {title}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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

        {/* Bottom Bar */}
        <div className="py-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; 2024 E-SMART360. Todos los derechos reservados. Fundada en México.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Todos los sistemas operativos
            </span>
            <a
              href="https://app.e-smart360.com/login"
              className="hover:text-foreground transition-colors"
            >
              Iniciar Sesión
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
