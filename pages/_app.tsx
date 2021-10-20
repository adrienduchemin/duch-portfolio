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
        <link
          type="text/css"
          href="https://unpkg.com/video.js/dist/video-js.min.css"
          rel="stylesheet"
        />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://unpkg.com/video.js/dist/video.min.js" />
        <script src="/picturefill.min.js" async />
        <script src="/youtube.min.js" async />
        <script
          async
          defer
          data-website-id="b7b30083-9b36-4db4-b66d-b840101cd709"
          src="https://umami-alpha-pink.vercel.app/umami.js"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
