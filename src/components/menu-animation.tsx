'use client'

import { motion } from 'framer-motion'

export function MenuAnimation({
  className,
  children,
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <motion.div
      whileHover={{ scale: 1.2, x: 15 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
    >
      {/* {'→ '} */}
      {children}
    </motion.div>
  )
}
