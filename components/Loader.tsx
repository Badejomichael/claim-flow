'use client'
import { motion } from 'framer-motion'

export default function Loader({ size = 16 }: { size?: number }) {
  return (
    <motion.div style={{ width: size, height: size }} animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 0.9, ease: 'linear' }}>
      <div style={{ width: size, height: size }} className="rounded-full border-2 border-t-transparent border-[#00ffd0]"></div>
    </motion.div>
  )
}
