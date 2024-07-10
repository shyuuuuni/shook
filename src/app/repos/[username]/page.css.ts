// styles.css.ts
import { style } from '@vanilla-extract/css';

export const main = style({
  padding: '20px',
});

export const heading = style({
  fontSize: '2rem',
  color: '#333',
  marginBottom: '20px',
});

export const list = style({
  listStyle: 'none',
  padding: '0',
});

export const listItem = style({
  padding: '10px 0',
  borderBottom: '1px solid #ddd',
});

export const link = style({
  textDecoration: 'none',
  color: '#0070f3',
  ':hover': {
    textDecoration: 'underline',
  },
});
