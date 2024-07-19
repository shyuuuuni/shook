import { style } from '@vanilla-extract/css';

export const outerContainer = style({
  width: '100%',
  minHeight: '100dvh',
  display: 'flex',
  justifyContent: 'center',
});

export const innerContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: 1280,
});

export const profileSection = style({
  marginTop: 32,
  marginBottom: 32,
});

export const tabs = style({
  marginBottom: 20,
});

export const main = style({
  display: 'flex',
  flexDirection: 'column',
});
