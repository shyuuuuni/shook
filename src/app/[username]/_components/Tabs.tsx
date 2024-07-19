'use client';

import type { Tab as TabType } from '../_types/tab';
import * as ReactTabs from '@radix-ui/react-tabs';
import * as styles from './Tabs.css';

const tabList: {
  tabType: TabType;
  label: string;
}[] = [
  { tabType: 'repository', label: 'Repository' },
  { tabType: 'insight', label: 'Insight' },
  { tabType: 'activity', label: 'Activity' },
];

export default function Tabs() {
  return (
    <ReactTabs.TabsList className={styles.tabsList}>
      {tabList.map(({ tabType, label }) => (
        <ReactTabs.TabsTrigger
          className={styles.tabsTrigger}
          key={tabType}
          value={tabType}
        >
          {label}
        </ReactTabs.TabsTrigger>
      ))}
    </ReactTabs.TabsList>
  );
}
