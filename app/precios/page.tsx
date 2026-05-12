import type { Metadata } from "next";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PreciosLanding } from "@/components/landing/precios-landing";
import { getCasosDeUso } from "@/lib/casos-de-uso";

export const metadata: Metadata = {
  title: "Precios | E-SMART360",
  description:
    "Pricing maestro E-SMART360: mensajería (incluye nivel free), voz IA sin free, Digital Card, oficina virtual, bundles, calculadora y recarga de créditos.",
};

export default function PreciosPage() {
  const casosDeUso = getCasosDeUso();

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground noise-overlay">
      <Navigation casosDeUso={casosDeUso} />
      <PreciosLanding />
      <FooterSection />
    </main>
  );
}
