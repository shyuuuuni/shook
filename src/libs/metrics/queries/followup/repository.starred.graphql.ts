const QUERY_FOLLOWUP_REPOSITORY_STARRED = `#graphql
query FollowupRepositoryStarred($pageSize: Int = 100, $cursor: String) {
  viewer {
    starredRepositories(first: $pageSize, after: $cursor) {
      edges {
        cursor
        starredAt
        node {
          id
          isInOrganization
          owner {
            id
            login
            ... on Organization {
              name
            }
          }
          name
          description
          repositoryTopics(first: 100) {
            edges {
              node {
                topic {
                  name
                }
              }
            }
          }
          languages(first: 3, orderBy: { field: SIZE, direction: DESC }) {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    }
  }
}
`;

export default QUERY_FOLLOWUP_REPOSITORY_STARRED;
