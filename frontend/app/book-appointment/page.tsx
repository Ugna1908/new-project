'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

interface Specialist {
  id: string;
  name: string;
}

interface BookingResponse {
  id: string;
  sessionId: string;
}

export default function BookAppointmentPage() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [specialists, setSpecialists] = useState<Specialist[]>([]);
  const [selectedSpecialist, setSelectedSpecialist] = useState('');
  const [slots, setSlots] = useState<string[]>([]);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [user, setUser] = useState({ name: '', email: '' });
  const [bookingId, setBookingId] = useState('');
  const [status, setStatus] = useState('pending');

  useEffect(() => {
    fetch('/api/specialists').then(res => res.json()).then(setSpecialists);
  }, []);

  useEffect(() => {
    const id = searchParams.get('bookingId');
    if (id) {
      setBookingId(id);
    }
  }, [searchParams]);

  useEffect(() => {
    if (selectedSpecialist) {
      fetch(`/api/slots?specialistId=${selectedSpecialist}`)
        .then(res => res.json())
        .then(setSlots);
    }
  }, [selectedSpecialist]);

  useEffect(() => {
    if (!bookingId) return;
    const interval = setInterval(() => {
      fetch(`/api/bookings/${bookingId}`)
        .then(res => res.json())
        .then(data => {
          setStatus(data.status);
          if (data.status === 'confirmed') {
            clearInterval(interval);
          }
        });
    }, 2000);
    return () => clearInterval(interval);
  }, [bookingId]);

  const createBooking = async () => {
    const res = await fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        specialistId: selectedSpecialist,
        slot: selectedSlot,
        user
      })
    });
    const data: BookingResponse = await res.json();
    setBookingId(data.id);
    window.location.href = `https://checkout.stripe.com/pay/${data.sessionId}`;
  };

  if (bookingId) {
    return (
      <div>
        <h1>Booking Confirmation</h1>
        <p>Booking ID: {bookingId}</p>
        <p>Status: {status}</p>
      </div>
    );
  }

  return (
    <div>
      {step === 1 && (
        <div>
          <h1>Select Specialist</h1>
          <ul>
            {specialists.map(s => (
              <li key={s.id}>
                <button onClick={() => { setSelectedSpecialist(s.id); setStep(2); }}>
                  {s.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {step === 2 && (
        <div>
          <h1>Select Slot</h1>
          <ul>
            {slots.map(slot => (
              <li key={slot}>
                <button onClick={() => { setSelectedSlot(slot); setStep(3); }}>
                  {slot}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {step === 3 && (
        <div>
          <h1>Your Details</h1>
          <input
            placeholder="Name"
            value={user.name}
            onChange={e => setUser({ ...user, name: e.target.value })}
          />
          <input
            placeholder="Email"
            value={user.email}
            onChange={e => setUser({ ...user, email: e.target.value })}
          />
          <button onClick={createBooking} disabled={!user.name || !user.email}>
            Book and Pay
          </button>
        </div>
      )}
    </div>
  );
}
