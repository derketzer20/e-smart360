import Link from "next/link";
import { Github } from "lucide-react";
import { FooterSection } from "@/components/landing/footer-section";
import { getDocsNavGroups, getAllDocSummaries, DOC_SECTION_LABELS } from "@/lib/docs";
import { DocsSidebar } from "@/components/docs/docs-sidebar";
import { DocsPrimaryNav } from "@/components/docs/docs-primary-nav";
import { DocsSearch, type DocsSearchItem } from "@/components/docs/docs-search";
import { DocsToc } from "@/components/docs/docs-toc";

export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const groups = getDocsNavGroups();
  const summaries = getAllDocSummaries();
  const searchItems: DocsSearchItem[] = summaries.map((s) => ({
    route: s.route,
    title: s.title,
    sectionLabel: DOC_SECTION_LABELS[s.section],
    tags: s.tags,
    audience: s.audience,
    platform: s.platform,
    useCase: s.useCase,
  }));

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="page-grid-bg pointer-events-none fixed inset-0 -z-10 opacity-[0.25]" aria-hidden />

      {/* Barra superior estilo documentación (OpenClaw-like) */}
      <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-3 px-4 py-3 sm:px-6 lg:gap-4 lg:px-8">
          <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-5">
            <Link href="/" className="shrink-0 font-display text-lg tracking-tight text-foreground">
              E-SMART360
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link href="/docs" className="shrink-0 text-sm font-medium text-foreground">
              Documentación
            </Link>
          </div>
          <div className="flex w-full flex-1 justify-center lg:max-w-md">
            <DocsSearch items={searchItems} />
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href="https://github.com/YEIGLESLY/fulldoc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/80 text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
              title="Repositorio fulldoc (contenido fuente)"
            >
              <Github className="h-4 w-4" />
            </a>
            <Link
              href="/precios"
              className="hidden rounded-full border border-border/80 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground sm:inline-block"
            >
              Precios
            </Link>
          </div>
        </div>
        <DocsPrimaryNav />
      </header>

      <div className="mx-auto flex max-w-[1400px] gap-8 px-4 py-10 sm:px-6 lg:gap-10 lg:px-8 lg:py-12">
        <DocsSidebar groups={groups} />
        <div className="flex min-w-0 flex-1 gap-10 lg:gap-14">
          <div className="min-w-0 flex-1">{children}</div>
          <DocsToc />
        </div>
      </div>

      <FooterSection />
    </div>
  );
}
