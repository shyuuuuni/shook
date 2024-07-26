const VERCEL_URL =
  process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const API_URL = VERCEL_URL
  ? `https://${VERCEL_URL}/api`
  : 'http://localhost:3000/api';

console.log('Current API URL', API_URL, VERCEL_URL);
