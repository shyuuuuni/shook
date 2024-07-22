/**
 * @description 전체 GitHub 기록에서 Issue(PR 포함), Repository, User 수를 가져옵니다.
 * @see https://github.com/lowlighter/metrics/tree/master/source/plugins/achievements
 */
const QUERY_ACHIEVEMENTS_TOTAL = `#graphql
query AchievementsTotal {
  issues:search(query: "created:>1970", type: ISSUE) {
    count:issueCount
  }
  repositories:search(query: "created:>1970", type: REPOSITORY) {
    count:repositoryCount
  }
  users:search(query: "created:>1970", type: USER) {
    count:userCount
  }
}
`;

export default QUERY_ACHIEVEMENTS_TOTAL;
