import { NextResponse } from 'next/server';
import getStarredTopics from '../_libs/getStarredTopics';

export async function GET() {
  try {
    const topics = await getStarredTopics();
    return NextResponse.json({ topics }, { status: 200 });
  } catch (error) {
    console.debug('Error in GET /api/stars/topics', error);
    return NextResponse.json({ metrics: [], error }, { status: 500 });
  }
}
