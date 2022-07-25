import { FC } from "react";
import { Post } from "~src/utils/types";
import { PostCard } from "./PostCard";

export const PostPreview: FC<{ data: Post[] }> = ({ data }) => {
  data.sort(
    (a, b) =>
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );

  const limited = data.slice(0, 3);

  return (
    <div className="carousel carousel-vertical h-1/2 gap-2 xl:flex xl:flex-row">
      {limited.map((blog) => (
        <PostCard post={blog} key={blog.slug} carousel />
      ))}
    </div>
  );
};
