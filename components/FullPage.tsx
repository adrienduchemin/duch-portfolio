import ReactFullpage, { Item } from '@fullpage/react-fullpage';
import { useCallback, useState } from 'react';

import Bio from '@components/Bio';
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
  const [indexVisible, setIndexVisible] = useState(-1);

  const onLeave = useCallback(
    (_origin: Item, destination: Item, _direction: string) => {
      if (destination.index === 1) {
        setIndexVisible(0);
      } else {
        setIndexVisible(-1);
      }
    },
    [],
  );

  const onSlideLeave = useCallback(
    (_section: Item, _origin: Item, destination: Item, _direction: string) => {
      setIndexVisible(destination.index);
    },
    [],
  );

  return (
    <ReactFullpage
      licenseKey="YOUR_KEY_HERE"
      onLeave={onLeave}
      onSlideLeave={onSlideLeave}
      scrollOverflow
      // scrollOverflowReset
      lazyLoading={false}
      slidesNavigation
      render={({ fullpageApi }) => (
        <ReactFullpage.Wrapper>
          <div className="section">
            <Home home={home} fullpage={fullpageApi} />
          </div>
          <div className="section">
            {gallery.items.map((galleryItemsByType, index) => (
              <div className="slide" key={galleryItemsByType.type}>
                <Gallery
                  items={galleryItemsByType.items}
                  type={galleryItemsByType.type}
                  isVisible={indexVisible === index}
                />
              </div>
            ))}
          </div>
          <div className="section">
            <Bio bio={bio} />
          </div>
        </ReactFullpage.Wrapper>
      )}
    />
  );
}
