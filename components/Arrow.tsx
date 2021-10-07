import { fullpageApi } from '@fullpage/react-fullpage';
import { useCallback } from 'react';

import ArrowBottom from '@assets/svg/arrow-bottom.svg';
import ArrowLeft from '@assets/svg/arrow-left.svg';
import ArrowRight from '@assets/svg/arrow-right.svg';
import ArrowTop from '@assets/svg/arrow-top.svg';
import {
  animationBounceArrowBottom,
  animationBounceArrowLeft,
  animationBounceArrowRight,
  animationBounceArrowTop,
  arrowPositionBottom,
  arrowPositionLeft,
  arrowPositionRight,
  arrowPositionTop,
  atoms,
} from '@styles/sprinkles.css';

interface ArrowProps {
  fullpage: fullpageApi;
  pos: 'bottom' | 'left' | 'right' | 'top';
  color?: 'black' | 'white';
}

export default function Arrow({
  fullpage,
  pos,
  color = 'white',
}: ArrowProps): JSX.Element {
  const move = useCallback(() => {
    switch (pos) {
      case 'bottom':
        fullpage.moveSectionDown();
        break;
      case 'top':
        fullpage.moveSectionUp();
        break;
      case 'left':
        fullpage.moveSlideLeft();
        break;
      case 'right':
        fullpage.moveSlideRight();
        break;
    }
  }, [fullpage, pos]);

  return (
    <div
      onClick={move}
      onKeyPress={move}
      tabIndex={0}
      role="button"
      className={`${atoms({
        zIndex: 1,
        cursor: 'pointer',
        position: 'absolute',
        marginLeft: pos === 'bottom' || pos === 'top' ? '-8px' : undefined,
        marginTop: pos === 'right' || pos === 'left' ? '-8px' : undefined,
        margin: 'none',
        padding: 'none',
        width: '16px',
        height: 'xxxs',
        color,
      })} ${
        pos === 'bottom'
          ? `${animationBounceArrowBottom} ${arrowPositionBottom}`
          : pos === 'top'
          ? `${animationBounceArrowTop} ${arrowPositionTop}`
          : pos === 'left'
          ? `${animationBounceArrowLeft} ${arrowPositionLeft}`
          : `${animationBounceArrowRight} ${arrowPositionRight}`
      }`}
    >
      {pos === 'left' && <ArrowLeft />}
      {pos === 'right' && <ArrowRight />}
      {pos === 'bottom' && <ArrowBottom />}
      {pos === 'top' && <ArrowTop />}
    </div>
  );
}
