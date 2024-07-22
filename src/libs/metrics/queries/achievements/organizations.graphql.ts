/**
 * @description organization의 GitHub 기록에서 첫번째 활동과 전체 활동량을 가져옵니다.
 * @see https://github.com/lowlighter/metrics/tree/master/source/plugins/achievements
 */
const QUERY_ACHIEVEMENTS_ORGANIZATIONS = `#graphql
query AchievementsOrganizations($login: String!) {
  organization(login: $login) {
    repositories(first: 1, privacy: PUBLIC, affiliations: OWNER, orderBy: {field: CREATED_AT, direction: ASC}) {
      nodes {
        createdAt
        nameWithOwner
      }
      totalCount
    }
    forks:repositories(first: 1, privacy: PUBLIC, isFork: true, orderBy: {field: CREATED_AT, direction: ASC}) {
      nodes {
        createdAt
        nameWithOwner
      }
      totalCount
    }
    popular:repositories(first:1, orderBy: {field: STARGAZERS, direction: DESC}) {
      nodes {
        stargazers {
          totalCount
        }
      }
    }
    projects(first: 1, orderBy: {field: CREATED_AT, direction: ASC}) {
      totalCount
    }
    packages(first: 1, orderBy: {direction: ASC, field: CREATED_AT}) {
      totalCount
    }
    membersWithRole {
      totalCount
    }
    sponsorshipsAsSponsor {
      totalCount
    }
  }
}`;

export default QUERY_ACHIEVEMENTS_ORGANIZATIONS;
