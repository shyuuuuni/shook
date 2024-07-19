import { QueryKey, UseQueryOptions } from '@tanstack/react-query';

export const clovaStudioQueryKeys = {
  achievement: (username: string): QueryKey => [
    'clovaStudio',
    'achievement',
    { username },
  ],
};

export const clovaStudioQueryOptions = {
  achievement: (
    username: string,
  ): UseQueryOptions<unknown, Error, unknown, QueryKey> => ({
    // TODO: 아래 쿼리 키 오류 수정
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: clovaStudioQueryKeys.achievement(username),
    queryFn: async () => {
      const apiHost = process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : 'http://localhost:3000';
      const response = await fetch(`${apiHost}/api/activities/achievement`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
        }),
      });
      const data = await response.json();

      console.log('server', data, data[0].result.message.content);

      const performances = data.map(
        // TODO: 타입 에러 수정
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (res: any) => res[0].result.message.content ?? 'null',
      );

      return performances;
    },
  }),
};
