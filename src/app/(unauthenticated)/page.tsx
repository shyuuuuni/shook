import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { API_URL } from '@/configs/env';
import { authOptions } from '@/libs/next-auth';
import GitHubLoginButton from './_components/GitHubLoginButton';
import * as styles from './page.css';

export default async function Page() {
  const session = await getServerSession(authOptions);
  // const response = await fetch(`${API_URL}/test`);
  // const data = await response.json();

  console.log(`${API_URL}/test`);

  if (session) {
    redirect('/dashboard');
  }

  return (
    <main className={styles.main}>
      {/* <div>{data.result}</div> */}
      <GitHubLoginButton />
    </main>
  );
}
