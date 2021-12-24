import Prismic from '@prismicio/client';
import { Document } from '@prismicio/client/types/documents';
import { GetStaticProps } from 'next';

import FullPage from '@components/FullPage';
import {
  IGallery,
  IPrismicGalleryData,
  IPrismicMedia,
} from '@interfaces/Gallery';
import { IHome, IPrismicHomeData } from '@interfaces/Home';
import { IMedia, IPrismicMediaData } from '@interfaces/Media';
import { client } from '@utils/prismic';

import { getGalleriesFixture } from '../fixtures/galleries';
import { getHomeFixture } from '../fixtures/home';

interface IndexProps {
  home: IHome;
  galleries: IGallery[];
}

export default function Index(props: IndexProps): JSX.Element {
  return <FullPage {...props} />;
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const [home, galleries] = await Promise.all([getHome(), getGalleries()]);

  return {
    props: {
      home,
      galleries,
    },
  };
};

async function getHome(): Promise<IHome> {
  if (process.env.OFFLINE === 'true') return getHomeFixture();
  const prismicHome = await client.getSingle('home', {});
  const data = prismicHome.data as IPrismicHomeData;

  return {
    ...data,
    description: data.description[0]?.text ?? '',
  };
}

async function getGalleries(): Promise<IGallery[]> {
  if (process.env.OFFLINE === 'true') {
    return getGalleriesFixture(80);
  }

  const prismicGalleries = await client.query(
    Prismic.Predicates.at('document.type', 'gallery'),
  );

  const galleries = await Promise.all(
    prismicGalleries.results.map(async (prismicGallery) =>
      getGallery(prismicGallery),
    ),
  );

  galleries.push({
    name: 'video',
    medias: galleries.reduce(
      (medias, gallery) => [
        ...medias,
        ...gallery.medias.filter((media) => media.video.url !== undefined),
      ],
      [] as IMedia[],
    ),
  });

  return galleries;
}

async function getGallery(document: Document): Promise<IGallery> {
  const data = document.data as IPrismicGalleryData;

  const newMedias = await Promise.all(
    data.medias.map(async (media) => getMedia(media)),
  );

  const medias = newMedias.filter((newMedia) => newMedia) as IMedia[];

  return {
    medias,
    name: document.uid!,
  };
}

async function getMedia(media: IPrismicMedia): Promise<IMedia | undefined> {
  if (!media.media.id) {
    return undefined;
  }

  const prismicMedia = await client.getByID(media.media.id, {
    lang: 'fr-fr',
  });

  const data = prismicMedia.data as IPrismicMediaData;

  return {
    id: prismicMedia.id,
    ...data,
    updatedAt: prismicMedia.last_publication_date!,
  };
}
