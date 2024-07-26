import { useQuery } from '@tanstack/react-query';
import { starsQueryOptions } from './options/stars';

export const useStarsRepositoryQuery = () => {
  return useQuery({
    ...starsQueryOptions.repositories(),
    enabled: false,
  });
};

export const useStarsTopicsQuery = () => {
  return useQuery({
    ...starsQueryOptions.topics(),
    enabled: false,
  });
};
