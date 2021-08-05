import lgVideo from 'lightgallery/plugins/video';
import lgZoom from 'lightgallery/plugins/zoom';
import dynamic from 'next/dynamic';
// import { Date as ParseDate } from 'prismic-reactjs';

import { IGalleryItem } from '../interfaces/GalleryItem';
import styles from './Gallery.module.css';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-video.css';

const LightGallery = dynamic(() => import('lightgallery/react'), {
  ssr: false,
});

interface GalleryProps {
  items: IGalleryItem[];
}

export default function Gallery({ items }: GalleryProps): JSX.Element {
  // const updatedAtDate = ParseDate(updatedAt);
  return (
    <div className={styles.container}>
      {/* lgZoom, lgAutoplay, lgComment, lgFullscreen , lgHash, lgPager, lgRotate, lgShare, lgThumbnail, lgVideo, lgMediumZoom */}
      <LightGallery
        elementClassNames={styles.lightGallery}
        plugins={[lgZoom, lgVideo]}
      >
        {items.map(({ data, id }) => (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a
            href={!data.video.url ? data.photo.url : undefined} // regarder si on met un href pour la video ca pete
            key={id}
            data-video={
              data.video.url
                ? `{"source": [{"src":"${data.video.url}", "type":"video/mp4"}], "attributes": {"preload": true, "controls": true}}`
                : undefined
            } // changer le type de la video en extrayant celui de la video => voir mime types available
            data-poster={data.video.url ? data.photo.url : undefined}
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
//  <Item
//               key={`slider-${id}`}
//               id={id}
//               original={data.photo.url}
//               height={data.photo.dimensions.height}
//               width={data.photo.dimensions.width}
//               title={`${data.title ? `${data.title} ` : ""} ${
//                 data.photo.copyright !== null ? `©${data.photo.copyright} ` : ""
//               }${
//                 tags !== undefined && tags.length > 0
//                   ? `#${tags.join(" #")}`
//                   : ""
//               } `}
//             >
//             </Item>
