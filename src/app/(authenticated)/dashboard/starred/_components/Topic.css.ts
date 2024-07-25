import { style } from '@vanilla-extract/css';

export const topic = style({
  marginBottom: '15px',
  padding: '15px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  backgroundColor: '#fff',
  display: 'flex',
  alignItems: 'center',
});

export const topicImage = style({
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  marginRight: '15px',
});

export const topicName = style({
  fontSize: '20px',
  color: '#007bff',
  marginBottom: '10px',
});

export const topicDescription = style({
  fontSize: '16px',
  color: '#555',
});
