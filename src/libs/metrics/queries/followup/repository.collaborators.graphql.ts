/**
 * @description 저장소의 collaborator 정보를 가져옵니다.
 */
const QUERY_FOLLOWUP_REPOSITORY_COLLABORATORS = `#graphql
query FollowupRepositoryCollaborators($owner: String!, $repo: String!) {
  repository(owner: $owner, name: $repo) {
    collaborators {
      nodes {
        login
      }
    }
  }
}
`;

export default QUERY_FOLLOWUP_REPOSITORY_COLLABORATORS;
