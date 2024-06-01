import { useEffect } from 'react'

import { useWindowSize } from '@/hooks'
import { cn, randomInteger, randomNumber } from '@/utils'
import { m, useAnimate } from 'framer-motion'

const BackgroundBubbles = ({ numBubbles = 12 }: { numBubbles?: number }) => {
  return (
    <div className="//border-2 //border-brand absolute bottom-0 left-0 right-0 top-0 -z-10">
      {Array.from({ length: numBubbles }).map((_, i) => (
        <Bubble key={i} />
      ))}
    </div>
  )
}

const Bubble = () => {
  const { width, height } = useWindowSize()
  const [scope, animate] = useAnimate()
  const colors = ['bg-brand']
  // const colors = ['bg-brand', 'bg-blue-800', 'bg-green-800']
  const opacity = randomNumber(0.01, 0.05) + 0.02
  const diameter = randomInteger(50, 100) + 'vw'
  const x = randomInteger(-100, 100) + '%'
  const y = randomInteger(-100, 100) + '%'
  const scale = randomNumber(0.3, 1.2)

  useEffect(() => {
    animate(
      scope.current,
      {
        x: randomInteger(-100, 100) + '%',
        y: randomInteger(-100, 100) + '%',
      },
      {
        duration: Math.random() * 40 + 5,
        repeat: Infinity,
        repeatType: 'mirror',
      }
    )
  }, [animate, scope])

  return (
    <m.div
      ref={scope}
      className={cn(
        'absolute rounded-full bg-brand blur-3xl',
        Math.random() < 0.5 ? 'invert' : ''
      )}
      initial={{ x, y, opacity, width: diameter, height: diameter, scale }}
    />
  )
}

export default BackgroundBubbles
