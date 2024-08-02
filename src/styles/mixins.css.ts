import { style } from '@vanilla-extract/css';

export const nonDraggable = style({
  userSelect: 'none',
  MozUserSelect: 'none',
  WebkitUserSelect: 'none',
  msUserSelect: 'none',
  WebkitTouchCallout: 'none',
});
