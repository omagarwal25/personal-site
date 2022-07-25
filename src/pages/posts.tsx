import { InferGetStaticPropsType } from "next";
import { ReactElement } from "react";
import { BlogDisplay } from "~src/components/blog/BlogDisplay";
import { UniversalLayout } from "~src/layouts/UniversalLayout";
import { getAllPosts } from "~src/utils/posts";

const Posts = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  // display all the posts in a grid
  return (
    <>
      <h1 className="mt-5 text-center text-2xl font-bold">All Posts</h1>
      <BlogDisplay posts={data} />
    </>
  );
};

export const getStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: {
      data: posts,
    },
  };
};

Posts.getLayout = (page: ReactElement) => (
  <UniversalLayout>{page}</UniversalLayout>
);

export default Posts;
