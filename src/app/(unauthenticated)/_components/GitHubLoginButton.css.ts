import { style } from '@vanilla-extract/css';

export const button = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#333',
  color: '#fff',
  border: 'none',
  padding: '12px 24px',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '1rem',
  fontWeight: 'bold',
  transition: 'background-color 0.3s ease-in-out, transform 0.2s ease-in-out',
  ':hover': {
    backgroundColor: '#444',
  },
});
