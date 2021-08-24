import { fullpageApi } from '@fullpage/react-fullpage';
import lgHash from 'lightgallery/plugins/hash';
import lgVideo from 'lightgallery/plugins/video';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

import GalleryItem from '@components/GalleryItem';
import LightGalleryItem from '@components/LightGalleryItem';
import { IGalleryItem } from '@interfaces/GalleryItem';
import { atoms } from '@styles/sprinkles.css';

const Arrow = dynamic(() => import('@components/Arrow'), {
  ssr: false,
});

const LightGallery = dynamic(() => import('lightgallery/react'), {
  ssr: false,
});

interface GalleryProps {
  items: IGalleryItem[];
  type: string;
  fullpage: fullpageApi;
}

export default function Gallery({
  items,
  type,
  fullpage,
}: GalleryProps): JSX.Element {
  useEffect(() => {
    console.log({ items, type });
  }, [items, type]);

  return (
    <>
      <div
        className={atoms({
          height: 'cent', // pas forcement utilisé ?
        })}
      >
        <div className={atoms({ textAlign: 'center' })}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </div>
        <div
          className={atoms({
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
              position: 'fixed',
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
        {/* A deplacer dans Fullpage avec les autres si elle la veut sur l'ecran sans scroll */}
        <Arrow fullpage={fullpage} pos="bottom" color="black" />
      </div>
    </>
  );
}
