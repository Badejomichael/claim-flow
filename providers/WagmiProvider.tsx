'use client'

import '@rainbow-me/rainbowkit/styles.css'
import React from 'react'
import {
  getDefaultConfig,
  RainbowKitProvider,
  darkTheme
} from '@rainbow-me/rainbowkit'
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { mainnet, sepolia } from 'wagmi/chains'

const queryClient = new QueryClient()

const config = getDefaultConfig({
  appName: 'ClaimFlow',
  projectId: 'a389b4506e8289fbd5669a0bb2dac8bf', // replace with your real WalletConnect project ID later
  chains: [sepolia, mainnet],
  ssr: true, // Important for Next.js 13–16
})

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={darkTheme({
            accentColor: '#00ffd0',
            accentColorForeground: '#000',
            borderRadius: 'large',
            overlayBlur: 'small'
          })}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
