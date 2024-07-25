import { style } from '@vanilla-extract/css';

export const container = style({
  margin: '20px',
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9',
});

export const form = style({
  marginBottom: '20px',
});

export const button = style({
  padding: '10px 20px',
  fontSize: '16px',
  color: '#fff',
  backgroundColor: '#007bff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: '#0056b3',
  },
});

export const h2 = style({
  fontSize: '24px',
  color: '#333',
  marginBottom: '10px',
});

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
