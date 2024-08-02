'use client';

import { signIn, signOut } from 'next-auth/react';
import { match } from 'ts-pattern';

type AuthTriggerProps = {
  children?: React.ReactNode;
  authType: 'signIn' | 'signOut';
};

const handlerDecider = (authType: AuthTriggerProps['authType']) => {
  return match(authType)
    .with('signIn', () => signIn('github'))
    .with('signOut', () => signOut());
};

export default function AuthTrigger({
  children,
  authType = 'signIn',
}: AuthTriggerProps) {
  return <button onClick={() => handlerDecider(authType)}>{children}</button>;
}
