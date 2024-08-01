import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/libs/next-auth';
import GitHubLoginButton from './_components/GitHubLoginButton';
import * as styles from './page.css';

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (session) {
    const username = session.user.username;
    redirect(`/${username}`);
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Shook</h1>
      <p className={styles.description}>
        Sign in with GitHub to access your dashboard.
      </p>
      <GitHubLoginButton />
    </main>
  );
}
