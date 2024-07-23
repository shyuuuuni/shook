import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import GitHubLoginButton from './_components/GitHubLoginButton';
import * as styles from './page.css';

export default async function Page() {
  const session = await getServerSession(authOptions);

  return (
    <main className={styles.main}>
      <div>현재 로그인 토큰: {session?.accessToken}</div>
      <GitHubLoginButton />
    </main>
  );
}
