'use client';

import React from 'react';
import { useFormStatus } from 'react-dom';
import { match, P } from 'ts-pattern';
import { Metric } from '../_types/action';
import RepositoryMetric from './RepositoryMetric';
import * as styles from './StarredRepositoryMetricsView.css';

type StarredRepositoryMetricsViewProps = {
  metrics: Metric[];
};

export default function StarredRepositoryMetricsView({
  metrics,
}: StarredRepositoryMetricsViewProps) {
  const status = useFormStatus();

  return (
    <section>
      <h2 className={styles.h2}>Repository Metrics</h2>
      {match({ loading: status.pending, metrics })
        .with({ loading: true }, () => <p>Loading...</p>)
        .with({ metrics: P.when((metrics) => metrics.length === 0) }, () => (
          <p className={styles.p}>No metrics found.</p>
        ))
        .otherwise(() => (
          <ul>
            {metrics.map((metric) => (
              <RepositoryMetric key={metric.id} metric={metric} />
            ))}
          </ul>
        ))}
    </section>
  );
}
