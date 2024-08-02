import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9',
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
  marginBottom: '20px',
  ':hover': {
    backgroundColor: '#0056b3',
  },
  ':disabled': {
    backgroundColor: '#ccc',
    cursor: 'not-allowed',
  },
});

export const p = style({
  fontSize: '18px',
  margin: '10px 0',
});

export const analysis = style({
  whiteSpace: 'pre-line',
  lineHeight: '1.5',
  fontSize: '18px',
  marginTop: '20px',
  padding: '15px',
  backgroundColor: '#ffffff',
  border: '1px solid #e0e0e0',
  borderRadius: '4px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  maxWidth: '800px',
  width: '100%',
});
