import Image from 'next/image'

export function Footer({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className="border-t bg-background">
      <div className="container space-y-4 py-10 text-center md:py-5">
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
        <div className="inline-flex flex-col items-center gap-4 md:flex-row text-lg">
          <Image
            className="relative"
            src="/itx.svg"
            alt="Logo"
            width={35}
            height={21.88}
          />
          <span>© 2024 Andrzej Sienkiewicz</span>
        </div>
      </div>
    </footer>
  )
}
