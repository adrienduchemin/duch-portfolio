import { fullpageApi } from '@fullpage/react-fullpage';
import { useCallback } from 'react';

import {
  atoms,
  dotActiveStyle,
  dotStyle,
  firstDotStyle,
  secondDotStyle,
  thirdDotStyle,
} from '@styles/sprinkles.css';

interface DotProps {
  activeSlide?: number;
  fullpage?: fullpageApi;
  slide: number;
}

export default function Dot({
  activeSlide,
  fullpage,
  slide,
}: DotProps): JSX.Element {
  const move = useCallback(() => {
    fullpage?.moveTo(2, slide);
  }, [fullpage, slide]);

  return (
    <div
      onClick={move}
      onKeyPress={move}
      tabIndex={0}
      role="button"
      className={`${atoms({
        zIndex: 1,
        position: 'absolute',
        margin: 4,
        padding: 'none',
        width: '16px',
        height: 'xxxs',
      })} ${dotStyle} ${
        slide === 0
          ? firstDotStyle
          : slide === 1
          ? secondDotStyle
          : thirdDotStyle
      }`}
    >
      <div
        className={`${atoms({
          backgroundColor: 'overlay',
          cursor: 'pointer',
          borderRadius: '100%',
          width: '100%',
          height: 'cent',
        })} ${activeSlide === slide ? dotActiveStyle : ''}`}
      />
    </div>
  );
}
