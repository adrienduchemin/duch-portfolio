import ReactFullpage from '@fullpage/react-fullpage';

import Gallery from '@components/Gallery';
import Home from '@components/Home';
import { IGallery } from '@interfaces/Gallery';
import { IHome } from '@interfaces/Home';

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
      render={({ fullpageApi }) => (
        <ReactFullpage.Wrapper>
          <div className="section">
            <Home home={home} fullpage={fullpageApi} />
          </div>
          <div className="section">
            <Gallery fullpage={fullpageApi} galleries={galleries} />
          </div>
        </ReactFullpage.Wrapper>
      )}
    />
  );
}
