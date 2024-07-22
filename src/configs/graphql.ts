import { graphql as octokitGraphql } from '@octokit/graphql';

export const graphql = octokitGraphql.defaults({
  headers: {
    authorization: `token ${process.env.GITHUB_AUTH_TOKEN}`,
  },
});
