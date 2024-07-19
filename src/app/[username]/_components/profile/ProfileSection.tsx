import gitHubService from '@/backend/services/GitHubService';
import UserProfile from './UserProfile';

type ProfileSectionProps = {
  username: string;
  className?: string;
};

export default async function ProfileSection({
  username,
  className,
}: ProfileSectionProps) {
  const user = await gitHubService.getUserByUsername({ username });

  return (
    <section className={className}>
      <UserProfile user={user} />
    </section>
  );
}
