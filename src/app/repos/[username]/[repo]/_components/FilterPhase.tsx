'use client';

import { PhaseState } from '../_hooks/usePhaseState';
import useCommitGroupList from '../_queries/useCommitGroupList';
import * as styles from './CommitPhase.css';

type FilterPhaseProps = {
  phaseState: React.MutableRefObject<PhaseState>;
  onNext: () => void;
};

export default function FilterPhase({ phaseState, onNext }: FilterPhaseProps) {
  const { username, repo, commitList } = phaseState.current;
  const commitGroupListQuery = useCommitGroupList({
    username,
    repo,
    commitList: commitList ?? [],
  });
  const commitGroupList = commitGroupListQuery.data;

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Commit Group</h1>
      <button className={styles.button} onClick={onNext}>
        Analyze Commit
      </button>
      {commitGroupList.map((commitGroup, index) => (
        <div key={index}>
          <h2>{commitGroup.taskTitle}</h2>
          <p>{commitGroup.description}</p>
        </div>
      ))}
    </div>
  );
}
