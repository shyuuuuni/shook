import { createContext, useContext } from 'react';
import { isTab, TabContext as TabContextType } from '../_types/tab';

export const TabContext = createContext<null | TabContextType>(null);

const useTab = () => {
  const tabContext = useContext(TabContext);

  if (!isTab(tabContext?.tab)) {
    throw new Error('useTab must be used within a TabProvider');
  }

  return { tab: tabContext.tab, setTab: tabContext.setTab };
};

export default useTab;
