import { IGalleryItemData } from '@interfaces/GalleryItem';

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
          objectFit: 'scale-down',
          display: 'block',
          cursor: 'pointer',
        }}
        /* mobile <= 768 */
        dataSrc={image.mobile.url}
        /* placeholder */
        src="/card.svg"
        alt={image.alt ?? ''}
      />
    </picture>
  );
}
