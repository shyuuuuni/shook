import { NextResponse } from 'next/server';
import { sleep } from '@/libs/time';

export async function GET() {
  await sleep(1000 * 15);

  return NextResponse.json({ result: 'hello, world' }, { status: 200 });
}
