'use client'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/6">
      <div className="container flex items-center sm:gap-4 md:justify-between gap-3 py-3">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-11 h-11 rounded-lg bg-gradient-to-tr from-[#00ffd0] to-[#facc15] flex items-center justify-center text-black font-bold">CF</div>
          <div>
            <div className="font-semibold text-white">ClaimFlow</div>
          </div>
        </Link>

        <div className="flex items-center gap-4">
          <a className="text-sm text-gray-300 hidden md:inline">Docs</a>
          <ConnectButton showBalance={false} chainStatus="icon" accountStatus="address" />
        </div>
      </div>
    </nav>
  )
}
