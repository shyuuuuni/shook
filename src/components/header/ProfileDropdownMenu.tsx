import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import { match, P } from 'ts-pattern';
import { auth } from '@/libs/next-auth';
import AuthTrigger from '../business/AuthTrigger';
import * as styles from './ProfileDropdownMenu.css';

export default async function ProfileDropdownMenu() {
  const session = await auth();

  return (
    <DropdownMenu.Portal>
      {match(session)
        .with(P.nullish, () => (
          <DropdownMenu.Content
            className={styles.content}
            align="end"
            sideOffset={8}
          >
            <DropdownMenu.Item className={styles.item}>
              <AuthTrigger authType="signIn">Sign in with GitHub</AuthTrigger>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        ))
        .otherwise(({ user }) => (
          <DropdownMenu.Content
            className={styles.content}
            align="end"
            sideOffset={8}
          >
            <DropdownMenu.Label className={styles.label}>
              @{user.username}
            </DropdownMenu.Label>
            <DropdownMenu.Item className={styles.item}>
              <Link href={`/${user.username}`}>Your shook page</Link>
            </DropdownMenu.Item>
            <DropdownMenu.Separator className={styles.separator} />
            <DropdownMenu.Item className={styles.item}>
              <AuthTrigger authType="signOut">Sign out</AuthTrigger>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        ))}
    </DropdownMenu.Portal>
  );
}
