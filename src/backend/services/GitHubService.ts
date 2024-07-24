import type { RestEndpointMethodTypes } from '@octokit/plugin-rest-endpoint-methods';
import { graphql } from '@octokit/graphql';
import { graphql as Graphql } from '@octokit/graphql/types';
import { Octokit } from 'octokit';
import {
  GitHubCommit,
  GitHubPullRequest,
  GitHubRepository,
  GitHubUser,
} from '@/types/github';

class GitHubService {
  public rest: Octokit['rest'];
  public graphql: Graphql;

  constructor(gitHubToken: string) {
    this.rest = new Octokit({ auth: gitHubToken }).rest;
    this.graphql = graphql.defaults({
      headers: {
        authorization: `token ${gitHubToken}`,
      },
    });
  }

  // rest
  async getRateLimit(): Promise<
    RestEndpointMethodTypes['rateLimit']['get']['response']['data']['resources']
  > {
    const response = await this.rest.rateLimit.get();
    const rateLimit = response.data.resources;

    return rateLimit;
  }

  async getUserByUsername({
    username,
    ...options
  }: RestEndpointMethodTypes['users']['getByUsername']['parameters']): Promise<GitHubUser> {
    const response = await this.rest.users.getByUsername({
      username,
      ...options,
    });
    const user = response.data;

    return user;
  }

  async getRepositoryListByUser({
    username,
    ...options
  }: RestEndpointMethodTypes['repos']['listForUser']['parameters']): Promise<
    GitHubRepository[]
  > {
    const response = await this.rest.repos.listForUser({
      username,
      ...options,
    });
    const repoList = response.data;

    return repoList;
  }

  async getPullRequestList({
    owner,
    repo,
    state = 'all', // 설정하지 않을 경우 'open' 값 사용
    ...options
  }: RestEndpointMethodTypes['pulls']['list']['parameters']): Promise<
    GitHubPullRequest[]
  > {
    const response = await this.rest.pulls.list({
      owner,
      repo,
      state,
      ...options,
    });
    const pullRequestList = response.data;

    return pullRequestList;
  }

  async getCommitListAll({
    owner,
    repo,
    ...options
  }: RestEndpointMethodTypes['repos']['listCommits']['parameters']): Promise<
    GitHubCommit[]
  > {
    const response = await this.rest.repos.listCommits({
      owner,
      repo,
      ...options,
    });
    const commitList = response.data;

    return commitList;
  }
}

export default GitHubService;
