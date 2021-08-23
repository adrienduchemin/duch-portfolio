import lgHash from 'lightgallery/plugins/hash';
import lgVideo from 'lightgallery/plugins/video';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

import GalleryItem from '@components/GalleryItem';
import LightGalleryItem from '@components/LightGalleryItem';
import { IGalleryItem } from '@interfaces/GalleryItem';
import { atoms } from '@styles/sprinkles.css';

const LightGallery = dynamic(() => import('lightgallery/react'), {
  ssr: false,
});

interface GalleryProps {
  items: IGalleryItem[];
  type: string;
}

export default function Gallery({ items, type }: GalleryProps): JSX.Element {
  useEffect(() => {
    console.log({ items, type });
  }, [items, type]);

  return (
    <>
      {type.charAt(0).toUpperCase() + type.slice(1)}
      <div
        className={atoms({
          margin: 'auto',
          display: 'grid',
          // gridGap: '2px',
          gridColumns: {
            mobile: 'small',
            tablet: 'medium',
            desktop: 'large',
          },
        })}
      >
        <LightGallery
          plugins={[lgHash, lgVideo]}
          customSlideName
          elementClassNames={atoms({
            display: 'contents',
          })}
          galleryId={type}
        >
          {items.map((item) => (
            <LightGalleryItem {...item} key={item.id}>
              <GalleryItem image={item.data.image} key={item.id} />
            </LightGalleryItem>
          ))}
        </LightGallery>
      </div>
    </>
  );
}
