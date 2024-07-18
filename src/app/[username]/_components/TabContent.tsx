'use client';

import * as ReactTabs from '@radix-ui/react-tabs';
import { match } from 'ts-pattern';
import useTab from '../_hooks/useTab';
import RepositoryOverview from './RepositoryOverview';

export default function TabContent() {
  const tab = useTab();

  return match(tab)
    .with('repository', () => (
      <ReactTabs.TabsContent value={'repository'}>
        <RepositoryOverview />
      </ReactTabs.TabsContent>
    ))
    .with('insight', () => (
      <ReactTabs.TabsContent value={'insight'}>readme</ReactTabs.TabsContent>
    ))
    .with('activity', () => (
      <ReactTabs.TabsContent value={'activity'}>activity</ReactTabs.TabsContent>
    ))
    .exhaustive();
}
