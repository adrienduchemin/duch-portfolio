import { IHome } from '../interfaces/Home';

export async function getHomeFixture(): Promise<IHome> {
  return new Promise((resolve) => {
    resolve({
      data: {
        description: 'Danseuse',
        background: {
          url: '/danse.mp4', // video de basse qualite qui se charge vite
        },
        instagram: {
          url: 'https://www.instagram.com/drien1993',
        },
      },
    });
  });
}
