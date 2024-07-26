import * as styles from './StarredPage.css';
import StarredAnalysis from './_components/StarredAnalysis';
import StarredRepositoryMetrics from './_components/StarredRepositoryMetrics';
import StarredTopics from './_components/StarredTopics';

export default async function StarredPage() {
  return (
    <main className={styles.main}>
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
    </main>
  );
}
