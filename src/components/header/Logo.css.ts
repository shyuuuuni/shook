import { style } from '@vanilla-extract/css';
import { nonDraggable } from '@/styles/mixins.css';

export const logo = style([
  nonDraggable,
  {
    fontSize: '32px',
    fontWeight: 'bold',
    color: 'black',
    textDecoration: 'none',
    cursor: 'pointer',
  },
]);
