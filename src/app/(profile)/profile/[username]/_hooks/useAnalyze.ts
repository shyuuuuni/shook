import { useQuery } from '@tanstack/react-query';
import { API_URL } from '@/configs/env';
import {
  useStarsRepositoryQuery,
  useStarsTopicsQuery,
} from '@/hooks/queries/useStarsQuery';

type UseAnalyzeParams = {
  fetchOnMount?: boolean;
};

const useAnalyze = ({ fetchOnMount = false }: UseAnalyzeParams = {}) => {
  const {
    data: metrics,
    isFetched: isFetchedMetrics,
    isSuccess: isSuccessMetrics,
  } = useStarsRepositoryQuery();
  const {
    data: topics,
    isFetched: isFetchedTopics,
    isSuccess: isSuccessTopics,
  } = useStarsTopicsQuery();

  const isReadyMetrics = isFetchedMetrics && isSuccessMetrics;
  const isReadyTopics = isFetchedTopics && isSuccessTopics;

  const query = useQuery({
    queryKey: ['stars', 'analysis', metrics, topics],
    queryFn: async () => {
      const response = await fetch(`${API_URL}/stars/analysis`, {
        method: 'POST',
        body: JSON.stringify({
          metrics,
          topics,
        }),
      });
      const data = await response.json();

      return data.result.result.message.content;
    },
    enabled: fetchOnMount && isReadyMetrics && isReadyTopics,
  });

  return { ...query, isReadyMetrics, isReadyTopics };
};

export default useAnalyze;
