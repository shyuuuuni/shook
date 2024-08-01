import ProfileAvatar from '@/components/github/ProfileAvatar';
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
      <ProfileAvatar imageUrl={avatar_url} username={username} />
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
