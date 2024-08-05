import * as styles from './UserPage.css';
import TabContent from './_components/TabContent';
import Tabs from './_components/Tabs';
import TabContentPrefetch from './_components/business/TabContentPrefetch';
import TabProvider from './_components/business/TabProvider';
import UsernameProvider from './_components/business/UsernameProvider';
import ProfileSection from './_components/profile/ProfileSection';

type UserPageProps = {
  params: {
    username: string;
  };
  searchParams: {
    tab?: string;
  };
};

export default function UserPage({ params: { username } }: UserPageProps) {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <ProfileSection className={styles.profileSection} username={username} />
        <TabProvider>
          <UsernameProvider initialUsername={username}>
            <main className={styles.main}>
              <Tabs className={styles.tabs} />
              <TabContentPrefetch username={username}>
                <TabContent />
              </TabContentPrefetch>
            </main>
          </UsernameProvider>
        </TabProvider>
      </div>
    </div>
  );
}
