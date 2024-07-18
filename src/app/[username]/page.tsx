import TabContent from './_components/TabContent';
import TabContentPrefetch from './_components/TabContentPrefetch';
import TabProvider from './_components/TabProvider';
import Tabs from './_components/Tabs';
import { ProfileSection } from './_components/profile';

type UserPageProps = {
  params: {
    username: string;
  };
};

export default function UserPage({ params: { username } }: UserPageProps) {
  return (
    <div>
      <ProfileSection username={username} />
      <main>
        <TabProvider username={username}>
          <Tabs />
          <TabContentPrefetch username={username}>
            <TabContent />
          </TabContentPrefetch>
        </TabProvider>
      </main>
    </div>
  );
}
