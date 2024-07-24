import Link from 'next/link';

export default function DashboardPage() {
  return (
    <main>
      <nav>
        <ul>
          <li>
            <Link href={'/dashboard/starred'}>Star</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
