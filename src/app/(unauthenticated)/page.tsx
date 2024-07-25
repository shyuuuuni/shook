import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { API_URL } from '@/configs/env';
import { authOptions } from '@/libs/next-auth';
import GitHubLoginButton from './_components/GitHubLoginButton';
import * as styles from './page.css';

export default async function Page() {
  const session = await getServerSession(authOptions);

  console.log(
    'API_URL:',
    `${API_URL}/test`,
    process.env.NEXT_PUBLIC_VERCEL_URL,
    process.env.VERCEL_URL,
  );

  const data = {
    result: 'temp',
  };

  try {
    const response = await fetch(`${API_URL}/test`);
    console.log('res', response);
    const json = await response.json();
    console.log('json:', json);
    data.result = `API response: ${JSON.stringify(json?.result)}`;
  } catch (error) {
    console.log(error);
    data.result = `API error`;
  }

  if (session) {
    redirect('/dashboard');
  }

  return (
    <main className={styles.main}>
      <div>{data.result}</div>
      <GitHubLoginButton />
    </main>
  );
}
