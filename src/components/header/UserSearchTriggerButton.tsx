import * as Dialog from '@radix-ui/react-dialog';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import * as styles from './UserSearchTriggerButton.css';

export default function UserSearchTriggerButton() {
  return (
    <Dialog.Trigger asChild>
      <button className={styles.triggerButton}>
        <MagnifyingGlassIcon className={styles.icon} />
        <span className={styles.placeholder}>{'Search User'}</span>
      </button>
    </Dialog.Trigger>
  );
}
