import type { Metadata } from "next";
import { Navigation } from "@/components/landing/navigation";
import { VirtualOfficeLanding } from "@/components/landing/virtual-office-landing";
import { FooterSection } from "@/components/landing/footer-section";
import { getCasosDeUso } from "@/lib/casos-de-uso";

export const metadata: Metadata = {
  title: "Oficina Virtual | E-SMART360",
  description:
    "Videollamadas HD, agenda en tu sitio web, recordatorios y sala de espera virtual. Atiende clientes como un consultorio digital profesional con E-SMART360.",
  openGraph: {
    title: "Oficina Virtual | E-SMART360",
    description:
      "Videollamadas, agendamiento y widget web en una sola plataforma. Ideal para salud, servicios profesionales y equipos remotos.",
    type: "website",
  },
};

export default function OficinaVirtualPage() {
  const casosDeUso = getCasosDeUso();

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground noise-overlay">
      <Navigation
        casosDeUso={casosDeUso}
        ctaClassName="!bg-[var(--accent-meta,#0668E1)] hover:!bg-[#0554c4] !text-white shadow-[0_4px_24px_-6px_rgba(6,104,225,0.45)]"
      />
      <VirtualOfficeLanding />
      <FooterSection />
    </main>
  );
}
