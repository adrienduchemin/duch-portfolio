import Head from "next/head";
import { client } from "@utils/prismicPhotos";

import Header from "@components/Header";
import Footer from "@components/Footer";
import Photo from "@components/Photo";

export default function Home({ photos }) {
  return (
    <div className="container">
      <Head>
        <title>Mon portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <div className="photos">
          {photos.map((p) => {
            return (
              <Photo
                key={p.title}
                date={p.date}
                photolink={p["photo-link"]}
                photo={p.photo}
                title={p.title}
                description={p.description}
              />
            );
          })}
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .photos {
          display: flex;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

export async function getStaticProps() {
  // https://prismic.io/docs/rest-api/query-the-api/query-all-documents
  const res = await client.query("");

  const photos = res.results.map((p) => {
    return p.data;
  });

  return {
    props: {
      photos,
    },
  };
}
