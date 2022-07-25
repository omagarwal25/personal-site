import fs from "fs";
import matter from "gray-matter";
import path from "path";
import type { Meta, Post } from "./types";

export const getAllPosts = () => {
  const dirFiles = fs.readdirSync(
    path.join(process.cwd(), "src", "pages", "posts"),
    {
      withFileTypes: true,
    }
  );

  const posts = dirFiles
    .map((file) => {
      if (!file.name.endsWith(".mdx")) return;

      const fileContent = fs.readFileSync(
        path.join(process.cwd(), "src", "pages", "posts", file.name),
        "utf-8"
      );
      const { data, content } = matter(fileContent) as unknown as {
        data: Meta;
        content: string;
      };

      const slug = file.name.replace(/.mdx$/, "");
      return { ...data, content, slug };
    })
    .reduce((pre, curr) => {
      if (curr) {
        pre.push(curr);
      }

      return pre;
    }, [] as Post[]);

  return posts;
};
