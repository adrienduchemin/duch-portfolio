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
  };
  video: {
    url?: string; // pour l'instant on ne prend que les mp4
  };
}
