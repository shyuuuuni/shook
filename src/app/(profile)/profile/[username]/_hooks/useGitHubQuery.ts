import { useQuery } from '@tanstack/react-query';
import { gitHubQueryOptions } from '../_queries/gitHub';

export const useRepositories = (username: string) => {
  return useQuery(gitHubQueryOptions.repositories(username));
};
