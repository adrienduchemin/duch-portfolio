import lgHash from 'lightgallery/plugins/hash';
import lgVideo from 'lightgallery/plugins/video';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

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
  onMount: boolean;
}

export default function Gallery({
  items,
  type,
  onMount,
}: GalleryProps): JSX.Element {
  const [isOverlayActive, setIsOverlayActive] = useState(false);

  useEffect(() => {
    if (onMount) {
      setIsOverlayActive(true);
    }
  }, [onMount]);

  useEffect(() => {
    const timer = isOverlayActive
      ? setTimeout(() => {
          setIsOverlayActive(false);
        }, 2000)
      : undefined;
    return () => (timer ? clearTimeout(timer) : undefined);
  }, [isOverlayActive]);

  useEffect(() => {
    // voir pourquoi ce composant est autant appelé dans les logs ??
    console.log({ items, type });
  }, [items, type]);

  return (
    <>
      <div
        className={atoms({
          margin: 'auto',
          display: 'grid',
          opacity: isOverlayActive ? 1 : 0,
          visibility: isOverlayActive ? 'visible' : 'hidden',
          position: 'fixed',
          width: '100%',
          height: 'cent',
          background: 'overlay',
          zIndex: 999,
          transform: isOverlayActive ? 'scale(1)' : 'scale(1.8)',
        })}
      >
        <div
          className={atoms({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 'centvh',
          })}
        >
          <h1
            className={atoms({
              color: 'white',
              fontWeight: 'bold',
              // position: 'absolute',
              // left: '50%',
              // top: '50%',
              // textAlign: 'center',
              margin: 'none',
              padding: 'none',
              transform: 'translate(-50%, -50%)',
            })}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </h1>
        </div>
      </div>
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
