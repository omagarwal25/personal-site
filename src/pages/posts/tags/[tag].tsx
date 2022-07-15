import { useRouter } from "next/router";
import { BlogDisplay } from "~src/components/BlogDisplay";
import { UniversalLayout } from "~src/layouts/UniversalLayout";
import { NextPageWithLayout } from "~src/pages/_app";
import { trpc } from "~src/utils/trpc";

const PostsByTag: NextPageWithLayout = () => {
  const router = useRouter();
  const { tag } = router.query;
  const { data } = trpc.useQuery(["posts.all"]);

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

PostsByTag.getLayout = (page) => <UniversalLayout>{page}</UniversalLayout>;

export default PostsByTag;
