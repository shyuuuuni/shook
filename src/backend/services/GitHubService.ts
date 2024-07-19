import type { RestEndpointMethodTypes } from '@octokit/plugin-rest-endpoint-methods';
import { Octokit } from 'octokit';
import {
  GitHubCommit,
  GitHubPullRequest,
  GitHubRepository,
  GitHubUser,
} from '@/types/github';

class GitHubService {
  private octokit: Octokit;

  constructor() {
    this.octokit = new Octokit({
      auth: process.env.GITHUB_AUTH_TOKEN,
    });
  }

  async getUserByUsername({
    username,
    ...options
  }: RestEndpointMethodTypes['users']['getByUsername']['parameters']): Promise<GitHubUser> {
    const response = await this.octokit.rest.users.getByUsername({
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
    const response = await this.octokit.rest.repos.listForUser({
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
    const response = await this.octokit.rest.pulls.list({
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
    const commitList = await this.octokit.paginate(
      this.octokit.rest.repos.listCommits,
      {
        owner,
        repo,
        per_page: 100,
        ...options,
      },
      (response) => response.data,
    );

    return commitList;
  }
}

const gitHubService = new GitHubService();

export default gitHubService;
