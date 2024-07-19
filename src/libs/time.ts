/**
 * ISO 8601 날짜 문자열을 YYYY. MM. DD 형태로 변환
 * @param isoData YYYY-MM-DDTHH:MM:SSZ 형태의 ISO 8601 날짜 문자열
 * @returns "YYYY. MM. DD" 형태의 날짜 문자열
 */
export const formatISODateToYYYYMMDD = (isoData: string) => {
  const date = new Date(isoData);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
};
// 주어진 ms 시간동안 대기합니다.
export const sleep = (sleepMs: number) =>
  new Promise((resolve) => setTimeout(resolve, sleepMs));
