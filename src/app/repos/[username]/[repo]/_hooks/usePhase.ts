import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import useUpdateSearchParam from '@/hooks/useUpdateSearchParam';

type Phase = 'commit' | 'filter' | 'analyze';

const getPhaseFromSearchParam = (searchParams: URLSearchParams): Phase => {
  const phase = searchParams.get('phase');

  if (phase === 'commit' || phase === 'filter' || phase === 'analyze') {
    return phase;
  }

  return 'commit';
};

const usePhase = (): [phase: Phase, setPhase: (phase: Phase) => void] => {
  const searchParams = useSearchParams();
  const phaseFromSearchParams = getPhaseFromSearchParam(searchParams);
  const updateSearchParam = useUpdateSearchParam();

  const [phase, _setPhase] = useState<Phase>(phaseFromSearchParams);

  const setPhase = useCallback(
    (phase: Phase) => {
      updateSearchParam('phase', phase);
    },
    [updateSearchParam],
  );

  useEffect(() => {
    if (phase === phaseFromSearchParams) {
      return;
    }

    _setPhase(phaseFromSearchParams);
  }, [phase, setPhase, phaseFromSearchParams]);

  return [phase, setPhase];
};
export default usePhase;
