import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9',
});

export const button = style({
  padding: '10px 20px',
  fontSize: '16px',
  color: '#fff',
  backgroundColor: '#007bff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: '#0056b3',
  },
  marginBottom: '20px',
});
