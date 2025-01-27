'use client'

import { forwardRef } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { motion, useScroll, useTransform } from 'framer-motion'

import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'
import {
  MobileNavigation,
  useIsInsideMobileNavigation,
} from '@/components/MobileNavigation'
import { useMobileNavigationStore } from '@/components/MobileNavigation'
import { MobileSearch, Search } from '@/components/Search'
import { ThemeToggle } from '@/components/ThemeToggle'

function TopLevelNavItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm/5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
      >
        {children}
      </Link>
    </li>
  )
}

export const Header = forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<typeof motion.div>
>(function Header({ className, ...props }, ref) {
  let { isOpen: mobileNavIsOpen } = useMobileNavigationStore()
  let isInsideMobileNavigation = useIsInsideMobileNavigation()

  let { scrollY } = useScroll()
  let bgOpacityLight = useTransform(scrollY, [0, 72], [0.5, 0.9])
  let bgOpacityDark = useTransform(scrollY, [0, 72], [0.2, 0.8])

  return (
    <motion.div
      {...props}
      ref={ref}
      className={clsx(
        className,
        'fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 px-4 transition sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80',
        !isInsideMobileNavigation &&
        'backdrop-blur-xs lg:left-72 xl:left-80 dark:backdrop-blur-sm',
        isInsideMobileNavigation
          ? 'bg-white dark:bg-zinc-900'
          : 'bg-white/[var(--bg-opacity-light)] dark:bg-zinc-900/[var(--bg-opacity-dark)]',
      )}
      style={
        {
          '--bg-opacity-light': bgOpacityLight,
          '--bg-opacity-dark': bgOpacityDark,
        } as React.CSSProperties
      }
    >
      <div
        className={clsx(
          'absolute inset-x-0 top-full h-px transition',
          (isInsideMobileNavigation || !mobileNavIsOpen) &&
          'bg-zinc-900/7.5 dark:bg-white/7.5',
        )}
      />
      <Search />
      <div className="flex items-center gap-5 lg:hidden">
        <MobileNavigation />
        <Link href="/" aria-label="Home">
          <Logo className="h-6" />
        </Link>
      </div>
      <div className="flex items-center gap-5">
        <nav className="hidden md:block">
          <ul role="list" className="flex items-center gap-8">
            <TopLevelNavItem href="/docs">V5.4 Documentation</TopLevelNavItem>
            {/* <TopLevelNavItem href="/docs">Blog</TopLevelNavItem> */}
            {/* <TopLevelNavItem href="/showcase">Showcase</TopLevelNavItem> */}
            <ThemeToggle />
          </ul>
        </nav>
        <div className="hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 md:dark:bg-white/15" />
        <div className="flex gap-4">
          <MobileSearch />
          <ul className="flex items-center gap-6">
            <Link href="https://discord.gg/Jp2HFx3KTH" target="_blank">
              <span className="sr-only">Discord</span>
              <svg className="size-5 fill-black/40 dark:fill-gray-400" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'>
                <path d='M524.5 69.8a1.5 1.5 0 0 0-.8-.7A485 485 0 0 0 404.1 32a1.8 1.8 0 0 0-1.9.9 338 338 0 0 0-14.9 30.6 447.8 447.8 0 0 0-134.4 0 310 310 0 0 0-15.1-30.6 1.9 1.9 0 0 0-1.9-.9 483.7 483.7 0 0 0-119.8 37.1 1.7 1.7 0 0 0-.8.7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7 348 348 0 0 0 30-48.8 1.9 1.9 0 0 0-1-2.6 321 321 0 0 1-45.9-21.9 1.9 1.9 0 0 1-.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9.2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1-.2 3.1 301.4 301.4 0 0 1-45.9 21.8 1.9 1.9 0 0 0-1 2.6 391 391 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1.7 486 486 0 0 0 147.2-74.1 1.9 1.9 0 0 0 .8-1.4c12.2-126.7-20.6-236.8-87-334.5m-302 267.8c-29 0-52.8-26.6-52.8-59.2s23.4-59.3 52.8-59.3c29.7 0 53.3 26.8 52.8 59.2 0 32.7-23.4 59.3-52.8 59.3m195.4 0c-29 0-52.8-26.6-52.8-59.2s23.3-59.3 52.8-59.3c29.7 0 53.3 26.8 52.8 59.2 0 32.7-23.2 59.3-52.8 59.3'></path>
              </svg>
            </Link>
            <Link href="https://github.com/AurelianSpodarec/LuaDocs" target="_blank">
              <span className="sr-only">GitHub</span>
              <svg className='size-5 fill-black/40 dark:fill-gray-400' viewBox='0 0 20 20'>
                <path d='M10 0C4.475 0 0 4.475 0 10a9.99 9.99 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.287-.6-1.175-1.025-1.412-.35-.188-.85-.65-.013-.663.788-.013 1.35.725 1.538 1.025.9 1.512 2.337 1.087 2.912.825.088-.65.35-1.088.638-1.338-2.225-.25-4.55-1.112-4.55-4.937 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.274.1-2.65 0 0 .837-.262 2.75 1.026a9.3 9.3 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.02 10.02 0 0 0 20 10c0-5.525-4.475-10-10-10'></path>
              </svg>
            </Link>
          </ul>
        </div>
      </div>
    </motion.div>
  )
})
