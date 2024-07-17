import { NextRequest, NextResponse } from 'next/server';
import clovaStudioService from '@/backend/services/ClovaStudioService';
import { analyzeResultPrompt } from '@/configs/prompt';

const MAX_TOKEN = 2000;

export async function POST(req: NextRequest) {
  const data = await req.json();
  const commitGroupList = data.commitGroupList;

  const response = await clovaStudioService.createChatCompletion({
    model: 'HCX-003',
    systemPrompts: [analyzeResultPrompt],
    prompts: JSON.stringify(commitGroupList),
    maxTokens: MAX_TOKEN,
  });

  return NextResponse.json(response, { status: 200 });
}
