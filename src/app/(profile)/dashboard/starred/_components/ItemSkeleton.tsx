import * as styles from './ItemSkeleton.css';

type ItemSkeletonProps = {
  count?: number;
};

export default function ItemSkeleton({ count = 1 }: ItemSkeletonProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <li key={index} className={styles.container}>
          <div className={styles.title} />
          <div className={styles.p} />
          <div className={styles.p} />
          <div className={styles.p} />
          <div className={styles.p} />
        </li>
      ))}
    </>
  );
}
