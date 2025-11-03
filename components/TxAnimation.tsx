'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaEthereum } from 'react-icons/fa'
import { IoCheckmarkCircleOutline } from 'react-icons/io5'

const steps = [
  { label: 'Submitting transaction', duration: 1200 },
  { label: 'Confirming on-chain', duration: 1800 },
  { label: 'Finalizing claim', duration: 900 }
]

export default function TxAnimation({ onComplete }: { onComplete: () => void }) {
  const [index, setIndex] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (index < steps.length) {
      const t = setTimeout(() => setIndex(i => i + 1), steps[index].duration)
      return () => clearTimeout(t)
    } else {
      const finish = setTimeout(() => {
        setDone(true)
        setTimeout(() => onComplete(), 900)
      }, 700)
      return () => clearTimeout(finish)
    }
  }, [index, onComplete])

  return (
    <AnimatePresence>
      <motion.div className="fixed inset-0 z-50 flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} transition={{ duration: 0.28 }} className="glass p-8 rounded-2xl text-center max-w-sm z-50">
          {!done ? (
            <>
              <div className="w-20 h-20 mx-auto mb-4 relative">
                <div className="absolute inset-0 rounded-full border-t-4 border-[#00ffd0] border-r-4 border-b-transparent border-l-transparent animate-spin"></div>
                <FaEthereum className="text-[#00ffd0] text-3xl relative z-10 mx-auto" />
              </div>
              <div className="font-semibold text-lg">{steps[Math.min(index, steps.length - 1)].label}…</div>
              <div className="text-sm text-gray-400 mt-2">This is a simulated on-chain flow for demo purposes.</div>
            </>
          ) : (
            <>
              <IoCheckmarkCircleOutline size={46} className="text-[#00ffd0] mx-auto mb-3" />
              <div className="text-lg font-semibold text-amber-300">Transaction Confirmed</div>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
