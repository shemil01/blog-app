import path from "path";
import fs from "fs";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import matter from "gray-matter";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Onthispage from "@/components/Onthispage";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { rehypePrettyCode } from "rehype-pretty-code";
import { transformerCopyButton } from '@rehype-pretty/transformers'

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypePrettyCode, {
      theme: "material-theme-ocean",
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3_000,
        }),
      ],
    })
    .use(rehypeAutolinkHeadings);

  // Correctly join the file path using `path.join`
  const filePath = path.join(process.cwd(), "content", `${params.slug}.md`);

  try {
    // Read file content
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    const htmlContent = (await processor.process(content)).toString();

    return (
      <MaxWidthWrapper className="prose dark:prose-invert">
        <div className="flex">
          <div className="px-16">
            <h1>{data.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
           
          </div>
          <Onthispage className="text-sm w-[20%]" htmlContent={htmlContent} />
        </div>
      </MaxWidthWrapper>
    );
  } catch (err) {
    console.error("Error reading file:", err);
    return <p>Blog post not found.</p>;
  }
}
