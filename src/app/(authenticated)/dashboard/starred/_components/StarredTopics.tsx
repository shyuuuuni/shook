'use client';

import Image from 'next/image';
import { useFormState } from 'react-dom';
import { BLUR_IMAGE_DATAURL } from '@/libs/image';
import { fetchStarredTopics } from '../actions';
import * as styles from './StarredTopics.css';

export default function StarredTopics() {
  const [starredTopics, actionFetchStarredTopics] = useFormState(
    fetchStarredTopics,
    [],
  );

  return (
    <section className={styles.container}>
      <form className={styles.form} action={actionFetchStarredTopics}>
        <button className={styles.button} type="submit">
          Fetch Starred Topics
        </button>
      </form>
      <section>
        <h2 className={styles.h2}>Starred Topics</h2>
        {starredTopics.length > 0 ? (
          <ul>
            {starredTopics.map(({ name, description, url, icon }, i) => (
              <li className={styles.topic} key={i}>
                <Image
                  className={styles.topicImage}
                  src={icon ?? BLUR_IMAGE_DATAURL}
                  alt={name}
                  width={50}
                  height={50}
                  placeholder="blur"
                  blurDataURL={BLUR_IMAGE_DATAURL}
                  unoptimized
                />
                <div>
                  <h3 className={styles.topicName}>
                    <a target="_blank" href={`https://github.com${url}`}>
                      {name}
                    </a>
                  </h3>
                  <p className={styles.topicDescription}>{description}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.topicDescription}>No starred topics found.</p>
        )}
      </section>
    </section>
  );
}
