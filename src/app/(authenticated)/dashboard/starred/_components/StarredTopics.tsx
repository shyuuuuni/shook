'use client';

import { useFormState } from 'react-dom';
import { fetchStarredTopics } from '../actions';
import * as styles from './StarredTopics.css';
import StarredTopicsView from './StarredTopicsView';

export default function StarredTopics() {
  const [starredTopics, actionFetchStarredTopics] = useFormState(
    fetchStarredTopics,
    [],
  );

  return (
    <section className={styles.container}>
      <form action={actionFetchStarredTopics}>
        <button className={styles.button} type="submit">
          Fetch Starred Topics
        </button>
        <StarredTopicsView topics={starredTopics} />
      </form>
    </section>
  );
}
