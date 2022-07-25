import { GetStaticPaths, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import { BlogDisplay } from "~src/components/blog/BlogDisplay";
import { UniversalLayout } from "~src/layouts/UniversalLayout";
import { getAllPosts } from "~src/utils/posts";
import { ReactElement } from "react";

const PostsByTag = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const { tag } = router.query;

  if (!tag || typeof tag !== "string" || !data) {
    return <div>No tag provided</div>;
  }

  const filtered = data.filter((post) => post.tags.includes(tag));

  return (
    <>
      <h1 className="mt-5 text-center text-2xl font-bold">
        Posts with tag {tag}
      </h1>
      <BlogDisplay posts={filtered} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts().flatMap((e) => e.tags);

  // dedupe psots
  const deduped = posts.filter(
    (value, index, self) => self.indexOf(value) === index
  );

  return {
    paths: deduped.map((tag) => ({
      params: {
        tag,
      },
    })),
    // https://nextjs.org/docs/basic-features/data-fetching#fallback-blocking
    fallback: "blocking",
  };
};

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      data: posts,
    },
  };
}

PostsByTag.getLayout = (page: ReactElement) => (
  <UniversalLayout>{page}</UniversalLayout>
);

export default PostsByTag;
