/**
 * @description 사용자의 저장소 discussions에서 클릭한 카테고리 정보를 가져옵니다.
 */
const QUERY_DISCUSSIONS_CATEGORIES = `#graphql
query DiscussionsCategories($login: String!, $cursor: String) {
  user(login: $login) {
    repositoryDiscussions(
      first: 100
      orderBy: { field: CREATED_AT, direction: DESC }
      after: $cursor
    ) {
      edges {
        cursor
      }
      nodes {
        upvoteCount
        category {
          emoji
          name
        }
      }
    }
  }
}
`;

export default QUERY_DISCUSSIONS_CATEGORIES;
