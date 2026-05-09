import type { Metadata } from "next";
import { Navigation } from "@/components/landing/navigation";
import { VoiceAgentLanding } from "@/components/landing/voice-agent-landing";
import { FooterSection } from "@/components/landing/footer-section";
import { getCasosDeUso } from "@/lib/casos-de-uso";

export const metadata: Metadata = {
  title: "Agentes de Voz IA | E-SMART360",
  description:
    "Agente de voz con IA para ventas, soporte y prospección 24/7. Llamadas inteligentes, integración con CRM y automatización con E-SMART360.",
};

export default function AgenteVozIAPage() {
  const casosDeUso = getCasosDeUso();

  return (
    <div className="dark min-h-screen bg-[#0b0b0b] selection:bg-[#0070f3]/35">
      <Navigation
        casosDeUso={casosDeUso}
        ctaClassName="!bg-[#0070f3] hover:!bg-[#005bcc] !text-white shadow-[0_0_24px_-8px_rgba(0,112,243,0.6)]"
      />
      <VoiceAgentLanding />
      <FooterSection />
    </div>
  );
}
