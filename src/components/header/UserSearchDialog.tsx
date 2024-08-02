'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { useId } from 'react';
import * as styles from './UserSearchDialog.css';

type UserSearchDialogProps = {
  onUserSelect(username: string): void;
};

export default function UserSearchDialog({
  onUserSelect,
}: UserSearchDialogProps) {
  const id = useId();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement search logic
    onUserSelect('shyuuuuni');
  };

  return (
    <Dialog.Portal>
      <Dialog.Overlay className={styles.overlay} />
      <Dialog.Content className={styles.dialog}>
        <VisuallyHidden.Root>
          <Dialog.Title>GitHub User Search</Dialog.Title>
          <Dialog.Description>
            Search for a GitHub user by their username
          </Dialog.Description>
        </VisuallyHidden.Root>
        <form className={styles.searchForm} onSubmit={handleSubmit}>
          <label className={styles.searchFormItem} htmlFor={id}>
            <MagnifyingGlassIcon className={styles.icon} />
          </label>
          <input
            className={styles.searchInput}
            id={id}
            placeholder="Search User"
          />
        </form>
        <section></section>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
