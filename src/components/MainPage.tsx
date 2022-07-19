import { IParallax, ParallaxLayer } from "@react-spring/parallax";
import type { FC, RefObject } from "react";

export const MainPage: FC<{ parallaxRef: RefObject<IParallax> }> = ({
  parallaxRef,
}) => {
  return (
    <ParallaxLayer speed={0.5} className="bg-base-200">
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
          <button
            className="btn btn-secondary"
            onClick={() => parallaxRef.current?.scrollTo(5)}
          >
            Blog
          </button>
        </div>
      </div>
    </ParallaxLayer>
  );
};
