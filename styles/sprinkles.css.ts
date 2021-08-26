import { globalStyle, keyframes, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { createAtomicStyles, createAtomsFn } from '@vanilla-extract/sprinkles';

const space = {
  none: 0,
  small: '4px',
  medium: '8px',
  large: '16px',
  xl: '50px',
};

const height = {
  xxxs: '15px',
  xxs: '30px',
  xs: '60px',
  sm: '100px',
  small: '150px',
  medium: '80%',
  cent: '100%',
  centvh: '100vh',
  avh: '70vh',
  auto: 'auto',
};

const margin = {
  auto: '0 auto',
  none: 0,
};

const repeat = {
  small: 'repeat(2, 1fr)',
  medium: 'repeat(3, 1fr)',
  large: 'repeat(4, 1fr)',
};

const responsiveStyles = createAtomicStyles({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 600px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    border: [`solid`],
    borderColor: ['white', 'black'],
    borderRadius: ['50%', '3px', '100px', '30px'],
    cursor: ['pointer'],
    display: [
      'none',
      'flex',
      'inline-block',
      'block',
      'inline',
      'grid',
      'contents',
      'table',
      'table-cell',
    ],
    height,
    minWidth: ['100%'],
    minHeight: ['100%'],
    maxWidth: ['100%'],
    maxHeight: ['100%', '100vh'],
    stroke: ['#fff'],
    strokeWidth: ['2px'],
    strokeDasharray: [778],
    strokeDashoffset: [778],
    fontSize: [0, '25px'],
    lineHeight: [0, '25px'],
    fontWeight: ['bold', 300],
    fontFamily: ['inherit'],
    margin,
    flexDirection: ['row', 'column'],
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-around',
      'space-between',
    ],
    objectFit: ['scale-down', 'cover', 'fill', 'contain'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    alignSelf: ['center'],
    paddingTop: space,
    paddingBottom: space,
    marginLeft: ['auto', '-15px'],
    marginBottom: ['15px'],
    marginRight: ['auto'],
    marginTop: ['-15px', '30px', '10px'],
    paddingLeft: space,
    paddingRight: space,
    gridTemplateColumns: repeat,
    verticalAlign: ['middle'],
    width: ['100%', '60px', '150px', 'auto', '100vw', '100px', '30px', '15px'],
    textAlign: ['center'],
    transform: [
      'scale(0)',
      'scale(0.8)',
      'scale(1.8)',
      'scale(1)',
      'translate(-50%, -50%)',
      'translateX(-50%) translateY(-50%)',
      'translate3d(0, 0, 0)',
    ],
    filter: ['blur(10px)'],
    opacity: [0, 1, 0.6],
    visibility: ['hidden', 'visible'],
    position: ['fixed', 'absolute', 'relative', 'sticky'],
    zIndex: [3, 4, 5, 6, -9, -10, -1, 0, 1, 999],
    top: ['50%', '50vh', '20px', 0],
    left: ['50%', '50vh', '20px', 0],
    bottom: [0, '20px'],
    right: [0, '20px'],
    overflow: ['hidden'],
    backgroundPosition: ['center center'],
    backgroundSize: ['100% 100%', 'contain', '0 auto'],
    backgroundImage: ["url('/arrow.svg')"],
    backgroundRepeat: ['no-repeat'],
    gridGap: ['2px'],
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    placeItems: ['justifyContent', 'alignItems'],
    gridColumns: ['gridTemplateColumns'],
  },
});

const galleryStyles = createAtomicStyles({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 600px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    gridTemplateColumns: repeat,
  },
});

const colors = {
  black: 'black',
  white: 'white',
  'blue-50': '#eff6ff',
  'blue-100': '#dbeafe',
  'blue-200': '#bfdbfe',
  'gray-700': '#374151',
  'gray-800': '#1f2937',
  'gray-900': '#111827',
  overlay: 'rgba(0, 0, 0, 0.5)',
  zero: 'rgba(0, 0, 0, 0)',
  transparent: 'transparent',
};

const colorStyles = createAtomicStyles({
  conditions: {
    lightMode: {},
    darkMode: { '@media': '(prefers-color-scheme: dark)' },
  },
  defaultCondition: 'lightMode',
  properties: {
    color: colors,
    background: colors,
    backgroundColor: colors,
    fill: colors,
    // etc.
  },
});

globalStyle(`*`, {
  boxSizing: 'border-box',
});

globalStyle(`html, body`, {
  fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
});

globalStyle(`.iScrollVerticalScrollbar`, {
  display: 'none',
});

export const atoms = createAtomsFn(
  responsiveStyles,
  colorStyles,
  galleryStyles,
);
export type Atoms = Parameters<typeof atoms>[number];

const bounceBottom = keyframes({
  '0%, 20%, 50%, 80%, 100%': {
    transform: 'translateY(0)',
  },
  '40%': {
    transform: 'translateY(-20px)',
  },
  '60%': {
    transform: 'translateY(-10px)',
  },
});

const bounceTop = keyframes({
  '0%, 20%, 50%, 80%, 100%': {
    transform: 'translateY(0)',
  },
  '40%': {
    transform: 'translateY(+20px)',
  },
  '60%': {
    transform: 'translateY(+10px)',
  },
});

const bounceLeft = keyframes({
  '0%, 20%, 50%, 80%, 100%': {
    transform: 'translateX(0)',
  },
  '40%': {
    transform: 'translateX(+20px)',
  },
  '60%': {
    transform: 'translateX(+10px)',
  },
});

const bounceRight = keyframes({
  '0%, 20%, 50%, 80%, 100%': {
    transform: 'translateX(0)',
  },
  '40%': {
    transform: 'translateX(-20px)',
  },
  '60%': {
    transform: 'translateX(-10px)',
  },
});

export const animationBounceArrowBottom = style({
  animation: `${bounceBottom} 2s infinite`,
});

export const animationBounceArrowTop = style({
  animation: `${bounceTop} 2s infinite`,
});

export const animationBounceArrowLeft = style({
  animation: `${bounceLeft} 2s infinite`,
});

export const animationBounceArrowRight = style({
  animation: `${bounceRight} 2s infinite`,
});

export const arrowPositionBottom = style({
  top: calc('100%').subtract('30px').subtract('5px').toString(),
  left: '50%',
});

export const arrowPositionTop = style({
  top: '5px',
  left: '50%',
});

export const arrowPositionLeft = style({
  top: '50%',
  left: '5px',
});

export const arrowPositionRight = style({
  top: '50%',
  right: '5px',
});
