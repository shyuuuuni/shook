import { useRef } from 'react';
import { GitHubCommit } from '@/types/github';

export type PhaseState = {
  commitList?: GitHubCommit[];
  commitGroupList?: {
    taskTitle: string;
    description: string;
  }[];
};

const usePhaseState = () => {
  const phaseState = useRef<PhaseState>({});

  return phaseState;
};

export default usePhaseState;
