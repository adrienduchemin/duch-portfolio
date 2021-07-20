import Head from "next/head";
import { client } from "@utils/prismicPhotos";

import Header from "@components/Header";
import Footer from "@components/Footer";
import Photo from "@components/Photo";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <div>
        {photos !== undefined &&
          photos.map((p) => {
            let title = p.title[0].text;
            let key = `${title}`;
            return (
              <Photo
                key={key}
                photolink={p.photolink}
                photo={p.photo}
                title={title}
                description={description}
              />
            );
          })}
      </div>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  // query() is empty on purpose!
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
