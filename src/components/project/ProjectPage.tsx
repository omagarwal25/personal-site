import { ParallaxLayer } from "@react-spring/parallax";
import { Project } from "./Project";

export const ProjectPage = () => {
  return (
    <ParallaxLayer
      speed={0.5}
      factor={1.2}
      offset={3}
      className="flex flex-col bg-base-200 p-10"
    >
      <h1 className="text-center text-4xl font-bold text-base-content">
        Projects
      </h1>
      <div className="carousel carousel-vertical mt-5 gap-2 xl:grid xl:grid-cols-4">
        <Project
          title="Personal Site"
          description="My personal site. It features a blog, a portfolio, and a contact form. You are on it right now!"
          lang={["ts", "react"]}
          deploy="https://personal-site-beta-puce.vercel.app/"
          repo="https://github.com/omagarwal25/personal-site"
        />
        <Project
          title="Scouting App"
          description="A monolith stack that features native and web apps to allow FRC teams to scout other teams at competitions without WIFI. Features multiple libraries such as: Next.js, Vite, Vue, Expo, Mongoose, and tRPC."
          lang={["ts", "react", "vue", "next", "expo", "mongo", "vite", "tRPC"]}
          repo="httpsL//github.com/omagarwal25/scouting-app"
        />
        <Project
          title="Joos"
          description="A FTC library which features path planning, optometry, and localization. Major contributor"
          lang={["kt"]}
          repo="https://github.com/amarcolini/joos"
        />
        <Project
          title="FRC Robot Code 22"
          description="The main repo for Team 1884s FRC Robot code. I wrote a lot of the new-swerve branch and autonomous code. The most of my contributions were written on a laptop that was logged into a different account."
          lang={["java"]}
          repo="https://github.com/GriffinsProgrammers/Comp-2022/tree/new-swerve"
        />
        <Project
          title="Swerve Lib"
          description="A library that I've forked to made modifications to how the encoders work."
          lang={["java"]}
          repo="https://github.com/omagarwal25/swerve-lib"
        />
        <Project
          title="Scheduler"
          description="A scheduling system for classes. It allows you to plug in what classes what you would like to take and it will automatically schedule the prerequisites for you. Built using Nest and Next."
          lang={["ts", "react", "next", "mongo", "nest"]}
          repo="https://github.com/omagarwal25/scheduler"
        />
        <Project
          title="FTC Robot Code 21"
          description="The repo for team 19279's 2021 FTC code. I wrote all the code. The code includes computer vision and autonomous codes."
          lang={["java"]}
          repo="https://github.com/omagarwal25/FTC21Final"
        />
        <Project
          title="Advent of Code 21"
          description="My code for advent of code 2021. All written in golang."
          lang={["go"]}
          repo="https://github.com/CaptainObi/advent-of-code"
        />
        <Project
          title="Hash Code"
          description="Our team's code for HashCode 2022. Written in python."
          lang={["py"]}
          repo="https://github.com/omagarwal25/hashCode22"
        />
        <Project
          title="FTC Robot Code 22"
          description="The repo for team 19279's 2022 FTC code. It features voltage monitoring, path planning, components and command-based system, automatic telemetry, 6 PID controllers, code for a differential swerve drive, and multiple OP modes."
          lang={["kt"]}
          repo="https://github.com/19279-M1C2/Freight-Frenzy"
        />
        <Project
          title="Board Game Complexity Compare"
          description="My very first web project. It makes the user compare the games they have recorded as played on BoardGameGeek head to head using an elo system."
          lang={["ts", "react", "psql"]}
          repo="https://github.com/CaptainObi/boardGameComplexityCompare"
          deploy="https://immense-brook-19181.herokuapp.com/"
        />
        <Project
          title="Aurora Air"
          description="Aurora Air is a website that lets you browse the flights of a fictional airline. It also has a external graphql API for others to use. It also uses ISR to ensure the page renders quickly."
          lang={["ts", "react", "next", "gql", "prisma", "psql"]}
          repo="https://github.com/CaptainObi/aurora-air-client"
          deploy="https://aurora-air-client.vercel.app/"
        />
        <Project
          title="Blood Bank"
          description="A fun project that I made to test my golang skills. It lets you allocate blood depending on what patients need it."
          lang={["go"]}
          repo="https://github.com/CaptainObi/blood_bank"
        />
        <Project
          title="Golf"
          description="A minecraft plugin that lets you play golf with bouncy enderpearls. It's designed for servers."
          lang={["kt"]}
          repo="https://github.com/Horizons-Server/golf"
        />
        <Project
          title="Horizons Vote Bot"
          description="A discord bot designed for veto voting. It integrates with Google Sheets to store the data and let others view it."
          lang={["ts"]}
          repo="https://github.com/Horizons-Server/horizons-vote-bot"
        />
      </div>
    </ParallaxLayer>
  );
};
