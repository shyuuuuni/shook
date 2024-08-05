import { createContext, useContext } from 'react';

export const UsernameContext = createContext<string | null>(null);

const useUsername = () => {
  const username = useContext(UsernameContext);

  if (!username) {
    throw new Error('useUsername must be used within a UsernameProvider');
  }

  return username;
};

export default useUsername;
