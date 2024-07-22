/**
 * @description 사용자의 기록보다 높은 수치의 저장소와 사용자 수를 가져옵니다.
 * @see https://github.com/lowlighter/metrics/tree/master/source/plugins/achievements
 * 입력 쿼리 예시
 * - stars:>$stars
 * - followers:>$followers
 * - forks:>$forks
 * - repos:>$created (생성한 저장소 개수)
 */
const QUERY_ACHIEVEMENTS_RANKING = `#graphql
query AchievementsRanking(
  $search_repo_stars_query: String!,
  $search_user_followers_query: String!,
  $search_repo_forks_query: String!,
  $search_user_created_query: String!
) {
  repo_rank:search(query: $search_repo_stars_query, type: REPOSITORY, first: 0) {
    repositoryCount
  }
  user_rank:search(query: $search_user_followers_query, type: USER, first: 0) {
    userCount
  }
  forks_rank:search(query: $search_repo_forks_query, type: REPOSITORY, first: 0) {
    repositoryCount
  }
  created_rank:search(query: $search_user_created_query, type: USER, first: 0) {
    userCount
  }
}
`;

export default QUERY_ACHIEVEMENTS_RANKING;
