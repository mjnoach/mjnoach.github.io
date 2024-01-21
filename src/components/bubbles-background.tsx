import { cn } from '@/lib/utils'
import { useWindowSize } from '@uidotdev/usehooks'
import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'

const BubblesBackground = ({ numBubbles = 10 }: { numBubbles?: number }) => {
  const size = useWindowSize()
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
    const createBubbles = (count: number) => {
      return Array.from({ length: count }, (_, index) => ({
        id: index,
        x: Math.random() * Number(size.width),
        y: Math.random() * Number(size.height),
        // TODO
        // scale according to screen width
        scale: Math.random() * 4,
        // TODO
        // set more strict visibility range
        opacity: Math.random() * 0.1,
      }))
    }

    setBubbles(createBubbles(numBubbles))
  }, [numBubbles, size.height, size.width])

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

const SPAWN_OUTSIDE_CONTAINER = false

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
  const size = useWindowSize()
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      x: Math.random() * Number(size.width),
      y: Math.random() * Number(size.height),
      transition: {
        duration: Math.random() * 40 + 2,
        repeat: Infinity,
        repeatType: 'mirror',
      },
    })
  }, [controls, id, size.height, size.width])

  return controls
}

export default BubblesBackground
