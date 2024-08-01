import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { gitHubQueryOptions } from '../_queries/gitHub';

type TabContentPrefetchProps = {
  username: string;
  children?: React.ReactNode;
};

export default async function TabContentPrefetch({
  username,
  children,
}: TabContentPrefetchProps) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(gitHubQueryOptions.repositories(username));
  const repositories = dehydrate(queryClient);

  return <HydrationBoundary state={repositories}>{children}</HydrationBoundary>;
}
