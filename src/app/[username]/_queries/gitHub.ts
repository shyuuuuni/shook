import { QueryKey, UseQueryOptions } from '@tanstack/react-query';
import GitHubService from '@/backend/services/GitHubService';
import { GitHubRepository } from '@/types/github';

export const gitHubQueryKeys = {
  repositories: (accessToken: string) => [
    'user',
    'repository',
    { accessToken },
  ],
};

export const gitHubQueryOptions = {
  repositories: (
    accessToken: string,
  ): UseQueryOptions<
    GitHubRepository[],
    Error,
    GitHubRepository[],
    QueryKey
  > => ({
    queryKey: gitHubQueryKeys.repositories(accessToken),
    queryFn: async () => {
      const gitHubService = new GitHubService(accessToken);
      const repositories = await gitHubService.getRepositoryListByUser();

      return repositories;
    },
  }),
};
