import { style } from '@vanilla-extract/css';

export const metric = style({
  padding: '15px',
  marginBottom: '15px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  backgroundColor: '#fff',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
});

export const repoName = style({
  fontSize: '20px',
  color: '#007bff',
  marginBottom: '10px',
});

export const category = style({
  fontWeight: 'bold',
});

export const p = style({
  fontSize: '16px',
  color: '#555',
  margin: '5px 0',
});
