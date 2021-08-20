import { GetStaticProps } from 'next';

import FullPage from '@components/FullPage';
import { IBio } from '@interfaces/Bio';
import { IGalleryItem } from '@interfaces/GalleryItem';
import { IHome } from '@interfaces/Home';

import { getBioFixture } from '../fixtures/bio';
import { getGalleryItemsFixture } from '../fixtures/galleryItems';
import { getHomeFixture } from '../fixtures/home';

interface IndexProps {
  bio: IBio;
  home: IHome;
  galleryItems: IGalleryItem[];
}

export default function Index(props: IndexProps): JSX.Element {
  return <FullPage {...props} />;
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const [bio, home, galleryItems] = await Promise.all([
    getBio(),
    getHome(),
    getGalleryItems(),
  ]);

  return {
    props: {
      bio,
      home,
      galleryItems,
    },
  };
};

async function getBio(): Promise<IBio> {
  if (process.env.OFFLINE === 'true') return getBioFixture();
  // return client.getSingle('bio');
  return getBioFixture(); // for now until prismic back
}

async function getHome(): Promise<IHome> {
  if (process.env.OFFLINE === 'true') return getHomeFixture();
  // return client.getSingle('home');
  return getHomeFixture(); // for now until prismic back
}

async function getGalleryItems(): Promise<IGalleryItem[]> {
  if (process.env.OFFLINE === 'true') return getGalleryItemsFixture();
  // return client.getMultiple('galleryItem');
  return getGalleryItemsFixture(); // for now until prismic back
}
