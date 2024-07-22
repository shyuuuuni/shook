const QUERY_BASE_USER = `#graphql
query BaseUser($login: String!) {
  user(login: $login) {
    databaseId
    name
    login
    location
    createdAt
    avatarUrl
    websiteUrl
    twitterUsername
  }
}
`;

export default QUERY_BASE_USER;
