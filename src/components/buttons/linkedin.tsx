import Image from 'next/image'

import { Hover } from '../animation'

export const LinkedinButton = () => (
  <Hover>
    <a
      href="https://www.linkedin.com/in/andrzej-sienkiewicz/"
      target="_blank"
      rel="noreferrer"
    >
      <Image
        className="rounded-xl border-2 p-1"
        src="/linkedin.png"
        alt="LinkedIn Logo"
        width={50}
        height={50}
        priority
      />
    </a>
  </Hover>
)
