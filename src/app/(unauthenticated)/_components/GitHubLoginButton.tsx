'use client';

import { signIn } from 'next-auth/react';

type GitHubLoginButtonProps = {
  children?: React.ReactNode;
};

export default function GitHubLoginButton({
  children = 'GitHub 로그인',
}: GitHubLoginButtonProps) {
  const handleAuth = () => signIn('github');

  return <button onClick={handleAuth}>{children}</button>;
}
