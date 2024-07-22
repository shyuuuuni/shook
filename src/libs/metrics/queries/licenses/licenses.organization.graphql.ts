const QUERY_LICENSES_ORGANIZATION = `#graphql
query LicensesOrganizationRepository($orgs: String!, $repo: String!) {
  organization(login: $orgs) {
    repository(name: $repo) {
      licenseInfo {
        spdxId
        name
        nickname
        key
      }
      url
      databaseId
    }
  }
}
`;

export default QUERY_LICENSES_ORGANIZATION;
