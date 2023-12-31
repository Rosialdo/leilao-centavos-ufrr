import NavBar from '@/components/layout/header/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/layout/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Leilao legal',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={ 'flex flex-col h-screen justify-between ${inter.className}'}>
        <header>
          <NavBar/>
        </header>
        {children}
        
        <Footer/>
        </body>
    </html>
  )
}
