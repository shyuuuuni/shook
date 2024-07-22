/**
 * @description 사용자의 discussions에 대한 통계 정보를 가져옵니다.
 */
const QUERY_DISCUSSIONS_STATISTICS = `#graphql
query DiscussionsStatistics($login: String!) {
  user(login: $login) {
    started: repositoryDiscussions {
      totalCount
    }
    comments: repositoryDiscussionComments {
      totalCount
    }
    answers: repositoryDiscussionComments(onlyAnswers: true) {
      totalCount
    }
  }
}
`;

export default QUERY_DISCUSSIONS_STATISTICS;
