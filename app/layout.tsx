import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next';
import './globals.css'

export const metadata: Metadata = {
  title: 'APDesing',
  description: 'Profesionalne web development i dizajn usluge prilagođene vašem poslovanju. Izradim moderne, responzivne i optimizirane web stranice koje pomažu vašem brendu rasti.',
  generator: 'Next.js',
    icons: {
    icon: "/favicon.ico",
  },
    robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
export const viewport = {
  width: "device-width",
  initialScale: 1,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hr">
      <body suppressHydrationWarning>{children} <Analytics /></body>
    </html>
  )
}
