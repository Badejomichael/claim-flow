'use client'
import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function AirdropProgress() {
  const [progress, setProgress] = useState(36)
  const controls = useAnimation()

  useEffect(() => {
    // subtle randomization to feel live
    const p = Math.max(10, Math.min(92, Math.floor(36 + Math.random() * 24)))
    setProgress(p)
    controls.start({ width: `${p}%` })
  }, [controls])

  return (
    <div className="bg-gradient-to-br from-[#0b0b0b]/90 via-[#111]/80 to-[#0b0b0b]/80 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-[0_0_25px_rgba(0,255,208,0.1)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(250,204,21,0.15)]">
      <div className="flex justify-between items-center flex-wrap gap-2">
        <div>
          <div className="text-xs uppercase tracking-widest text-gray-400">Airdrop Progress</div>
          <div className="font-semibold text-white mt-1">{progress}% Claimed</div>
        </div>
        <div className="text-right text-sm text-gray-300">
          <div className="mono">124,500 / 1,000,000 MOCK</div>
        </div>
      </div>

      <div className="mt-4 w-full h-3 rounded-full bg-gradient-to-r from-[#111] via-[#0f0f0f] to-[#111] overflow-hidden border border-white/10">
        <motion.div
          className="h-full bg-gradient-to-r from-[#00ffd0] via-[#b7ff6f] to-[#facc15] rounded-full shadow-[0_0_15px_rgba(0,255,208,0.5)]"
          initial={{ width: 0 }}
          animate={controls}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
      </div>

      <div className="mt-3 text-xs text-gray-500">
        <span className="text-[#00ffd0] font-semibold">Live update</span> · mock data simulation
      </div>
    </div>
  )
}
