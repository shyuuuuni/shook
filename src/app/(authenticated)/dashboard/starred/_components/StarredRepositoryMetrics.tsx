'use client';

import React from 'react';
import { useFormState } from 'react-dom';
import { fetchStarredRepositoryMetrics } from '../actions';
import CollapsibleReadme from './CollapsibleReadme';
import * as styles from './StarredRepositoryMetrics.css';

export default function StarredRepositoryMetrics() {
  const [metrics, actionFetchMetrics] = useFormState(
    fetchStarredRepositoryMetrics,
    [],
  );

  return (
    <section className={styles.container}>
      <form className={styles.form} action={actionFetchMetrics}>
        <button className={styles.button} type="submit">
          Fetch Metrics
        </button>
      </form>
      <section>
        <h2 className={styles.h2}>Repository Metrics</h2>
        {metrics.length > 0 ? (
          <ul>
            {metrics.map(
              ({ name, description, languages, topics, readme }, i) => (
                <li className={styles.metric} key={i}>
                  <h3 className={styles.repoName}>{name}</h3>
                  <p className={styles.p}>
                    <b className={styles.category}>Description</b> {description}
                  </p>
                  {languages.length > 0 && (
                    <p className={styles.p}>
                      <b className={styles.category}>Languages</b>{' '}
                      {languages.join(', ')}
                    </p>
                  )}
                  {topics.length > 0 && (
                    <p className={styles.p}>
                      <b className={styles.category}>Topics</b>{' '}
                      {topics.join(', ')}
                    </p>
                  )}
                  <CollapsibleReadme readmeText={readme} />
                </li>
              ),
            )}
          </ul>
        ) : (
          <p className={styles.p}>No metrics found.</p>
        )}
      </section>
    </section>
  );
}
