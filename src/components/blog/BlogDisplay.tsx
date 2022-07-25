import { FC } from "react";
import { Post } from "~src/utils/types";
import { BlogCard } from "./BlogCard";

export const BlogDisplay: FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <div className="mt-5 grid grid-cols-1 items-center justify-center gap-5 p-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {posts.map((blog) => (
        <BlogCard post={blog} key={blog.slug} />
      ))}
    </div>
  );
};
