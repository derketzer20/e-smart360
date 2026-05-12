import type { Metadata } from "next";
import { getCasosDeUso } from "@/lib/casos-de-uso";
import { PanelClienteClient } from "./panel-cliente-client";

export const metadata: Metadata = {
  title: "Wireframe · Panel cliente | E-SMART360",
  robots: { index: false, follow: false },
};

export default function PanelClientePage() {
  const casosDeUso = getCasosDeUso();
  return <PanelClienteClient casosDeUso={casosDeUso} />;
}
