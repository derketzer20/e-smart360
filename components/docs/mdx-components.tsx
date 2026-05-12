import type { ComponentPropsWithoutRef, ReactNode } from "react";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Callout } from "@/components/docs/mdx/callout";
import { ProductCard } from "@/components/docs/mdx/product-card";
import { Steps, Step } from "@/components/docs/mdx/steps";
import {
  Card,
  CodeGroup,
  CodeGroupItem,
  Columns,
  Expandable,
  Tab,
  Tabs,
  Update,
} from "@/components/docs/mdx/rich-blocks";

function headingClass(level: 2 | 3 | 4) {
  if (level === 2)
    return "font-display text-3xl md:text-4xl tracking-tight text-foreground mt-16 mb-6 scroll-mt-28";
  if (level === 3)
    return "font-display text-xl md:text-2xl tracking-tight text-foreground mt-10 mb-3 scroll-mt-28";
  return "font-mono text-xs tracking-widest uppercase text-muted-foreground mt-10 mb-3 scroll-mt-28";
}

type MdxProvided = {
  id?: string;
  children?: ReactNode;
  className?: string;
  href?: string;
};

export const mdxComponents = {
  h1: () => null,
  h2: ({ id, children }: MdxProvided) => (
    <h2 id={id} className={headingClass(2)}>
      <span className="mb-4 block h-px w-12 bg-foreground/30" />
      {children}
    </h2>
  ),
  h3: ({ id, children }: MdxProvided) => (
    <h3 id={id} className={headingClass(3)}>
      {children}
    </h3>
  ),
  h4: ({ id, children }: MdxProvided) => (
    <h4 id={id} className={headingClass(4)}>
      {children}
    </h4>
  ),
  p: ({ children }: MdxProvided) => (
    <p className="mb-5 text-base leading-relaxed text-muted-foreground lg:text-lg">{children}</p>
  ),
  a: ({ href, children }: MdxProvided) => {
    const isExternal = !!href && (href.startsWith("http://") || href.startsWith("https://"));
    if (!href) return <span>{children}</span>;
    if (href.startsWith("/")) {
      return (
        <Link
          href={href}
          className="text-[var(--accent-meta,#0668E1)] underline decoration-[var(--accent-meta,#0668E1)]/30 underline-offset-4 hover:decoration-[var(--accent-meta,#0668E1)]"
        >
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="text-foreground underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
      >
        {children}
      </a>
    );
  },
  ul: ({ children }: MdxProvided) => (
    <ul className="my-6 grid gap-2 rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-5">{children}</ul>
  ),
  ol: ({ children }: MdxProvided) => (
    <ol className="my-6 list-inside list-decimal space-y-2 rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-5 marker:font-mono marker:text-muted-foreground">
      {children}
    </ol>
  ),
  li: ({ children }: MdxProvided) => (
    <li className="flex items-start gap-3 text-base leading-relaxed text-foreground/80">
      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
      <span className="flex-1">{children}</span>
    </li>
  ),
  blockquote: ({ children }: MdxProvided) => (
    <blockquote className="my-8 border-l-2 border-foreground/30 pl-6 text-lg italic text-foreground/80">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-12 h-px border-0 bg-foreground/10" />,
  code: ({ className, children, ...props }: MdxProvided & ComponentPropsWithoutRef<"code">) => {
    const isBlock = /language-/.test(className ?? "");
    if (isBlock) {
      return (
        <code
          className={`block overflow-x-auto rounded-xl border border-foreground/10 bg-foreground/5 p-4 font-mono text-sm ${className ?? ""}`}
          {...props}
        >
          {children}
        </code>
      );
    }
    return (
      <code
        className="rounded border border-foreground/10 bg-foreground/5 px-1.5 py-0.5 font-mono text-[0.9em] text-foreground"
        {...props}
      >
        {children}
      </code>
    );
  },
  pre: ({ children }: MdxProvided) => <pre className="my-6 overflow-x-auto">{children}</pre>,
  strong: ({ children }: MdxProvided) => <strong className="font-semibold text-foreground">{children}</strong>,
  em: ({ children }: MdxProvided) => <em className="italic text-foreground/90">{children}</em>,
  table: ({ children }: MdxProvided) => (
    <div className="my-8 overflow-hidden rounded-2xl border border-foreground/10">
      <Table>{children}</Table>
    </div>
  ),
  thead: ({ children }: MdxProvided) => <TableHeader>{children}</TableHeader>,
  tbody: ({ children }: MdxProvided) => <TableBody>{children}</TableBody>,
  tr: ({ children }: MdxProvided) => <TableRow>{children}</TableRow>,
  th: ({ children }: MdxProvided) => (
    <TableHead className="px-4 py-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
      {children}
    </TableHead>
  ),
  td: ({ children }: MdxProvided) => (
    <TableCell className="whitespace-normal px-4 py-3 text-foreground/80">{children}</TableCell>
  ),
  Callout,
  ProductCard,
  Steps,
  Step,
  Update,
  Expandable,
  Columns,
  Card,
  Tabs,
  Tab,
  CodeGroup,
  CodeGroupItem,
};
