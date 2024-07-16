import { NextRequest, NextResponse } from 'next/server';
import clovaStudioService from '@/backend/services/ClovaStudioService';
import { groupCommitPrompt } from '@/configs/prompt';

const MAX_TOKEN = 2000;

export async function POST(req: NextRequest) {
  const data = await req.json();
  const commitList = data.commitList;

  const response = await clovaStudioService.createChatCompletion({
    model: 'HCX-003',
    systemPrompts: [groupCommitPrompt],
    prompts: JSON.stringify(commitList),
    maxTokens: MAX_TOKEN,
  });

  return NextResponse.json(response, { status: 200 });
}
