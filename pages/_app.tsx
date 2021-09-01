/* eslint-disable @next/next/no-css-tags */
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Lais Beunardeau</title>
        <meta name="description" content="Lais Beunardeau portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link
          type="text/css"
          rel="stylesheet"
          href="lightgallery/css/lightgallery.css"
        />
        <link
          type="text/css"
          rel="stylesheet"
          href="lightgallery/css/lg-video.css"
        />
        <link
          type="text/css"
          rel="stylesheet"
          href="lightgallery/css/lg-zoom.css"
        />
        <script src="/picturefill.min.js" async />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
