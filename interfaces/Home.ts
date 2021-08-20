import { Image } from './Image';

export interface IHome {
  data: IHomeData;
}

interface IHomeData {
  description: string | null;
  background: Image & {
    mobile: Image;
  };
  instagram: {
    url: string;
  };
}
