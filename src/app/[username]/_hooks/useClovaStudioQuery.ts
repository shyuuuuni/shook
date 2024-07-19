import { useQuery } from '@tanstack/react-query';
import { clovaStudioQueryOptions } from '../_queries/clovaStudio';

export const useAchievement = (username: string) => {
  return useQuery(clovaStudioQueryOptions.achievement(username));
};
