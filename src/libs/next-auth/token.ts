import { headers, cookies } from 'next/headers';
import { getToken } from 'next-auth/jwt';

export const getAccessToken = async (): Promise<string> => {
  'use server';

  const token = await getJwtToken();

  if (token === null) {
    throw new Error('No access token Error');
  }

  return token.accessToken;
};

/**
 * NextAuth 라이브러리로 접속중인 유저의 JWT 토큰 복호화 한 값을 가져옵니다.
 * JWT 토큰은 쿠키에 담긴 값으로, 복호화 된 값은 서버에서만 사용 가능합니다.
 * @returns JWT 토큰
 */
export const getJwtToken = async () => {
  'use server';

  const token = await getToken({
    // @see https://github.com/nextauthjs/next-auth/issues/7913
    // @ts-expect-error - 서버 컴포넌트에서 Request 객체를 직접 접근할 수 없어 임시 사용
    req: {
      headers: Object.fromEntries(headers()),
      cookies: Object.fromEntries(
        cookies()
          .getAll()
          .map((c) => [c.name, c.value]),
      ),
    },
  });

  return token;
};
