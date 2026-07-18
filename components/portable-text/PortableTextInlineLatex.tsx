'use client'

import { type PortableTextComponentProps } from '@portabletext/react'

export function PortableTextInlineLatex({
  value,
}: PortableTextComponentProps<{
  _key: string
  _type: string
  body?: string
}>) {
  return (
    <span className="inline-block rounded bg-zinc-100 px-1 font-mono text-sm dark:bg-zinc-800">
      {value.body || ''}
    </span>
  )
}
