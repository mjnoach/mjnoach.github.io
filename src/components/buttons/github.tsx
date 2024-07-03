import Image from 'next/image'

import { Hover } from '../animation'

export const GithubButton = ({ href }: { href: string }) => (
  <Hover>
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="button inline-block"
    >
      <Image
        className="/inline-block /object-contain rounded-xl invert dark:bg-black dark:invert-0"
        src={`/github.svg`}
        alt="GitHub Logo"
        width={45}
        height={45}
        priority
      />
    </a>
  </Hover>
)
