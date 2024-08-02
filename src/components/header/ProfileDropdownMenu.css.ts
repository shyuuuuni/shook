import { style } from '@vanilla-extract/css';
import openColor from 'open-color';

export const content = style({
  minWidth: '220px',
  borderRadius: '6px',
  padding: '6px 8px',
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  backgroundColor: openColor.white,
});

export const label = style({
  fontSize: '12px',
  fontWeight: '700',
  lineHeight: '25px',
  color: openColor.gray[8],
});

export const item = style({
  fontSize: '14px',
  lineHeight: 1,
  color: 'var(--violet-11)',
  borderRadius: '3px',
  padding: '0px 4px',
  display: 'flex',
  alignItems: 'center',
  height: '25px',
  position: 'relative',
  userSelect: 'none',
  outline: 'none',
  selectors: {
    '&[data-highlighted]': {
      backgroundColor: openColor.gray[1],
    },
  },
});

export const separator = style({
  height: '1px',
  backgroundColor: openColor.gray[3],
  margin: '4px 0px',
});

export const indicator = style({
  position: 'absolute',
  left: '0',
  width: '25px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});
