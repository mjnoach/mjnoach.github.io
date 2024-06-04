import { Hover } from '../animation'

import { ExternalLinkIcon } from 'lucide-react'

export const ExternalLinkButton = ({ href }: { href: string }) => (
  <Hover>
    <a href={href} target="_blank" rel="noreferrer">
      <div className="button">
        <ExternalLinkIcon
          className="rounded-xl p-2 dark:bg-black"
          width={45}
          height={45}
        />
      </div>
    </a>
  </Hover>
)
