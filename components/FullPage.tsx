import ReactFullpage from '@fullpage/react-fullpage';

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
            {gallery.items.map((galleryItemsByType) => (
              <div className="slide" key={galleryItemsByType.type}>
                <Gallery
                  items={galleryItemsByType.items}
                  type={galleryItemsByType.type}
                  fullpage={fullpageApi}
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
