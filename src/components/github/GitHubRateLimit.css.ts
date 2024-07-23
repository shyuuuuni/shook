import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'fixed',
  bottom: 20,
  right: 20,
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  padding: '8px 16px',
  width: 'fit-content',
});
