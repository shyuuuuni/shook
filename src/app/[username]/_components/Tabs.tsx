'use client';

import type { Tab as TabType } from '../_types/tab';
import * as ReactTabs from '@radix-ui/react-tabs';

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
    <ReactTabs.TabsList>
      {tabList.map(({ tabType, label }) => (
        <ReactTabs.TabsTrigger key={tabType} value={tabType}>
          {label}
        </ReactTabs.TabsTrigger>
      ))}
    </ReactTabs.TabsList>
  );
}
