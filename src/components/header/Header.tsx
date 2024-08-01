import Link from 'next/link';
import * as styles from './Header.css';
import UserSearch from './UserSearch';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.leftNavItems}>
          <Link href={'/'}>Shook</Link>
        </div>
        <div className={styles.rightNavItems}>
          <UserSearch />
          <div>profile</div>
        </div>
      </nav>
    </header>
  );
}
