import ReactFullpage, { Item } from '@fullpage/react-fullpage';
import { useCallback } from 'react';

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
  const afterLoad = useCallback(
    (_origin: Item, destination: Item, _direction: string) => {
      if (destination.index === 1) {
        // trigger modal
      }
    },
    [],
  );

  const afterSlideLoad = useCallback(
    (section: Item, _origin: Item, _destination: Item, _direction: string) => {
      if (section.index === 1) {
        // trigger modal
      }
    },
    [],
  );

  return (
    <ReactFullpage
      licenseKey="YOUR_KEY_HERE"
      afterLoad={afterLoad}
      afterSlideLoad={afterSlideLoad}
      scrollOverflow
      lazyLoading={false}
      slidesNavigation
      render={({ fullpageApi }) => (
        <ReactFullpage.Wrapper>
          <div className="section">
            <Home home={home} fullpage={fullpageApi} />
          </div>
          <div className="section">
            <div className="slide">
              <Gallery
                items={gallery.items
                  .filter(
                    (galleryItem) =>
                      galleryItem.data.type === null ||
                      galleryItem.data.type === 'danse',
                  )
                  .sort(
                    (a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt), // peut etre a inverser ?
                  )}
                type="danse"
              />
            </div>
            {gallery.types.map((galleryType) => (
              <div className="slide" key={galleryType}>
                <Gallery
                  items={gallery.items
                    .filter(
                      (galleryItem) => galleryItem.data.type === galleryType,
                    )
                    .sort(
                      (a, b) =>
                        new Date(b.updatedAt).getTime() -
                        new Date(a.updatedAt).getTime(), // peut etre a inverser ?
                    )}
                  type={galleryType}
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
