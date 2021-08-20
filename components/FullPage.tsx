import ReactFullpage, { Item } from '@fullpage/react-fullpage';
import { useCallback } from 'react';

import Bio from '@components/Bio';
import Box from '@components/Box';
import Gallery from '@components/Gallery';
import Home from '@components/Home';
import { IBio } from '@interfaces/Bio';
import { IGalleryItem } from '@interfaces/GalleryItem';
import { IHome } from '@interfaces/Home';

interface FullPageProps {
  bio: IBio;
  home: IHome;
  galleryItems: IGalleryItem[];
}
export default function FullPage({
  bio,
  home,
  galleryItems,
}: FullPageProps): JSX.Element {
  const onLeave = useCallback(
    (origin: Item, destination: Item, direction: string) => {
      console.log('Leaving', { origin, destination, direction });
    },
    [],
  );

  const afterLoad = useCallback(
    (origin: Item, destination: Item, direction: string) => {
      console.log('After load', { origin, destination, direction });
    },
    [],
  );

  return (
    <ReactFullpage
      licenseKey="YOUR_KEY_HERE"
      onLeave={onLeave}
      afterLoad={afterLoad}
      scrollOverflow
      lazyLoading={false}
      render={({ fullpageApi }) => (
        <ReactFullpage.Wrapper>
          <Box id="home" className="section">
            <Home home={home} fullpage={fullpageApi} />
          </Box>
          <Box id="gallery" className="section">
            <Gallery items={galleryItems} />
          </Box>
          <Box id="bio" className="section">
            <Bio bio={bio} />
          </Box>
        </ReactFullpage.Wrapper>
      )}
    />
  );
}
