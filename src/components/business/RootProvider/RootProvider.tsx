import { getServerSession } from 'next-auth';
import QueryProvider from './QueryProvider';
import SessionProvider from './SessionProvider';

type RootProviderProps = React.PropsWithChildren;

export default async function RootProvider({ children }: RootProviderProps) {
  const session = await getServerSession();

  return (
    <>
      <QueryProvider>
        <SessionProvider session={session}>{children}</SessionProvider>
      </QueryProvider>
    </>
  );
}
