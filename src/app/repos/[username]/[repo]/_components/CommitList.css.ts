import { style } from '@vanilla-extract/css';

export const listItem = style({
  marginBottom: '10px',
  display: 'flex',
  alignItems: 'center',
});

export const checkbox = style({
  marginRight: '10px',
});

export const link = style({
  textDecoration: 'none',
  color: '#0366d6',

  ':hover': {
    textDecoration: 'underline',
  },
});
