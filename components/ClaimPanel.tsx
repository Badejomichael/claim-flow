'use client'
import { useState } from 'react'
import { useAccount } from 'wagmi'
import Loader from './Loader'
import TxAnimation from './TxAnimation'
import SuccessModal from './SuccessModal'
import TxReceipt from './TxReceipt'
import { toast } from 'react-toastify'
import { FiCheckCircle, FiXCircle, FiHelpCircle } from 'react-icons/fi'

export default function ClaimPanel() {
  const { address, isConnected } = useAccount()
  const [eligible, setEligible] = useState<boolean | null>(null)
  const [verifying, setVerifying] = useState(false)
  const [showTxAnim, setShowTxAnim] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showReceipt, setShowReceipt] = useState(false)
  const [txHash, setTxHash] = useState('')

  const shortAddress = address
    ? `${address.slice(0, 6)}...${address.slice(-4)}`
    : 'Not connected'

  const handleVerify = async () => {
    if (!isConnected) return toast.info('Connect your wallet first')
    setVerifying(true)
    setTimeout(() => {
      const ok = Math.random() > 0.15
      setEligible(ok)
      setVerifying(false)
      ok ? toast.success('Wallet eligible!') : toast.error('Not eligible for this round.')
    }, 1200)
  }

  const handleClaim = () => {
    if (!isConnected) return toast.info('Connect your wallet first')
    if (!eligible) return toast.error('Wallet is not eligible')
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
    <>
      {/* Main claim panel card */}
      <div className="bg-gradient-to-br from-[#0b0b0b]/90 via-[#111]/90 to-[#0b0b0b]/80 border border-white/10 rounded-3xl p-6 backdrop-blur-md shadow-[0_0_25px_rgba(0,255,208,0.1)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(250,204,21,0.15)]">
        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <div className="text-xs uppercase tracking-widest text-gray-400">Your Wallet</div>
            <div className="text-lg font-semibold text-white mt-1">{shortAddress}</div>
          </div>
          <div className="text-right">
            <div className="text-xs uppercase tracking-widest text-gray-400">Reward</div>
            <div className="text-lg font-semibold text-yellow-300 mt-1">100 MOCK</div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Left Panel */}
          <div className="md:col-span-2 bg-gradient-to-br from-[#101010]/80 to-[#111]/70 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div>
                <div className="text-xs uppercase tracking-widest text-gray-400">Eligibility</div>
                <div className="text-sm font-medium text-gray-200 mt-1 flex items-center gap-2">
                  {eligible === null && (
                    <>
                      <FiHelpCircle className="text-yellow-400" />
                      <span>Unknown</span>
                    </>
                  )}
                  {eligible === true && (
                    <>
                      <FiCheckCircle className="text-[#00ffd0]" />
                      <span className="text-[#00ffd0]">Eligible</span>
                    </>
                  )}
                  {eligible === false && (
                    <>
                      <FiXCircle className="text-red-500" />
                      <span className="text-red-400">Not eligible</span>
                    </>
                  )}
                </div>
              </div>

              <button
                onClick={handleVerify}
                className="px-5 py-2 rounded-md bg-gradient-to-r from-[#00ffd0] to-[#facc15] text-black font-semibold hover:scale-[1.03] transition-all btn-glow"
              >
                {verifying ? <Loader /> : 'Verify Wallet'}
              </button>
            </div>
          </div>

          {/* Right Panel */}
          <div className="bg-gradient-to-br from-[#101010]/80 to-[#111]/70 border border-white/10 rounded-2xl p-5 backdrop-blur-sm flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest text-gray-400">Claim</div>
              <div className="text-sm text-gray-300 mt-1 mb-3">One-time claim per wallet</div>
              <button
                onClick={handleClaim}
                disabled={!eligible}
                className={`w-full px-4 py-2 rounded-md font-semibold transition-all ${
                  eligible
                    ? 'bg-gradient-to-r from-[#facc15] to-[#00ffd0] text-black btn-glow hover:scale-[1.03]'
                    : 'bg-white/5 text-white/40 cursor-not-allowed'
                }`}
              >
                Claim 100 MOCK
              </button>
            </div>
            <div className="mt-4 text-xs text-gray-500 border-t border-white/10 pt-3">
              <div>Gas: <span className="mono">~0.001 ETH</span></div>
              <div>Network: Mock</div>
            </div>
          </div>
        </div>
      </div>

      {/* Move modals here — outside the container */}
      {showTxAnim && <TxAnimation onComplete={txComplete} />}
      {showSuccess && <SuccessModal amount={100} tx={txHash} onClose={onModalClose} />}
      {showReceipt && <TxReceipt tx={txHash} amount={100} />}
    </>
  )

}
