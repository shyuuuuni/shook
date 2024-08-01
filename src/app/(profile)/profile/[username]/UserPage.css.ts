import { style } from '@vanilla-extract/css';
import { CONTENT_MAX_WIDTH } from '@/styles/constants';

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
  maxWidth: CONTENT_MAX_WIDTH,
  flex: '1',
  borderLeft: '1px solid hsla(0, 0%, 0%, .1)',
  borderRight: '1px solid hsla(0, 0%, 0%, .1)',
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
  padding: '0 32px',
});
