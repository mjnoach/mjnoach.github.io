'use client'

import { useEffect } from 'react'

import { LazyMotion, domAnimation, m, stagger, useAnimate } from 'framer-motion'

export function useMenuSlideIn() {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return scope
}

export function MenuHover({
  className,
  children,
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <m.div
      whileHover={{ scale: 1.2, x: 15 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
    >
      {/* {'→ '} */}
      {children}
    </m.div>
  )
}

export function Hover({
  className,
  children,
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div className="flex h-fit cursor-pointer" whileHover={{ scale: 1.1 }}>
        {children}
      </m.div>
    </LazyMotion>
  )
}
