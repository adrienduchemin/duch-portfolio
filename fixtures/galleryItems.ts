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
    const isVideo = Math.random() < 0.2;
    const type =
      Math.random() < 0.5 ? 'danse' : Math.random() < 0.5 ? 'acting' : 'book';

    galleryItems.push({
      data: {
        title: `${isVideo ? 'Video' : 'Photo'} ${i}`,
        type,
        image: {
          mobile: {
            dimensions: { width: 900, height: 720 },
            alt: 'dancer',
            copyright: 'Duch Photography',
            url: '/danse.jpg',
          },
          dimensions: { width: 900, height: 720 },
          alt: 'dancer',
          copyright: 'Duch Photography',
          url: '/danse.jpg',
        },
        video: {
          ...(isVideo ? { url: '/video.mp4' } : {}),
        },
      },
      id: `${isVideo ? 'video' : 'photo'}-${i}`,
      updatedAt: new Date('01/12/2021').toISOString(),
    });
  }

  return galleryItems;
}
