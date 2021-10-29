import { fullpageApi } from '@fullpage/react-fullpage';
import { AfterAppendSubHtmlDetail } from 'lightgallery/lg-events';
import lgHash from 'lightgallery/plugins/hash';
import lgVideo from 'lightgallery/plugins/video';
import lgZoom from 'lightgallery/plugins/zoom';
import dynamic from 'next/dynamic';
import { Dispatch, SetStateAction, useCallback, useState } from 'react';

import GalleryItem from '@components/GalleryItem';
import LightGalleryItem from '@components/LightGalleryItem';
import { IGallery } from '@interfaces/Gallery';
import { atoms } from '@styles/sprinkles.css';
import { initialDescription, initialImageUrl } from 'pages';

const LightGallery = dynamic(() => import('lightgallery/react'), {
  ssr: false,
});

interface GalleryProps {
  gallery: IGallery;
  fullpage: fullpageApi;
  setDescription: Dispatch<SetStateAction<string>>;
  setImageUrl: Dispatch<SetStateAction<string>>;
}

export default function Gallery({
  gallery: { name, medias },
  fullpage,
  setDescription,
  setImageUrl,
}: GalleryProps): JSX.Element {
  const [currentLightGalleryItemIndex, setCurrentLightGalleryItemIndex] =
    useState(-1);

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
    setCurrentLightGalleryItemIndex(-1);
    setDescription(initialDescription);
    setImageUrl(initialImageUrl);
  }, [fullpage, setDescription, setImageUrl]);

  return (
    <div
      className={atoms({
        height: 'cent',
      })}
    >
      <div
        className={atoms({
          textAlign: 'center',
          fontSize: 'large',
          color: 'black',
        })}
      >
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </div>
      <div
        className={atoms({
          display: 'grid',
          gridGap: '2px',
          gridColumns: {
            mobile: 'small',
            tablet: 'medium',
            desktop: 'large',
            largeDesktop: 'extraLarge',
          },
        })}
      >
        <LightGallery
          plugins={[lgHash, lgVideo, lgZoom]}
          customSlideName
          elementClassNames={atoms({
            display: 'contents',
          })}
          galleryId={name}
          autoplayFirstVideo={false}
          controls={false}
          download={false}
          gotoNextSlideOnVideoEnd={false}
          loop={false}
          videojs
          // videojsOptions={{ muted: true }}
          mobileSettings={{
            showCloseIcon: true,
          }}
          actualSize={false}
          onBeforeSlide={onBeforeSlide}
          onAfterOpen={onAfterOpen}
          onAfterClose={onAfterClose}
          // addClass={} // utiliser ca plutot que les globalStyles ?
        >
          {medias.map((media, index) => (
            <LightGalleryItem
              {...media}
              isCurrent={index === currentLightGalleryItemIndex}
              key={media.id}
              setDescription={setDescription}
              setImageUrl={setImageUrl}
            >
              <GalleryItem photo={media.photo} key={media.id} />
            </LightGalleryItem>
          ))}
        </LightGallery>
      </div>
    </div>
  );
}
