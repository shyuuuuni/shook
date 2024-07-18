export type Tab = 'repository' | 'readme' | 'activity';
export type TabContext = {
  tab: Tab;
  setTab: (tab: Tab) => void;
};
export const isTab = (tab: unknown): tab is Tab =>
  typeof tab === 'string' && ['repository', 'readme', 'activity'].includes(tab);
