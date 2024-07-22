/**
 * @description 사용자가 작성한 discussions 속 댓그 정보를 가져옵니다.
 */
const QUERY_DISCUSSIONS_COMMENTS = `#graphql
query DiscussionsComments($login: String!, $cursor: String) {
  user(login: $login) {
    repositoryDiscussionComments(first: 100, after: $cursor) {
      edges {
        cursor
      }
      nodes {
        upvoteCount
        url
      }
    }
  }
}
`;

export default QUERY_DISCUSSIONS_COMMENTS;
