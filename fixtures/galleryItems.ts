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
          mobile: {
            dimensions: { width: 900, height: 720 },
            alt: 'dancer',
            copyright: 'Duch Photography',
            url: isVideo ? '/chat.png' : '/danse.jpg',
          },
          dimensions: { width: 900, height: 720 },
          alt: 'dancer',
          copyright: 'Duch Photography',
          url: isVideo ? '/chat.png' : '/danse.jpg',
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
