import { IGalleryItemData } from '@interfaces/GalleryItem';

import LazyImage from './LazyImage';
import LazySource from './LazySource';

interface GalleryItemProps {
  image: IGalleryItemData['image'];
}

export default function GalleryItem({ image }: GalleryItemProps): JSX.Element {
  return (
    <picture>
      <LazySource media="(min-width: 800px)" dataSrcset={image.mobile.url} />
      <LazySource media="(min-width: 1200px)" dataSrcset={image.url} />
      <LazyImage
        atom={{
          width: '100%',
          objectFit: 'scale-down',
          display: 'block',
          cursor: 'pointer',
        }}
        dataSrc={image.url}
        // src="/card.svg" // this is causing the scrolling bug so let's wait for now
        src="/lowquality.jpg"
        alt={image.alt ?? ''}
      />
    </picture>
  );
}
