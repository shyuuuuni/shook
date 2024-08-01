import { Metric } from '../../_types/favorite';
import CollapsibleReadme from './CollapsibleReadme';
import * as styles from './RepositoryMetric.css';

type RepositoryMetricProps = {
  metric: Metric;
};

export default function RepositoryMetric({
  metric: { name, description, languages, topics, readme },
}: RepositoryMetricProps) {
  return (
    <li className={styles.metric}>
      <h3 className={styles.repoName}>{name}</h3>
      <p className={styles.p}>
        <b className={styles.category}>Description</b> {description}
      </p>
      {languages.length > 0 && (
        <p className={styles.p}>
          <b className={styles.category}>Languages</b> {languages.join(', ')}
        </p>
      )}
      {topics.length > 0 && (
        <p className={styles.p}>
          <b className={styles.category}>Topics</b> {topics.join(', ')}
        </p>
      )}
      <CollapsibleReadme readmeText={readme} />
    </li>
  );
}
