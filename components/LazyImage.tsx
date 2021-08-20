import { useEffect } from 'react';

import { lazyLoadInstance } from '@utils/lazyload';

import { Atoms } from '../styles/sprinkles.css';
import Box from './Box';

interface LazyImageProps {
  alt: string;
  dataSrc: string;
  atoms?: Atoms;
  src?: string;
}

export default function LazyImage({
  alt,
  atoms,
  dataSrc,
  src,
}: LazyImageProps): JSX.Element {
  useEffect(() => {
    lazyLoadInstance?.update();
  }); // il devrait surement y avoir un tableau de dependences pour eviter de le rerender a chaque fois
  // regarder la console de https://www.andreaverlicchi.eu/vanilla-lazyload/demos/async.html

  return (
    <Box
      as="img"
      atoms={atoms}
      alt={alt}
      className="lazy"
      data-src={dataSrc} // should i put this ? It looks like its getting downloaded at the start
      src={src} // placeholder until the loading finishes : disable it and just reserve the space ?
      // width={width}
      // height={height}
    />
  );
}
