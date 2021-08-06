import { InitDetail } from 'lightgallery/lg-events';
import lgVideo from 'lightgallery/plugins/video';
import lgZoom from 'lightgallery/plugins/zoom';
import dynamic from 'next/dynamic';
import { useCallback, useEffect, useMemo, useRef } from 'react';

import { IGalleryItem } from '../interfaces/GalleryItem';
import styles from './Gallery.module.css';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-video.css';

// import { Date as ParseDate } from 'prismic-reactjs';
const LightGallery = dynamic(() => import('lightgallery/react'), {
  ssr: false,
});

interface GalleryProps {
  currentTags: string[];
  items: IGalleryItem[];
}

export default function Gallery({
  currentTags,
  items,
}: GalleryProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lightGallery = useRef<any>(null);
  // const updatedAtDate = ParseDate(updatedAt);

  const onInit = useCallback((detail: InitDetail) => {
    if (detail) {
      lightGallery.current = detail.instance;
    }
  }, []);

  const newItems = useMemo(
    () =>
      items.filter((item) =>
        item.tags.some((tag) => currentTags.includes(tag)),
      ),
    [currentTags, items],
  );

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    lightGallery.current?.refresh();
  }, [newItems]);

  return (
    <div className={styles.container}>
      {/* lgZoom, lgAutoplay, lgComment, lgFullscreen , lgHash, lgPager, lgRotate, lgShare, lgThumbnail, lgVideo, lgMediumZoom */}
      <LightGallery
        elementClassNames={styles.lightGallery}
        plugins={[lgZoom, lgVideo]}
        appendSubHtmlTo=".lg-item"
        onInit={onInit}
      >
        {(newItems.length > 0 ? newItems : items).map(({ data, id }) => (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a
            href={!data.video.url ? data.photo.url : undefined}
            key={id}
            data-video={
              data.video.url
                ? `{"source": [{"src":"${data.video.url}", "type":"video/mp4"}], "attributes": {"preload": true, "controls": true}}`
                : undefined
            }
            data-poster={data.video.url ? data.photo.url : undefined}
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            data-sub-html={`<div class="${styles.lightGallerySub!}">${
              data.title !== null ? `<h4>${data.title}</h4>` : ''
            }${
              data.photo.copyright !== null
                ? `<p>Copyright - ©${data.photo.copyright}</p>`
                : ''
            }</div>`}
          >
            <picture className={styles.picture}>
              <source
                srcSet={data.photo[1].url}
                media={`(min-width: ${data.photo[1].dimensions.width}px)`}
              />
              <source
                srcSet={data.photo[2].url}
                media={`(min-width: ${data.photo[2].dimensions.width}px)`}
              />
              <source srcSet={data.photo[3].url} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className={styles.img}
                decoding="async"
                src={data.photo.url}
                alt={data.photo.alt ? data.photo.alt : ''}
                loading="lazy"
              />
            </picture>
          </a>
        ))}
      </LightGallery>
    </div>
  );
}
