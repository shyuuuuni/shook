'use client';

import { useRepositories } from '../_hooks/useGitHubQuery';
import RepositoryArticle from './RepositoryArticle';
import * as styles from './RepositoryOverview.css';

export default function RepositoryOverview() {
  // const { data: repositories } = useRepositories(username);

  return (
    <section className={styles.container}>
      {/* {repositories?.map((repository) => (
        <RepositoryArticle key={repository.id} repository={repository} />
      ))} */}
    </section>
  );
}
