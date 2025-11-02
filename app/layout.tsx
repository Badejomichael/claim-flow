import './globals.css'
import { ReactNode } from 'react'
import Providers from '../providers/WagmiProvider'
import Navbar from '../components/Navbar'
import PageTransition from '../components/PageTransition'

export const metadata = {
  title: 'ClaimFlow — Premium Airdrop',
  description: 'A dark, techy-glow airdrop claim demo'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
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
