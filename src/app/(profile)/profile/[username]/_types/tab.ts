export type Tab = 'repository' | 'insight' | 'activity';
export const isTab = (tab: unknown): tab is Tab =>
  typeof tab === 'string' &&
  ['repository', 'insight', 'activity'].includes(tab);
