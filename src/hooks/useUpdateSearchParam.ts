import { useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

const useUpdateSearchParam = () => {
  const searchParams = useSearchParams();

  const updateSearchParam = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(key, value);
      window.history.pushState({}, '', `?${params.toString()}`);
    },
    [searchParams],
  );

  return updateSearchParam;
};

export default useUpdateSearchParam;
