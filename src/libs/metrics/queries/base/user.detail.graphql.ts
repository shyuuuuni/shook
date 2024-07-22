/**
 * @description 사용자의 상세 정보를 가져오는 쿼리
 */
const QUERY_BASE_USER_DETAIL = `#graphql
query BaseUserX(
  $login: String!
  $calendar_from: DateTime!
  $calendar_to: DateTime!
  $affiliations: [RepositoryAffiliation]
) {
  user(login: $login) {
    packages {
      totalCount
    }
    starredRepositories {
      totalCount
    }
    watching {
      totalCount
    }
    sponsorshipsAsSponsor {
      totalCount
    }
    sponsorshipsAsMaintainer {
      totalCount
    }
    followers {
      totalCount
    }
    following {
      totalCount
    }
    issueComments {
      totalCount
    }
    organizations {
      totalCount
    }
    repositoriesContributedTo(includeUserRepositories: true) {
      totalCount
    }
    repositories(last: 0, affiliations: $affiliations) {
      totalCount
      totalDiskUsage
    }
    contributionsCollection {
      totalRepositoriesWithContributedCommits
      totalCommitContributions
      restrictedContributionsCount
      totalIssueContributions
      totalPullRequestContributions
      totalPullRequestReviewContributions
    }
    calendar: contributionsCollection(from: $calendar_from, to: $calendar_to) {
      contributionCalendar {
        weeks {
          contributionDays {
            color
          }
        }
      }
    }
  }
}
`;

export default QUERY_BASE_USER_DETAIL;
