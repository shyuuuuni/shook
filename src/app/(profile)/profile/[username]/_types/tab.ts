export type Tab = 'repository' | 'favorite' | 'activity';
export const isTab = (tab: unknown): tab is Tab =>
  typeof tab === 'string' &&
  ['repository', 'favorite', 'activity'].includes(tab);
