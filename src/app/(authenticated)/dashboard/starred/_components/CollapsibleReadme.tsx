'use client';

import * as Collapsible from '@radix-ui/react-collapsible';
import { useState } from 'react';
import * as styles from './CollapsibleReadme.css';

type CollapsibleReadmeProps = {
  readmeText: string;
};

export default function CollapsibleReadme({
  readmeText,
}: CollapsibleReadmeProps) {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <div>
        <Collapsible.Trigger asChild>
          <button className={styles.readmore}>README</button>
        </Collapsible.Trigger>
      </div>
      <Collapsible.Content>
        <div className={styles.readme}>{readmeText}</div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
