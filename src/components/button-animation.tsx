import { motion } from 'framer-motion'

export function ButtonAnimation({
  className,
  children,
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <motion.div className="cursor-pointer" whileHover={{ scale: 1.1 }}>
      {children}
    </motion.div>
  )
}
