import { ReactElement } from "react";
import { Icon } from "@iconify/react";
import { Nav } from "~src/components/Nav";
import { Footer } from "~src/components/Footer";

export const UniversalLayout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};
