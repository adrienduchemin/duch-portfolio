import Head from "next/head";
import { client } from "@utils/prismicPhotos";
import styles from "@styles/Home.module.css";
import Footer from "@components/Footer";
import Header from "@components/Header";
import Photo from "@components/Photo";
import Gallery from "@components/Gallery";
import { GetStaticProps } from "next";

export interface Photo {
  date: string;
  photo: {
    url: string;
  };
  title: { text: string }[];
  description: { text: string }[];
}

interface HomeProps {
  photos: Photo[];
}

export default function Home({ photos }: HomeProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Duch portfolio</title>
        <meta name="description" content="Duch portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <Gallery />
        <br />
        {/* <div className="photos">
          {photos.map((p) => {
            return (
              <Photo
                key={p.title[0].text}
                date={p.date}
                photo={p.photo}
                title={p.title}
                description={p.description}
              />
            );
          })}
        </div> */}
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const res = await client.query("");

  const photos: Photo[] = res.results.map((p) => {
    return p.data;
  });

  return {
    props: {
      photos,
    },
  };
};
