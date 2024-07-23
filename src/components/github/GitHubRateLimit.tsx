import gitHubService from '@/backend/services/GitHubService';
import * as styles from './GitHubRateLimit.css';

export default async function GitHubRateLimit() {
  const { core, graphql } = await gitHubService.getRateLimit();

  const restRemaining = core.remaining;
  const graphqlRemaining = graphql?.remaining ?? 0;

  return (
    <aside className={styles.container}>
      <h3>GitHub API 호출 제한</h3>
      <p>REST: {restRemaining}</p>
      <p>GraphQL: {graphqlRemaining}</p>
    </aside>
  );
}
