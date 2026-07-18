'use client'

import React from 'react'

import { GuestbookFeeds } from './GuestbookFeeds'

export function Guestbook() {
  return (
    <section className="max-w-2xl">
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        留言功能即将上线，敬请期待 ✨
      </p>

      <GuestbookFeeds />
    </section>
  )
}
