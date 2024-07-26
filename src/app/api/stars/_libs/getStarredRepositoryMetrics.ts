import parse from 'node-html-parser';
import {
  Metric,
  StarredRepositoryMetrics,
} from '@/app/(authenticated)/dashboard/starred/_types/action';
import clovaStudioService from '@/backend/services/ClovaStudioService';
import GitHubService from '@/backend/services/GitHubService';
import { QUERY_FOLLOWUP_REPOSITORY_STARRED } from '@/libs/metrics/queries';
import { getAccessToken } from '@/libs/next-auth';
import { sleep } from '@/libs/time';

const getStarredRepositoryMetrics = async () => {
  let metrics: Metric[] = [];

  console.debug(`Start run getStarredRepositoryMetrics()`);

  // 1. 저장소 정보 불러오기
  console.debug('Start getStarredRepositoryMetrics()');
  metrics = await getStarredRepositories();

  // 2. README.md 요약하기
  for (const metric of metrics) {
    console.debug(`Start summarizeReadme(${metric.name})`);
    metric.readme = await summarizeReadme(metric.readme);

    // ClovaStudio 요청 제한 방지를 위해 1초 대기
    await sleep(1000);
  }

  return metrics;
};

export const getStarredRepositories = async () => {
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
  html.querySelectorAll('div.highlight').forEach((code) => code.remove());

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

    // 최대 글자수(35000자) 제한 고려
    return summarizeReadme(readme.slice(0, 35000 - 100));
  }

  console.debug(`Start summarizeReadme()`);

  try {
    const response = await clovaStudioService.getSummarization({
      texts: [readme],
      autoSentenceSplitter: true,
    });
    const summarizedReadme = response.result.text;

    console.debug(`End summarizeReadme() size: ${summarizedReadme.length}`);

    return summarizedReadme;
  } catch (e) {
    console.error(`Failed summarizeReadme()`, e);
    return '';
  }
};

export default getStarredRepositoryMetrics;
