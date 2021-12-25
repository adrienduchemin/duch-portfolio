import { IPhoto } from './Photo';

export interface IMedia {
  id: string;
  photo: IPhoto;
  gallery: IPhoto;
  video: {
    type: 'Media' | 'Web'; // video perso | youtube
    url: string; // pour l'instant on ne prend que les mp4
  } | null;
}

export interface IPrismicMediaData {
  photo: IPhoto & {
    gallery: IPhoto;
  };
  video: {
    // eslint-disable-next-line camelcase
    link_type?: 'Media' | 'Web'; // video perso | youtube
    url?: string; // pour l'instant on ne prend que les mp4
  };
}
