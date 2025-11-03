'use client'
import { motion } from 'framer-motion'
import ClaimPanel from '../../components/ClaimPanel'
import AirdropProgress from '../../components/AirdropProgress'

import { FiCheckCircle, FiSearch, FiZap } from 'react-icons/fi'

export default function Dashboard() {
  return (
    <main className="min-h-screen flex items-center justify-center py-24">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <h2 className="text-3xl font-bold text-amber-300 mb-4">Airdrop Claim Portal</h2>
          <p className="text-gray-400 mb-8 max-w-2xl">Connect your wallet, verify eligibility, and claim mock tokens.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <ClaimPanel />
          </div>
          <div>
            <AirdropProgress />
            <div className="mt-6 bg-gradient-to-br from-[#0b0b0b]/90 via-[#111]/80 to-[#0b0b0b]/80 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-[0_0_25px_rgba(0,255,208,0.1)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(250,204,21,0.15)]">

            <div className="text-xs uppercase tracking-widest text-gray-400">Quick Tips</div>

            <div className="mt-3 text-sm text-gray-300 leading-relaxed space-y-3">
              <div className="flex items-start gap-3">
                <FiCheckCircle className="text-[#00ffd0] text-lg mt-0.5" />
                <span>
                  <span className="text-[#00ffd0] font-medium">Connect your wallet</span> securely using{' '}
                  <span className="text-white font-semibold">RainbowKit</span>.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <FiSearch className="text-[#facc15] text-lg mt-0.5" />
                <span>
                  <span className="text-[#facc15] font-medium">Verify eligibility</span> to simulate your airdrop check.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <FiZap className="text-[#b7ff6f] text-lg mt-0.5" />
                <span>
                  <span className="text-[#b7ff6f] font-medium">Claim tokens</span> to trigger the mock transaction flow.
                </span>
              </div>
            </div>

            <div className="mt-5 text-xs text-gray-500 border-t border-white/10 pt-3">
              Tip: All data is simulated for demonstration purposes.
            </div>
          </div>
          </div>
        </div>
      </div>
    </main>
  )
}