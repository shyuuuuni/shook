'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import UserSearchDialog from './UserSearchDialog';
import UserSearchTriggerButton from './UserSearchTriggerButton';

export default function UserSearch() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleUserSelect = (username: string) => {
    setOpen(false);
    router.push(`/${username}`);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <UserSearchTriggerButton />
      <UserSearchDialog onUserSelect={handleUserSelect} />
    </Dialog.Root>
  );
}
