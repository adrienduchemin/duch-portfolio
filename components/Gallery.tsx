import { AfterAppendSubHtmlDetail } from 'lightgallery/lg-events';
import lgHash from 'lightgallery/plugins/hash';
import lgVideo from 'lightgallery/plugins/video';
import lgZoom from 'lightgallery/plugins/zoom';
import dynamic from 'next/dynamic';
import { useCallback, useEffect, useState } from 'react';

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
  const [currentLightGalleryItem, setCurrentLightGalleryItem] = useState(-1);
  const [hasVideoStarted, setHasVideoStarted] = useState(false);

  useEffect(() => {
    console.log({ items, type });
  }, [items, type]);

  const onBeforeSlide = useCallback(
    (detail: AfterAppendSubHtmlDetail) => {
      hasVideoStarted && setHasVideoStarted(false);
      setCurrentLightGalleryItem(detail.index);
    },
    [hasVideoStarted],
  );

  const onPosterClick = useCallback(() => {
    setHasVideoStarted(true);
  }, []);

  return (
    <>
      <div className={atoms({ textAlign: 'center' })}>
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </div>
      <div
        className={atoms({
          background: 'overlay',
          display: 'grid',
          gridGap: '2px',
          gridColumns: {
            mobile: 'small',
            tablet: 'medium',
            desktop: 'large',
          },
        })}
      >
        <LightGallery
          plugins={[lgHash, lgVideo, lgZoom]}
          customSlideName
          elementClassNames={atoms({
            display: 'contents',
          })}
          galleryId={type}
          autoplayFirstVideo={false}
          controls={false}
          download={false}
          allowMediaOverlap
          actualSize={false}
          onPosterClick={onPosterClick}
          onBeforeSlide={onBeforeSlide}
          // showCloseIcon={false}
          // addClass={} // utiliser ca plutot que les globalStyles ?
        >
          {items.map((item, index) => (
            <LightGalleryItem
              {...item}
              hasVideoStarted={
                index === currentLightGalleryItem && hasVideoStarted
              }
              isCurrent={index === currentLightGalleryItem}
              key={item.id}
            >
              <GalleryItem image={item.data.image} key={item.id} />
            </LightGalleryItem>
          ))}
        </LightGallery>
      </div>
    </>
  );
}
