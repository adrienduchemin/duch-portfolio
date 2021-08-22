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
  xxs: '30px',
  xs: '60px',
  sm: '100px',
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
    border: [`solid`],
    borderColor: ['white'],
    borderRadius: ['50%', '3px', '100px', '60px'],
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
    objectFit: ['scale-down', 'cover', 'fill'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    alignSelf: ['center'],
    paddingTop: space,
    paddingBottom: space,
    marginLeft: ['auto', '-30px'],
    marginBottom: ['15px'],
    marginRight: ['auto'],
    marginTop: ['-30px', '10px'],
    paddingLeft: space,
    paddingRight: space,
    gridTemplateColumns: repeat,
    verticalAlign: ['middle'],
    width: ['100%', '60px', '150px', 'auto', '100vw', '100px', '30px'],
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
    zIndex: [3, 4, 5, 6, -9, -10, -1, 0, 1, 999],
    top: ['50%', 0],
    left: ['50%', 0],
    overflow: ['hidden'],
    backgroundPosition: ['center center'],
    backgroundSize: ['100% 100%', 'contain', '0 auto'],
    backgroundImage: ["url('/arrow.svg')"],
    backgroundRepeat: ['no-repeat'],
    right: [0],
    bottom: [0, '20px'],
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
const bounce = keyframes({
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

export const animation10 = style({
  animation: `${bounce} 2s infinite`,
});

export const animationArrow = style({
  backgroundImage:
    'url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yOTMuNzUxLDQ1NS44NjhjLTIwLjE4MSwyMC4xNzktNTMuMTY1LDE5LjkxMy03My42NzMtMC41OTVsMCwwYy0yMC41MDgtMjAuNTA4LTIwLjc3My01My40OTMtMC41OTQtNzMuNjcyICBsMTg5Ljk5OS0xOTBjMjAuMTc4LTIwLjE3OCw1My4xNjQtMTkuOTEzLDczLjY3MiwwLjU5NWwwLDBjMjAuNTA4LDIwLjUwOSwyMC43NzIsNTMuNDkyLDAuNTk1LDczLjY3MUwyOTMuNzUxLDQ1NS44Njh6Ii8+DQo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMjIwLjI0OSw0NTUuODY4YzIwLjE4LDIwLjE3OSw1My4xNjQsMTkuOTEzLDczLjY3Mi0wLjU5NWwwLDBjMjAuNTA5LTIwLjUwOCwyMC43NzQtNTMuNDkzLDAuNTk2LTczLjY3MiAgbC0xOTAtMTkwYy0yMC4xNzgtMjAuMTc4LTUzLjE2NC0xOS45MTMtNzMuNjcxLDAuNTk1bDAsMGMtMjAuNTA4LDIwLjUwOS0yMC43NzIsNTMuNDkyLTAuNTk1LDczLjY3MUwyMjAuMjQ5LDQ1NS44Njh6Ii8+DQo8L3N2Zz4=)',
  backgroundSize: 'contain',
});
