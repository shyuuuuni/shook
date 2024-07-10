import gitHubService from '@/backend/services/GitHubService';
import CommitList from './_components/CommitList';
import * as styles from './page.css';

type CommitsPageProps = {
  params: {
    username: string;
    repo: string;
  };
};

export default async function Page({
  params: { username, repo },
}: CommitsPageProps) {
  const commitList = await gitHubService.getCommitList({
    owner: username,
    repo,
    author: username,
  });

  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>
        {repo} {username}&lsquo;s commits
      </h1>
      <CommitList commitList={commitList} />
      <button>analyze</button>
    </main>
  );
}
