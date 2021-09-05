import { fullpageApi } from '@fullpage/react-fullpage';
import dynamic from 'next/dynamic';

import Instagram from '@assets/svg/instagram.svg';
import Youtube from '@assets/svg/youtube.svg';
import LazySource from '@components/LazySource';
import LazyVideo from '@components/LazyVideo';
import { IHome } from '@interfaces/Home';
import { atoms } from '@styles/sprinkles.css';

const Arrow = dynamic(() => import('@components/Arrow'), {
  ssr: false,
});

interface HomeProps {
  home: IHome;
  fullpage: fullpageApi;
}

export default function Home({
  home: { background, description, instagram, youtube },
  fullpage,
}: HomeProps): JSX.Element {
  return (
    <>
      <LazyVideo
        autoplay
        muted
        loop
        playsInline
        /* video de basse qualité */
        dataSrc={background.url}
        atom={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          top: 0,
          width: '100%',
          height: 'cent',
          backgroundPosition: 'center center',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <LazySource dataSrc={background.url} type="video/mp4" />
      </LazyVideo>
      <div
        className={atoms({
          background: 'overlay',
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
        })}
      >
        <svg height="20" width="120">
          <text x="0" y="15" fill="white">
            Laïs Beunardeau
          </text>
        </svg>
        <p>{description}</p>
        <br />
        <br />
        <div
          className={atoms({
            display: 'flex',
            flexDirection: 'row',
          })}
        >
          <a href={instagram.url} target="_blank" rel="noreferrer">
            <Instagram
              className={`${atoms({
                color: 'white',
                width: '30px',
                height: 'xs',
                marginRight: '15px',
              })}`}
            />
          </a>{' '}
          <a href={youtube.url} target="_blank" rel="noreferrer">
            <Youtube
              className={`${atoms({
                color: 'white',
                width: '30px',
                height: 'xs',
              })}`}
            />
          </a>
        </div>
      </div>
      <Arrow fullpage={fullpage} pos="bottom" />
    </>
  );
}
