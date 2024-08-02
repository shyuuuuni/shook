import parse from 'node-html-parser';
import { Topic } from '@/app/(profile)/profile/[username]/_types/favorite';
import GitHubService from '@/backend/services/GitHubService';
import { getAccessToken } from '@/libs/next-auth';

const getStarredTopics = async () => {
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

export default getStarredTopics;
