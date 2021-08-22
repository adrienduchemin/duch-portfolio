import { IGalleryItem } from '@interfaces/GalleryItem';

export interface IGallery {
  items: IGalleryItemsByType[];
}

export interface IGalleryItemsByType {
  type: string;
  items: IGalleryItem[];
}
