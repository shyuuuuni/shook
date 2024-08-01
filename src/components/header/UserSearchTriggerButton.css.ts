import { style } from '@vanilla-extract/css';
import openColor from 'open-color';

export const triggerButton = style({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: openColor.gray[1],
  width: '180px',
  padding: '10px 12px',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
  ':hover': {
    backgroundColor: openColor.gray[2],
  },
});

export const icon = style({
  marginRight: '4px',
  width: '16px',
  height: '16px',
});

export const placeholder = style({
  fontSize: '14px',
  fontWeight: '300',
  lineHeight: '16px',
});
