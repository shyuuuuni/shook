import { style } from '@vanilla-extract/css';

export const main = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  textAlign: 'center',
  padding: '20px',
});

export const title = style({
  fontSize: '2.5rem',
  marginBottom: '20px',
  color: '#333',
});

export const description = style({
  fontSize: '1.2rem',
  marginBottom: '40px',
  color: '#666',
});
