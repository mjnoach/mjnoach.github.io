import Image from 'next/image'

import { Hover } from '../animation'

export const GithubButton = ({ href }: { href: string }) => (
  <Hover>
    <a href={href} target="_blank" rel="noreferrer">
      <div className="rounded-xl border-2">
        <Image
          className="rounded-xl invert dark:bg-black dark:invert-0"
          src="/github.svg"
          alt="GitHub Logo"
          width={45}
          height={45}
          priority
        />
      </div>
    </a>
  </Hover>
)
