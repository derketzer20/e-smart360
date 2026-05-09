import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

/**
 * Renderiza el cuerpo de un caso de uso (.md) con la tipografía, tarjetas y
 * tablas del sistema de diseño del sitio. El componente es totalmente
 * server-rendered: react-markdown corre en el RSC y el HTML llega ya
 * tipografiado al cliente.
 */
export function MarkdownContent({ content }: { content: string }) {
  return (
    <div className="font-sans">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // El H1 inicial ya se muestra en el hero de la página, lo ocultamos
          // para evitar duplicar el título.
          h1: () => null,

          h2: ({ children }) => (
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-tight text-foreground mt-20 mb-6 leading-[1.05]">
              <span className="block w-12 h-px bg-foreground/30 mb-6" />
              {children}
            </h2>
          ),

          h3: ({ children }) => (
            <h3 className="font-display text-xl md:text-2xl tracking-tight text-foreground mt-10 mb-3 leading-tight">
              {children}
            </h3>
          ),

          h4: ({ children }) => (
            <h4 className="font-mono text-xs tracking-widest uppercase text-muted-foreground mt-12 mb-4">
              {children}
            </h4>
          ),

          h5: ({ children }) => (
            <h5 className="font-mono text-xs tracking-widest uppercase text-muted-foreground mt-8 mb-3">
              {children}
            </h5>
          ),

          h6: ({ children }) => (
            <h6 className="font-mono text-[11px] tracking-widest uppercase text-muted-foreground mt-6 mb-2">
              {children}
            </h6>
          ),

          p: ({ children }) => (
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-5">
              {children}
            </p>
          ),

          a: ({ href, children }) => {
            const isExternal =
              !!href && (href.startsWith("http://") || href.startsWith("https://"));
            return (
              <a
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="text-foreground underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground transition-colors"
              >
                {children}
              </a>
            );
          },

          ul: ({ children }) => (
            <ul className="my-6 grid gap-2 rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-5">
              {children}
            </ul>
          ),

          ol: ({ children }) => (
            <ol className="my-6 grid gap-3 rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-5 list-decimal list-inside marker:font-mono marker:text-muted-foreground">
              {children}
            </ol>
          ),

          li: ({ children }) => (
            <li className="text-base text-foreground/80 leading-relaxed flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-foreground/40 shrink-0" />
              <span className="flex-1">{children}</span>
            </li>
          ),

          blockquote: ({ children }) => (
            <blockquote className="my-8 border-l-2 border-foreground/30 pl-6 text-lg italic text-foreground/80">
              {children}
            </blockquote>
          ),

          hr: () => (
            <hr className="my-12 border-0 h-px bg-foreground/10" />
          ),

          code: ({ className, children, ...props }) => {
            const isBlock = /language-/.test(className ?? "");
            if (isBlock) {
              return (
                <code
                  className={`block font-mono text-sm bg-foreground/5 border border-foreground/10 rounded-xl p-4 overflow-x-auto ${
                    className ?? ""
                  }`}
                  {...props}
                >
                  {children}
                </code>
              );
            }
            return (
              <code
                className="font-mono text-[0.9em] bg-foreground/5 border border-foreground/10 rounded px-1.5 py-0.5 text-foreground"
                {...props}
              >
                {children}
              </code>
            );
          },

          pre: ({ children }) => (
            <pre className="my-6 overflow-x-auto">{children}</pre>
          ),

          strong: ({ children }) => (
            <strong className="font-semibold text-foreground">{children}</strong>
          ),

          em: ({ children }) => (
            <em className="italic text-foreground/90">{children}</em>
          ),

          img: ({ src, alt }) => {
            if (!src || typeof src !== "string") return null;
            return (
              <figure className="my-10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={alt ?? ""}
                  loading="lazy"
                  className="w-full max-h-[420px] object-cover rounded-2xl border border-foreground/10 bg-foreground/[0.02]"
                />
                {alt ? (
                  <figcaption className="mt-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    {alt}
                  </figcaption>
                ) : null}
              </figure>
            );
          },

          table: ({ children }) => (
            <div className="my-8 rounded-2xl border border-foreground/10 overflow-hidden">
              <Table>{children}</Table>
            </div>
          ),
          thead: ({ children }) => <TableHeader>{children}</TableHeader>,
          tbody: ({ children }) => <TableBody>{children}</TableBody>,
          tr: ({ children }) => <TableRow>{children}</TableRow>,
          th: ({ children }) => (
            <TableHead className="font-mono text-xs uppercase tracking-widest text-muted-foreground px-4 py-3">
              {children}
            </TableHead>
          ),
          td: ({ children }) => (
            <TableCell className="px-4 py-3 whitespace-normal text-foreground/80">
              {children}
            </TableCell>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
