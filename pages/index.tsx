import Head from "next/head";
import { client } from "@utils/prismicPhotos";
import styles from "@styles/Home.module.css";
import Footer from "@components/Footer";
import Header from "@components/Header";
import Photo from "@components/Photo";
import Gallery from "@components/Gallery";
import { GetStaticProps } from "next";
import util from "util";

interface Portfolio {
  id: "YPx3VBAAACMA6gX7";
  uid: "portfolio";
  last_publication_date: "2021-07-24T20:30:56+0000";
  data: {
    photos: [
      {
        photo: {
          id: "YPx4ZxAAACMA6grY";
          tags: [];
          last_publication_date: "2021-07-24T20:30:39+0000";
        };
      }
    ];
  };
}

interface NewPhoto {
  id: "YPx4ZxAAACMA6grY";
  uid: "chat-1";
  tags: [];
  last_publication_date: "2021-07-24T20:30:39+0000";
  data: {
    title: "Chat 1";
    photo: {
      "1": {
        dimensions: { width: 700; height: 900 };
        alt: null;
        copyright: null;
        url: "https://images.prismic.io/duch-portfolio/18edecbf-d3d6-4373-a5ce-c8d8dab35b85_chat1.jpeg?auto=compress,format&rect=267,0,933,1200&w=700&h=900";
      };
      "2": {
        dimensions: { width: 400; height: 600 };
        alt: null;
        copyright: null;
        url: "https://images.prismic.io/duch-portfolio/18edecbf-d3d6-4373-a5ce-c8d8dab35b85_chat1.jpeg?auto=compress,format&rect=346,0,800,1200&w=400&h=600";
      };
      "3": {
        dimensions: { width: 100; height: 300 };
        alt: null;
        copyright: null;
        url: "https://images.prismic.io/duch-portfolio/18edecbf-d3d6-4373-a5ce-c8d8dab35b85_chat1.jpeg?auto=compress,format&rect=581,0,400,1200&w=100&h=300";
      };
      dimensions: { width: 1200; height: 1200 };
      alt: null;
      copyright: null;
      url: "https://images.prismic.io/duch-portfolio/18edecbf-d3d6-4373-a5ce-c8d8dab35b85_chat1.jpeg?auto=compress,format";
    };
  };
}

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
  const portfolio = await client.getSingle("portfolio", { lang: "fr-fr" });
  console.log(util.inspect(portfolio, false, null, true));

  const photo = await client.getByID(portfolio.data.photos[0].photo.id, {
    lang: "fr-fr",
  });
  console.log(util.inspect(photo, false, null, true));

  // legacy code
  const res2 = await client.query("");
  const photos: Photo[] = res2.results.map((p) => {
    return p.data;
  });

  return {
    props: {
      photos,
    },
  };
};
