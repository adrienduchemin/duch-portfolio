import { fullpageApi } from '@fullpage/react-fullpage';
import { InitDetail } from 'lightgallery/lg-events';
import lgVideo from 'lightgallery/plugins/video';
import lgZoom from 'lightgallery/plugins/zoom';
import dynamic from 'next/dynamic';
import { useCallback, useEffect, useRef, useState } from 'react';

import GalleryItem from '@components/GalleryItem';
import LightGalleryItem from '@components/LightGalleryItem';
import { IGallery } from '@interfaces/Gallery';
import { atoms } from '@styles/sprinkles.css';

const LightGallery = dynamic(() => import('lightgallery/react'), {
  ssr: false,
});

interface GalleryProps {
  galleries: IGallery[];
  fullpage: fullpageApi;
}

export default function Gallery({
  galleries,
  fullpage,
}: GalleryProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lightGallery = useRef<any>(null);
  const [currentGallery, setCurrentGallery] = useState(
    galleries.find((g) => g.name === 'danse')!,
  );

  const onAfterOpen = useCallback(() => {
    fullpage.setKeyboardScrolling(false);
    fullpage.setAllowScrolling(false);
  }, [fullpage]);

  const onAfterClose = useCallback(() => {
    fullpage.setKeyboardScrolling(true);
    fullpage.setAllowScrolling(true);
  }, [fullpage]);

  const handleChangeGallery = useCallback(
    (name: string) => {
      setCurrentGallery(galleries.find((g) => g.name === name)!);
    },
    [galleries],
  );

  const onInit = useCallback((detail: InitDetail) => {
    if (detail) {
      lightGallery.current = detail.instance;
    }
  }, []);

  useEffect(() => {
    if (lightGallery.current) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      lightGallery.current.refresh();
    }
  }, [currentGallery]);

  return (
    <div
      className={atoms({
        height: 'cent',
      })}
    >
      {galleries.map((gallery) => (
        <button
          type="button"
          key={gallery.name}
          onClick={() => handleChangeGallery(gallery.name)}
        >
          {gallery.name}
        </button>
      ))}
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
          plugins={[lgVideo, lgZoom]}
          elementClassNames={atoms({
            display: 'contents',
          })}
          autoplayFirstVideo={false}
          controls={false}
          download={false}
          gotoNextSlideOnVideoEnd={false}
          // updateSlides(galleryItems, 1);
          loop={false}
          videojs
          // videojsOptions={{ muted: true }}
          mobileSettings={{
            showCloseIcon: true,
          }}
          actualSize={false} // what is this ?
          onAfterOpen={onAfterOpen}
          onAfterClose={onAfterClose}
          onInit={onInit}
          // addClass={} // utiliser ca plutot que les globalStyles ?
        >
          {currentGallery.medias.map((media) => (
            <LightGalleryItem {...media} key={media.id}>
              <GalleryItem photo={media.photo} key={media.id} />
            </LightGalleryItem>
          ))}
        </LightGallery>
      </div>
    </div>
  );
}
