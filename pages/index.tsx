import { GetStaticProps } from 'next';

import FullPage from '@components/FullPage';
import { IGallery, IGalleryItemsByType } from '@interfaces/Gallery';
import { IHome } from '@interfaces/Home';

import { getGalleryItemsFixture } from '../fixtures/galleryItems';
import { getHomeFixture } from '../fixtures/home';

interface IndexProps {
  home: IHome;
  gallery: IGallery;
}

export default function Index(props: IndexProps): JSX.Element {
  return <FullPage {...props} />;
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const [home, gallery] = await Promise.all([getHome(), getGallery()]);

  return {
    props: {
      home,
      gallery,
    },
  };
};

async function getHome(): Promise<IHome> {
  if (process.env.OFFLINE === 'true') return getHomeFixture();
  // return client.getSingle('home');
  return getHomeFixture(); // for now until prismic back
}

async function getGallery(): Promise<IGallery> {
  // const galleryItems = await client.getMultiple('galleryItem');
  const galleryItems = await getGalleryItemsFixture(80);

  const galleryItemsByTypes = galleryItems.reduce<IGalleryItemsByType[]>(
    (galleryItemsTypes, galleryItem) => {
      if (
        !galleryItemsTypes.some(
          (galleryItemsType) => galleryItemsType.type === galleryItem.data.type,
        )
      ) {
        galleryItemsTypes.push({
          type: galleryItem.data.type,
          items: [galleryItem],
        });
      } else {
        galleryItemsTypes
          .find(
            (galleryItemsType) =>
              galleryItemsType.type === galleryItem.data.type,
          )
          ?.items.push(galleryItem);
      }
      return galleryItemsTypes;
    },
    [],
  );

  const danseIndex = galleryItemsByTypes.splice(
    galleryItemsByTypes.findIndex(
      (galleryItemsByType) => galleryItemsByType.type === 'danse',
    ),
    1,
  )[0];

  danseIndex && galleryItemsByTypes.splice(0, 0, danseIndex);

  for (const galleryItemsByType of galleryItemsByTypes) {
    galleryItemsByType.items.sort(
      (a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt),
    );
  }

  const gallery: IGallery = {
    items: galleryItemsByTypes,
  };

  return gallery;
}
