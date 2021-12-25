import { IMedia } from '@interfaces/Media';
import { whitePixel } from '@utils/constants';

import LazyImage from './LazyImage';

interface GalleryItemProps {
  gallery: IMedia['gallery'];
  photo: IMedia['photo'];
}

export default function GalleryItem({
  gallery,
  photo: { alt },
}: GalleryItemProps): JSX.Element {
  return (
    <LazyImage
      atom={{
        width: '100%',
        display: 'block',
      }}
      dataSrc={gallery.url}
      src={whitePixel}
      alt={alt ?? ''}
    />
  );
}
