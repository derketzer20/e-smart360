import type { Metadata } from "next";
import { Navigation } from "@/components/landing/navigation";
import { ChatbotsOmnichannelLanding } from "@/components/landing/chatbots-omnichannel-landing";
import { FooterSection } from "@/components/landing/footer-section";
import { getCasosDeUso } from "@/lib/casos-de-uso";

export const metadata: Metadata = {
  title: "Chatbots Omnicanal | E-SMART360",
  description:
    "Chatbots omnicanal con IA para WhatsApp, Instagram, Facebook, Telegram y webchat. Automatiza ventas, soporte, pagos y seguimiento con E-SMART360.",
};

export default function ChatbotsOmnicanalPage() {
  const casosDeUso = getCasosDeUso();

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground noise-overlay">
      <Navigation
        casosDeUso={casosDeUso}
        ctaClassName="!bg-[#0070f3] hover:!bg-[#005bcc] !text-white shadow-[0_4px_24px_-6px_rgba(0,112,243,0.45)]"
      />
      <ChatbotsOmnichannelLanding />
      <FooterSection />
    </main>
  );
}
