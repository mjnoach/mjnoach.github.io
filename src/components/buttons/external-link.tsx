import { Hover } from '../animation'

import { ExternalLinkIcon } from 'lucide-react'

export const ExternalLinkButton = ({ href }: { href: string }) => (
  <Hover>
    <a href={href} target="_blank" rel="noreferrer">
      <ExternalLinkIcon
        width={50}
        height={50}
        className="rounded-xl border-2 p-2"
      />
    </a>
  </Hover>
)
