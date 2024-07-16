import Image from 'next/image'

import { images } from '@/images'

export function Footer({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className="mt-8 border-t bg-background md:mt-12 lg:mt-24">
      <div className="container space-y-4 py-8 text-center md:py-5">
        <div className="text-muted-foreground dark:text-muted">
          Illustrations by{' '}
          <a
            href="https://popsy.co"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Popsy
          </a>
        </div>
        <div className="inline-flex flex-col items-center gap-4 text-lg md:flex-row">
          <div>
            <Image
              className="pointer-events-none max-w-8 select-none"
              src={images['logo']}
              alt="Logo"
            />
          </div>
          <span>© 2024 Andrzej Sienkiewicz</span>
        </div>
      </div>
    </footer>
  )
}
