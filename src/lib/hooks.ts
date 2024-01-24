import { useWindowSize as useWindowSizeHook } from '@uidotdev/usehooks'
import { MotionValue, useTransform } from 'framer-motion'

export function useParallax(
  value: MotionValue<number>,
  range: (number | string)[]
) {
  return useTransform(value, [0, 1], range)
}

export function useWindowSize() {
  return useWindowSizeHook() as { width: number; height: number }
}
