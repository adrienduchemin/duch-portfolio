import { GetStaticProps } from 'next';
// import util from 'util';

import Gallery from '@components/Gallery';
import { client } from '@utils/prismic';

import { IGalleryItem, IGalleryItemData } from '../interfaces/GalleryItem';

interface IPage {
  data: IPageData;
}

interface IPageData {
  // gallery
  photos: [
    {
      // galleryItem
      photo: {
        id: string;
      };
    },
  ];
}

interface HomeProps {
  galleryItems: IGalleryItem[];
}

export default function Home({ galleryItems }: HomeProps): JSX.Element {
  return <Gallery items={galleryItems} />;
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const { data } = await getPage();
  const galleryItems = await getGalleryItems(data);

  return {
    props: {
      galleryItems,
    },
  };
};

const getPage = async (): Promise<IPage> => {
  const { data } = await client.getSingle('portfolio', { lang: 'fr-fr' });

  // console.log(util.inspect(data, false, null, true));
  return {
    data: data as IPageData,
  };
};

const getGalleryItems = async (pageData: IPageData): Promise<IGalleryItem[]> =>
  Promise.all(
    // pageData.gallery.map(async (g) => {
    pageData.photos.map(async (galleryItem) => {
      const {
        data,
        id,
        last_publication_date: updatedAt,
        tags,
        // } = await client.getByID(g.galleryItem.id, {
      } = await client.getByID(galleryItem.photo.id, {
        lang: 'fr-fr',
      });

      return {
        data: data as IGalleryItemData,
        id,
        tags,
        updatedAt: updatedAt as string,
      };
    }),
  );
