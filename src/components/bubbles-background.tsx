import { cn } from '@/lib/utils'
import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'

const BubblesBackground = ({ numBubbles = 10 }: { numBubbles?: number }) => {
  const [bubbles, setBubbles] = useState<
    {
      id: number
      x: string | number
      y: string | number
      scale: number
      opacity: number
    }[]
  >([])

  useEffect(() => {
    setBubbles(createBubbles(numBubbles))
  }, [numBubbles])

  const createBubbles = (count: number) => {
    return Array.from({ length: count }, (_, index) => ({
      id: index,
      x: `${Math.random() * 100}vw`,
      y: `${Math.random() * 100}vh`,
      // TODO
      // scale according to screen width
      scale: Math.random() + 1.5,
      // TODO
      // set more strict visibility range
      opacity: Math.random() - 0.7,
    }))
  }

  // TODO
  // fix overflow
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 -z-10 overflow-y-visible overflow-x-clip">
      {bubbles.map((bubble) => (
        <AnimatedBubble
          key={bubble.id}
          id={bubble.id}
          x={bubble.x}
          y={bubble.y}
          scale={bubble.scale}
          opacity={bubble.opacity}
        />
      ))}
    </div>
  )
}

const AnimatedBubble = (props: {
  id: number
  x: string | number
  y: string | number
  scale: number
  opacity: number
}) => {
  const { id, x, y, scale, opacity } = props
  const controls = useAnimatedBubble(id)
  // const colors = ['bg-brand', 'bg-blue-800', 'bg-green-800']
  const colors = ['bg-brand']
  const SPAWN_OUTSIDE_CONTAINER = false

  return (
    <motion.div
      className={cn(
        'w-[300px] h-[300px] rounded-full blur-3xl',
        colors[Math.floor(Math.random() * colors.length)],
        SPAWN_OUTSIDE_CONTAINER ? '' : 'absolute'
      )}
      initial={{ x, y, scale, opacity }}
      animate={controls}
    />
  )
}

const useAnimatedBubble = (id: number) => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      x: `${Math.random() * 100}vw`,
      y: `${Math.random() * 100}vh`,
      // x: 0, // Math.random() * 100
      // y: 0, // Math.random() * 100
      transition: {
        duration: Math.random() * 40 + 2,
        repeat: Infinity,
        repeatType: 'mirror',
      },
    })
  }, [controls, id])

  return controls
}

export default BubblesBackground
