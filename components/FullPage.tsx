import ReactFullpage, { Item } from '@fullpage/react-fullpage';
import { Dispatch, SetStateAction, useCallback, useState } from 'react';

import Dot from '@components/Dot';
import Gallery from '@components/Gallery';
import Home from '@components/Home';
import { IGallery } from '@interfaces/Gallery';
import { IHome } from '@interfaces/Home';

interface FullPageProps {
  home: IHome;
  galleries: IGallery[];
  setDescription: Dispatch<SetStateAction<string>>;
  setImageUrl: Dispatch<SetStateAction<string>>;
}

export default function FullPage({
  home,
  galleries,
  setImageUrl,
  setDescription,
}: FullPageProps): JSX.Element {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const onSlideLeave = useCallback(
    (_section: Item, _origin: Item, destination: Item, _direction: string) => {
      setActiveSlide(destination.index);
    },
    [],
  );

  return (
    <ReactFullpage
      licenseKey="YOUR_KEY_HERE"
      scrollOverflow
      onSlideLeave={onSlideLeave}
      lazyLoading={false}
      controlArrows={false}
      loopHorizontal={false}
      render={({ fullpageApi }) => (
        <ReactFullpage.Wrapper>
          <div className="section">
            <Home home={home} fullpage={fullpageApi} />
          </div>
          <div className="section">
            {galleries.map((gallery) => (
              <div className="slide" key={gallery.name}>
                <Gallery
                  fullpage={fullpageApi}
                  gallery={gallery}
                  setImageUrl={setImageUrl}
                  setDescription={setDescription}
                />
              </div>
            ))}
            <Dot activeSlide={activeSlide} fullpage={fullpageApi} slide={0} />
            <Dot activeSlide={activeSlide} fullpage={fullpageApi} slide={1} />
            <Dot activeSlide={activeSlide} fullpage={fullpageApi} slide={2} />
          </div>
        </ReactFullpage.Wrapper>
      )}
    />
  );
}
