export type Tab = 'repository' | 'readme' | 'activity';
export const isTab = (tab: unknown): tab is Tab =>
  typeof tab === 'string' && ['repository', 'readme', 'activity'].includes(tab);
