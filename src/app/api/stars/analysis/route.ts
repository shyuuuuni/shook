import { NextRequest, NextResponse } from 'next/server';
import {
  Metric,
  Topic,
} from '@/app/(authenticated)/dashboard/starred/_types/action';
import clovaStudioService from '@/backend/services/ClovaStudioService';
import { PROMPT_ANALYZE_USER_STARRED } from '@/configs/prompt';
import { formatMetrics } from '../_libs/getAnalysisStarredMetrics';

export async function POST(req: NextRequest) {
  console.debug('GET /api/stars/analysis');

  const body = await req.json();
  const topics: Topic[] = body.topics;
  const metrics: Metric[] = body.metrics;
  const userPrompt = formatMetrics(topics, metrics);

  try {
    console.debug('Create chat completion size:', userPrompt.length);
    const result = await clovaStudioService.createChatCompletion({
      model: 'HCX-003',
      prompts: userPrompt,
      systemPrompts: [PROMPT_ANALYZE_USER_STARRED],
      maxTokens: 1024,
      // streaming: true,
    });

    return NextResponse.json({ result }, { status: 200 });

    // return new NextResponse(readableStream as ReadableStream<Uint8Array>, {
    //   headers: {
    //     'Content-Type': 'text/event-stream',
    //     'Cache-Control': 'no-cache',
    //     'Transfer-Encoding': 'chunked',
    //     Connection: 'keep-alive',
    //   },
    // });
  } catch (error) {
    console.debug('Error in POST /api/stars/analysis', error);
    return NextResponse.json({ result: 0 }, { status: 500 });
  }
}
