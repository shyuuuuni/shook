'use server';

import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import authOptions from './authOptions';

const getAccessToken = async (): Promise<string> => {
  const token = await getServerSession(authOptions);

  if (!token || !token.accessToken) {
    redirect('/');
  }

  return token.accessToken;
};

export default getAccessToken;
