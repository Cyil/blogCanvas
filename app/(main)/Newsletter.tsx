'use client'

import { clsxm } from '@zolplay/utils'
import React from 'react'

import { TiltedSendIcon } from '~/assets'

export function Newsletter({ subCount }: { subCount?: string }) {
  return (
    <div
      className={clsxm(
        'relative rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40'
      )}
    >
      <h2 className="flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <TiltedSendIcon className="h-5 w-5 flex-none" />
        <span className="ml-2">动态更新</span>
      </h2>
      <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 md:text-sm">
        <span>喜欢我的内容的话不妨关注一下 🫶</span>
        <br />
        {subCount && (
          <span>
            加入其他 <span className="font-medium">{subCount}</span> 位订阅者，
          </span>
        )}
        <span>随时获取最新动态。</span>
      </p>
      <p className="mt-4 text-center text-sm text-zinc-500 dark:text-zinc-400">
        订阅功能即将上线，敬请期待 ✨
      </p>
    </div>
  )
}
