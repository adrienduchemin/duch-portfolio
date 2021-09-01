export interface IHome {
  data: IHomeData;
}

interface IHomeData {
  description: string | null;
  background: {
    url?: string; // pour l'instant on ne prend que les mp4
  };
  instagram: {
    url: string;
  };
  youtube: {
    url: string;
  };
}
