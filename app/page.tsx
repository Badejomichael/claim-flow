'use client'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function Home() {
  const router = useRouter()
  return (
    <main className="min-h-screen flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 py-28">
        {/* Left - Hero */}
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#00ffd0] via-white to-[#facc15]"
          >
            ClaimFlow
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mt-6 text-gray-300 max-w-xl"
          >
            A futuristic, premium airdrop claim portal — cinematic UX, secure wallet connection, and realistic mock transaction flow to showcase frontend Web3 skills.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.28 }} className="mt-8 flex gap-4">
            <button
              onClick={() => router.push('/app')}
              className="px-6 py-3 rounded-xl btn-glow neon-border bg-gradient-to-r from-[#facc15] to-[#00ffd0] text-black font-semibold"
            >
              Launch App
            </button>

            <button
              onClick={() => router.push('/app')}
              className="px-5 py-3 rounded-xl border border-white/6 text-white/80 hover:bg-white/2 transition"
            >
              Live Demo
            </button>
          </motion.div>

          <motion.div className="mt-8 grid grid-cols-3 gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            <div className="glass p-4 rounded-xl neon-border">
              <div className="kicker">Distributed</div>
              <div className="font-semibold">1,000,000 MOCK</div>
            </div>
            <div className="glass p-4 rounded-xl neon-border">
              <div className="kicker">Claimed</div>
              <div className="font-semibold">124,500 MOCK</div>
            </div>
            <div className="glass p-4 rounded-xl neon-border">
              <div className="kicker">Eligible</div>
              <div className="font-semibold">3,200</div>
            </div>
          </motion.div>
        </div>

        {/* Right - visual token/card */}
        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="w-full md:w-[420px]">
          <div className="glass rounded-3xl p-6 relative overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
            <div className="absolute -right-28 -top-28 w-72 h-72 bg-[#00ffd0]/6 rounded-full blur-3xl"></div>
            <div className="absolute -left-20 -bottom-20 w-72 h-72 bg-[#facc15]/6 rounded-full blur-3xl"></div>

            <div className="flex flex-col items-center gap-4">
              <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-[#00ffd0] to-[#facc15] flex items-center justify-center text-black text-xl font-bold shadow-lg">MOCK</div>
              <div className="text-center">
                <div className="kicker">Airdrop Ready</div>
                <div className="text-lg font-semibold">100 MOCK per eligible wallet</div>
              </div>
              <div className="mt-4 w-full">
                <div className="h-3 bg-white/6 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#00ffd0] to-[#facc15]" style={{ width: '27%' }}></div>
                </div>
                <div className="text-xs text-gray-400 mt-2 flex justify-between">
                  <span>3,200 eligible</span>
                  <span>124.5K claimed</span>
                </div>
              </div>
              <div className="mt-6 w-full flex justify-center">
                <button onClick={() => router.push('/app')} className="px-6 py-2 rounded-full bg-gradient-to-r from-[#facc15] to-[#00ffd0] text-black font-semibold shadow-[0_10px_30px_rgba(0,255,208,0.08)]">Open Portal</button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
