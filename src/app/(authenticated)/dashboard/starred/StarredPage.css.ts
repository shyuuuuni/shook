import { style } from '@vanilla-extract/css';

export const main = style({
  padding: '20px',
  maxWidth: '900px',
  margin: '0 auto',
  fontFamily: 'Arial, sans-serif',
});

export const h1 = style({
  fontSize: '32px',
  color: '#333',
  marginBottom: '20px',
  textAlign: 'center',
});

export const h2 = style({
  fontSize: '28px',
  marginBottom: '15px',
});

export const section = style({
  marginBottom: '40px',
});

export const sectionContents = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '40px',
});
