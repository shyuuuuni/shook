const QUERY_LICENSES_USER = `#graphql
query LicensesUserRepository($login: String!, $repo: String!) {
  user(login: $login) {
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

export default QUERY_LICENSES_USER;
