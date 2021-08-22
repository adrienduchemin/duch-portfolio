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
      <div
        className={atoms({
          left: 0,
          top: 0,
          zIndex: -1,
          position: 'fixed',
          width: '100%',
          height: 'centvh',
        })}
      >
        <video
          onFocus={(e) => e.target.play()}
          autoPlay
          muted
          loop
          className={atoms({
            height: 'cent',
            width: '100%',
            objectFit: 'fill', // ou cover si elle prefere cropper a droite
          })}
        >
          <source src={home.data.background.url} type="video/mp4" />
        </video>
      </div>
      <div
        className={atoms({
          left: 0,
          top: 0,
          zIndex: 0,
          position: 'fixed',
          width: '100%',
          height: 'centvh',
          background: 'overlay',
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
            zIndex: 1,
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
