import * as Avatar from '@radix-ui/react-avatar';
import gitHubService from '@/backend/services/GitHubService';

type ProfileSectionProps = {
  username: string;
  className?: string;
};

export default async function ProfileSection({
  username,
  className,
}: ProfileSectionProps) {
  const user = await gitHubService.getUserByUsername({ username });
  const { followers, bio, name, email, created_at } = user;

  return (
    <section className={className}>
      <Avatar.Root>
        <Avatar.Image src={user.avatar_url} alt={`${username} 프로필 이미지`} />
      </Avatar.Root>
      <div>followers: {followers}</div>
      <div>bio: {bio}</div>
      <div>name: {name}</div>
      <div>email: {email}</div>
      <div>since: {created_at}</div>
    </section>
  );
}
