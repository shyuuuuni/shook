import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/libs/next-auth';
import GitHubLoginButton from './_components/GitHubLoginButton';
import * as styles from './page.css';

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/dashboard');
  }

  return (
    <main className={styles.main}>
      <GitHubLoginButton />
    </main>
  );
}
