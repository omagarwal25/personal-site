import { Icon } from "@iconify/react";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import Head from "next/head";
import Link from "next/link";
import { forwardRef } from "react";
import { Ref, useRef } from "react";
import { BlogPreview } from "~src/components/BlogPreview";
import { Footer } from "~src/components/Footer";
import { Nav } from "~src/components/Nav";
import { Technology } from "~src/components/Techonology";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
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
          <ParallaxLayer
            speed={0.5}
            // onClick={() => parallaxRef.current?.scrollTo(1)}
            className="bg-base-200"
          >
            <div className="flex h-full grid-rows-2 flex-col place-content-center items-center gap-5">
              <h1 className="bg-gradient-to-br from-accent to-secondary bg-clip-text text-center text-7xl font-extrabold text-transparent md:text-9xl">
                Hi, I&apos;m Om Agarwal
              </h1>
              <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
                <button
                  className="btn btn-secondary"
                  onClick={() => parallaxRef.current?.scrollTo(3)}
                >
                  Projects
                </button>
                <button className="btn btn-secondary">Contact</button>
                <button
                  className="btn btn-secondary"
                  onClick={() => parallaxRef.current?.scrollTo(2)}
                >
                  Technologies
                </button>
              </div>
            </div>
          </ParallaxLayer>

          <ParallaxLayer speed={2} offset={1} className="bg-primary" />

          <ParallaxLayer speed={0.5} offset={1}>
            <div className="flex h-full items-center justify-center">
              <h1 className="text-9xl font-bold text-primary-content">
                And I love to code
              </h1>
            </div>
          </ParallaxLayer>

          {/* Tech Page */}
          <ParallaxLayer
            speed={0.5}
            offset={2}
            factor={1.2}
            className="flex flex-col bg-secondary p-10"
          >
            <h1 className="text-center text-4xl font-bold text-secondary-content">
              Technologies that I 💙 to work with
            </h1>
            <div className="carousel carousel-vertical mt-5 gap-2 xl:grid xl:grid-cols-4">
              <Technology
                iconName="logos:react"
                title="React"
                description="React is a frontend library that I use to build most of my UIs."
                link="https://reactjs.org/"
              />
              <Technology
                iconName="logos:typescript-icon"
                title="TypeScript"
                description="TypeScript is a superset of JavaScript that compiles to plain JavaScript. I use TypeScript for all of my JS projects."
                link="https://www.typescriptlang.org/"
              />
              <Technology
                iconName="logos:nextjs-icon"
                title="Next.js"
                description="Next.js is a framework for building fast, modern websites and supports backends. I use Next.Js for most of my React web projects."
                link="https://nextjs.org/"
              />
              <Technology
                iconName="logos:vue"
                title="Vue"
                description="Vue is a frontend library that I use for small applications."
                link="https://vuejs.org/"
              />
              <Technology
                iconName="logos:tailwindcss-icon"
                title="Tailwind CSS"
                description="Tailwind CSS is a utility-first CSS framework that I use for all of my styling."
                link="https://tailwindcss.com/"
              />
              <Technology
                iconName="logos:go"
                title="Go"
                description="Go is a programming language that I to write code for microprocessors and for competitions"
                link="https://golang.org/"
              />
              <Technology
                iconName="logos:rust"
                title="Rust"
                description="Rust is a programming language that I use for competitions, native desktop apps, games, and low level work such as compilers."
                link="https://www.rust-lang.org/"
              />
              <Technology
                iconName="logos:kotlin-icon"
                title="Kotlin"
                description="Kotlin is a programming language that I use to code FRC and FTC robots. I also write Minecraft plugins using Kotlin."
                link="https://kotlinlang.org/"
              />
              <Technology
                iconName="logos:java"
                title="Java"
                description="Java is a programming language that I use to code FRC. I also use Java for Processing."
                link="https://www.java.com/"
              />
              <Technology
                iconName="logos:vercel-icon"
                title="Vercel"
                description="Vercel is a platform for deploying applications. I use Vercel for most of my Next.js and Vite projects."
                link="https://vercel.com/"
              />
              <Technology
                iconName="logos:vitejs"
                title="Vite.js"
                description="Vite.js is a build tool that I use for my lightweight react projects alongside my Vue and Svelte projects."
                link="https://vitejs.dev/"
              />
              <Technology
                iconName="logos:postgresql"
                title="PostgreSQL"
                description="PostgreSQL is a relational database which I use whenever I need a SQL database"
                link="https://www.postgresql.org/"
              />
              <Technology
                iconName="logos:mongodb"
                title="MongoDB"
                description="MongoDB is a NoSQL database which I use whenever I'm not sure about my data's structure."
                link="https://www.mongodb.com/"
              />
              <Technology
                iconName="logos:prisma"
                title="Prisma"
                description="Prisma is an typesafe ORM for Typescript. I use it for most of my SQL related projects."
                link="https://www.prisma.io/"
              />
            </div>
          </ParallaxLayer>

          {/* Project Page */}
          <ParallaxLayer speed={0.5} offset={3} className="bg-base-200">
            <h1 className="text-center text-4xl font-bold text-base-content">
              Projects
            </h1>
            <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"></div>
          </ParallaxLayer>

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
            <BlogPreview />
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

Home.getLayout = (page) => <>{page}</>;

export default Home;
