import { style } from '@vanilla-extract/css';

export const main = style({
  padding: '20px',
});

export const heading = style({
  fontSize: '2rem',
  color: '#333',
  marginBottom: '20px',
});

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
});

export const input = style({
  padding: '10px',
  fontSize: '1rem',
  border: '1px solid #ddd',
  borderRadius: '4px',
  marginBottom: '10px',
  width: '100%',
  boxSizing: 'border-box',
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
});
