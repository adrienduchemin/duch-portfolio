import { IHome } from '../interfaces/Home';

export async function getHomeFixture(): Promise<IHome> {
  return new Promise((resolve) => {
    resolve({
      data: {
        description: 'Professional dancer',
        background: {
          mobile: {
            dimensions: { width: 900, height: 720 },
            alt: 'background',
            copyright: null,
            url: '/danse.jpg',
          },
          dimensions: { width: 900, height: 720 },
          alt: 'background',
          copyright: null,
          url: '/danse.jpg',
        },
        instagram: {
          url: 'https://www.instagram.com/drien1993',
        },
      },
    });
  });
}
