import { graphql as octokitGraphql } from '@octokit/graphql';
import { Octokit } from 'octokit';

export const rest = new Octokit({
  auth: process.env.GITHUB_AUTH_TOKEN,
});

export const graphql = octokitGraphql.defaults({
  headers: {
    authorization: `token ${process.env.GITHUB_AUTH_TOKEN}`,
  },
});
