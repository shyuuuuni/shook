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

  const response = await fetch(`${API_URL}/test`);
  const data = await response.json();

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
