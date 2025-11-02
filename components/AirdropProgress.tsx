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
    <div className="glass p-5 rounded-2xl neon-border">
      <div className="flex justify-between items-center">
        <div>
          <div className="kicker">Airdrop Progress</div>
          <div className="font-semibold">{progress}% Claimed</div>
        </div>
        <div className="text-right">
          <div className="mono text-sm text-gray-300">124,500 / 1,000,000 MOCK</div>
        </div>
      </div>

      <div className="mt-4 w-full bg-white/6 rounded-full h-3 overflow-hidden">
        <motion.div className="h-full bg-gradient-to-r from-[#00ffd0] to-[#facc15]" initial={{ width: 0 }} animate={controls} transition={{ duration: 1.2, ease: 'easeOut' }} />
      </div>
    </div>
  )
}
