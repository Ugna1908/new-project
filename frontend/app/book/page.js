'use client'
import { useState } from 'react'

const steps = ['type', 'specialist', 'slot', 'details', 'payment', 'done']

export default function BookPage() {
  const [step, setStep] = useState(0)
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Book Appointment</h1>
      <p>Step {step + 1}: {steps[step]}</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white" onClick={() => setStep(s => Math.min(s+1, steps.length-1))}>
        Next
      </button>
    </main>
  )
}
