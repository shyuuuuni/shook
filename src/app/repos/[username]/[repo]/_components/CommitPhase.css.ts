import { style } from '@vanilla-extract/css';

export const container = style({
  maxWidth: '700px',
});

export const heading = style({
  fontSize: '2rem',
  color: '#333',
  marginBottom: '20px',
});

export const button = style({
  padding: '10px 20px',
  fontSize: '1rem',
  color: '#fff',
  backgroundColor: '#0070f3',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
  ':hover': {
    backgroundColor: '#005bb5',
  },
  marginBottom: '16px',
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
