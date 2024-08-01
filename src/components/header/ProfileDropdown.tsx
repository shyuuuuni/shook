import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import ProfileDropdownMenu from './ProfileDropdownMenu';
import ProfileDropdownTrigger from './ProfileDropdownTrigger';

export default async function ProfileDropdown() {
  return (
    <DropdownMenu.Root>
      <ProfileDropdownTrigger />
      <ProfileDropdownMenu />
    </DropdownMenu.Root>
  );
}
