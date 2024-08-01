import * as styles from './Header.css';
import Logo from './Logo';
import ProfileDropdown from './ProfileDropdown';
import UserSearch from './UserSearch';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.leftNavItems}>
          <Logo />
        </div>
        <div className={styles.rightNavItems}>
          <UserSearch />
          <ProfileDropdown />
        </div>
      </nav>
    </header>
  );
}
