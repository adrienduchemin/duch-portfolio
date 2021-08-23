import { useEffect } from 'react';

import LazyImage from '@components/LazyImage';
import { IBio } from '@interfaces/Bio';
import { atoms } from '@styles/sprinkles.css';
import { whitePixel } from '@utils/constants';

interface BioProps {
  bio: IBio;
}

export default function Bio({ bio }: BioProps): JSX.Element {
  useEffect(() => {
    console.log({ bio });
  }, [bio]);

  return (
    <div
      className={atoms({
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        padding: {
          mobile: Math.random() > 0.5 ? 'small' : 'large',
          tablet: 'small',
          desktop: 'large',
        },
      })}
    >
      <LazyImage
        atom={{
          verticalAlign: 'middle',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '150px',
          height: 'small',
          borderRadius: '50%',
        }}
        /* image de basse qualité */
        dataSrc={bio.data.image.url}
        alt={bio.data.image.alt ?? ''}
        /* placeholder */
        src={whitePixel}
        width="150px"
        height="150px"
      />
      <p>{bio.data.description}</p>
    </div>
  );
}
