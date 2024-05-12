import Image from 'next/image'

import { Hover } from '../animation'

export const GithubButton = ({ href }: { href: string }) => (
  <Hover>
    <a href={href} target="_blank" rel="noreferrer">
      <Image
        className="rounded-xl border-2"
        src="/github.svg"
        alt="GitHub Logo"
        width={50}
        height={50}
        priority
      />
    </a>
  </Hover>
)
