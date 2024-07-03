import Image from 'next/image'

import { Hover } from '../animation'

export const LinkedinButton = () => (
  <Hover>
    <a
      href="https://www.linkedin.com/in/andrzej-sienkiewicz/"
      target="_blank"
      rel="noreferrer"
      className="button inline-block"
    >
      <Image
        className="rounded-xl p-1 invert dark:bg-black dark:invert-0"
        src={`/linkedin.png`}
        alt="LinkedIn Logo"
        width={45}
        height={45}
        priority
      />
    </a>
  </Hover>
)
