import Link from "next/link";
import { FC } from "react";
import { Post } from "~src/utils/types";
import { Badges } from "./Badges";

export const PostCard: FC<{ post: Post; carousel?: boolean }> = ({
  post,
  carousel,
}) => {
  return (
    <div
      className={`card ${
        carousel ? "carousel-item w-96 max-w-xs" : ""
      } bg-base-100`}
    >
      <figure>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={post.image} alt={post.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
        <Badges badges={post.tags} />
        <p>{post.description}</p>
        <div className="card-actions justify-end">
          <Link href={`/posts/${post.slug}`}>
            <a className="btn btn-primary">Read</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
