import clsx from 'clsx'
import React from 'react'

import { siteConfig } from '@/config/site'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { className } = props

  return (
    <span
      className={clsx(
        'inline-flex max-w-[12rem] flex-col font-mono text-base font-bold uppercase leading-none tracking-[0.08em]',
        className,
      )}
    >
      <span>{siteConfig.shortName}</span>
      <span className="text-[0.62em] font-normal tracking-[0.18em]">Template</span>
    </span>
  )
}
