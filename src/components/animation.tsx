'use client'

import { RefObject, useEffect } from 'react'

import { useParallax } from '@/hooks'
import { getBreakpointWidth } from '@/utils'
import { useWindowSize } from '@uidotdev/usehooks'
import {
  LazyMotion,
  domAnimation,
  m,
  stagger,
  useAnimate,
  useScroll,
} from 'framer-motion'

export function useParallaxAnimation(
  parallaxContainer: RefObject<HTMLElement>,
  parallaxTarget: RefObject<HTMLElement>,
  parallaxBoundary: RefObject<HTMLElement>
) {
  const size = useWindowSize() as { width: number }
  const { scrollYProgress } = useScroll({ target: parallaxBoundary })
  const offsetFactor = 1.2
  const parallaxProgress = useParallax(scrollYProgress, [
    parallaxContainer.current?.clientHeight! -
      parallaxTarget.current?.clientHeight! * offsetFactor,
    0,
  ])
  // enable paralllax only on tablet and desktop
  const parallaxStyle =
    size.width >= getBreakpointWidth('md') ? { y: parallaxProgress } : {}

  return parallaxStyle
}

export function useStackedSlideDownAnimation() {
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
