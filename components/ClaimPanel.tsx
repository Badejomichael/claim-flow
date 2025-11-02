'use client'
import { useState } from 'react'
import { useAccount } from 'wagmi'
import Loader from './Loader'
import TxAnimation from './TxAnimation'
import SuccessModal from './SuccessModal'
import TxReceipt from './TxReceipt'
import { toast } from 'react-toastify'

export default function ClaimPanel() {
  const { address, isConnected } = useAccount()
  const [eligible, setEligible] = useState<boolean | null>(null)
  const [verifying, setVerifying] = useState(false)
  const [showTxAnim, setShowTxAnim] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showReceipt, setShowReceipt] = useState(false)
  const [txHash, setTxHash] = useState('')

  const handleVerify = async () => {
    if (!isConnected) { toast.info('Connect your wallet first'); return }
    setVerifying(true)
    // mock API simulation
    setTimeout(() => {
      const ok = Math.random() > 0.15 // 85% eligible for demo
      setEligible(ok)
      setVerifying(false)
      if (ok) toast.success('Wallet eligible!')
      else toast.error('Not eligible for this round.')
    }, 1400)
  }

  const handleClaim = () => {
    if (!isConnected) { toast.info('Connect your wallet first'); return }
    if (!eligible) { toast.error('Wallet is not eligible'); return }
    setShowTxAnim(true)
  }

  const txComplete = () => {
    setShowTxAnim(false)
    const tx = '0x' + Math.random().toString(16).slice(2, 12)
    setTxHash(tx)
    setShowSuccess(true)
  }

  const onModalClose = () => {
    setShowSuccess(false)
    setTimeout(() => setShowReceipt(true), 300)
  }

  return (
    <div className="glass rounded-3xl p-6 neon-border">
      <div className="flex items-center justify-between">
        <div>
          <div className="kicker">Your Wallet</div>
          <div className="font-semibold">{isConnected ? address : 'Not connected'}</div>
        </div>
        <div className="text-right">
          <div className="kicker">Reward</div>
          <div className="font-semibold">100 MOCK</div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 glass p-4 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <div className="kicker">Eligibility</div>
              <div className="text-sm text-gray-300">{eligible === null ? 'Unknown' : eligible ? 'Eligible' : 'Not eligible'}</div>
            </div>
            <div>
              <button onClick={handleVerify} className="px-4 py-2 rounded-md bg-gradient-to-r from-[#00ffd0] to-[#facc15] text-black font-medium btn-glow">
                {verifying ? <Loader /> : 'Verify Wallet'}
              </button>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-400">
            <p>Verification simulates an eligibility check. For portfolio purposes this is mock data.</p>
          </div>
        </div>

        <div className="glass p-4 rounded-xl flex flex-col justify-between">
          <div>
            <div className="kicker">Claim</div>
            <div className="text-sm text-gray-300 mb-3">One-time claim per wallet</div>
            <button onClick={handleClaim} disabled={!eligible} className={`w-full px-4 py-2 rounded-md font-semibold ${eligible ? 'bg-gradient-to-r from-[#facc15] to-[#00ffd0] text-black btn-glow' : 'bg-white/4 text-white/60 cursor-not-allowed'}`}>
              Claim 100 MOCK
            </button>
          </div>

          <div className="mt-4 text-xs text-gray-500">
            <div>Gas: <span className="mono">~0.001 ETH</span></div>
            <div>Network: Mock</div>
          </div>
        </div>
      </div>

      {showTxAnim && <TxAnimation onComplete={txComplete} />}
      {showSuccess && <SuccessModal amount={100} tx={txHash} onClose={onModalClose} />}
      {showReceipt && <TxReceipt tx={txHash} amount={100} />}
    </div>
  )
}
