import { style } from '@vanilla-extract/css';

export const container = style({
  margin: '20px',
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9',
});

export const form = style({
  marginBottom: '20px',
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
});

export const h2 = style({
  fontSize: '24px',
  color: '#333',
  marginBottom: '10px',
});

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
