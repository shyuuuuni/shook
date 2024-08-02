import { getServerSession, type AuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_OAUTH_CLIENT_ID,
      clientSecret: process.env.GITHUB_OAUTH_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      // server-side only
      if (account && account.access_token) {
        token.accessToken = account.access_token;
      }
      if (profile) {
        token.username = profile.login;
      }

      return token;
    },
    async session({ session, token }) {
      //client-side and server-side
      session.user.username = token.username;

      return session;
    },
  },
};

export const auth = () => getServerSession(authOptions);
