import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { match, P } from 'ts-pattern';
import { auth } from '@/libs/next-auth';
import ProfileAvatar from '../github/ProfileAvatar';
import * as styles from './ProfileDropdownTrigger.css';

export default async function ProfileDropdownTrigger() {
  const session = await auth();

  return (
    <DropdownMenu.Trigger asChild>
      <button className={styles.triggerButton}>
        {match(session)
          .with(P.nullish, () => <GitHubLogoIcon className={styles.trigger} />)
          .otherwise(({ user }) => (
            <ProfileAvatar
              className={styles.trigger}
              imageUrl={user.image}
              username={user.username}
            />
          ))}
      </button>
    </DropdownMenu.Trigger>
  );
}
