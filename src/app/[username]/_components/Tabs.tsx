'use client';

import type { Tab as TabType } from '../_types/tab';
import * as ReactTabs from '@radix-ui/react-tabs';
import clsx from 'clsx';
import * as styles from './Tabs.css';

type TabsProps = {
  className?: string;
};

const tabList: {
  tabType: TabType;
  label: string;
}[] = [
  { tabType: 'repository', label: 'Repository' },
  { tabType: 'insight', label: 'Insight' },
  { tabType: 'activity', label: 'Activity' },
];

export default function Tabs({ className }: TabsProps) {
  return (
    <ReactTabs.TabsList className={clsx(className, styles.tabsList)}>
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
