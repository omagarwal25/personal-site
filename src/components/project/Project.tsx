import type { FC } from "react";
import { Icon } from "@iconify/react";

export type Lang =
  | "kt"
  | "py"
  | "ts"
  | "rs"
  | "go"
  | "java"
  | "c"
  | "cpp"
  | "react"
  | "vue"
  | "svelte"
  | "tailwind"
  | "next"
  | "remix"
  | "prisma"
  | "expo"
  | "psql"
  | "mongo"
  | "vite"
  | "tRPC"
  | "nest"
  | "gql"

const langToIcon: Record<Lang, string> = {
  kt: "logos:kotlin-icon",
  py: "logos:python",
  ts: "logos:typescript-icon",
  rs: "logos:rust",
  go: "logos:go",
  java: "logos:java",
  c: "logos:c",
  cpp: "logos:c-plusplus",
  react: "logos:react",
  vue: "logos:vue",
  svelte: "logos:svelte-icon",
  tailwind: "logos:tailwindcss-icon",
  next: "logos:nextjs-icon",
  remix: "logos:remix-icon",
  prisma: "logos:prisma",
  expo: "logos:expo-icon",
  psql: "logos:postgresql",
  mongo: "logos:mongodb",
  vite: "logos:vitejs",
  tRPC: "logos:trpc",
  nest: "logos:nestjs",
  gql: "logos:graphql",
} as const;

const langToName: Record<Lang, string> = {
  kt: "Kotlin",
  py: "Python",
  ts: "TypeScript",
  rs: "Rust",
  go: "Go",
  java: "Java",
  c: "C",
  cpp: "C++",
  react: "React",
  vue: "Vue",
  svelte: "Svelte",
  tailwind: "Tailwind CSS",
  next: "Next.js",
  remix: "Remix",
  prisma: "Prisma",
  expo: "Expo",
  psql: "PostgreSQL",
  mongo: "MongoDB",
  vite: "Vite.js",
  tRPC: "tRPC",
  nest: "Nest.js",
  gql: "GraphQL",
} as const;

interface Props {
  title: string;
  repo?: string;
  deploy?: string;
  lang: Lang[];
  description: string;
}
export const Project: FC<Props> = ({
  title,
  description,
  lang,
  deploy,
  repo,
}) => {
  return (
    <div className="card carousel-item flex rounded-md border border-dashed border-gray-800 bg-neutral">
      {/* <figure><Icon icon={iconName} className="h-8 w-8" /></figure> */}
      <div className="card-body text-neutral-content">
        <span className="card-title">
          {title}{" "}
          {repo && (
            <a
              href={repo}
              rel="noopener noreferrer"
              target="_blank"
              className="link"
            >
              (Repo)
            </a>
          )}{" "}
          {deploy && (
            <a
              href={deploy}
              rel="noopener noreferrer"
              target="_blank"
              className="link"
            >
              (Deploy)
            </a>
          )}
        </span>
        <p>{description}</p>
        <span className="card-actions justify-end">
          {lang.map((l) => (
            <div className="tooltip" key={l} data-tip={langToName[l]}>
              <Icon icon={langToIcon[l]} className="h-4 w-4 text-gray-600" />
            </div>
          ))}
        </span>
      </div>
    </div>
  );
};
