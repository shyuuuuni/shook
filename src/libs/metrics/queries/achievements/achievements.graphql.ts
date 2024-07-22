/**
 * @description 사용자의 GitHub 기록에서 첫번째 활동과 전체 활동량을 가져옵니다.
 * @see https://github.com/lowlighter/metrics/tree/master/source/plugins/achievements
 */
const QUERY_ACHIEVEMENTS_DEFAULT = `#graphql
query AchievementsDefault($login: String!) {
  user(login: $login) {
    repositories(
      first: 1
      privacy: PUBLIC
      affiliations: OWNER
      orderBy: { field: CREATED_AT, direction: ASC }
    ) {
      nodes {
        createdAt
        nameWithOwner
      }
      totalCount
    }
    forks: repositories(
      first: 1
      privacy: PUBLIC
      isFork: true
      orderBy: { field: CREATED_AT, direction: ASC }
    ) {
      nodes {
        createdAt
        nameWithOwner
      }
      totalCount
    }
    popular: repositories(
      first: 1
      orderBy: { field: STARGAZERS, direction: DESC }
    ) {
      nodes {
        stargazers {
          totalCount
        }
      }
    }
    pullRequests(
      orderBy: { field: CREATED_AT, direction: ASC }
      first: 1
    ) {
      nodes {
        createdAt
        title
        repository {
          nameWithOwner
        }
      }
      totalCount
    }
    contributionsCollection {
      pullRequestReviewContributions(
        first: 1
        orderBy: { direction: ASC }
      ) {
        nodes {
          occurredAt
          pullRequest {
            title
            number
            repository {
              nameWithOwner
            }
          }
        }
        totalCount
      }
    }
    projects(first: 1, orderBy: { field: CREATED_AT, direction: ASC }) {
      totalCount
      #nodes { This requires additional scopes :/
      #  name
      #}
    }
    packages(first: 1, orderBy: { direction: ASC, field: CREATED_AT }) {
      totalCount
      #nodes { This requires additional scopes :/
      #  name
      #  packageType
      #  versions(first: 1, orderBy: {direction: ASC, field: CREATED_AT}) {
      #    nodes {
      #      id
      #    }
      #  }
      #}
    }
    organizations(first: 1) {
      #nodes {
      #  name
      #}
      totalCount
    }
    gists(first: 1, orderBy: { field: CREATED_AT, direction: ASC }) {
      nodes {
        createdAt
        name
      }
      totalCount
    }
    starredRepositories {
      totalCount
    }
    followers {
      totalCount
    }
    following {
      totalCount
    }
    bio
    status {
      message
    }
    sponsorshipsAsSponsor {
      totalCount
    }
    discussionsStarted: repositoryDiscussions {
      totalCount
    }
    discussionsComments: repositoryDiscussionComments {
      totalCount
    }
    discussionAnswers: repositoryDiscussionComments(onlyAnswers: true) {
      totalCount
    }
  }
}
`;

export default QUERY_ACHIEVEMENTS_DEFAULT;
