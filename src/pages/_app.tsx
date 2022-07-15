import "~src/styles/globals.css";
import "~src/styles/oneDark.css";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { PostLayout } from "~src/layouts/PostLayout";
import { MDXProvider } from "@mdx-js/react";
import { withTRPC } from "@trpc/next";
import { AppRouter } from "~src/server/router";
import superjson from "superjson";

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

const getBaseUrl = () => {
  if (typeof window !== "undefined") {
    return "";
  }
  if (process.browser) return ""; // Browser should use current path
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url

  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

export default withTRPC<AppRouter>({
  config({ ctx }) {
    const url = `${getBaseUrl()}/api/trpc`;

    return {
      url,
      transformer: superjson,
    };
  },
  ssr: false,
})(MyApp);
