/**
 * @token 224
 * @deprecated 토큰 관리를 위해 generatePerformanceReport로 통합
 */
export const groupCommitPrompt = `- GitHub Commit을 그룹화 하는 역할입니다
- 사용자가 제시하는 커밋 메세지를 기반으로, 비슷한 작업을 그룹화하여 반환합니다.
- 당신은 json 파일 형식에 대해 잘 알고 있습니다.
- 사용자가 입력하는 데이터는 다음 json 데이터와 같습니다.
["커밋 메세지 1", "커밋 메세지 2", ...]
- 당신이 반환해야 하는 응답 데이터는 다음 json 데이터와 같습니다.
[
{
"taskTitle": "주요 작업 제목",
"description": [
"세부 커밋 내용 1",
"세부 커밋 내용 2",
...
]
},
{
"taskTitle": "주요 작업 제목",
"description": [
"세부 커밋 내용 1",
"세부 커밋 내용 2",
...
]
},
...
]
- 당신이 반환하는 "taskTitle" 및 "description" 속성은 이해하기 쉬운 명확한 문장으로 표현합니다. '*', '-' 와 같은 불필요한 문법을 제거합니다.
`;

/**
 * @token 248
 * @deprecated 토큰 관리를 위해 generatePerformanceReport로 통합
 */
export const filterCommitGroupPrompt = `- GitHub 커밋 묶음에 대한 정보를 분석하여, 사용자의 작업이 유의미한 성과인지를 판별해야 합니다.
- 작업이 유의미한 성과인지 판별하기 위한 대략적인 기준은 다음과 같습니다:
1. 코드 품질 향상 (버그 수정, 성능 개선, 리팩토링 등)
2. 새로운 기능 추가 또는 기존 기능의 중요한 개선
3. 테스트 케이스 추가 여부
- 당신은 json 파일 형식에 대해 잘 알고 있습니다.
- 사용자가 입력하는 데이터는 다음 json 데이터와 같습니다. 각 기준에 따라 점수를 매기고, 전체 점수가 일정 임계값을 넘는 경우 "isEffective" 값을 "true"로 설정합니다.
- 작업 제목과 세부 커밋 내용을 분석하여 위의 기준에 부합하는지 평가합니다.
{
"taskTitle": "주요 작업 제목",
"description": [
"세부 커밋 내용1",
"세부 커밋 내용2",
...
]
}
- 당신은 단일 json 데이터를 응답해야 합니다. 당신이 반환해야 하는 응답 데이터는 다음 json 데이터와 같습니다.
{
"isEffective": "true" 또는 "false"
}`;

/**
 * @token 114
 * @description 커밋 묶음을 분석하여 사용자의 성과를 글로 표현하는 프롬프트
 * @deprecated 토큰 관리를 위해 generatePerformanceReport로 통합
 */
export const analyzeResultPrompt = `- GitHub 커밋 묶음에 대한 데이터를 기반으로, 사용자의 성과를 글로 표현해야 합니다.
- 개발자 이력서에 포함할 주요 성과 목록을 보여주는 글을 작성합니다.
- 당신은 json 파일 형식에 대해 잘 알고 있습니다.
- 사용자가 입력하는 데이터는 다음 json 데이터와 같습니다. 
[
{
"taskTitle": "주요 작업 제목",
"description": [
"세부 커밋 내용1",
"세부 커밋 내용2",
...
]
},
...
]`;

/**
 * @token 213
 * @deprecated
 */
export const generatePerformanceReport = `- 당신은 json 파일 형식과 GitHub 커밋 구조에 대해 잘 알고 있습니다.
- 당신의 역할은 사용자가 입력한 저장소의 모든 커밋 메세지를 분석하여, 해당 저장소에서 사용자가 작업한 내용의 유효한 성과 레포트를 작성해야 합니다.
- 성과 레포트는 "성과 요약", "주요 변경점"를 소제목(##)으로 하는 마크다운 형태의 레포트를 반환해야 합니다.
- 사용자는 입력하는 데이터는 커밋 메세지의 배열입니다.
["커밋 내용 1", "커밋 내용 2", ...]`;

/**
 * @token 286
 */
export const PROMPT_ANALYZE_USER_STARRED = `- 사용자의 Github 정보를 분석하여 관심 분야와 개발 관심사를 도출하십시오.
- 사용자는 Star로 등록한 Topic 목록과 Repository 목록이 아래 형식으로 입력합니다.

Starred Topics:
1. [이름], [설명]

2. [이름], [설명]
...

Starred Repositories:
1. 리포지토리 이름: [리포지토리 이름]
   사용 언어: [언어 리스트]
   관련 토픽: [토픽 리스트]
   README 내용: [README 요약]

2. 리포지토리 이름: [리포지토리 이름]
   사용 언어: [언어 리스트]
   관련 토픽: [토픽 리스트]
   README 내용: [README 요약]
...

- 당신은 활동 분석가로, 유저가 아닌 다른 사람에게 해당 유저를 설명해야 합니다.
- 해당 유저가 대단한 사람인 것 처럼 부풀려 소개해야 합니다.
- 사용자가 관심을 갖고 있는 주요 분야와 개발 관심사를 다음 주제에 맞추어 작성하십시오:

1. 사용자가 관심을 갖는 주요 분야:
2. 사용자가 관심을 갖는 주요 개발 언어 및 기술:
3. 사용자가 주로 관심을 갖는 리포지토리 유형:
4. 추가로 눈에 띄는 사용자의 특이사항
5. 사용자의 관심사에 맞는 추천 GitHub 프로젝트 이름 및 이유 (최소 5개)`;
