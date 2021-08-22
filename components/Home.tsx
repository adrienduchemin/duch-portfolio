import { fullpageApi } from '@fullpage/react-fullpage';
import { useCallback, useEffect } from 'react';

import { IHome } from '@interfaces/Home';
import { animationArrow, atoms } from '@styles/sprinkles.css';

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
      <video
        data-autoplay
        muted
        loop
        className={atoms({
          position: 'absolute',
          right: 0,
          bottom: 0,
          top: 0,
          width: '100%',
          height: 'cent',
          backgroundPosition: 'center center',
          backgroundSize: 'contain',
          objectFit: 'cover', // a tester avec fill plutot
          zIndex: 3,
        })}
      >
        <source src={home.data.background.url} type="video/mp4" />
      </video>
      <div
        className={atoms({
          zIndex: 4,
          left: 0,
          top: 0,
          width: '100%',
          height: 'centvh',
          background: 'overlay',
          position: 'fixed',
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
            {/* eslint-disable-next-line @next/next/no-img-element  */}
            <img
              src="/instagram.svg"
              alt="Instagram"
              className={atoms({
                width: '50px',
                height: 'xs',
              })}
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
    <p
      className={atoms({
        margin: 'none',
        borderColor: 'white',
        borderRadius: '100px',
        border: 'solid',
        position: 'absolute',
        zIndex: 6,
        left: '50%',
        bottom: '20px',
        width: '100px',
        height: 'sm',
        marginLeft: '-50px',
        marginTop: '-50px',
      })}
    >
      <a
        href="#more"
        onClick={moveSectionDown}
        className={`${atoms({
          display: 'block',
          opacity: 0,
          borderRadius: '100px',
          lineHeight: 0,
          fontSize: 0,
          color: 'transparent',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '100%',
          height: 'cent',
        })} ${animationArrow}`}
      >
        More
      </a>
    </p>
  );
}
