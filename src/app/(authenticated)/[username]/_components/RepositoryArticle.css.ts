import { style } from '@vanilla-extract/css';

export const container = style({
  padding: 12,
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid lightgrey',
  borderRadius: 8,
});

export const name = style({
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 8,
});

export const description = style({
  fontSize: 16,
  color: 'gray',
});

export const informationContainer = style({
  display: 'flex',
});
