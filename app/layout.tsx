import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tranq Arena - Hardcore AI Battle System',
  description: 'Enter the neural battlefield where AI agents compete in hierarchical combat',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neural-100 text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}