import type { Metadata } from "next";
import { Navigation } from "@/components/landing/navigation";
import { NfcDigitalCardsLanding } from "@/components/landing/nfc-digital-cards-landing";
import { FooterSection } from "@/components/landing/footer-section";
import { getCasosDeUso } from "@/lib/casos-de-uso";

export const metadata: Metadata = {
  title: "Tarjetas Digitales NFC | E-SMART360",
  description:
    "Tarjetas digitales NFC, QR y perfiles inteligentes para capturar leads, compartir datos y activar seguimiento comercial con E-SMART360.",
};

export default function TarjetasDigitalesNfcPage() {
  const casosDeUso = getCasosDeUso();

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground noise-overlay">
      <Navigation
        casosDeUso={casosDeUso}
        ctaClassName="!bg-[#0070f3] hover:!bg-[#005bcc] !text-white shadow-[0_4px_24px_-6px_rgba(0,112,243,0.45)]"
      />
      <NfcDigitalCardsLanding />
      <FooterSection />
    </main>
  );
}
