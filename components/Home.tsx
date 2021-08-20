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
    <div
      className={atoms({
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
      })}
    >
      <p>Laïs Beunardeau</p>
      <p>{home.data.description}</p>
      <br />
      <br />
      <br />
      <a href={home.data.instagram.url} target="_blank" rel="noreferrer">
        Insta
      </a>
      <br />
      <br />
      <br />
      <Button fullpage={fullpage} />
    </div>
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
