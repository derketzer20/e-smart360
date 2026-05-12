import type { ReactNode } from "react";

export function Steps({ children }: { children: ReactNode }) {
  return <div className="my-10 space-y-8 border-l border-border/80 pl-6">{children}</div>;
}

export function Step({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="relative">
      <span className="absolute -left-[1.35rem] top-1.5 flex h-5 w-5 items-center justify-center rounded-full border border-border bg-background text-[10px] text-muted-foreground">
        ◆
      </span>
      <h4 className="font-medium text-foreground">{title}</h4>
      <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}
