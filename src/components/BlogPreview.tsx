import Link from "next/link";
import { FC } from "react";
import { trpc } from "~src/utils/trpc";
import { BlogCard } from "./BlogCard";

export const BlogPreview: FC<{}> = () => {
  const { data } = trpc.useQuery(["posts.all"]);
  console.log("hey");
  if (!data) return null;

  data.sort(
    (a, b) =>
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );

  const limited = data.slice(0, 3);

  return (
    <div className="carousel carousel-vertical h-2/3 gap-2 xl:flex xl:flex-row">
      {limited.map((blog) => (
        <BlogCard post={blog} key={blog.slug} carousel />
      ))}
    </div>
  );
};
