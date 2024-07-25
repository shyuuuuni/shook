import { NextResponse } from 'next/server';
import getStarredRepositoryMetrics from '../_libs/getStarredRepositoryMetrics';

export async function GET() {
  try {
    const metrics = await getStarredRepositoryMetrics();
    return NextResponse.json({ metrics }, { status: 200 });
  } catch (error) {
    console.debug('Error in GET /api/stars/repos', error);
    return NextResponse.json({ metrics: [], error }, { status: 500 });
  }
}
