import { IGalleryItem } from '../interfaces/GalleryItem';

export async function getGalleryItemsFixture(
  numberOfItems: number,
): Promise<IGalleryItem[]> {
  return new Promise((resolve) => {
    resolve(generateGalleryItems(numberOfItems));
  });
}

function generateGalleryItems(numberOfItems: number): IGalleryItem[] {
  const galleryItems: IGalleryItem[] = [];

  for (let i = 1; i < numberOfItems; i++) {
    const isVideo = Math.random() < 0.3;
    const type =
      Math.random() < 0.4 ? 'danse' : Math.random() < 0.5 ? 'acting' : 'book';

    galleryItems.push({
      data: {
        title: `${isVideo ? 'Video' : 'Photo'} ${i}`,
        type,
        image: {
          desktop: {
            dimensions: { width: 500, height: 500 }, // a titre indicatif
            alt: 'dancer',
            copyright: 'Duch Photography',
            url: '/chat-mobile.jpg',
          },
          tablet: {
            dimensions: { width: 400, height: 400 }, // a titre indicatif
            alt: 'dancer',
            copyright: 'Duch Photography',
            url: '/chat-mobile.jpg',
          },
          mobile: {
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
            ? Math.random() < 0.2
              ? {
                  url: 'https://www.youtube.com/watch?v=MGLFsxznv3U',
                  link_type: 'Web',
                }
              : { url: '/video.mp4', link_type: 'Media' }
            : {}),
        },
      },
      id: `${isVideo ? 'video' : 'photo'}-${i}`,
      updatedAt: randomDate(new Date(2019, 0, 1), new Date()).toISOString(),
    });
  }

  return galleryItems;
}

function randomDate(start: Date, end: Date) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  );
}
