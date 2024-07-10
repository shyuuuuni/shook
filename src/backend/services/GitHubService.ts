import type { RestEndpointMethodTypes } from '@octokit/plugin-rest-endpoint-methods';
import { Octokit } from 'octokit';
import { GitHubCommit, GitHubPullRequest, GitHubRepo } from '@/types/github';

class GitHubService {
  octokit: Octokit;

  constructor() {
    this.octokit = new Octokit({});
  }

  async getRepoListForUser({
    username,
    ...options
  }: RestEndpointMethodTypes['repos']['listForUser']['parameters']): Promise<
    GitHubRepo[]
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

  async getCommitList({
    owner,
    repo,
    ...options
  }: RestEndpointMethodTypes['repos']['listCommits']['parameters']): Promise<
    GitHubCommit[]
  > {
    const response = await this.octokit.rest.repos.listCommits({
      owner,
      repo,
      ...options,
    });
    const commitList = response.data;

    return commitList;
  }
}

const gitHubService = new GitHubService();

export default gitHubService;