'use client';

import type { PhaseState } from '../_hooks/usePhaseState';
import { useEffect } from 'react';
import useCommitList from '../_queries/useCommitList';
import CommitList from './CommitList';
import * as styles from './CommitPhase.css';

type CommitPhaseProps = {
  phaseState: React.MutableRefObject<PhaseState>;
  onNext: () => void;
};

export default function CommitPhase({ phaseState, onNext }: CommitPhaseProps) {
  const { username, repo } = phaseState.current;
  const commitListQuery = useCommitList({ username, repo });
  const commitList = commitListQuery.data ?? [];

  useEffect(() => {
    phaseState.current.commitList = commitList;
  }, [phaseState, commitList]);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        {repo} {username}&lsquo;s commits
      </h1>
      <button className={styles.button} onClick={onNext}>
        Group Commit
      </button>
      <CommitList commitList={commitList} />
    </div>
  );
}
