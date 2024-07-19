import { GitHubRepository } from '@/types/github';
import * as styles from './RepositoryArticle.css';

type RepositoryArticleProps = {
  repository: GitHubRepository;
};

export default function RepositoryArticle({
  repository: { name, description, html_url },
}: RepositoryArticleProps) {
  return (
    <a target="_blank" href={html_url}>
      <article className={styles.container}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.description}>{description}</p>
      </article>
    </a>
  );
}
