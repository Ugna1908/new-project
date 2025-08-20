export interface Booking {
  id: string;
  specialistId: string;
  slot: string;
  user: { name: string; email: string };
  status: 'pending' | 'confirmed';
  sessionId: string;
}

export const bookings = new Map<string, Booking>();
