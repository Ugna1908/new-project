import { NextResponse } from 'next/server';

const specialists = [
  { id: '1', name: 'Dr. Adams' },
  { id: '2', name: 'Dr. Baker' }
];

export async function GET() {
  return NextResponse.json(specialists);
}
