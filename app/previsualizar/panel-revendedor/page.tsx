import type { Metadata } from "next";
import { getCasosDeUso } from "@/lib/casos-de-uso";
import { PanelRevendedorClient } from "./panel-revendedor-client";

export const metadata: Metadata = {
  title: "Wireframe · Panel revendedor | E-SMART360",
  robots: { index: false, follow: false },
};

export default function PanelRevendedorPage() {
  const casosDeUso = getCasosDeUso();
  return <PanelRevendedorClient casosDeUso={casosDeUso} />;
}
