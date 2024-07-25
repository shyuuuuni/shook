'use client';

import * as styles from './StarredTopics.css';
import StarredTopicsView from './StarredTopicsView';
import { useStarsTopicsQuery } from '@/hooks/queries/useStarsQuery';

export default function StarredTopics() {
  const { refetch } = useStarsTopicsQuery();

  const handleClick = () => {
    refetch();
  };

  return (
    <section className={styles.container}>
      <button className={styles.button} onClick={handleClick}>
        Fetch Starred Topics
      </button>
      <StarredTopicsView />
    </section>
  );
}
