import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Navigation from '@/components/Navigation'

const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'Rhazel Jay Gumacal — Full-Stack Developer Portfolio',
  description: 'Portfolio of Rhazel Jay Gumacal, a full-stack web developer specializing in Next.js, React, TypeScript, and modern web technologies. Explore projects, skills, and get in touch.',
  openGraph: {
    title: 'Rhazel Jay Gumacal — Full-Stack Developer',
    description: 'Full-stack web developer specializing in Next.js, React, TypeScript, and modern web technologies.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Navbar />
        {children}
        <Navigation />
      </body>
    </html>
  )
}
