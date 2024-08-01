import { createContext, useContext } from 'react';

export const UsernameContext = createContext<string>('');

const useUsername = () => {
  const username = useContext(UsernameContext);

  if (!username) {
    throw new Error('useUsername must be used within a UsernameProvider');
  }

  return username;
};

export default useUsername;
