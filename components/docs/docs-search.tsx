"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";

export type DocsSearchItem = {
  route: string;
  title: string;
  sectionLabel?: string;
  tags?: string[];
  audience?: string[];
  platform?: string[];
  useCase?: string[];
};

export function DocsSearch({ items }: { items: DocsSearchItem[] }) {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", down);
    return () => window.removeEventListener("keydown", down);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          type="button"
          variant="outline"
          className="relative h-9 w-full min-w-[180px] max-w-sm justify-start rounded-full border-border/80 bg-background/80 text-sm text-muted-foreground shadow-sm sm:min-w-[220px]"
        >
          <Search className="mr-2 h-4 w-4 shrink-0 opacity-60" aria-hidden />
          <span className="truncate">Buscar en la documentación…</span>
          <kbd className="pointer-events-none absolute right-2 hidden rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] font-medium sm:inline-block">
            Ctrl K
          </kbd>
        </Button>
      </DialogTrigger>
      <DialogContent className="overflow-hidden p-0 sm:max-w-lg" showCloseButton={false}>
        <DialogTitle className="sr-only">Buscar documentación</DialogTitle>
        <Command className="rounded-lg border-none shadow-none">
          <CommandInput placeholder="Escribe para filtrar…" />
          <CommandList className="max-h-72">
            <CommandEmpty>No hay resultados.</CommandEmpty>
            <CommandGroup heading="Páginas">
              {items.map((item) => (
                <CommandItem
                  key={item.route}
                  value={`${item.title} ${item.route} ${item.sectionLabel ?? ""} ${(item.tags ?? []).join(" ")} ${(item.audience ?? []).join(" ")} ${(item.platform ?? []).join(" ")} ${(item.useCase ?? []).join(" ")}`}
                  onSelect={() => {
                    router.push(`/docs/${item.route}`);
                    setOpen(false);
                  }}
                >
                  <span className="font-medium">{item.title}</span>
                  {item.sectionLabel ? (
                    <span className="ml-2 text-xs text-muted-foreground">{item.sectionLabel}</span>
                  ) : null}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
