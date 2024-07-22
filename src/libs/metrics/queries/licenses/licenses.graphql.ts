/**
 * @description GitHub에서 제공하는 라이선스 목록을 가져옵니다.
 */
const QUERY_LICENSES_DEFAULT = `#graphql
query LicensesDefault {
  licenses {
    spdxId
    name
    nickname
    key
    limitations {
      key
      label
    }
    conditions {
      key
      label
    }
    permissions {
      key
      label
    }
  }
}
`;

export default QUERY_LICENSES_DEFAULT;
