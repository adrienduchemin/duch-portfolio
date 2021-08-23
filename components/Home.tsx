import { fullpageApi } from '@fullpage/react-fullpage';
import { useCallback, useEffect } from 'react';

import ArrowSVG from '@assets/svg/arrow.svg';
import InstagramSVG from '@assets/svg/instagram.svg';
import LazySource from '@components/LazySource';
import LazyVideo from '@components/LazyVideo';
import { IHome } from '@interfaces/Home';
import { animationBounceArrow, atoms } from '@styles/sprinkles.css';

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
      >
        <div
          className={atoms({
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
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
            <InstagramSVG
              className={`${atoms({
                width: '60px',
                height: 'xs',
              })}`}
            />
          </a>
        </div>
        <Arrow fullpage={fullpage} />
      </div>
    </>
  );
}

interface ArrowProps {
  fullpage: fullpageApi;
}

function Arrow({ fullpage }: ArrowProps): JSX.Element {
  const moveSectionDown = useCallback(() => {
    fullpage.moveSectionDown();
  }, [fullpage]);

  return (
    <>
      <div
        onClick={moveSectionDown}
        onKeyPress={moveSectionDown}
        tabIndex={0}
        role="button"
        className={`${atoms({
          zIndex: 6,
          cursor: 'pointer',
          width: '60px',
          height: 'xs',
          borderColor: 'white',
          borderRadius: '60px',
          border: 'solid',
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          margin: 'none',
          marginLeft: '-30px',
          marginTop: '-30px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        })} ${animationBounceArrow}`}
      >
        <ArrowSVG
          className={`${atoms({
            width: '40px',
            height: 'xxs',
          })}`}
        />
      </div>
    </>
  );
}
