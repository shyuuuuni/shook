import * as styles from './UserPage.css';
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
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <ProfileSection className={styles.profileSection} username={username} />
        <TabProvider username={username}>
          <main className={styles.main}>
            <Tabs className={styles.tabs} />
            <TabContentPrefetch username={username}>
              <TabContent />
            </TabContentPrefetch>
          </main>
        </TabProvider>
      </div>
    </div>
  );
}
