import { GetStaticProps } from 'next';

import FullPage from '@components/FullPage';
import { IBio } from '@interfaces/Bio';
import { IGallery } from '@interfaces/Gallery';
import { IHome } from '@interfaces/Home';

import { getBioFixture } from '../fixtures/bio';
import { getGalleryItemsFixture } from '../fixtures/galleryItems';
import { getHomeFixture } from '../fixtures/home';

interface IndexProps {
  bio: IBio;
  home: IHome;
  gallery: IGallery;
}

export default function Index(props: IndexProps): JSX.Element {
  return <FullPage {...props} />;
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const [bio, home, gallery] = await Promise.all([
    getBio(),
    getHome(),
    getGallery(),
  ]);

  return {
    props: {
      bio,
      home,
      gallery,
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

async function getGallery(): Promise<IGallery> {
  // const galleryItems = await client.getMultiple('galleryItem');
  const galleryItems = await getGalleryItemsFixture(80);
  const types = [
    ...new Set(
      galleryItems
        .filter(
          (galleryItem) =>
            galleryItem.data.type !== null && galleryItem.data.type !== 'danse',
        )
        .map((galleryItem) => galleryItem.data.type),
    ),
  ];

  const gallery: IGallery = {
    items: galleryItems,
    types: types as string[],
  };

  return gallery;
}
