import { IGalleryItemData } from '@interfaces/GalleryItem';

import Box from './Box';
import LazyImage from './LazyImage';
import LazySource from './LazySource';

interface GalleryItemProps {
  image: IGalleryItemData['image'];
}

export default function GalleryItem({ image }: GalleryItemProps): JSX.Element {
  return (
    <Box as="picture">
      <LazySource media="(min-width: 800px)" dataSrcset={image.mobile.url} />
      <LazySource media="(min-width: 1200px)" dataSrcset={image.url} />
      <LazyImage
        atoms={{
          width: '100%',
          objectFit: 'scale-down',
          display: 'block',
          cursor: 'pointer',
        }}
        dataSrc={image.url} // not needed ?
        src="/lowquality.jpg" // not needed ?
        alt={image.alt ?? ''}
      />
    </Box>
  );
}
