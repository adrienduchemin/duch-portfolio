import { useEffect } from 'react';

import { IBio } from '@interfaces/Bio';

import Box from './Box';

interface BioProps {
  bio: IBio;
}

export default function Bio({ bio }: BioProps): JSX.Element {
  useEffect(() => {
    console.log({ bio });
  }, [bio]);

  return (
    <Box
      atoms={{
        display: 'flex',
        flexDirection: 'column',
        padding: {
          mobile: Math.random() > 0.5 ? 'small' : 'large',
          tablet: 'small',
          desktop: 'large',
        },
      }}
    >
      <p>bio</p>
    </Box>
  );
}
