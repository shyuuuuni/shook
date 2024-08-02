'use client';

import { useStarsRepositoryQuery } from '@/hooks/queries/useStarsQuery';
import * as styles from './StarredRepositoryMetrics.css';
import StarredRepositoryMetricsView from './StarredRepositoryMetricsView';

export default function StarredRepositoryMetrics() {
  const { refetch } = useStarsRepositoryQuery();

  const handleClick = () => {
    refetch();
  };

  return (
    <section className={styles.container}>
      <button className={styles.button} onClick={handleClick}>
        Fetch Metrics
      </button>
      <StarredRepositoryMetricsView />
    </section>
  );
}
