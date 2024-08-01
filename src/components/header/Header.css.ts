import { style } from '@vanilla-extract/css';
import { HEADER_HEIGHT, HEADER_MAX_WIDTH } from '@/styles/constants';

export const header = style({
  display: 'flex',
  justifyContent: 'center',
  height: HEADER_HEIGHT,
  position: 'sticky',
  top: '0',
  backdropFilter: 'saturation(180%) blur(5px)',
  background: 'hsla(0, 0%, 100%, .8)',
  borderBottom: '1px solid hsla(0, 0%, 0%, .1)',
});

export const nav = style({
  display: 'flex',
  flex: '1',
  maxWidth: HEADER_MAX_WIDTH,
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const navItemsBase = style({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
});

export const leftNavItems = style([navItemsBase]);
export const rightNavItems = style([navItemsBase]);
