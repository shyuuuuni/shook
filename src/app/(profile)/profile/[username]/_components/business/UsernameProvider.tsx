'use client';

import { useState } from 'react';
import { UsernameContext } from '../../_hooks/useUsername';

type UsernameProviderProps = {
  children?: React.ReactNode;
  initialUsername: string;
};

export default function UsernameProvider({
  children,
  initialUsername,
}: UsernameProviderProps) {
  const [username] = useState<string>(initialUsername);

  return (
    <UsernameContext.Provider value={username}>
      {children}
    </UsernameContext.Provider>
  );
}
