'use client';

import { useFormStatus } from 'react-dom';
import { match, P } from 'ts-pattern';
import { Topic as TopicType } from '../_types/action';
import * as styles from './StarredTopicsView.css';
import Topic from './Topic';

type StarredTopicsViewProps = {
  topics: TopicType[];
};

export default function StarredTopicsView({ topics }: StarredTopicsViewProps) {
  const status = useFormStatus();

  return (
    <section>
      <h2 className={styles.h2}>Starred Topics</h2>
      {match({ loading: status.pending, topics })
        .with({ loading: true }, () => <p>Loading...</p>)
        .with({ topics: P.when((topics) => topics.length === 0) }, () => (
          <p className={styles.p}>No topics found.</p>
        ))
        .otherwise(() => (
          <ul>
            {topics.map((topic) => (
              <Topic key={topic.name} topic={topic} />
            ))}
          </ul>
        ))}
    </section>
  );
}
