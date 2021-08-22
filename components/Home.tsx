import { fullpageApi } from '@fullpage/react-fullpage';
import { useCallback, useEffect } from 'react';

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
          <p>Laïs Beunardeau</p>
          <p>{home.data.description}</p>
          <br />
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
          <br />
          <br />
          <br />
          <Button fullpage={fullpage} />
        </div>
      </div>
    </>
  );
}

interface ButtonProps {
  fullpage: fullpageApi;
}

function Button({ fullpage }: ButtonProps): JSX.Element {
  const moveSectionDown = useCallback(() => {
    fullpage.moveSectionDown();
  }, [fullpage]);

  return (
    <button
      type="button"
      onClick={moveSectionDown}
      className={atoms({
        padding: 'medium',
        cursor: 'pointer',
        fontFamily: 'inherit',
      })}
    >
      Click me to move down
    </button>
  );
}
