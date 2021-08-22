import { IHome } from '../interfaces/Home';

export async function getHomeFixture(): Promise<IHome> {
  return new Promise((resolve) => {
    resolve({
      data: {
        description: 'Danseuse',
        background: {
          url: '/video.mp4',
        },
        instagram: {
          url: 'https://www.instagram.com/drien1993',
        },
      },
    });
  });
}