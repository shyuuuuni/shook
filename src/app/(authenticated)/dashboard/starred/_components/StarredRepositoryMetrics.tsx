'use client';

import { useFormState } from 'react-dom';
import FormButton from '@/components/button/FormButton';
import * as styles from './StarredRepositoryMetrics.css';
import StarredRepositoryMetricsView from './StarredRepositoryMetricsView';
import { useStarsRepositoryQuery } from '@/hooks/queries/useStarsQuery';

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
