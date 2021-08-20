import ReactFullpage, { Item } from '@fullpage/react-fullpage';
import { useCallback } from 'react';

import Bio from '@components/Bio';
import Box from '@components/Box';
import Gallery from '@components/Gallery';
import Home from '@components/Home';
import { IBio } from '@interfaces/Bio';
import { IGallery } from '@interfaces/Gallery';
import { IHome } from '@interfaces/Home';

interface FullPageProps {
  bio: IBio;
  home: IHome;
  gallery: IGallery;
}
export default function FullPage({
  bio,
  home,
  gallery,
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
          <Box className="section" data-anchor="home">
            <Home home={home} fullpage={fullpageApi} />
          </Box>
          <Box className="section" data-anchor="gallery">
            <Box className="slide" data-anchor="danse">
              <Gallery
                items={gallery.items.filter(
                  (galleryItem) =>
                    galleryItem.data.type === null ||
                    galleryItem.data.type === 'danse',
                )}
                type="danse"
              />
            </Box>
            {gallery.types.map((galleryType) => (
              <Box
                className="slide"
                data-anchor={galleryType}
                key={galleryType}
              >
                <Gallery
                  items={gallery.items.filter(
                    (galleryItem) => galleryItem.data.type === galleryType,
                  )}
                  type={galleryType}
                />
              </Box>
            ))}
          </Box>
          <Box className="section" data-anchor="bio">
            <Bio bio={bio} />
          </Box>
        </ReactFullpage.Wrapper>
      )}
    />
  );
}
