import type { RestEndpointMethodTypes } from '@octokit/plugin-rest-endpoint-methods';

export type GitHubRepo =
  RestEndpointMethodTypes['repos']['listForUser']['response']['data'][0];
export type GitHubPullRequest =
  RestEndpointMethodTypes['pulls']['list']['response']['data'][0];
export type GitHubCommit =
  RestEndpointMethodTypes['repos']['listCommits']['response']['data'][0];
