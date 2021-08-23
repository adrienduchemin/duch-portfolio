import { IBio } from '../interfaces/Bio';

export async function getBioFixture(): Promise<IBio> {
  return new Promise((resolve) => {
    resolve({
      data: {
        description:
          "Danseuse, mais pas que, aussi actrice et plein d'autre chose",
        image: {
          dimensions: { width: 900, height: 720 },
          alt: 'portrait',
          copyright: null,
          url: '/profile.jpg',
        },
      },
    });
  });
}
