import Link from 'next/link';
import * as styles from './Logo.css';

export default function Logo() {
  return (
    <Link className={styles.logo} href={'/'}>
      Shook
    </Link>
  );
}
