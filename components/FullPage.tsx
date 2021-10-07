import ReactFullpage from '@fullpage/react-fullpage';
import dynamic from 'next/dynamic';

import Gallery from '@components/Gallery';
import Home from '@components/Home';
import { IGallery } from '@interfaces/Gallery';
import { IHome } from '@interfaces/Home';

const Arrow = dynamic(() => import('@components/Arrow'), {
  ssr: false,
});

interface FullPageProps {
  home: IHome;
  galleries: IGallery[];
}

export default function FullPage({
  home,
  galleries,
}: FullPageProps): JSX.Element {
  return (
    <ReactFullpage
      licenseKey="YOUR_KEY_HERE"
      scrollOverflow
      lazyLoading={false}
      controlArrows={false}
      render={({ fullpageApi }) => (
        <ReactFullpage.Wrapper>
          <div className="section">
            <Home home={home} fullpage={fullpageApi} />
          </div>
          <div className="section">
            {galleries.map((gallery) => (
              <div className="slide" key={gallery.name}>
                <Gallery fullpage={fullpageApi} gallery={gallery} />
              </div>
            ))}
            <Arrow fullpage={fullpageApi} pos="right" color="black" />
            <Arrow fullpage={fullpageApi} pos="left" color="black" />
          </div>
        </ReactFullpage.Wrapper>
      )}
    />
  );
}
