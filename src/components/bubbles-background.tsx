import { cn } from '@/lib/utils'
import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'

const BubblesBackground = ({ numBubbles = 10 }: { numBubbles?: number }) => {
  const [bubbles, setBubbles] = useState<
    {
      id: number
      x: string
      y: string
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
      scale: Math.random() + 0.5,
      opacity: Math.random(),
    }))
  }

  const renderBubbles = () => {
    return bubbles.map((bubble) => {
      return (
        <AnimatedBubble
          key={bubble.id}
          id={bubble.id}
          x={bubble.x}
          y={bubble.y}
          scale={bubble.scale}
          opacity={bubble.opacity}
        />
      )
    })
  }

  // TODO
  // fix overflow
  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 -z-10 overflow-hidden">
      {renderBubbles()}
    </div>
  )
}

const AnimatedBubble = (props: {
  id: number
  x: string
  y: string
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
        'w-[1000px] h-[1000px] rounded-full blur-3xl',
        colors[Math.floor(Math.random() * colors.length)]
      )}
      initial={{
        x: x,
        y: y,
        scale: scale,
        opacity: opacity,
      }}
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
