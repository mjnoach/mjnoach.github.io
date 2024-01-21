'use client'

import { motion, stagger, useAnimate } from 'framer-motion'

import { useEffect } from 'react'

export function useMenuAnimation() {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate(
      'li',
      { opacity: [0, 1], y: [-120, 0] },
      {
        duration: 0.3,
        delay: stagger(0.1, { startDelay: 0.15, from: 'last' }),
      }
    )
  })

  return scope
}

export function MenuHoverAnimation({
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
