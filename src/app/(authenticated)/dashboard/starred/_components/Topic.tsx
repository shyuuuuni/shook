import Image from 'next/image';
import { BLUR_IMAGE_DATAURL } from '@/libs/image';
import { Topic as TopicType } from '../_types/action';
import * as styles from './Topic.css';

type TopicProps = {
  topic: TopicType;
};

export default function Topic({
  topic: { name, description, icon, url },
}: TopicProps) {
  return (
    <li className={styles.topic}>
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
  );
}
