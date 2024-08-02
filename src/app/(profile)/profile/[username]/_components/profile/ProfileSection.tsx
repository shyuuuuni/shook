import GitHubService from '@/backend/services/GitHubService';
import UserProfile from './UserProfile';

type ProfileSectionProps = {
  username: string;
  className?: string;
};

export default async function ProfileSection({
  username,
  className,
}: ProfileSectionProps) {
  const gitHubService = new GitHubService(
    process.env.GITHUB_COMMON_ACCESS_TOKEN,
  );
  const user = await gitHubService.getUserByUsername({ username });

  return (
    <section className={className}>
      <UserProfile user={user} />
    </section>
  );
}
