import { IMedia } from '@interfaces/Media';

export interface IGallery {
  name: string;
  medias: IMedia[];
  position: number;
}

export interface IPrismicGalleryData {
  medias: IPrismicMedia[];
  position: number;
}

export interface IPrismicMedia {
  media: {
    id: string;
    // eslint-disable-next-line camelcase
    last_publication_date: string;
  };
}
