import { IGalleryItemData } from '@interfaces/GalleryItem';
import { whitePixel } from '@utils/constants';

import LazyImage from './LazyImage';
import LazySource from './LazySource';

interface GalleryItemProps {
  image: IGalleryItemData['image'];
}

export default function GalleryItem({ image }: GalleryItemProps): JSX.Element {
  return (
    <picture>
      {/* desktop > 1024  */}
      <LazySource media="(min-width: 1024px)" dataSrcset={image.desktop.url} />
      {/* tablet 768 < x <= 1024 */}
      <LazySource media="(min-width: 600px)" dataSrcset={image.tablet.url} />
      <LazyImage
        atom={{
          width: '100%',
          // objectFit: 'fill', // not usefull for now
          display: 'block',
        }}
        /* mobile <= 768 */
        dataSrc={image.mobile.url}
        /* placeholder */
        src={whitePixel}
        alt={image.alt ?? ''}
      />
    </picture>
  );
}
