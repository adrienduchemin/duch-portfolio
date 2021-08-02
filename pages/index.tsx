import { GetStaticProps } from 'next';
import { Date as ParseDate } from 'prismic-reactjs';
// import util from 'util';

import Gallery from '@components/Gallery';
import { client } from '@utils/prismic';

interface IPageData {
  photos: [
    {
      photo: {
        id: string;
      };
    },
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
    '1': {
      dimensions: { width: number; height: number };
      alt: string | null;
      copyright: string | null;
      url: string;
    };
    '2': {
      dimensions: { width: number; height: number };
      alt: string | null;
      copyright: string | null;
      url: string;
    };
    '3': {
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
  video: {
    name?: string; // peut etre qu'il faudra enlever l'extension s'il y en a une
    url?: string; // extraire l'extension pour trouver le type de la video
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

export default function Home({ photos, updatedAt }: HomeProps): JSX.Element {
  const updatedAtDate = ParseDate(updatedAt);
  console.log({ updatedAtDate });

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
  } = await client.getSingle('portfolio', { lang: 'fr-fr' });

  return {
    data: data as IPageData,
    uid: uid as string,
    updatedAt: updatedAt as string,
  };
};

const getPhotos = async (pageData: IPageData): Promise<IPhoto[]> =>
  Promise.all(
    pageData.photos.map(async (photo) => {
      const {
        data,
        id,
        last_publication_date: updatedAt,
        tags,
      } = await client.getByID(photo.photo.id, {
        lang: 'fr-fr',
      });

      // console.log(util.inspect(toto, false, null, true));
      return {
        data: data as IPhotoData,
        id,
        tags,
        updatedAt: updatedAt as string,
      };
    }),
  );
