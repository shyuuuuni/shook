'use client';

import * as ReactTabs from '@radix-ui/react-tabs';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { match, P } from 'ts-pattern';
import { TabContext } from '../../_hooks/useTab';
import { Tab, isTab } from '../../_types/tab';

type TabProviderProps = {
  children?: React.ReactNode;
};

export default function TabProvider({ children }: TabProviderProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const tab = match<string | null, Tab>(searchParams.get('tab'))
    .with(
      P.string,
      (_tab) => isTab(_tab) || isTab(_tab.toLowerCase()),
      (_tab) => _tab.toLowerCase() as Tab,
    )
    .otherwise(() => 'repository');

  const handleValueChange = (value: string) => {
    if (isTab(value)) {
      router.push(`${pathname}?tab=${value}`);
    }
  };

  return (
    <ReactTabs.Root value={tab} onValueChange={handleValueChange}>
      <TabContext.Provider value={tab}>{children}</TabContext.Provider>
    </ReactTabs.Root>
  );
}
