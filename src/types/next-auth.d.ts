import { DefaultSession } from 'next-auth';
import { DefaultJWT } from 'next-auth/jwt';

type AccessToken = string | null;

declare module 'next-auth' {
  interface Session extends DefaultSession {
    accessToken?: AccessToken;
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    accessToken?: AccessToken;
  }
}
