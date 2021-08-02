import lgZoom from 'lightgallery/plugins/zoom';
import dynamic from 'next/dynamic';

import { IPhoto } from '../pages';
import styles from './Gallery.module.css';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';

const LightGallery = dynamic(() => import('lightgallery/react'), {
  ssr: false,
});

interface GalleryProps {
  photos: IPhoto[];
}

export default function Gallery({ photos }: GalleryProps): JSX.Element {
  return (
    <div className={styles.container}>
      {/* lgZoom, lgAutoplay, lgComment, lgFullscreen , lgHash, lgPager, lgRotate, lgShare, lgThumbnail, lgVideo, lgMediumZoom */}
      <LightGallery elementClassNames={styles.lightGallery} plugins={[lgZoom]}>
        {photos.map(({ data, id }) => (
          <>
            <a href={data.photo.url} key={id}>
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
                  key={id}
                  decoding="async"
                  src={data.photo.url}
                  alt={data.photo.alt ? data.photo.alt : ''}
                  loading="lazy"
                />
              </picture>
            </a>
          </>
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
