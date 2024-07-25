import { Metric } from '@/app/(authenticated)/dashboard/starred/_types/action';
import clovaStudioService from '@/backend/services/ClovaStudioService';
import { sleep } from '@/libs/time';

const getAnalysisStarredMetrics = async (metrics: Metric[]) => {
  // 3. CLOVA X로 저장소 분석하기
  for await (const metric of metrics) {
    console.debug(`Start analyzeRepository(${metric.name})`);
    const createChatCompletion = () =>
      clovaStudioService.createChatCompletion({
        model: 'HCX-003',
        prompts: JSON.stringify(metric),
        systemPrompts: [
          '아래는 레포지토리의 정보야. 해당 정보를 분석하고 키워드 추출 및 요약을 해봐',
          '키워드는 최대 10개, 요약은 최대 3문장으로 줄여줘.',
        ],
        maxTokens: 400,
      });
    let result = null,
      retry = 0;

    while (result === null && retry < 3) {
      console.debug(`While Retry ${retry}...`);
      retry += 1;
      const completions = await createChatCompletion();
      console.debug(`End createChatCompletion(${metric.name})`, completions);
      console.debug(`Status: ${completions?.status?.message}`);

      if (completions?.status?.code === '20000') {
        result = completions;
        break;
      } else if (completions?.status?.code === '42901') {
        console.debug('Rate limit exceeded');
        // 분당 요청 제한 초과를 방지
        await sleep(1000 * 60);
        continue;
      }
    }

    const success = result !== null;
    console.debug(
      `End analyzeRepository(${metric.name}) ${success ? 'success' : 'failed'} in ${retry} retries`,
    );

    // 요청 제한 방지를 위해 10초 대기
    await sleep(1000 * 10);
  }

  return '';
};

export default getAnalysisStarredMetrics;
