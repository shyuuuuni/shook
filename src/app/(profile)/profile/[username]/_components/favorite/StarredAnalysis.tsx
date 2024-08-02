'use client';

import useAnalyze from '../../_hooks/useAnalyze';
import * as styles from './StarredAnalysis.css';

export default function StarredAnalysis() {
  const {
    data: analysis,
    refetch,
    isReadyMetrics,
    isReadyTopics,
  } = useAnalyze();
  const isReady = isReadyMetrics && isReadyTopics;

  const handleClick = () => {
    refetch();
  };

  return (
    <section className={styles.container}>
      <button
        className={styles.button}
        onClick={handleClick}
        disabled={!isReady}
      >
        Analyze Your Favorites
      </button>
      <div>
        <p className={styles.p}>
          Topics: {isReadyTopics ? 'Ready ✅' : 'Required ⛔'}
        </p>
        <p className={styles.p}>
          Repository Metrics: {isReadyMetrics ? 'Ready ✅' : 'Required ⛔'}
        </p>
      </div>
      {analysis && <div className={styles.analysis}>{analysis}</div>}
    </section>
  );
}
