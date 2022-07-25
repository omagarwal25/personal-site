import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import Head from "next/head";
import Link from "next/link";
import { ReactElement, useRef } from "react";
import { PostPreview } from "~src/components/post/PostPreview";
import { Footer } from "~src/components/Footer";
import { Nav } from "~src/components/Nav";
import { MainPage } from "~src/components/MainPage";
import { ProjectPage } from "~src/components/project/ProjectPage";
import { TechPage } from "~src/components/technology/TechPage";
import { getAllPosts } from "~src/utils/posts";
import { InferGetStaticPropsType } from "next";

const Home = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const parallaxRef = useRef<IParallax>(null);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div className="flex h-screen flex-col">
        <Parallax pages={5} ref={parallaxRef}>
          <MainPage parallaxRef={parallaxRef} />

          <ParallaxLayer speed={2} offset={1} className="bg-primary" />

          <ParallaxLayer speed={0.5} offset={1}>
            <div className="flex h-full items-center justify-center">
              <h1 className="text-9xl font-bold text-primary-content">
                And I love to code
              </h1>
            </div>
          </ParallaxLayer>

          <TechPage />

          <ProjectPage />

          {/* Blog Page */}
          <ParallaxLayer
            speed={0.5}
            factor={1}
            offset={4}
            className="flex flex-col items-center gap-5 bg-secondary p-10"
          >
            <h1 className="text-center text-4xl font-bold text-secondary-content">
              Blog
            </h1>
            <PostPreview data={data} />
            <Link href="/posts">
              <a className="btn btn-accent">Show More</a>
            </Link>
          </ParallaxLayer>
        </Parallax>
      </div>
      <Footer />
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

Home.getLayout = (page: ReactElement) => <>{page}</>;

export default Home;
