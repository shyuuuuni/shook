import { NextRequest, NextResponse } from 'next/server';
import clovaStudioService from '@/backend/services/ClovaStudioService';
import { filterCommitGroupPrompt } from '@/configs/prompt';

const MAX_TOKEN = 2000;

export async function POST(req: NextRequest) {
  const data = await req.json();
  const commitGroup = data.commitGroup;

  const response = await clovaStudioService.createChatCompletion({
    model: 'HCX-003',
    systemPrompts: [filterCommitGroupPrompt],
    prompts: JSON.stringify(commitGroup),
    maxTokens: MAX_TOKEN,
  });

  return NextResponse.json(response, { status: 200 });
}
