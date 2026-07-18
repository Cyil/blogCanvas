'use client'

import { type PortableTextComponentProps } from '@portabletext/react'
import * as Dialog from '@radix-ui/react-dialog'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

export function PortableTextLatex({
  value,
}: PortableTextComponentProps<{
  _key: string
  _type: string
  body?: string
}>) {
  const [isZoomed, setIsZoomed] = React.useState(false)

  return (
    <div data-blockid={value._key} className="group relative pr-3 md:pr-0">
      <Dialog.Root open={isZoomed} onOpenChange={setIsZoomed}>
        <AnimatePresence>
          {!isZoomed && (
            <div>
              <motion.div className="relative">
                <Dialog.Trigger className="w-full">
                  <div className="cursor-zoom-in rounded-xl bg-zinc-100 px-4 py-2 text-center font-mono text-sm dark:bg-zinc-800 md:rounded-3xl">
                    {value.body || '(LaTeX)'}
                  </div>
                </Dialog.Trigger>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isZoomed && (
            <Dialog.Portal forceMount>
              <Dialog.Close className="fixed inset-0 z-50 flex h-screen w-screen cursor-zoom-out items-center justify-center">
                <Dialog.Overlay asChild>
                  <motion.div
                    className="absolute inset-0 bg-black/50"
                    initial={{ opacity: 0, backdropFilter: 'blur(0)' }}
                    animate={{ opacity: 1, backdropFilter: 'blur(12px)' }}
                    exit={{ opacity: 0, backdropFilter: 'blur(0)' }}
                  />
                </Dialog.Overlay>

                <Dialog.Content className="w-full overflow-hidden">
                  <div className="relative flex aspect-[3/2] items-center justify-center">
                    <div className="relative flex aspect-[3/2] w-full max-w-7xl items-center">
                      <motion.div
                        className="absolute inset-0"
                        transition={{
                          type: 'spring',
                          stiffness: 300,
                          damping: 30,
                          duration: 0.5,
                        }}
                      >
                        <div className="rounded-xl px-4 py-2 text-center font-mono text-lg text-white md:rounded-3xl">
                          {value.body || '(LaTeX)'}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </Dialog.Content>
              </Dialog.Close>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </Dialog.Root>
    </div>
  )
}
