import { MotionValue, useTransform } from 'framer-motion'

export function useParallax(
  value: MotionValue<number>,
  range: (number | string)[]
) {
  return useTransform(value, [0, 1], range)
}
