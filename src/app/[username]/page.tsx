import TabContent from './_components/TabContent';
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
    <main>
      <ProfileSection username={username} />
      <section>
        <TabProvider>
          <Tabs />
          <TabContent />
        </TabProvider>
      </section>
    </main>
  );
}
