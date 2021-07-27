import "@styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "@components/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Duch portfolio</title>
        <meta name="description" content="Duch portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
