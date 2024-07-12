import clsx from 'clsx';
import * as styles from './Skeleton.css';

type SkeletonProps = {
  className?: string;
};

export default function Skeleton({ className }: SkeletonProps) {
  return <div className={clsx(styles.skeleton, className)} />;
}
