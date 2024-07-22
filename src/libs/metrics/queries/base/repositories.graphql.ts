/**
 * @description 사용자의 저장소 정보를 repository_count개 가져오는 쿼리
 */
const QUERY_BASE_REPOSITORIES = `#graphql
query BaseRepositories($login: String!, $repository_count: Int!) {
  user(login: $login) {
    repositories(
      first: $repository_count
      orderBy: { field: UPDATED_AT, direction: DESC }
    ) {
      edges {
        cursor
      }
      nodes {
        updatedAt
        name
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
}
`;

export default QUERY_BASE_REPOSITORIES;
