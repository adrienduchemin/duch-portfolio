import { fullpageApi } from '@fullpage/react-fullpage';
import { useCallback, useEffect } from 'react';

import { IHome } from '@interfaces/Home';

import Box from './Box';

interface HomeProps {
  home: IHome;
  fullpage: fullpageApi;
}

export default function Home({ home, fullpage }: HomeProps): JSX.Element {
  useEffect(() => {
    console.log({ home });
  }, [home]);

  return (
    <Box
      atoms={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <p>home</p>
      <Button fullpage={fullpage} />
    </Box>
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
    <Box
      as="button"
      onClick={moveSectionDown}
      atoms={{
        padding: 'medium',
        cursor: 'pointer',
      }}
      style={{ fontFamily: 'inherit' }}
    >
      Click me to move down
    </Box>
  );
}
