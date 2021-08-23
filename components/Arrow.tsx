import { fullpageApi } from '@fullpage/react-fullpage';
import { useCallback, useMemo } from 'react';

import ArrowBottom from '@assets/svg/arrow-bottom.svg';
import ArrowLeft from '@assets/svg/arrow-left.svg';
import ArrowRight from '@assets/svg/arrow-right.svg';
import ArrowTop from '@assets/svg/arrow-top.svg';
import {
  animationBounceArrowBottom,
  animationBounceArrowLeft,
  animationBounceArrowRight,
  animationBounceArrowTop,
  atoms,
} from '@styles/sprinkles.css';

interface ArrowProps {
  fullpage: fullpageApi;
  pos: 'bottom' | 'left' | 'right' | 'top';
  color?: 'black';
}

export default function Arrow({
  fullpage,
  pos,
  color,
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

  const className = useMemo(
    () =>
      atoms({
        color: color ?? 'white',
        width: '30px',
        height: 'xxs',
      }),
    [color],
  );

  return (
    <div
      onClick={move}
      onKeyPress={move}
      tabIndex={0}
      role="button"
      className={`${atoms({
        zIndex: 6,
        cursor: 'pointer',
        width: '60px',
        height: 'xs',
        borderColor: color ?? 'white',
        borderRadius: '60px',
        border: 'solid',
        position: 'absolute',
        bottom: pos === 'bottom' ? '20px' : undefined,
        left:
          pos === 'bottom' || pos === 'top'
            ? '50%'
            : pos === 'left'
            ? '20px'
            : undefined,
        top:
          pos === 'left' || pos === 'right'
            ? '50vh'
            : pos === 'top'
            ? '20px'
            : undefined,
        right: pos === 'right' ? '20px' : undefined,
        margin: 'none',
        marginLeft: pos === 'bottom' || pos === 'top' ? '-30px' : undefined,
        marginTop: pos === 'right' || pos === 'left' ? '-30px' : undefined,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      })} ${
        pos === 'bottom'
          ? animationBounceArrowBottom
          : pos === 'top'
          ? animationBounceArrowTop
          : pos === 'left'
          ? animationBounceArrowLeft
          : animationBounceArrowRight
      }`}
      // il faut bouncer en fonction de là ou est la direction
    >
      {pos === 'left' && <ArrowLeft className={className} />}
      {pos === 'right' && <ArrowRight className={className} />}
      {pos === 'bottom' && <ArrowBottom className={className} />}
      {pos === 'top' && <ArrowTop className={className} />}
    </div>
  );
}
