import { QueryKey, useSuspenseQuery } from '@tanstack/react-query';
import gitHubService from '@/backend/services/GitHubService';
import { GitHubCommit } from '@/types/github';

type UseCommitListParams = {
  username: string;
  repo: string;
  owner?: string;
};

export const getQueryKey = ({
  username,
  repo,
}: Omit<UseCommitListParams, 'owner'>): QueryKey => {
  return ['commitList', { username, repo }];
};

export const fetchCommitList = async ({
  owner,
  username,
  repo,
}: Required<UseCommitListParams>): Promise<GitHubCommit[]> => {
  const commitList = await gitHubService.getCommitList({
    owner,
    repo,
    author: username,
  });

  return commitList;
};

const useCommitList = ({ username, repo }: UseCommitListParams) => {
  return useSuspenseQuery<GitHubCommit[], unknown, GitHubCommit[], QueryKey>({
    queryKey: getQueryKey({ username, repo }),
    queryFn: () =>
      fetchCommitList({
        owner: username,
        username,
        repo,
      }),
  });
};

export default useCommitList;
