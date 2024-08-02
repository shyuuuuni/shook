import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import {
  Metric,
  Topic,
} from '@/app/(profile)/profile/[username]/_types/favorite';
import { formatMetrics } from '@/app/api/stars/_libs/getAnalysisStarredMetrics';
import getStarredRepositoryMetrics from '@/app/api/stars/_libs/getStarredRepositoryMetrics';
import getStarredTopics from '@/app/api/stars/_libs/getStarredTopics';
import clovaStudioService from '@/backend/services/ClovaStudioService';
import { PROMPT_ANALYZE_USER_STARRED } from '@/configs/prompt';

export const dynamic = 'force-dynamic';

// @see https://github.com/vercel/next.js/discussions/48427
export async function GET(
  req: NextRequest,
  { params }: { params: { username: string } },
) {
  const jwt = await getToken({ req });
  const username = params.username;

  console.debug(`GET /api/(profile)/favorite/${username}`);
  console.debug('accessToken:', jwt?.accessToken);

  // TODO: 기존에 생성된 페이지가 있다면 DB에서 가져오기
  if (!jwt) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const encoder = new TextEncoder();
  const encode = (data: unknown) =>
    encoder.encode(`data: ${JSON.stringify(data)}\n\n`);

  const responseStream = new ReadableStream({
    async start(controller) {
      controller.enqueue(
        encode({
          type: 'system',
          progress: 'init',
          message: 'Generate Favorite Analysis Start',
        }),
      );
      controller.enqueue(
        encode({
          type: 'system',
          progress: 'metrics',
          message: 'Select Favorite Analysis Metrics Start',
        }),
      );
      const metricsPromises: [Promise<Topic[]>, Promise<Metric[]>] = [
        getStarredTopics(),
        getStarredRepositoryMetrics(),
      ];
      const [topics, repositories] = await Promise.all(metricsPromises);
      controller.enqueue(
        encode({
          type: 'system',
          progress: 'metrics',
          message: 'Select Favorite Analysis Metrics Complete',
        }),
      );

      controller.enqueue(
        encode({
          type: 'system',
          progress: 'analysis',
          message: 'Request Favorite Analysis Start',
        }),
      );
      const userPrompt = formatMetrics(topics, repositories);
      const response = await clovaStudioService.createChatCompletion({
        model: 'HCX-003',
        prompts: userPrompt,
        systemPrompts: [PROMPT_ANALYZE_USER_STARRED],
        maxTokens: 1024,
        temperature: 0.95,
      });
      controller.enqueue(
        encode({
          type: 'system',
          progress: 'analysis',
          message: 'Request Favorite Analysis Complete',
        }),
      );
      controller.enqueue(
        encode({
          type: 'data',
          progress: 'analysis',
          message: response?.result?.message?.content,
        }),
      );
      controller.enqueue(
        encode({
          type: 'system',
          progress: 'close',
          message: 'Generate Favorite Analysis Finish',
        }),
      );

      controller.close();
    },
  });

  return new NextResponse(responseStream, {
    headers: {
      'Content-Type': 'text/event-stream',
      Connection: 'keep-alive',
      'Cache-Control': 'no-cache, no-transform',
    },
  });
}
