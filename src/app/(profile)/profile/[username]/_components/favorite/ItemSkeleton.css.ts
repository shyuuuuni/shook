import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '15px',
  marginBottom: '15px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  backgroundColor: '#fff',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  listStyle: 'none',
});

export const title = style({
  width: '50%',
  height: '20px',
  backgroundColor: '#e0e0e0',
  borderRadius: '4px',
  marginBottom: '10px',
});

export const p = style({
  width: '100%',
  height: '16px',
  backgroundColor: '#e0e0e0',
  borderRadius: '4px',
  margin: '5px 0',
});
