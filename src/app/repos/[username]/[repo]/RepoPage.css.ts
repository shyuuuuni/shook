import { style } from '@vanilla-extract/css';

export const main = style({
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const heading = style({
  fontSize: '2rem',
  color: '#333',
  marginBottom: '20px',
});

export const skeleton = style({
  width: '700px',
  height: '1000px',
});
