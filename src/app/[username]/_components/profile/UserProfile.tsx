import * as Avatar from '@radix-ui/react-avatar';
import { formatISODateToYYYYMMDD } from '@/libs/time';
import { GitHubUser } from '@/types/github';
import * as styles from './UserProfile.css';

type UserProfileProps = {
  user: GitHubUser;
};

export default function UserProfile({
  user: { login: username, avatar_url, name, created_at, html_url, bio },
}: UserProfileProps) {
  return (
    <div className={styles.container}>
      <Avatar.Root className={styles.avatarContainer}>
        <Avatar.Image
          className={styles.avatar}
          src={avatar_url}
          alt={`${username} 프로필 이미지`}
        />
      </Avatar.Root>
      <div className={styles.profileContainer}>
        <div className={styles.name}>{name}</div>
        <a className={styles.username} target="_blank" href={html_url}>
          @{username}
        </a>
        <div className={styles.bio}>{bio}</div>
        <time className={styles.since}>
          since. {formatISODateToYYYYMMDD(created_at)}
        </time>
      </div>
    </div>
  );
}
