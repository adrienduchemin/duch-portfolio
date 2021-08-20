import { IBio } from '../interfaces/Bio';

export async function getBioFixture(): Promise<IBio> {
  // return client.getSingle('bio');
  return new Promise((resolve) => {
    resolve({
      data: {
        description: 'Danseuse, mais pas que',
        image: {
          dimensions: { width: 900, height: 720 },
          alt: 'portrait',
          copyright: null,
          url: '/danse.jpg',
        },
      },
    });
  });
}
