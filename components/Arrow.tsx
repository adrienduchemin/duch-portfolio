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
  arrowPositionBottom,
  arrowPositionLeft,
  arrowPositionRight,
  arrowPositionTop,
  arrowStyle,
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
        width: '15px',
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
        width: '30px', // a faire responsive en fonction de la taille d'ecran (pareil les 30px partout)
        height: 'xxs', // a faire responsive en fonction de la taille d'ecran (pareil les 30px partout)
        borderColor: color ?? 'white',
        borderRadius: '30px',
        border: 'solid',
        position: 'absolute',
        overflow: 'hidden',
        margin: 'none',
        marginLeft: pos === 'bottom' || pos === 'top' ? '-15px' : undefined,
        marginTop: pos === 'right' || pos === 'left' ? '-15px' : undefined,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      })}  ${arrowStyle} ${
        pos === 'bottom'
          ? `${animationBounceArrowBottom} ${arrowPositionBottom}`
          : pos === 'top'
          ? `${animationBounceArrowTop} ${arrowPositionTop}`
          : pos === 'left'
          ? `${animationBounceArrowLeft} ${arrowPositionLeft}`
          : `${animationBounceArrowRight} ${arrowPositionRight}`
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
