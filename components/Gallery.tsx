import { fullpageApi } from '@fullpage/react-fullpage';
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
  fullpage: fullpageApi;
}

export default function Gallery({
  items,
  type,
  fullpage,
}: GalleryProps): JSX.Element {
  const [currentLightGalleryItemIndex, setCurrentLightGalleryItemIndex] =
    useState(-1);

  useEffect(() => {
    console.log({ items, type });
  }, [items, type]);

  const onBeforeSlide = useCallback((detail: AfterAppendSubHtmlDetail) => {
    setCurrentLightGalleryItemIndex(detail.index);
  }, []);

  const onAfterOpen = useCallback(() => {
    fullpage.setKeyboardScrolling(false);
    fullpage.setAllowScrolling(false);
  }, [fullpage]);

  const onAfterClose = useCallback(() => {
    fullpage.setKeyboardScrolling(true);
    fullpage.setAllowScrolling(true);
  }, [fullpage]);

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
          gotoNextSlideOnVideoEnd={false}
          // allowMediaOverlap
          actualSize={false}
          onBeforeSlide={onBeforeSlide}
          onAfterOpen={onAfterOpen}
          onAfterClose={onAfterClose}
          // addClass={} // utiliser ca plutot que les globalStyles ?
        >
          {items.map((item, index) => (
            <LightGalleryItem
              {...item}
              isCurrent={index === currentLightGalleryItemIndex}
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
