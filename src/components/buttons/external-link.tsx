import { Hover } from '../animation'

import { ExternalLinkIcon } from 'lucide-react'

export const ExternalLinkButton = ({ href }: { href: string }) => (
  <Hover>
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="button inline-block"
    >
      <ExternalLinkIcon
        className="rounded-xl p-2 dark:bg-black"
        width={45}
        height={45}
      />
    </a>
  </Hover>
)
