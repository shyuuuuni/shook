/**
 * @description organization 내에서 요청자의 사용자 정보를 가져오는 쿼리
 * @see https://github.com/lowlighter/metrics/blob/master/source/plugins/base/queries/organization.x.graphql
 */
const QUERY_BASE_ORGANIZATION_DETAIL = `#graphql
query BaseOrganizationUser($login: String!, $affiliations: [RepositoryAffiliation]) {
  organization(login: $login) {
    membersWithRole {
      totalCount
    }
    repositories(last: 0, affiliations: $affiliations) {
      totalCount
      totalDiskUsage
    }
  }
}
`;

export default QUERY_BASE_ORGANIZATION_DETAIL;
