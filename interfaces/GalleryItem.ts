import { Image } from './Image';

export interface IGalleryItem {
  data: IGalleryItemData;
  id: string;
  updatedAt: string;
}

export interface IGalleryItemData {
  title: string | null;
  type: string;
  image: Image & {
    mobile: Image;
    tablet: Image;
    desktop: Image;
  };
  video: {
    // eslint-disable-next-line camelcase
    link_type?: 'Media' | 'Web'; // video perso | youtube
    url?: string; // pour l'instant on ne prend que les mp4
  };
}
