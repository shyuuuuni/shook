import { createContext, useContext } from 'react';
import { isTab, Tab } from '../_types/tab';

export const TabContext = createContext<Tab>('repository');

const useTab = () => {
  const tab = useContext(TabContext);

  if (!isTab(tab)) {
    throw new Error('useTab must be used within a TabProvider');
  }

  return tab;
};

export default useTab;
