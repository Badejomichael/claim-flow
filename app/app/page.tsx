'use client'
import { motion } from 'framer-motion'
import ClaimPanel from '../../components/ClaimPanel'
import AirdropProgress from '../../components/AirdropProgress'

export default function Dashboard() {
  return (
    <main className="min-h-screen flex items-center justify-center py-24">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <h2 className="text-3xl font-bold text-amber-300 mb-4">Airdrop Claim Portal</h2>
          <p className="text-gray-400 mb-8 max-w-2xl">Connect your wallet, verify eligibility, and claim mock tokens. This demo uses mock back-end flows so you can focus on frontend UX.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <ClaimPanel />
          </div>
          <div>
            <AirdropProgress />
            <div className="mt-6 glass rounded-xl p-4 neon-border">
              <div className="kicker">Quick Tips</div>
              <div className="mt-2 text-sm text-gray-300">Use RainbowKit to connect. Click Verify to simulate eligibility. Claim to run the mock transaction flow.</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
