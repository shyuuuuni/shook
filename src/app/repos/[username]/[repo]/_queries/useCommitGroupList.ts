import { QueryKey, useSuspenseQuery } from '@tanstack/react-query';
import { CommitGroup } from '@/types/clovaStudio';
import { commitGroupSchema } from '@/types/clovaStudio.schema';
import { GitHubCommit } from '@/types/github';

type UseCommitGroupListParams = {
  username: string;
  repo: string;
  commitList: GitHubCommit[];
};

export const getQueryKey = ({
  username,
  repo,
}: {
  username: string;
  repo: string;
}): QueryKey => {
  return ['commitGroupList', { username, repo }];
};

export const fetchCommitGroupList = async (
  commitList: GitHubCommit[],
): Promise<CommitGroup[]> => {
  const response = await fetch(
    'http://localhost:3000/api/ai/chat-completion/group',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        commitList: commitList.map((commit) => commit.commit.message),
      }),
    },
  );
  const body = await response.json();
  const data = commitGroupSchema.parse(body);

  return data;
};

const useCommitGroupList = ({
  username,
  repo,
  commitList,
}: UseCommitGroupListParams) => {
  return useSuspenseQuery<CommitGroup[], unknown, CommitGroup[], QueryKey>({
    // TODO: 쿼리키를 더 명확하게 정의할 필요가 있음
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: getQueryKey({ username, repo }),
    queryFn: () => fetchCommitGroupList(commitList),
    retry: 0,
  });
};

export default useCommitGroupList;
