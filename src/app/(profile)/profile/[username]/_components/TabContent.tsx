'use client';

import * as ReactTabs from '@radix-ui/react-tabs';
import { match } from 'ts-pattern';
import useTab from '../_hooks/useTab';
import FavoriteAnalysis from './favorite/FavoriteAnalysis';
import RepositoryOverview from './repository/RepositoryOverview';

export default function TabContent() {
  const tab = useTab();

  return match(tab)
    .with('repository', () => (
      <ReactTabs.TabsContent value={'repository'}>
        <RepositoryOverview />
      </ReactTabs.TabsContent>
    ))
    .with('favorite', () => (
      <ReactTabs.TabsContent value={'favorite'}>
        <FavoriteAnalysis />
      </ReactTabs.TabsContent>
    ))
    .with('activity', () => (
      <ReactTabs.TabsContent value={'activity'}>activity</ReactTabs.TabsContent>
    ))
    .exhaustive();
}
