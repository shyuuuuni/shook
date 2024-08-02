import { keyframes, style } from '@vanilla-extract/css';
import OpenColor from 'open-color';
import { HEADER_HEIGHT } from '@/styles/constants';

// dialog가 펼쳐지는 모션의 Fade-in 애니메이션
const contentShow = keyframes({
  from: {
    opacity: 0,
    transform: 'translate(-50%, 2%) scale(0.96)',
  },
  to: {
    opacity: 1,
    transform: 'translate(-50%, 0) scale(1)',
  },
});

// dialog의 배경인 overlay가 드러나는 Fade-in 애니메이션
const overlayShow = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

export const dialog = style({
  display: 'flex',
  flexDirection: 'column',
  position: 'fixed',
  top: `${HEADER_HEIGHT + 16}px`,
  left: '50%',
  transform: 'translate(-50%, 0)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

export const searchForm = style({
  display: 'flex',
  backgroundColor: OpenColor.white,
  flex: '1',
  padding: '0 16px',
  borderRadius: '8px',
  fontSize: '32px',
  boxShadow: `inset 1px 1px 0 0 hsla(0, 0%, 100%, 0.5), 0 3px 8px 0 ${OpenColor.gray[5]}`,
});

export const overlay = style({
  backgroundColor: OpenColor.gray[8],
  opacity: 0.1,
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic - bezier(0.16, 1, 0.3, 1)`,
});

export const searchFormItem = style({
  display: 'flex',
  alignItems: 'center',
  height: '56px',
});

export const icon = style({
  width: '0.8em',
  height: '0.8em',
  marginRight: '8px',
  cursor: 'pointer',
});

export const searchInput = style({
  flex: '1',
  border: 'none',
  outline: 'none',
  fontSize: '16px',
});
