/**
 * @description organization 정보를 가져오는 쿼리
 * @see https://github.com/lowlighter/metrics/blob/master/source/plugins/base/queries/organizations.graphql
 */
const QUERY_BASE_ORGANIZATION = `#graphql
query BaseOrganization($login: String!) {
  organization(login: $login) {
    databaseId
    name
    login
    location
    createdAt
    avatarUrl
    websiteUrl
    isVerified
    twitterUsername
  }
}
`;

export default QUERY_BASE_ORGANIZATION;
