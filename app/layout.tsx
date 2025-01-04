import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Notification from '@/components/Notification'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Puskesmas eHealth',
  description: 'Sistem Pendaftaran Online Layanan Kesehatan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Notification />
        {children}
      </body>
    </html>
  )
}

