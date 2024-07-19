'use client';

import { useRepositories } from '../_hooks/useGitHubQuery';
import useUsername from '../_hooks/useUsername';
import RepositoryArticle from './RepositoryArticle';
import * as styles from './RepositoryOverview.css';

export default function RepositoryOverview() {
  const username = useUsername();
  const { data: repositories } = useRepositories(username);

  return (
    <section className={styles.container}>
      {repositories?.map((repository) => (
        <RepositoryArticle key={repository.id} repository={repository} />
      ))}
    </section>
  );
}
