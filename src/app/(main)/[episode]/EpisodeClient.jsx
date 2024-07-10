'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { FormattedDate } from '@/components/FormattedDate'
import { ArrowLeftIcon } from '@heroicons/react/20/solid'

export default function EpisodeClient({ episode }) {
  const date = new Date(episode.published)
  const [isSticky, setIsSticky] = useState(false)
  const headerRef = useRef(null)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (headerRef.current) {
  //       setIsSticky(
  //         window.scrollY > headerRef.current.getBoundingClientRect().bottom,
  //       )
  //     }
  //   }

  //   window.addEventListener('scroll', handleScroll)
  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [])

  return (
    <article className="py-16 lg:py-36">
      {/* Sticky Back button */}
      <div
        className={`sticky top-0 z-10 ${isSticky ? 'bg-white/95 shadow-md backdrop-blur-sm' : ''}`}
      >
        <div className="container mx-auto px-4 py-4">
          <Link href="/" legacyBehavior>
            <a className="inline-flex items-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition-transform hover:-translate-y-1 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2">
              <ArrowLeftIcon className="mr-2 h-5 w-5" aria-hidden="true" />
              Back to Episodes
            </a>
          </Link>
        </div>
      </div>
      <Container>
        <header ref={headerRef} className="relative flex flex-col">
          <div className="mt-8 flex flex-col gap-6">
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold text-slate-900">
                {episode.title}
              </h1>
              <FormattedDate
                date={date}
                className="order-first font-mono text-sm leading-7 text-slate-500"
              />
            </div>
            <p className="mt-3 text-lg font-medium leading-8 text-slate-700">
              {episode.description}
            </p>
          </div>
        </header>
        <hr className="my-12 border-gray-200" />
        <div className="prose prose-slate mt-14">
          <div dangerouslySetInnerHTML={{ __html: episode.content }} />
        </div>
      </Container>
    </article>
  )
}
