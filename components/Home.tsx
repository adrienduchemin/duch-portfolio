import { fullpageApi } from '@fullpage/react-fullpage';
import { useEffect } from 'react';

import Instagram from '@assets/svg/instagram.svg';
import Arrow from '@components/Arrow';
import LazySource from '@components/LazySource';
import LazyVideo from '@components/LazyVideo';
import { IHome } from '@interfaces/Home';
import { atoms } from '@styles/sprinkles.css';

interface HomeProps {
  home: IHome;
  fullpage: fullpageApi;
}

export default function Home({ home, fullpage }: HomeProps): JSX.Element {
  useEffect(() => {
    console.log({ home });
  }, [home]);

  return (
    <>
      <LazyVideo
        autoplay
        muted
        loop
        /* video de basse qualité */
        dataSrc={home.data.background.url}
        atom={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          top: 0,
          width: '100%',
          height: 'cent',
          backgroundPosition: 'center center',
          backgroundSize: 'contain',
          objectFit: 'cover', // a tester avec fill selon la video
          zIndex: 3,
        }}
      >
        <LazySource dataSrc={home.data.background.url} type="video/mp4" />
      </LazyVideo>
      <div
        className={atoms({
          zIndex: 4,
          left: 0,
          top: 0,
          width: '100%',
          height: 'cent',
          background: 'overlay',
          position: 'absolute',
        })}
      />
      <div
        className={atoms({
          left: 0,
          top: 0,
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'cent',
          width: '100%',
          color: 'white',
          zIndex: 5,
        })}
      >
        <svg height="20" width="120">
          <text x="0" y="15" fill="white">
            Laïs Beunardeau
          </text>
        </svg>
        <p>{home.data.description}</p>
        <br />
        <br />
        <a href={home.data.instagram.url} target="_blank" rel="noreferrer">
          <Instagram
            className={`${atoms({
              color: 'white',
              width: '60px',
              height: 'xs',
            })}`}
          />
        </a>
      </div>
      <Arrow fullpage={fullpage} pos="bottom" />
    </>
  );
}
