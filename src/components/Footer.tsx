import { Icon, InlineIcon } from "@iconify/react";

export const Footer = () => {
  return (
    <>
      <footer className="footer bg-base-200 p-10 text-base-content">
        <div>
          <span className="footer-title">Built With Love Using</span>
          <a className="link link-hover flex items-center gap-2">
            Tailwindcss
            <Icon icon="logos:tailwindcss-icon" />
          </a>
          <a
            className="link link-hover flex items-center gap-2"
            href="https://nextjs.org/"
          >
            Next.js
            <Icon icon="logos:nextjs-icon" />
          </a>
          <a className="link link-hover flex items-center gap-2">
            MDX
            <Icon icon="logos:mdx" />
          </a>
          <a
            href="https://vercel.com"
            className="link link-hover flex items-center gap-2"
          >
            Vercel <Icon icon="logos:vercel-icon"></Icon>
          </a>
        </div>
        <div>
          <span className="footer-title">Links</span>
          <a
            className="link link-hover flex items-center gap-1"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/omagarwal25"
          >
            <Icon icon="akar-icons:github-fill" color="white" /> Personal Github
          </a>
          <a
            className="link link-hover flex items-center gap-1"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/CaptainObi"
          >
            <Icon icon="akar-icons:github-fill" color="white" /> Online Github
          </a>
        </div>
      </footer>
      <footer className="footer border-t border-base-300 bg-base-200 px-10 py-4 text-base-content">
        <div className="grid-flow-col items-center">
          <p>Copywrite Om Agarwal {new Date().getFullYear()}</p>
        </div>
        <div className="md:place-self-center md:justify-self-end"></div>
      </footer>
    </>
  );
};
