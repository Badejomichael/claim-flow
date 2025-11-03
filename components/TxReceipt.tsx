'use client'
import { motion } from 'framer-motion'
import { FiExternalLink, FiCopy } from 'react-icons/fi'
import { useState } from 'react'

export default function TxReceipt({ tx, amount }: { tx: string, amount?: number }) {
  const [copied, setCopied] = useState(false)
  const block = 19754321
  const gas = 41239

  const copy = async () => {
    await navigator.clipboard.writeText(tx)
    setCopied(true)
    setTimeout(() => setCopied(false), 1400)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-[#0b0b0b]/90 via-[#111]/90 to-[#0b0b0b]/80 border border-white/10 rounded-2xl p-5 backdrop-blur-md mt-3"
    >
      {/* Header */}
      <div className="flex justify-between items-start flex-wrap gap-3">
        <div>
          <div className="text-xs uppercase tracking-widest text-gray-400">Transaction Hash</div>
          <div className="mono text-[#00ffd0] break-all">{tx}</div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <button
            onClick={copy}
            className="flex items-center gap-1 text-xs text-gray-200 px-2 py-1 rounded-md bg-white/5 hover:bg-white/10 transition-all"
          >
            <FiCopy size={13} className="text-[#00ffd0]" />
            {copied ? 'Copied!' : 'Copy'}
          </button>
          <a
            href={`https://etherscan.io/tx/${tx}`}
            target="_blank"
            rel="noreferrer"
            className="text-[#facc15] text-xs flex items-center gap-1 hover:underline"
          >
            <FiExternalLink size={14} />
            View
          </a>
        </div>
      </div>

      {/* Details */}
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
        <div>
          <div className="text-xs uppercase tracking-widest text-gray-400">Block</div>
          <div className="font-medium text-[#00ffd0]">{block}</div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-gray-400">Gas</div>
          <div className="font-medium text-[#00ffd0]">{gas} units</div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-gray-400">Amount</div>
          <div className="font-medium text-[#facc15]">{amount ?? 100} MOCK</div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-gray-400">Network</div>
          <div className="font-medium text-gray-300">Ethereum (mock)</div>
        </div>
      </div>

      {/* Copy Feedback */}
      {copied && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 text-sm text-[#facc15] text-center"
        >
          Copied to clipboard!
        </motion.div>
      )}
    </motion.div>
  )
}
