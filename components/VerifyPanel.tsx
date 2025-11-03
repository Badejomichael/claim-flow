'use client'
import { useState } from 'react'
import Loader from './Loader'

export default function VerifyPanel() {
  const [loading, setLoading] = useState(false)
  const [eligible, setEligible] = useState<boolean | null>(null)

  const verify = () => {
    setLoading(true)
    setTimeout(() => {
      setEligible(true)
      setLoading(false)
    }, 1800)
  }

  return (
    <div className="w-full bg-slate-800/60 border border-slate-700 rounded-xl p-6 text-center">
      <h2 className="text-lg font-semibold mb-4 text-amber-300">Verify Eligibility</h2>
      <p className="text-gray-400 mb-4">Check if your connected wallet can claim the airdrop.</p>

      {loading ? (
        <Loader />
      ) : eligible === null ? (
        <button
          onClick={verify}
          className="bg-gradient-to-r from-teal-400 to-amber-300 text-black px-5 py-2 rounded-md font-semibold hover:opacity-90 transition-all"
        >
          Verify
        </button>
      ) : eligible ? (
        <p className="text-teal-400 font-semibold">✅ You are eligible!</p>
      ) : (
        <p className="text-red-400 font-semibold">❌ Not eligible.</p>
      )}
    </div>
  )
}
