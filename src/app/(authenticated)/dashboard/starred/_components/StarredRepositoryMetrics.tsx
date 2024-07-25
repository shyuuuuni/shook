'use client';

import { useFormState } from 'react-dom';
import FormButton from '@/components/button/FormButton';
import { fetchStarredRepositoryMetrics } from '../actions';
import * as styles from './StarredRepositoryMetrics.css';
import StarredRepositoryMetricsView from './StarredRepositoryMetricsView';

export default function StarredRepositoryMetrics() {
  const [metrics, actionFetchMetrics] = useFormState(
    fetchStarredRepositoryMetrics,
    [],
  );

  return (
    <section className={styles.container}>
      <form action={actionFetchMetrics}>
        <FormButton className={styles.button} type="submit">
          Fetch Metrics
        </FormButton>
        <StarredRepositoryMetricsView metrics={metrics} />
      </form>
    </section>
  );
}
