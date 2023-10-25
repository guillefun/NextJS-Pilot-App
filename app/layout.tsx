import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from './components/Navigation/Navigation'
import React from 'react'
import ScrollButton from './components/ScrollButton/ScrollButton'
import { font } from './font'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Posts page',
  description: 'Simple posts page build with NextJS framework',
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        
      </head>
      <body className={font.className}>
        <Navigation />
        <main>
          {children}
        </main>
        <ScrollButton />
      </body>
    </html>
  )
}
