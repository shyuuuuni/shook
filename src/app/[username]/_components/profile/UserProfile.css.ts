import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'row',
});

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

export const profileContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const avatar = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
});

export const name = style({
  fontSize: 32,
});

export const username = style({
  fontSize: 20,
});

export const bio = style({
  fontSize: 16,
});

export const since = style({
  fontSize: 14,
});
