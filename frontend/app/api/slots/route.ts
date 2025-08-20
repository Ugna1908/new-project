import { NextRequest, NextResponse } from 'next/server';

const slots: Record<string, string[]> = {
  '1': ['2024-01-01T10:00', '2024-01-01T11:00'],
  '2': ['2024-01-02T14:00', '2024-01-02T15:00']
};

export async function GET(req: NextRequest) {
  const specialistId = req.nextUrl.searchParams.get('specialistId') || '';
  return NextResponse.json(slots[specialistId] || []);
}
