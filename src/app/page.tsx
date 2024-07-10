'use client';

import { useRouter } from 'next/navigation';
import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import * as styles from './page.css';

export default function Page() {
  const [username, setUsername] = useState('');
  const router = useRouter();

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    router.push(`/repos/${username}`);
  };

  const handleChangeUsername: ChangeEventHandler<HTMLInputElement> = (e) => {
    setUsername(e.target.value);
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Enter your GitHub nickname</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          value={username}
          onChange={handleChangeUsername}
        />
        <button className={styles.button} type="submit">
          submit
        </button>
      </form>
    </main>
  );
}
