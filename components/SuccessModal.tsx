'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX } from 'react-icons/fi'
import TxReceipt from './TxReceipt'
import { useState } from 'react'

export default function SuccessModal({ amount, tx, onClose }: { amount: number, tx: string, onClose: () => void }) {
  const [showReceipt, setShowReceipt] = useState(false)

  return (
    <AnimatePresence>
      <motion.div className="fixed inset-0 z-50 flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} transition={{ duration: 0.28 }} className="relative glass p-8 rounded-2xl max-w-md w-full neon-border">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-300 hover:text-amber-300"><FiX /></button>
          <div className="w-20 h-20 rounded-full mx-auto bg-gradient-to-r from-[#00ffd0] to-[#facc15] flex items-center justify-center text-black font-bold text-2xl mb-4 shadow-lg">✓</div>
          <h3 className="text-2xl font-semibold text-amber-300">Claim Successful</h3>
          <p className="text-gray-300 mt-2">You have received <span className="font-semibold text-[#00ffd0]">{amount} MOCK</span>.</p>

          {!showReceipt ? (
            <div className="mt-6 flex gap-3">
              <button onClick={() => setShowReceipt(true)} className="flex-1 px-4 py-2 rounded-md bg-gradient-to-r from-[#facc15] to-[#00ffd0] text-black font-semibold">View Receipt</button>
              <button onClick={onClose} className="px-4 py-2 rounded-md border border-white/6">Close</button>
            </div>
          ) : (
            <div className="mt-6">
              <TxReceipt tx={tx} amount={amount} />
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
