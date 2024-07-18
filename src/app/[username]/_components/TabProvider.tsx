'use client';

import * as ReactTabs from '@radix-ui/react-tabs';
import { useState } from 'react';
import { TabContext } from '../_hooks/useTab';
import { isTab, Tab } from '../_types/tab';

type TabProviderProps = {
  children?: React.ReactNode;
};

export default function TabProvider({ children }: TabProviderProps) {
  const [tab, setTab] = useState<Tab>('repository');

  const handleValueChange = (value: string) => {
    if (isTab(value)) {
      setTab(value);
    }
  };

  return (
    <ReactTabs.Root defaultValue="repository" onValueChange={handleValueChange}>
      <TabContext.Provider value={{ tab, setTab }}>
        {children}
      </TabContext.Provider>
    </ReactTabs.Root>
  );
}
