import "~src/styles/globals.css";
import "~src/styles/oneDark.css";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { PostLayout } from "~src/layouts/PostLayout";
import { MDXProvider } from "@mdx-js/react";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// const ResponsiveImage = (props: ImageProps) => (
//   <Image alt={props.alt} layout="responsive" {...props} />
// );

const components = {
  // code: (props: any) => <pre className="">{props.children}</pre>,
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout =
    Component.getLayout ?? ((page) => <PostLayout>{page}</PostLayout>);

  return (
    <MDXProvider components={components}>
      {getLayout(<Component {...pageProps} />)}
    </MDXProvider>
  );
};

export default MyApp;
