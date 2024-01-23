import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

import tailwindConfigDefault from 'tailwindcss/stubs/config.full'
import tailwindConfig from '../../tailwind.config'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const breakpoints =
  'screens' in tailwindConfig.theme
    ? {
        ...tailwindConfigDefault.theme.screens,
        ...(tailwindConfig.theme.screens as object),
      }
    : tailwindConfigDefault.theme.screens

export function getBreakpointWidth(key: string) {
  const validKeys = Object.keys(breakpoints)
  if (!validKeys.includes(key))
    throw new Error(
      `Incorrect breakpoint key. Used ${key}, but available are: ${validKeys}`
    )
  const width = Number(breakpoints[key].replace('px', ''))
  return width
}
