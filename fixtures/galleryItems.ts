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
            dimensions: { width: 680, height: 500 }, // a titre indicatif
            alt: 'dancer',
            copyright: 'Duch Photography',
            url: '/chat-desktop.jpg',
          },
          tablet: {
            dimensions: { width: 340, height: 340 }, // a titre indicatif
            alt: 'dancer',
            copyright: 'Duch Photography',
            url: '/chat-tablet.jpg',
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
          url: isVideo ? '/chat.jpeg' : '/chat.png',
        },
        video: {
          ...(isVideo ? { url: '/video.mp4' } : {}),
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
