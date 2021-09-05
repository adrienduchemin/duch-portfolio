import { IMedia } from '@interfaces/Media';
import { whitePixel } from '@utils/constants';

import LazyImage from './LazyImage';
import LazySource from './LazySource';

interface GalleryItemProps {
  photo: IMedia['photo'];
}

export default function GalleryItem({
  photo: { alt, galleryDesktop, galleryMobile, galleryTablet },
}: GalleryItemProps): JSX.Element {
  return (
    <picture>
      {/* desktop > 1024  */}
      <LazySource media="(min-width: 1024px)" dataSrcset={galleryDesktop.url} />
      {/* tablet 768 < x <= 1024 */}
      <LazySource media="(min-width: 600px)" dataSrcset={galleryTablet.url} />
      <LazyImage
        atom={{
          width: '100%',
          // objectFit: 'fill', // not usefull for now
          display: 'block',
        }}
        /* mobile <= 768 */
        dataSrc={galleryMobile.url}
        /* placeholder */
        src={whitePixel}
        alt={alt ?? ''}
      />
    </picture>
  );
}
