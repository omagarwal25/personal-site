import remarkFrontmatter from "remark-frontmatter";
import rehypeHighlight from "rehype-highlight";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import nextMDX from "@next/mdx";

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: "@mdx-js/react",
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: [rehypeHighlight],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  experimental: { images: { allowFutureImage: true } },
};

export default withMDX(nextConfig);
