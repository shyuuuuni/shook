import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

export const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_OAUTH_CLIENT_ID,
      clientSecret: process.env.GITHUB_OAUTH_SECRET,
    }),
  ],
});

export { handler as GET, handler as POST };
