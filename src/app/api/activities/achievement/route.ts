import { NextRequest, NextResponse } from 'next/server';
import clovaStudioService from '@/backend/services/ClovaStudioService';
import gitHubService from '@/backend/services/GitHubService';
import { generatePerformanceReport } from '@/configs/prompt';

/**
 * 요청에 포함된 username에 대한 GitHub 활동 기록을 조사하여
 * GitHub 내에 포함된 모든 성과 목록을 생성하고 반환합니다.
 */
export async function POST(req: NextRequest) {
  const data = await req.json();
  const username = data?.username;

  if (!username) {
    return NextResponse.json(
      { message: 'username is required' },
      { status: 400 },
    );
  }

  const repositories = await gitHubService.getRepositoryListByUser({
    username,
  });
  // WARN: 클로바 스튜디오에서 동시에 4~5개의 request 발생 시 429 에러 발생
  const a = repositories[0];
  const clovaStudioPromise = [a].map(async ({ name }) => {
    const commits = await gitHubService.getCommitListAll({
      owner: username,
      repo: name,
    });
    const commitMessages = commits.map((commit) => commit.commit.message);
    const performanceReport = await clovaStudioService.createChatCompletion({
      model: 'HCX-DASH-001',
      prompts: JSON.stringify(commitMessages),
      systemPrompts: [generatePerformanceReport],
      maxTokens: 1024,
    });

    return performanceReport;
  });
  const performances = await Promise.all(clovaStudioPromise);

  return NextResponse.json(performances, { status: 200 });
}
