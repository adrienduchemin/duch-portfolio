import { useEffect } from 'react';

import { lazyLoadInstance } from '@utils/lazyload';

import { atoms, Atoms } from '../styles/sprinkles.css';

interface LazyVideoProps {
  atom?: Atoms;
  autoplay?: boolean;
  controls?: boolean;
  playsInline?: boolean;
  muted?: boolean;
  loop?: boolean;
  width?: number | string;
  height?: number | string;
  dataSrc?: string;
  poster?: string;
  children: JSX.Element;
}

export default function LazyVideo({
  atom,
  controls,
  children,
  autoplay,
  width,
  height,
  dataSrc,
  muted,
  loop,
  poster,
  playsInline,
}: LazyVideoProps): JSX.Element {
  useEffect(() => {
    lazyLoadInstance?.update();
  }); // il devrait surement y avoir un tableau de dependences pour eviter de le rerender a chaque fois
  // regarder la console de https://www.andreaverlicchi.eu/vanilla-lazyload/demos/async.html

  return (
    // eslint-disable-next-line jsx-a11y/media-has-caption
    <video
      className={`lazy ${atoms({
        ...atom,
      })}`}
      playsInline={playsInline}
      controls={controls}
      muted={muted}
      loop={loop}
      data-poster={poster}
      data-autoplay={autoplay}
      data-src={dataSrc}
      width={width}
      height={height}
    >
      {children}
    </video>
  );
}
