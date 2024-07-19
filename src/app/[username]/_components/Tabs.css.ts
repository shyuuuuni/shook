import { style } from '@vanilla-extract/css';

export const tabsList = style({
  flexShrink: 0,
  display: 'flex',
  justifyContent: 'center',
});

export const tabsTrigger = style({
  fontFamily: 'inherit',
  backgroundColor: 'white',
  padding: '0 20px',
  width: 150,
  height: 45,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 15,
  lineHeight: 1,
  color: 'purple',
  userSelect: 'none',
  ':hover': {
    color: 'violet',
    cursor: 'pointer',
  },
  selectors: {
    '&[data-state="active"]': {
      color: 'violet',
      boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
    },
  },
});
