import { Photo } from './Photo';

export interface IMedia {
  id: string;
  updatedAt: string;
  photo: Photo & {
    gallery: Photo;
  };
  video: {
    // eslint-disable-next-line camelcase
    link_type?: 'Media' | 'Web'; // video perso | youtube
    url?: string; // pour l'instant on ne prend que les mp4
  };
}

export interface IOldMedia {
  photo: Photo & {
    gallery: Photo;
    galleryMobile: Photo;
    galleryTablet: Photo;
    galleryDesktop: Photo;
    galleryLargeDesktop: Photo;
  };
}

export interface IPrismicMediaData {
  photo: Photo & {
    gallery: Photo;
  };
  video: {
    // eslint-disable-next-line camelcase
    link_type?: 'Media' | 'Web'; // video perso | youtube
    url?: string; // pour l'instant on ne prend que les mp4
  };
}
