/**
 * ISO 8601 날짜 문자열을 YYYY. MM. DD 형태로 변환
 * @param isoData YYYY-MM-DDTHH:MM:SSZ 형태의 ISO 8601 날짜 문자열
 * @returns "YYYY. MM. DD" 형태의 날짜 문자열
 */
export const formatISODateToYYYYMMDD = (isoData: string) => {
  const date = new Date(isoData);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
};

/**
 * ms를 초단위로 변환
 * @param ms 밀리초
 * @returns 초
 */
export const msToSeconds = (ms: number) => Math.floor(ms / 1000);

/**
 * ms초동안 대기
 * @param ms 대기할 밀리초
 */
export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
