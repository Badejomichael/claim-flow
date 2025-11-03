'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX } from 'react-icons/fi'
import { IoCheckmarkCircleOutline } from 'react-icons/io5'
import TxReceipt from './TxReceipt'
import { useState } from 'react'

export default function SuccessModal({
  amount,
  tx,
  onClose,
}: {
  amount: number
  tx: string
  onClose: () => void
}) {
  const [showReceipt, setShowReceipt] = useState(false)

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[999] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* backdrop */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

        {/* modal */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="relative w-[92%] max-w-md p-8 rounded-3xl 
                     bg-gradient-to-br from-[#0b0b0b]/95 via-[#101010]/90 to-[#0b0b0b]/95 
                     border border-white/10 backdrop-blur-md shadow-[0_0_35px_rgba(0,255,208,0.10)]"
        >
          {/* close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-[#00ffd0] transition"
            aria-label="Close"
          >
            <FiX size={18} />
          </button>

          {/* success icon */}
          <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center 
                          bg-gradient-to-tr from-[#00ffd0] to-[#facc15] shadow-[0_0_20px_rgba(0,255,208,0.2)] mb-5">
            <IoCheckmarkCircleOutline className="text-black text-4xl" />
          </div>

          {/* text */}
          <h3 className="text-2xl font-semibold text-[#facc15] text-center">
            Claim Successful
          </h3>
          <p className="text-gray-300 mt-3 text-center">
            You received <span className="text-[#00ffd0] font-medium">{amount} MOCK</span>
          </p>

          {/* buttons */}
          {!showReceipt ? (
            <div className="mt-7 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setShowReceipt(true)}
                className="flex-1 px-5 py-2.5 rounded-lg font-semibold
                           bg-gradient-to-r from-[#00ffd0] to-[#facc15] text-black
                           shadow-[0_0_20px_rgba(0,255,208,0.15)] hover:scale-[1.02] transition-all"
              >
                View Receipt
              </button>
              <button
                onClick={onClose}
                className="flex-1 px-5 py-2.5 rounded-lg border border-white/10 text-gray-300 hover:text-[#00ffd0] hover:border-[#00ffd0]/30 transition-all"
              >
                Close
              </button>
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
