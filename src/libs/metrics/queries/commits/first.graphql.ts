/**
 * @description 저장소의 첫 번째 커밋 정보를 가져옵니다.
 * @usage 해당 커밋의 ref를 사용하여 커밋 범위로 활용할 수 있습니다.
 * @see https://github.com/lowlighter/metrics/tree/master/source/plugins/contributors
 */
const QUERY_COMMIT_FIRST = `#graphql
query CommitFirst($owner: String!, $repo: String!, $expression: String!) {
  repository(owner: $owner, name: $repo) {
    object(expression: $expression) {
      ... on Commit {
        oid
        abbreviatedOid
        messageHeadline
        committedDate
      }
    }
  }
}
`;

export default QUERY_COMMIT_FIRST;
