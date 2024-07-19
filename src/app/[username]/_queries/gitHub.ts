import { QueryKey, UseQueryOptions } from '@tanstack/react-query';
import gitHubService from '@/backend/services/GitHubService';
import { GitHubRepository } from '@/types/github';

export const gitHubQueryKeys = {
  repositories: (username: string): QueryKey => [
    'gitHub',
    'repository',
    { username },
  ],
};

export const gitHubQueryOptions = {
  repositories: (
    username: string,
  ): UseQueryOptions<
    GitHubRepository[],
    Error,
    GitHubRepository[],
    QueryKey
  > => ({
    queryKey: gitHubQueryKeys.repositories(username),
    queryFn: async () => gitHubService.getRepositoryListByUser({ username }),
  }),
};
