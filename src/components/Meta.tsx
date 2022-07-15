import Head from "next/head";

interface Props {
  title: string;
  createdAt: string;
  keywords: string[];
}

export const Meta = ({ title, createdAt, keywords }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="keywords"
        content={keywords.reduce((pre, curr) => pre + "," + curr)}
      />
    </Head>
  );
};
