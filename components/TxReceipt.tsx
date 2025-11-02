'use client'
import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'
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
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="bg-slate-900 border border-slate-700 p-4 rounded-xl">
      <div className="flex justify-between items-start">
        <div>
          <div className="kicker">Transaction Hash</div>
          <div className="mono text-teal-300 break-all">{tx}</div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <button onClick={copy} className="text-xs text-gray-300 px-2 py-1 rounded bg-white/3">Copy</button>
          <a href={`https://etherscan.io/tx/${tx}`} target="_blank" rel="noreferrer" className="text-amber-300 text-xs flex items-center gap-1"><FiExternalLink size={14}/>View</a>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-gray-400">
        <div><div className="kicker">Block</div><div className="font-medium text-teal-300">{block}</div></div>
        <div><div className="kicker">Gas</div><div className="font-medium text-teal-300">{gas} units</div></div>
        <div><div className="kicker">Amount</div><div className="font-medium text-amber-300">{amount ?? 100} MOCK</div></div>
        <div><div className="kicker">Network</div><div className="font-medium text-gray-300">Ethereum (mock)</div></div>
      </div>

      {copied && <div className="mt-3 text-sm text-amber-300">Copied to clipboard</div>}
    </motion.div>
  )
}
