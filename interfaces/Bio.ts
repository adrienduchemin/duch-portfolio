// import { RichTextBlock } from 'prismic-reactjs';

import { Image } from './Image';

export interface IBio {
  data: IBioData;
}

interface IBioData {
  // description: RichTextBlock[];
  description: string;
  image: Image;
}
