/**
 * @description 사용자의 특정 repository 정보를 가져오는 쿼리
 */
const QUERY_BASE_REPOSITORY = `#graphql
query BaseRepository($login:String!, $repo: String!) {
  user(login: $login) {
    repository(name: $repo) {
      name
      createdAt
      diskUsage
      homepageUrl
      owner {
        login
      }
      isFork
      forkCount
      watchers {
        totalCount
      }
      stargazers {
        totalCount
      }
      releases {
        totalCount
      }
      deployments {
        totalCount
      }
      environments {
        totalCount
      }
      languages(first: 8) {
        edges {
          size
          node {
            color
            name
          }
        }
      }
      licenseInfo {
        name
        spdxId
      }
      issues_open: issues(states: OPEN) {
        totalCount
      }
      issues_closed: issues(states: CLOSED) {
        totalCount
      }
      pr_open: pullRequests(states: OPEN) {
        totalCount
      }
      pr_closed: pullRequests(states: CLOSED) {
        totalCount
      }
      pr_merged: pullRequests(states: MERGED) {
        totalCount
      }
    }
  }
}
`;

export default QUERY_BASE_REPOSITORY;
