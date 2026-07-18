'use client'

import { type PortableTextComponentProps } from '@portabletext/react'
import React from 'react'
import { Tweet } from 'react-tweet'

export function PortableTextTweet({
  value,
}: PortableTextComponentProps<{ id: string | undefined }>) {
  return (
    <>
      {typeof value.id === 'string' && (
        <div className="flex justify-center">
          <Tweet id={value.id} />
        </div>
      )}
    </>
  )
}
