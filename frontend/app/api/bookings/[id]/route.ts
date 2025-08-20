import { NextRequest, NextResponse } from 'next/server';
import { bookings } from '../data';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const booking = bookings.get(params.id);
  if (!booking) {
    return NextResponse.json({ error: 'not found' }, { status: 404 });
  }
  return NextResponse.json(booking);
}
