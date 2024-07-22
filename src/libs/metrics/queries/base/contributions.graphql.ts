/**
 * @description from부터 to 사이의 특징 기여 정보 field를 가져오는 쿼리
 * @example 해당 기간에 포함된 이슈, PR 정보 하나씩 가져오기
 * @see https://docs.github.com/en/graphql/reference/objects#contributionscollection
 * @see https://github.com/lowlighter/metrics/blob/master/source/plugins/base/queries/contributions.graphql
 */
const QUERY_BASE_CONTRIBUTIONS = `#graphql
query BaseContributions($login: String!, $from: DateTime!, $to: DateTime!, $organizationId: ID) {
  user(login: $login) {
    contributionsCollection(from: $from, to: $to, organizationID: $organizationId) {
      issueContributions(first: 1) {
        edges {
          node {
            issue {
              title
            }
          }
        }
      }
      pullRequestContributions(first: 1) {
        edges {
          node{
            pullRequest	{
              title
            }
          }
        }
      }
    }
  }
}
`;

export default QUERY_BASE_CONTRIBUTIONS;
