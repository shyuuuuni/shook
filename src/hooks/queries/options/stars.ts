import { UseQueryOptions, QueryKey } from '@tanstack/react-query';
import {
  Metric,
  Topic,
} from '@/app/(authenticated)/dashboard/starred/_types/action';
import { API_URL } from '@/configs/env';

const starsApiRoutes = {
  repositories: `${API_URL}/stars/repos` as const,
  topics: `${API_URL}/stars/topics` as const,
};

export const starsQueryKeys = {
  repositories: ['stars', 'repositories'] as const,
  topics: ['stars', 'topics'] as const,
};

export const starsQueryOptions = {
  repositories: (): UseQueryOptions<Metric[], Error, Metric[], QueryKey> => ({
    queryKey: starsQueryKeys.repositories,
    queryFn: async function () {
      const response = await fetch(starsApiRoutes.repositories);
      const data = await response.json();

      return data?.metrics;
    },
  }),
  topics: (): UseQueryOptions<Topic[], Error, Topic[], QueryKey> => ({
    queryKey: starsQueryKeys.topics,
    queryFn: async function () {
      const response = await fetch(starsApiRoutes.topics);
      const data = await response.json();

      return data?.topics;
    },
  }),
};
