import '../styles/globals.css'

export const metadata = {
  title: 'CPP Clinic',
  description: 'Mental health clinic',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
