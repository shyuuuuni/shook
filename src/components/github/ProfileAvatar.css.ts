import { style } from '@vanilla-extract/css';

export const avatarContainer = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: '128px',
  height: '128px',
  borderRadius: '100%',
  backgroundColor: 'var(--black-a3)',
  marginRight: 16,
});

export const avatar = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
});
