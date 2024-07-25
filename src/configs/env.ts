export const APP_FLAG: 'TEST' | 'SERVICE' = 'TEST';

const VERCEL_URL = process.env.NEXT_PUBLIC_VERCEL_URL ?? process.env.VERCEL_URL;

export const API_URL = VERCEL_URL
  ? `https://${VERCEL_URL}/api`
  : 'http://localhost:3000/api';
