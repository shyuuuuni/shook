import * as styles from './FavoriteAnalysis.css';
import StarredAnalysis from './StarredAnalysis';
import StarredRepositoryMetrics from './StarredRepositoryMetrics';
import StarredTopics from './StarredTopics';

export default function FavoriteAnalysis() {
  return (
    <div className={styles.main}>
      <h1 className={styles.h1}>Starred Metric Analyzer</h1>
      <section className={styles.section}>
        <h2 className={styles.h2}>View analysis</h2>
        <StarredAnalysis />
      </section>
      <section className={styles.section}>
        <h2 className={styles.h2}>Test process</h2>
        <div className={styles.sectionContents}>
          <StarredTopics />
          <StarredRepositoryMetrics />
        </div>
      </section>
    </div>
  );
}
