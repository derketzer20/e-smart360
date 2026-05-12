import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocArticle } from "@/components/docs/doc-article";
import { getDocByRoute, generateStaticParamsForDocs, DOC_SECTION_LABELS } from "@/lib/docs";

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

export function generateStaticParams() {
  return generateStaticParamsForDocs();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const route = slug.join("/");
  const doc = getDocByRoute(route);
  if (!doc) return { title: "Documentación | E-SMART360" };
  return {
    title: `${doc.title} | Docs · E-SMART360`,
    description: doc.description ?? doc.title,
  };
}

export default async function DocDynamicPage({ params }: PageProps) {
  const { slug } = await params;
  const route = slug.join("/");
  const doc = getDocByRoute(route);
  if (!doc || doc.draft) notFound();

  const sectionLabel = DOC_SECTION_LABELS[doc.section];

  return (
    <article id="docs-article">
      <header className="mb-10 border-b border-border/80 pb-8">
        <p className="text-xs font-mono uppercase tracking-widest text-[var(--accent-meta,#0668E1)]">
          {sectionLabel}
        </p>
        <h1 className="mt-2 font-display text-4xl tracking-tight text-foreground md:text-5xl">{doc.title}</h1>
        {doc.description ? (
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">{doc.description}</p>
        ) : null}
      </header>
      <DocArticle doc={doc} />
    </article>
  );
}
