'use client'

import 'dayjs/locale/zh-cn'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import Image from 'next/image'
import React from 'react'

import { CommentMarkdown } from '~/components/CommentMarkdown'
import { parseDisplayName } from '~/lib/string'

dayjs.extend(relativeTime)

interface GuestbookMessage {
  id: string
  message: string
  createdAt: string
  userInfo: {
    imageUrl?: string
    firstName?: string
    lastName?: string
    fullName?: string
    email?: string
  }
}

const staticMessages: GuestbookMessage[] = [
  {
    id: '1',
    message: '很棒的博客！非常喜欢你的设计和内容，期待更多更新~',
    createdAt: new Date(Date.now() - 3600000).toISOString(),
    userInfo: {
      imageUrl: '/avatars/avatar_1.png',
      firstName: '小明',
    },
  },
  {
    id: '2',
    message: '从你的文章中收获了很多前端知识，感谢分享！\n\n特别是 TypeScript 那篇，让我对类型系统有了更深的理解。',
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    userInfo: {
      imageUrl: '/avatars/avatar_2.png',
      firstName: '小红',
    },
  },
  {
    id: '3',
    message: 'UI 设计真的太好看了，请问是用什么设计工具做的呢？',
    createdAt: new Date(Date.now() - 172800000).toISOString(),
    userInfo: {
      imageUrl: '/avatars/avatar_3.png',
      firstName: '开发者小张',
    },
  },
]

function Message({
  message,
  idx,
  length,
}: {
  message: GuestbookMessage
  idx: number
  length: number
}) {
  return (
    <li className="relative pb-8">
      {idx !== length - 1 && (
        <span
          className="absolute left-5 top-14 -ml-px h-[calc(100%-4.5rem)] w-0.5 rounded bg-zinc-200 dark:bg-zinc-800"
          aria-hidden="true"
        />
      )}
      <div className="relative flex items-start space-x-3">
        <Image
          src={
            message.userInfo.imageUrl ?? `/avatars/avatar_${(idx % 8) + 1}.png`
          }
          alt=""
          width={40}
          height={40}
          className="h-10 w-10 flex-shrink-0 rounded-full bg-zinc-200 ring-2 ring-zinc-200 dark:bg-zinc-800 dark:ring-zinc-800"
          unoptimized
        />
        <div className="-mt-1 flex min-w-0 flex-1 items-center gap-3">
          <b className="text-sm font-bold dark:text-zinc-100">
            {parseDisplayName(message.userInfo)}
          </b>
          <time
            dateTime={message.createdAt.toString()}
            className="inline-flex select-none text-[12px] font-medium opacity-40"
          >
            {dayjs(message.createdAt).locale('zh-cn').fromNow()}
          </time>
        </div>
      </div>
      <div className="comment__message -mt-4 mb-1 pl-[3.25rem] text-sm">
        <CommentMarkdown>{message.message}</CommentMarkdown>
      </div>
    </li>
  )
}
const MessageBlock = React.memo(Message)

export function GuestbookFeeds() {
  return (
    <div className="relative mt-12">
      <div className="absolute inset-0 flex items-center" aria-hidden="true" />

      <ul role="list" className="-mb-8 px-1 md:px-4">
        {staticMessages.map((message, idx) => (
          <MessageBlock
            key={message.id}
            message={message}
            idx={idx}
            length={staticMessages.length}
          />
        ))}
      </ul>
    </div>
  )
}
