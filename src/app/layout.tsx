import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

import { Footer } from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'

import './globals.css'

import { cn } from '@/utils'
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const fontHeading = localFont({
  src: '../../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-heading',
})

export const metadata: Metadata = {
  title: 'ITX Consulting | Andrzej Sienkiewicz',
  description: 'IT Services & Consulting',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-3LLJYHY35E" />
      <body className={cn(inter.className, fontHeading.variable)}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
