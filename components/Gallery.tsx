import lgHash from 'lightgallery/plugins/hash';
import lgVideo from 'lightgallery/plugins/video';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

import LightGalleryItem from '@components/LightGalleryItem';
import { IGalleryItem } from '@interfaces/GalleryItem';

import Box from './Box';
import styles from './Gallery.module.css';
import GalleryItem from './GalleryItem';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-video.css';

const LightGallery = dynamic(() => import('lightgallery/react'), {
  ssr: false,
});

interface GalleryProps {
  items: IGalleryItem[];
}

export default function Gallery({ items }: GalleryProps): JSX.Element {
  useEffect(() => {
    console.log({ items });
  }, [items]);

  return (
    <Box
      atoms={{
        margin: 'auto',
        display: 'grid',
        // gridGap: '2px',
        gridColumns: {
          mobile: 'small',
          tablet: 'medium',
          desktop: 'large',
        },
      }}
    >
      <LightGallery
        plugins={[lgHash, lgVideo]}
        customSlideName
        elementClassNames={styles.lightGallery}
      >
        {items.map((item) => (
          <LightGalleryItem {...item} key={item.id}>
            <GalleryItem image={item.data.image} key={item.id} />
          </LightGalleryItem>
        ))}
      </LightGallery>
    </Box>
  );
}
