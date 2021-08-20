import { IGalleryItem } from '../interfaces/GalleryItem';

export async function getGalleryItemsFixture(): Promise<IGalleryItem[]> {
  // return client.getSingle('bio');
  return new Promise((resolve) => {
    resolve([
      {
        data: {
          title: 'Photo 1',
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
          video: {},
        },
        id: 'photo-1',
        updatedAt: new Date().toISOString(),
      },
      {
        data: {
          title: 'Photo 2',
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
          video: {},
        },
        id: 'photo-2',
        updatedAt: new Date().toISOString(),
      },
      {
        data: {
          title: 'Photo 3',
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
          video: {},
        },
        id: 'photo-3',
        updatedAt: new Date().toISOString(),
      },
      {
        data: {
          title: 'Photo 4',
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
          video: {},
        },
        id: 'photo-4',
        updatedAt: new Date().toISOString(),
      },
      {
        data: {
          title: 'Photo 5',
          image: {
            mobile: {
              dimensions: { width: 900, height: 720 },
              alt: 'dancer',
              copyright: 'Duch Photography',
              url: '/danse-1200.jpg',
            },
            dimensions: { width: 900, height: 720 },
            alt: 'dancer',
            copyright: 'Duch Photography',
            url: '/danse.jpg',
          },
          video: {},
        },
        id: 'photo-5',
        updatedAt: new Date().toISOString(),
      },
      {
        data: {
          title: 'Photo 6',
          image: {
            mobile: {
              dimensions: { width: 900, height: 720 },
              alt: 'dancer',
              copyright: 'Duch Photography',
              url: '/danse-800.jpg',
            },
            dimensions: { width: 900, height: 720 },
            alt: 'dancer',
            copyright: 'Duch Photography',
            url: '/danse.jpg',
          },
          video: {},
        },
        id: 'photo-6',
        updatedAt: new Date().toISOString(),
      },
      {
        data: {
          title: 'Photo 7',
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
          video: {},
        },
        id: 'photo-7',
        updatedAt: new Date().toISOString(),
      },
      {
        data: {
          title: 'Photo 8',
          image: {
            mobile: {
              dimensions: { width: 900, height: 720 },
              alt: 'dancer',
              copyright: 'Duch Photography',
              url: '/danse2-1200.jpg',
            },
            dimensions: { width: 900, height: 720 },
            alt: 'dancer',
            copyright: 'Duch Photography',
            url: '/danse2.jpg',
          },
          video: {},
        },
        id: 'photo-8',
        updatedAt: new Date().toISOString(),
      },
      {
        data: {
          title: 'Photo 9',
          image: {
            mobile: {
              dimensions: { width: 900, height: 720 },
              alt: 'dancer',
              copyright: 'Duch Photography',
              url: '/danse2-800.jpg',
            },
            dimensions: { width: 900, height: 720 },
            alt: 'dancer',
            copyright: 'Duch Photography',
            url: '/danse2.jpg',
          },
          video: {},
        },
        id: 'photo-9',
        updatedAt: new Date().toISOString(),
      },
      {
        data: {
          title: 'Video 1',
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
            url: '/video.mp4',
          },
        },
        id: 'video-1',
        updatedAt: new Date('01/12/2021').toISOString(),
      },
      {
        data: {
          title: 'Video 2',
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
            url: '/video.mp4',
          },
        },
        id: 'video-2',
        updatedAt: new Date('12/12/2021').toISOString(),
      },
    ]);
  });
}
