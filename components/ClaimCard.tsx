'use client'
import { useState } from 'react'
import TxAnimation from './TxAnimation'
import SuccessModal from './SuccessModal'

export default function ClaimCard() {
  const [showTx, setShowTx] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const claim = () => {
    setShowTx(true)
  }

  const handleTxComplete = () => {
    setShowTx(false)
    setShowSuccess(true)
  }

  return (
    <div className="w-full bg-slate-800/60 border border-slate-700 rounded-xl p-6 text-center">
      <h2 className="text-lg font-semibold mb-4 text-amber-300">Claim Tokens</h2>
      <p className="text-gray-400 mb-4">Eligible wallets can claim 100 MOCK tokens.</p>

      <button
        onClick={claim}
        className="bg-gradient-to-r from-teal-400 to-amber-300 text-black px-5 py-2 rounded-md font-semibold hover:opacity-90 transition-all"
      >
        Claim 100 MOCK
      </button>

      {showTx && <TxAnimation onComplete={handleTxComplete} />}
      {showSuccess && <SuccessModal amount={100} tx="0xabc123" onClose={() => setShowSuccess(false)} />}
    </div>
  )
}
