import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'row',
});

export const profileContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
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
