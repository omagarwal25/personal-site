import { ParallaxLayer } from "@react-spring/parallax";
import { Technology } from "./Techonology";

export const TechPage = () => {
  return (
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
        <Technology
          iconName="logos:trpc"
          title="tRPC"
          description="tRPC is a typescript library that lets you create typesafe end to end APIs. It uses type inference to automatically detect types on the front end."
          link="https://trpc.io"
        />
        <Technology
          iconName="heroicons-solid:dots-horizontal"
          title="Other"
          description="I use other technologies such as Railway (my preferred non next deploy), DaisyUI, Heroku, Netifly, Remix, Blitz, Expo, GraphQL, and Nest.js"
          link=""
        />
        {/* TODO add remix, blitz, and tRPC, Expo, GQL, Nest */}
      </div>
    </ParallaxLayer>
  );
};
