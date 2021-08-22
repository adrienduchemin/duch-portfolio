import { globalStyle, keyframes, style } from '@vanilla-extract/css';
import { createAtomicStyles, createAtomsFn } from '@vanilla-extract/sprinkles';

const space = {
  none: 0,
  small: '4px',
  medium: '8px',
  large: '16px',
  xl: '50px',
};

const height = {
  xs: '50px',
  small: '150px',
  medium: '80%',
  cent: '100%',
  centvh: '100vh',
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
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    borderRadius: ['50%', '3px'],
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
    fontSize: ['25px'],
    lineHeight: ['25px'],
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
    objectFit: ['scale-down', 'cover', 'fill'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    alignSelf: ['center'],
    paddingTop: space,
    paddingBottom: space,
    marginLeft: ['auto'],
    marginBottom: ['15px'],
    marginRight: ['auto'],
    paddingLeft: space,
    paddingRight: space,
    gridTemplateColumns: repeat,
    verticalAlign: ['middle'],
    width: ['100%', '50px', '150px', 'auto', '100vw'],
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
    position: ['fixed', 'absolute', 'relative'],
    zIndex: [3, 4, 5, -9, -10, -1, 0, 1, 999],
    top: ['50%', 0],
    left: ['50%', 0],
    overflow: ['hidden'],
    backgroundPosition: ['center center'],
    backgroundSize: ['100% 100%', 'contain'],
    right: [0],
    bottom: [0],
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
    desktop: { '@media': 'screen and (min-width: 900px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    gridTemplateColumns: repeat,
  },
});

const colors = {
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

globalStyle(`html.modal-active, body.modal-active`, {
  // minHeight: '100%',
  // height: '100%',
});

export const atoms = createAtomsFn(
  responsiveStyles,
  colorStyles,
  galleryStyles,
);
export type Atoms = Parameters<typeof atoms>[number];

const fadeIn = keyframes({
  '0%': {
    background: 'rgba(0, 0, 0, 0)',
  },
  '100%': {
    background: 'rgba(0, 0, 0, 0.7)',
  },
});
const fadeOut = keyframes({
  '0%': {
    background: 'rgba(0, 0, 0, 0.7)',
  },
  '100%': {
    background: 'rgba(0, 0, 0, 0)',
  },
});
const quickScaleDown = keyframes({
  '0%': {
    transform: 'scale(1)',
  },
  '99.9%': {
    transform: 'scale(1)',
  },
  '100%': {
    transform: 'scale(0)',
  },
});
const sketchIn = keyframes({
  '0%': {
    strokeDashoffset: 778,
  },
  '100%': {
    strokeDashoffset: 0,
  },
});
const sketchOut = keyframes({
  '0%': {
    strokeDashoffset: 0,
  },
  '100%': {
    strokeDashoffset: 778,
  },
});
const modalFadeIn = keyframes({
  '0%': {
    backgroundColor: 'transparent',
  },
  '100%': {
    backgroundColor: 'white',
  },
});
const modalFadeOut = keyframes({
  '0%': {
    backgroundColor: 'white',
  },
  '100%': {
    backgroundColor: 'transparent',
  },
});
const modalContentFadeOut = keyframes({
  '0%': {
    opacity: 1,
    top: '0px',
  },
  '100%': {
    opacity: 0,
    top: '-20px',
  },
});
export const animation1 = style({
  animation: `${quickScaleDown} 0s 0.5s linear forwards`,
});

export const animation2 = style({
  animation: `${fadeIn} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards`,
});

export const animation3 = style({
  animation: `${fadeOut} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards`,
});

export const animation4 = style({
  animation: `${modalFadeIn} 0.5s 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards`,
});

export const animation5 = style({
  animation: `${modalFadeOut} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards`,
});

export const animation6 = style({
  animation: `${sketchIn} 0.5s 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards`,
});

export const animation7 = style({
  animation: `${modalContentFadeOut} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards`,
});

export const animation8 = style({
  animation: `${sketchIn} 0.5s 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards`,
});

export const animation9 = style({
  animation: `${sketchOut} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards`,
});
