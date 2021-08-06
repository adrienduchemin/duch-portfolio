export interface IGalleryItem {
  data: IGalleryItemData;
  id: string;
  tags: string[];
  updatedAt: string;
}

export interface IGalleryItemData {
  title: string | null;
  photo: {
    '1': {
      // donner des meilleurs noms de resolution (voire par format ?)
      dimensions: { width: number; height: number };
      alt: string | null;
      copyright: string | null;
      url: string;
    };
    '2': {
      dimensions: { width: number; height: number };
      alt: string | null;
      copyright: string | null;
      url: string;
    };
    '3': {
      dimensions: { width: number; height: number };
      alt: string | null;
      copyright: string | null;
      url: string;
    };
    dimensions: { width: number; height: number };
    alt: string | null;
    copyright: string | null;
    url: string;
  };
  video: {
    name?: string; // peut etre qu'il faudra enlever l'extension s'il y en a une
    url?: string; // extraire l'extension pour trouver le type de la video
  };
}
