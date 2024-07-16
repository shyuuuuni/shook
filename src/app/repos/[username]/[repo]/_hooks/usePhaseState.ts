import { useRef } from 'react';
import { GitHubCommit } from '@/types/github';

export type PhaseState = {
  username: string;
  repo: string;
  commitList?: GitHubCommit[];
  commitGroupList?: {
    taskTitle: string;
    description: string;
  }[];
};

type UsePhaseStateParams = {
  username: string;
  repo: string;
};

const usePhaseState = ({ username, repo }: UsePhaseStateParams) => {
  const phaseState = useRef<PhaseState>({ username, repo });

  return phaseState;
};

export default usePhaseState;
