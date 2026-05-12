import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import type { DocFile } from "@/lib/docs";
import { MarkdownDocBody } from "@/components/docs/markdown-doc-body";
import { mdxComponents } from "@/components/docs/mdx-components";

export async function DocArticle({ doc }: { doc: DocFile }) {
  if (doc.format === "mdx") {
    const { content } = await compileMDX({
      source: doc.body,
      components: mdxComponents,
      options: {
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [rehypeSlug],
        },
      },
    });
    return <div className="docs-prose max-w-[720px]">{content}</div>;
  }

  return (
    <div className="max-w-[720px]">
      <MarkdownDocBody content={doc.body} />
    </div>
  );
}
