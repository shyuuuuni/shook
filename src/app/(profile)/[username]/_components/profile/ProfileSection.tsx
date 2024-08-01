import GitHubService from '@/backend/services/GitHubService';
import { getAccessToken } from '@/libs/next-auth';
import UserProfile from './UserProfile';

type ProfileSectionProps = {
  username: string;
  className?: string;
};

export default async function ProfileSection({
  username,
  className,
}: ProfileSectionProps) {
  const accessToken = await getAccessToken();
  const gitHubService = new GitHubService(accessToken);
  const user = await gitHubService.getUserByUsername({ username });

  return (
    <section className={className}>
      <UserProfile user={user} />
    </section>
  );
}
