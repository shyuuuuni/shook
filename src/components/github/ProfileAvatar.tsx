import * as Avatar from '@radix-ui/react-avatar';
import clsx from 'clsx';
import * as styles from './ProfileAvatar.css';

type ProfileAvatarProps = {
  className?: string;
  imageUrl?: string;
  username?: string;
};

export default function ProfileAvatar({
  className,
  imageUrl,
  username,
}: ProfileAvatarProps) {
  return (
    <Avatar.Root className={clsx(styles.avatarContainer, className)}>
      <Avatar.Image
        className={styles.avatar}
        src={imageUrl}
        alt={`${username} 프로필 이미지`}
      />
    </Avatar.Root>
  );
}
