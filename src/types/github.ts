import type { RestEndpointMethodTypes } from '@octokit/plugin-rest-endpoint-methods';

export type GitHubUser =
  RestEndpointMethodTypes['users']['getByUsername']['response']['data'];
export type GitHubRepository =
  RestEndpointMethodTypes['repos']['listForAuthenticatedUser']['response']['data'][0];
export type GitHubPullRequest =
  RestEndpointMethodTypes['pulls']['list']['response']['data'][0];
export type GitHubCommit =
  RestEndpointMethodTypes['repos']['listCommits']['response']['data'][0];
