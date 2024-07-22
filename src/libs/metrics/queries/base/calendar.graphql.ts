/**
 * @description from부터 to 사이의 GitHub 캘린더 정보를 가져오는 쿼리
 * @see https://github.com/lowlighter/metrics/blob/master/source/plugins/base/queries/calendar.graphql
 * @throws from과 to는 ISO 문자열이고, 1년 이상 차이가 나서는 안됩니다.
 */
const QUERY_BASE_CALENDAR = `#graphql
query BaseCalendar($login: String!, $from: DateTime!, $to: DateTime!) {
  user(login: $login) {
    calendar: contributionsCollection(from: $from, to: $to) {
      contributionCalendar {
        weeks {
          contributionDays {
            color
            contributionCount
            contributionLevel
            date
          }
        }
      }
    }
  }
}
`;

export default QUERY_BASE_CALENDAR;
