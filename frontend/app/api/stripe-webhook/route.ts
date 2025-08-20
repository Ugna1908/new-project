import { NextRequest, NextResponse } from 'next/server';
import { bookings } from '../bookings/data';

export async function POST(req: NextRequest) {
  const event = await req.json();
  const bookingId = event.data?.object?.metadata?.bookingId;
  if (bookingId && bookings.has(bookingId)) {
    const booking = bookings.get(bookingId)!;
    booking.status = 'confirmed';
    bookings.set(bookingId, booking);
  }
  return NextResponse.json({ received: true });
}
