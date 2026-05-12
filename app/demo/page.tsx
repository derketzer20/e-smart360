import type { Metadata } from "next";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { DemoRequestLanding } from "@/components/landing/demo-request-landing";
import { getCasosDeUso } from "@/lib/casos-de-uso";

export const metadata: Metadata = {
  title: "Solicitar demostración | E-SMART360",
  description:
    "Agenda una demo de la plataforma E-SMART360: chatbots omnicanal, agente de voz con IA, oficina virtual y tarjetas digitales NFC.",
};

export default function DemoPage() {
  const casosDeUso = getCasosDeUso();

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground noise-overlay">
      <Navigation casosDeUso={casosDeUso} />
      <DemoRequestLanding />
      <FooterSection />
    </main>
  );
}
