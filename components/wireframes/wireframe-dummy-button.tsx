"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function WireframeDummyButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [note, setNote] = useState<string | null>(null);
  return (
    <div className="inline-flex flex-col items-start gap-1">
      <Button
        type="button"
        variant="outline"
        size="sm"
        className={cn(className)}
        onClick={() =>
          setNote("Solo wireframe: en producción esto iría a su API en Vercel (BFF), nunca con apiToken en el navegador.")
        }
      >
        {children}
      </Button>
      {note ? <span className="max-w-xs text-[10px] text-muted-foreground">{note}</span> : null}
    </div>
  );
}
