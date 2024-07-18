'use client';

import useTab from '../_hooks/useTab';

export default function TabContent() {
  const { tab } = useTab();

  return <div>{tab}</div>;
}
