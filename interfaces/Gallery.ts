import { IGalleryItem } from '@interfaces/GalleryItem';

export interface IGallery {
  items: IGalleryItem[];
  types: string[];
}
