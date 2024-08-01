'use client';

import { signIn } from 'next-auth/react';
import * as styles from './GitHubLoginButton.css';

type GitHubLoginButtonProps = {
  children?: React.ReactNode;
};

export default function GitHubLoginButton({
  children = 'Start with GitHub Account',
}: GitHubLoginButtonProps) {
  const handleAuth = () => signIn('github');

  return (
    <button className={styles.button} onClick={handleAuth}>
      {children}
    </button>
  );
}
