import Link from 'next/link';
import gitHubService from '@/backend/services/GitHubService';
import * as styles from './page.css';

type ReposPageProps = {
  params: {
    username: string;
  };
};

export default async function ReposPage({
  params: { username },
}: ReposPageProps) {
  const repoList = await gitHubService.getRepoListForUser({
    username,
  });

  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>{username}&lsquo;s Repositories</h1>
      <ul className={styles.list}>
        {repoList.map((repo) => (
          <Link
            className={styles.link}
            key={repo.id}
            href={`/repos/${username}/${repo.name}`}
          >
            <li className={styles.listItem}>{repo.name}</li>
          </Link>
        ))}
      </ul>
    </main>
  );
}
