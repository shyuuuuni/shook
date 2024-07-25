'use server';

import parse from 'node-html-parser';
import clovaStudioService from '@/backend/services/ClovaStudioService';
import GitHubService from '@/backend/services/GitHubService';
import { APP_FLAG } from '@/configs/env';
import { QUERY_FOLLOWUP_REPOSITORY_STARRED } from '@/libs/metrics/queries';
import { getAccessToken } from '@/libs/next-auth';
import { sleep } from '@/libs/time';
import { Metric, StarredRepositoryMetrics, Topic } from './_types/action';

export const fetchStarredRepositoryMetrics = async () => {
  let metrics: Metric[] = [];

  console.debug(`Start run() for ${APP_FLAG}`);

  // 1. 저장소 정보 불러오기
  console.debug('Start getStarredRepositoryMetrics()');
  metrics = await getStarredRepositoryMetrics();

  if (APP_FLAG === 'TEST') {
    // 랜덤화 후 5개만 남김
    metrics = metrics.sort(() => 0.5 - Math.random()).splice(0, 5);
  }

  // 2. README.md 요약하기
  for (const metric of metrics) {
    console.debug(`Start summarizeReadme(${metric.name})`);
    metric.readme = await summarizeReadme(metric.readme);

    // ClovaStudio 요청 제한 방지를 위해 5초 대기
    await sleep(1000 * 5);
  }

  return metrics;
};

export const fetchStarredTopics = async () => {
  console.debug('Start fetchStarredTopics()');

  // TODO: 아래 액세스 토큰을 불러오는 부분 공통 로직 처리하기
  const accessToken = await getAccessToken();
  const gitHubService = new GitHubService(accessToken);
  const res = await gitHubService.rest.users.getAuthenticated();
  const user = res.data.login;

  const starredTopics: Topic[] = [];

  for (let cursor = 1; cursor < 10; cursor++) {
    console.debug(
      `Start fetchStarredTopics for user(${user}), (cursor: ${cursor})`,
    );

    const response = await fetch(
      `https://github.com/stars/${user}/topics?direction=desc&page=${cursor}`,
    );
    const html = await response.text();
    const currentStarredTopics = parse(html)
      .querySelectorAll('ul.repo-list li')
      .map((li) => ({
        name: li.querySelector('.f3')?.innerText ?? '',
        description: li.querySelector('.f5')?.innerText ?? '',
        icon: li.querySelector('img')?.getAttribute('src'),
        url: li.querySelector('a')?.getAttribute('href'),
      }))
      .filter((starredTopic) => starredTopic.name);

    starredTopics.push(...currentStarredTopics);
    console.debug(
      `Add ${currentStarredTopics.length} items to starredTopics(current: ${starredTopics.length})`,
    );

    if (currentStarredTopics.length === 0) {
      break;
    }
  }

  console.debug(`End fetchStarredTopics(): ${starredTopics.length}`);

  return starredTopics;
};

export const analyzeMetrics = async (metrics: Metric[]) => {
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

export const getStarredRepositoryMetrics = async () => {
  console.debug('Start getStarredRepositoryMetrics()');

  const accessToken = await getAccessToken();
  const gitHubService = new GitHubService(accessToken);
  const starredRepositories =
    await gitHubService.graphql<StarredRepositoryMetrics>(
      QUERY_FOLLOWUP_REPOSITORY_STARRED,
    );

  // resolver
  const metrics: Metric[] = await Promise.all(
    starredRepositories.viewer.starredRepositories.edges.map(async (edge) => ({
      id: edge.node.id,
      starredAt: edge.starredAt,
      name: edge.node.name,
      description: edge.node.description,
      topics: edge.node.repositoryTopics.edges.map(
        (topic) => topic.node.topic.name,
      ),
      languages: edge.node.languages.edges.map(
        (language) => language.node.name,
      ),
      owner: edge.node.owner.login,
      organizationName: edge.node.owner.name,
      isInOrganization: edge.node.isInOrganization,
      readme: await getReadmeText({
        owner: edge.node.owner.login,
        repo: edge.node.name,
      }),
    })),
  );

  console.debug(`End getStarredRepositoryMetrics(): ${metrics.length}`);

  return metrics;
};

export const getReadmeText = async ({
  owner,
  repo,
}: {
  owner: string;
  repo: string;
}) => {
  console.debug(`Start getReadmeText({ owner: ${owner}, repo: ${repo} })`);

  const accessToken = await getAccessToken();
  const gitHubService = new GitHubService(accessToken);
  const readme = await gitHubService.rest.repos.getReadme({
    owner,
    repo,
    mediaType: { format: 'html' },
  });

  /**
   * 마크다운 텍스트를 그대로 사용할 경우, HTML 태그나 마크다운 문법이 포함되어 있어
   * 토큰이 과도하게 사용되기 때문에, 텍스트만 추출하여 사용하며,
   * 단순 공백 등을 제거하여 토큰을 최적화한다.
   */
  const html = parse(String(readme.data));
  html.querySelectorAll('code').forEach((code) => code.remove());

  const textContent = html.textContent
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0 && line !== '\n')
    .join('\n');

  console.debug(
    `End getReadmeText({ owner: ${owner}, repo: ${repo} }): size = ${textContent.length}`,
  );

  return textContent;
};

export const summarizeReadme = async (readme: string): Promise<string> => {
  if (readme.length < 10) {
    console.debug(`Skip summarizeReadme(): ${readme.length}`);
    return readme;
  }
  if (readme.length > 35000) {
    console.debug(`Skip summarizeReadme Text too long: ${readme.length}`);
    return summarizeReadme(readme.slice(0, 35000 - 100));
  }

  console.debug(`Start summarizeReadme()`);

  const response = await clovaStudioService.getSummarization({
    texts: [readme],
    autoSentenceSplitter: true,
  });
  const summarizedReadme = response.result.text;

  console.debug(`End summarizeReadme() size: ${summarizedReadme.length}`);

  return summarizedReadme;
};
