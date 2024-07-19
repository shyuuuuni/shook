'use client';

import { useAchievement } from '../_hooks/useClovaStudioQuery';
import useUsername from '../_hooks/useUsername';
import * as styles from './UserActivities.css';

export default function UserActivities() {
  const username = useUsername();
  const { data, isError } = useAchievement(username);

  // TODO: 타입 안정성 추가
  let performanceReport = '';

  if (Array.isArray(data)) {
    performanceReport = data[0] ?? '';
  }

  return (
    <div>
      <div>isError: {isError}</div>
      <div className={styles.achievements}>{performanceReport}</div>
    </div>
  );
}
