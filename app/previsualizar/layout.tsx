import type { ReactNode } from "react";

/**
 * Rutas de wireframe temporal (/previsualizar/*).
 * Activación: NEXT_PUBLIC_SHOW_WIREFRAMES=true — ver docs/wireframes-previsualizar.md
 */
export default function PrevisualizarLayout({ children }: { children: ReactNode }) {
  return <div className="relative min-h-screen bg-background text-foreground">{children}</div>;
}
