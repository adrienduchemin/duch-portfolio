import Head from "next/head";
import { client } from "@utils/prismicPhotos";
import styles from "@styles/Home.module.css";
import Footer from "@components/Footer";
import Header from "@components/Header";
// import Photo from "@components/Photo";
import Gallery from "@components/Gallery";
import { GetStaticProps } from "next";
// import util from "util";
import { Document } from "@prismicio/client/types/documents";

interface IPageData {
  photos: [
    {
      photo: {
        id: "YPx4ZxAAACMA6grY";
      };
    }
  ];
}

interface IPage {
  data: IPageData;
  uid: Document["uid"];
  updatedAt: Document["last_publication_date"];
}

interface IPhotoData {
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
}

export interface IPhoto {
  data: IPhotoData;
  uid: Document["uid"];
  updatedAt: Document["last_publication_date"];
}

interface HomeProps {
  photos: IPhoto[];
  uid: Document["uid"];
  updatedAt: Document["last_publication_date"];
}

export default function Home({ photos, uid, updatedAt }: HomeProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Duch portfolio</title>
        <meta name="description" content="Duch portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <Gallery photos={photos} />
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  // console.log(util.inspect(photo, false, null, true));
  const { data, uid, updatedAt } = await getPage();
  const photos = await getPhotos(data);

  return {
    props: {
      photos,
      uid,
      updatedAt,
    },
  };
};

const getPage = async (): Promise<IPage> => {
  const {
    data,
    last_publication_date: updatedAt,
    uid,
  } = await client.getSingle("portfolio", { lang: "fr-fr" });

  return {
    data: data as IPageData,
    uid,
    updatedAt,
  };
};

const getPhotos = async (pageData: IPageData): Promise<IPhoto[]> => {
  return Promise.all(
    pageData.photos.map(async (photo) => {
      const {
        data,
        last_publication_date: updatedAt,
        uid,
      } = await client.getByID(photo.photo.id, {
        lang: "fr-fr",
      });

      return {
        data: data as IPhotoData,
        uid,
        updatedAt,
      };
    })
  );
};
