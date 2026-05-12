import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Solicitar demostración | E-SMART360",
  description:
    "Agenda una demo de la plataforma E-SMART360: chatbots omnicanal, agente de voz con IA, oficina virtual y tarjetas digitales NFC.",
};

export default function DemoLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Toaster richColors position="top-center" closeButton />
    </>
  );
}
