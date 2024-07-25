'use client';

import { match, P } from 'ts-pattern';
import ItemSkeleton from './ItemSkeleton';
import * as styles from './StarredTopicsView.css';
import Topic from './Topic';
import { useStarsTopicsQuery } from '@/hooks/queries/useStarsQuery';

type StarredTopicsViewProps = {};

export default function StarredTopicsView({}: StarredTopicsViewProps) {
  const { data: topics, isFetching } = useStarsTopicsQuery();

  return (
    <section>
      <h2 className={styles.h2}>Starred Topics</h2>
      {match({ isFetching, topics })
        .with({ isFetching: true }, () => <ItemSkeleton />)
        .with({ topics: P.when((topics) => topics?.length === 0) }, () => (
          <p className={styles.p}>No topics found.</p>
        ))
        .otherwise(() => (
          <ul>
            {topics?.map((topic) => <Topic key={topic.name} topic={topic} />)}
          </ul>
        ))}
    </section>
  );
}
