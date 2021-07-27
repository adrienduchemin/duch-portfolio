import { client } from "@utils/prismicPhotos";
import styles from "@styles/index.module.css";
// import Photo from "@components/Photo";
import Gallery from "@components/Gallery";
import { GetStaticProps } from "next";
// import util from "util";
import { Document } from "@prismicio/client/types/documents";
import { Date as ParseDate } from "prismic-reactjs";

interface IPageData {
  photos: [
    {
      photo: {
        id: string;
      };
    }
  ];
}

interface IPage {
  data: IPageData;
  uid: string;
  updatedAt: string;
}

interface IPhotoData {
  title: string;
  photo: {
    "1": {
      dimensions: { width: number; height: number };
      alt: string | null;
      copyright: string | null;
      url: string;
    };
    "2": {
      dimensions: { width: number; height: number };
      alt: string | null;
      copyright: string | null;
      url: string;
    };
    "3": {
      dimensions: { width: number; height: number };
      alt: string | null;
      copyright: string | null;
      url: string;
    };
    dimensions: { width: number; height: number };
    alt: string | null;
    copyright: string | null;
    url: string;
  };
}

export interface IPhoto {
  data: IPhotoData;
  id: string;
  tags?: string[];
  updatedAt: string;
}

interface HomeProps {
  photos: IPhoto[];
  uid: string;
  updatedAt: string;
}

export default function Home({ photos, uid, updatedAt }: HomeProps) {
  const updatedAtDate = ParseDate(updatedAt);

  return (
    <>
      <Gallery photos={photos} />
      {/* {updatedAtDate.toLocaleString()} */}
    </>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
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
    uid: uid as string,
    updatedAt: updatedAt as string,
  };
};

const getPhotos = async (pageData: IPageData): Promise<IPhoto[]> => {
  return Promise.all(
    pageData.photos.map(async (photo) => {
      const {
        data,
        id,
        last_publication_date: updatedAt,
        tags,
      } = await client.getByID(photo.photo.id, {
        lang: "fr-fr",
      });

      // console.log(util.inspect(toto, false, null, true));
      return {
        data: data as IPhotoData,
        id: id as string,
        tags,
        updatedAt: updatedAt as string,
      };
    })
  );
};
