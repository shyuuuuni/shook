/**
 * 배열을 조건 만족 여부에 따라 두 개의 배열로 분리합니다.
 */
export const divide = <T>(
  array: T[],
  predicate: (element: T) => unknown,
): [T[], T[]] =>
  array.reduce<[T[], T[]]>(
    (_result, value) => {
      if (predicate(value)) {
        _result[0].push(value);
      } else {
        _result[1].push(value);
      }

      return _result;
    },
    [[], []],
  );
