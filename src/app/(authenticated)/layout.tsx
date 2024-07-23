import GitHubRateLimit from '@/components/github/GitHubRateLimit';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <GitHubRateLimit />
    </>
  );
}
