import { NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'crypto';
import { bookings, Booking } from './data';

export async function POST(req: NextRequest) {
  const { specialistId, slot, user } = await req.json();
  const id = randomUUID();
  const sessionId = randomUUID();
  const booking: Booking = { id, specialistId, slot, user, status: 'pending', sessionId };
  bookings.set(id, booking);
  return NextResponse.json({ id, sessionId });
}
