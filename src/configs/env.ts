export const APP_FLAG: 'TEST' | 'SERVICE' = 'TEST';

export const API_URL =
  process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_ENV}/api`
    : 'http://localhost:3000/api';
