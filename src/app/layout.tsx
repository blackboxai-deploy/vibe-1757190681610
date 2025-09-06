import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import LegalDisclaimer from '@/components/LegalDisclaimer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gooblagoon Lawsuit | Waterpark Negligence Case',
  description: 'Legal action against The Gooblagoon waterpark for safety violations, fatalities, and environmental negligence. Contact our legal team for case information.',
  keywords: 'Gooblagoon lawsuit, waterpark accident, wrongful death, negligence, safety violation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-900 text-white min-h-screen`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <LegalDisclaimer />
      </body>
    </html>
  )
}