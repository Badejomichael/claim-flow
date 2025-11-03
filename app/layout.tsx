import './globals.css'
import { ReactNode } from 'react'
import Providers from '../providers/WagmiProvider'
import Navbar from '../components/Navbar'
import PageTransition from '../components/PageTransition'

export const metadata = {
  title: 'ClaimFlow',
  description: 'An airdrop claim demo'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/png" href="/claimflow-logo.png" />
      </head>
      <body>
        <Providers>
          <Navbar />
          <div className="pt-20">
            <PageTransition>{children}</PageTransition>
          </div>
        </Providers>
      </body>
    </html>
  )
}
