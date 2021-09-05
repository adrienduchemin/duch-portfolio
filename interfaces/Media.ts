import { IText } from '@interfaces/Text';

import { Photo } from './Photo';

export interface IMedia {
  id: string;
  updatedAt: string;
  title: string | null;
  photo: Photo & {
    galleryMobile: Photo;
    galleryTablet: Photo;
    galleryDesktop: Photo;
  };
  video: {
    // eslint-disable-next-line camelcase
    link_type?: 'Media' | 'Web'; // video perso | youtube
    url?: string; // pour l'instant on ne prend que les mp4
  };
}

export interface IPrismicMediaData {
  title: IText | null;
  photo: Photo & {
    galleryMobile: Photo;
    galleryTablet: Photo;
    galleryDesktop: Photo;
  };
  video: {
    // eslint-disable-next-line camelcase
    link_type?: 'Media' | 'Web'; // video perso | youtube
    url?: string; // pour l'instant on ne prend que les mp4
  };
}
