'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

import { Footer } from '@/components/Footer'
import { Header } from '@/app/docs/_components/Header'
import { Logo } from '@/components/Logo'
import { Navigation } from '@/components/Navigation'
import { type Section, SectionProvider } from '@/components/SectionProvider'
import { HeroPattern } from './HeroPattern'
// import TableOfContents from './table-of-contents'
// import { getSectionAndTitleBySlug } from '@/lib/api'

export function Layout({ children, allSections }: { children: React.ReactNode, allSections: Record<string, Array<Section>> }) {
  let pathname = usePathname()

  console.log(pathname)
  // export default async function DocPage(props: Props) {
  // let params = await props.params;

  // let sectionAndTitle = getSectionAndTitleBySlug(pathname);

  // let [post, tableOfContents] = await Promise.all([
  //   getDocPageBySlug(params.slug),
  //   generateTableOfContents(params.slug),
  // ]);

  // if (!post) {
  //   return notFound();
  // }


  return (
    <SectionProvider sections={allSections[pathname] ?? []}>
      <HeroPattern />
      <div className="h-full lg:ml-72 xl:ml-80">
        <motion.header
          layoutScroll
          className="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex"
        >
          <div className="contents lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto lg:border-r lg:border-zinc-900/10 lg:px-6 lg:pt-4 lg:pb-8 xl:w-80 lg:dark:border-white/10">
            <div className="hidden lg:flex">
              <Link href="/" aria-label="Home">
                <Logo className="h-8" />
              </Link>
            </div>
            <Header />
            <Navigation className="hidden lg:mt-10 lg:block" />
          </div>
        </motion.header>

        <div className="mx-auto grid w-full max-w-2xl grid-cols-1 gap-10 xl:max-w-5xl xl:grid-cols-[minmax(0,1fr)_var(--container-2xs)]">
          {/* <h1>{allSections[pathname]}</h1> */}
          <main className="flex-auto">{children}</main>

          <div className="max-xl:hidden">
            <div className="sticky top-14 max-h-[calc(100svh-3.5rem)] overflow-x-hidden px-6 pt-10 pb-24">
              {/* {navigation.map((group, groupIndex) => (
                <NavigationGroup
                  key={group.title}
                  group={group}
                  className={groupIndex === 0 ? 'md:mt-0' : ''}
                />
                
              ))} */}
              {/* <TableOfContents tableOfContents={ } /> */}
              Table of Contents
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </SectionProvider>
  )
}
