import { BlogCard } from "~src/components/BlogCard";
import { BlogDisplay } from "~src/components/BlogDisplay";
import { UniversalLayout } from "~src/layouts/UniversalLayout";
import { trpc } from "~src/utils/trpc";
import { NextPageWithLayout } from "./_app";

const Posts: NextPageWithLayout = () => {
  const { data } = trpc.useQuery(["posts.all"]);

  if (!data) return null;

  // display all the posts in a grid
  return (
    <>
      <h1 className="mt-5 text-center text-2xl font-bold">All Posts</h1>
      <BlogDisplay posts={data} />
    </>
  );
};

Posts.getLayout = (page) => <UniversalLayout>{page}</UniversalLayout>;

export default Posts;
