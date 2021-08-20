import '@styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Lais Beunardeau</title>
        <meta name="description" content="Lais Beunardeau portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <script src="/picturefill.min.js" async />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
