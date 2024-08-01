import { DefaultSession, Profile as DefaultProfile } from 'next-auth';
import { DefaultJWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      name: string | null;
      email: string;
      image: string;
      username: string;
    };
  }
  interface Profile extends DefaultProfile {
    login: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    accessToken: string;
    username: string;
  }
}
