import { IMedia } from '@interfaces/Media';

import { IGallery } from '../interfaces/Gallery';

export async function getGalleriesFixture(
  numberOfItems: number,
): Promise<IGallery[]> {
  return new Promise((resolve) => {
    resolve(generateGalleryItems(numberOfItems));
  });
}

function generateGalleryItems(numberOfItems: number): IGallery[] {
  const galleries: IGallery[] = [
    { name: 'danse', position: 1, medias: [] },
    { name: 'portrait', position: 3, medias: [] },
    { name: 'taiwan', position: 2, medias: [] },
  ];

  for (let i = 1; i < numberOfItems; i++) {
    const isVideo = Math.random() < 0.3;

    const media: IMedia = {
      title: `${isVideo ? 'Video' : 'Photo'} ${i}`,
      photo: {
        galleryDesktop: {
          dimensions: { width: 500, height: 500 }, // a titre indicatif
          alt: 'dancer',
          copyright: 'Duch Photography',
          url: '/chat-mobile.jpg',
        },
        galleryTablet: {
          dimensions: { width: 400, height: 400 }, // a titre indicatif
          alt: 'dancer',
          copyright: 'Duch Photography',
          url: '/chat-mobile.jpg',
        },
        galleryMobile: {
          dimensions: { width: 300, height: 300 }, // a titre indicatif
          alt: 'dancer',
          copyright: 'Duch Photography',
          url: '/chat-mobile.jpg',
        },
        dimensions: { width: 1440, height: 700 }, // pas utiles: appelées dans le slider en full
        alt: 'dancer',
        copyright: 'Duch Photography',
        url: isVideo ? '/chat.png' : '/chat.jpeg',
      },
      video: {
        ...(isVideo
          ? Math.random() < 0.5
            ? {
                url: 'https://www.youtube.com/watch?v=MGLFsxznv3U',
                link_type: 'Web',
              }
            : { url: '/video.mp4', link_type: 'Media' }
          : {}),
      },
      id: `${isVideo ? 'video' : 'photo'}-${i}`,
      updatedAt: randomDate(new Date(2019, 0, 1), new Date()).toISOString(),
    };

    const medias =
      Math.random() < 0.33
        ? galleries[0]?.medias
        : Math.random() < 0.5
        ? galleries[1]?.medias
        : galleries[2]?.medias;

    medias?.push(media);
  }

  galleries.forEach((gallery) => {
    gallery.medias.sort(
      (a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt),
    );
  });

  return galleries;
}

function randomDate(start: Date, end: Date) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  );
}