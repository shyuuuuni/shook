'use client';

import * as ReactTabs from '@radix-ui/react-tabs';
import { useState } from 'react';
import { TabContext } from '../_hooks/useTab';
import { UsernameContext } from '../_hooks/useUsername';
import { isTab, Tab } from '../_types/tab';

type TabProviderProps = {
  username: string;
  children?: React.ReactNode;
};

export default function TabProvider({ username, children }: TabProviderProps) {
  const [tab, setTab] = useState<Tab>('repository');

  const handleValueChange = (value: string) => {
    if (isTab(value)) {
      setTab(value);
    }
  };

  return (
    <ReactTabs.Root defaultValue="repository" onValueChange={handleValueChange}>
      <UsernameContext.Provider value={username}>
        <TabContext.Provider value={tab}>{children}</TabContext.Provider>
      </UsernameContext.Provider>
    </ReactTabs.Root>
  );
}
