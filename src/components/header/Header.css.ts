import { style } from '@vanilla-extract/css';
import { HEADER_MAX_WIDTH } from '@/styles/constants';

export const header = style({
  display: 'flex',
  justifyContent: 'center',
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
  gap: '1rem',
});

export const leftNavItems = style([navItemsBase]);
export const rightNavItems = style([navItemsBase]);
