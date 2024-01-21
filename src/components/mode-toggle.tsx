'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

export function ModeToggle({ className }: React.HTMLAttributes<HTMLElement>) {
  const { setTheme } = useTheme()
  const [currentTheme, setCurrentTheme] = useState('dark')

  useEffect(() => {
    setTheme('system')
  }, [setTheme])

  function toggleTheme() {
    if (currentTheme === 'dark') {
      setTheme('light')
      setCurrentTheme('light')
      return
    }
    setTheme('dark')
    setCurrentTheme('dark')
  }

  return (
    <Button
      className={className}
      variant="outline"
      size="icon"
      onClick={toggleTheme}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
