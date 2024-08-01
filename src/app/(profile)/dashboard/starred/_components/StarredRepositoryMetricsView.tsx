'use client';

import { match, P } from 'ts-pattern';
import { useStarsRepositoryQuery } from '@/hooks/queries/useStarsQuery';
import ItemSkeleton from './ItemSkeleton';
import RepositoryMetric from './RepositoryMetric';
import * as styles from './StarredRepositoryMetricsView.css';

export default function StarredRepositoryMetricsView() {
  const { data: metrics, isFetching } = useStarsRepositoryQuery();

  return (
    <section>
      <h2 className={styles.h2}>Repository Metrics</h2>
      {match({ isFetching, metrics })
        .with({ isFetching: true }, () => <ItemSkeleton count={2} />)
        .with({ metrics: P.when((metrics) => metrics?.length === 0) }, () => (
          <p className={styles.p}>No metrics found.</p>
        ))
        .otherwise(() => (
          <ul>
            {metrics?.map((metric) => (
              <RepositoryMetric key={metric.id} metric={metric} />
            ))}
          </ul>
        ))}
    </section>
  );
}