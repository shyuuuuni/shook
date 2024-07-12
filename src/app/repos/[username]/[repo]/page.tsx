'use client';

import { Suspense } from 'react';
import { match } from 'ts-pattern';
import Skeleton from '@/components/Skeleton';
import * as styles from './RepoPage.css';
import CommitPhase from './_components/CommitPhase';
import usePhase from './_hooks/usePhase';
import usePhaseState from './_hooks/usePhaseState';

type RepoPageProps = {
  params: {
    username: string;
    repo: string;
  };
};

export default function RepoPage({
  params: { username, repo },
}: RepoPageProps) {
  const [phase, setPhase] = usePhase();
  const phaseState = usePhaseState();

  return (
    <main className={styles.main}>
      <Suspense fallback={<Skeleton className={styles.skeleton} />}>
        {match(phase)
          .with('commit', () => (
            <CommitPhase
              username={username}
              repo={repo}
              phaseState={phaseState}
              onNext={() => setPhase('filter')}
            />
          ))
          .with('filter', () => <></>)
          .with('analyze', () => <></>)
          .exhaustive()}
      </Suspense>
    </main>
  );
}
