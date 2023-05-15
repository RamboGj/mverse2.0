'use client'

import React from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import { AnimationsContextProvider } from '@/contexts/AnimationsContext'
import { CustomCursor } from '@/components/NextApp/CustomCursor'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Mverse</title>
        <link rel="stylesheet" href="https://use.typekit.net/iep2wol.css" />
      </head>

      <AnimationsContextProvider>
        <body
          className={`${inter.className} max-w-screen w-full h-screen fixed top-0 left-0 overflow-hidden bg-[#0F0F0F] backdrop-blur-lg`}
        >
          <CustomCursor />
          {children}
        </body>
      </AnimationsContextProvider>
    </html>
  )
}
