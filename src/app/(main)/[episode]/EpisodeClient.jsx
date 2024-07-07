'use client'

import Link from 'next/link'
import { Container } from '@/components/Container'
import { FormattedDate } from '@/components/FormattedDate'
import { ArrowLeftIcon } from '@heroicons/react/20/solid'

export default function EpisodeClient({ episode }) {
  let date = new Date(episode.published)

  return (
    <article className="py-16 lg:py-36">
      <Container>
        <header className="flex flex-col">
          <Link href="/" legacyBehavior>
            <a className="inline-flex transform items-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition-transform hover:-translate-y-1 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2">
              <ArrowLeftIcon className="mr-2 h-5 w-5" aria-hidden="true" />
              Back to Episodes
            </a>
          </Link>
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
        <div
          className="prose prose-slate mt-14 [&>h2:nth-of-type(3n)]:before:bg-violet-200 [&>h2:nth-of-type(3n+2)]:before:bg-indigo-200 [&>h2]:mt-12 [&>h2]:flex [&>h2]:items-center [&>h2]:font-mono [&>h2]:text-sm [&>h2]:font-medium [&>h2]:leading-7 [&>h2]:text-slate-900 [&>h2]:before:mr-3 [&>h2]:before:h-3 [&>h2]:before:w-1.5 [&>h2]:before:rounded-r-full [&>h2]:before:bg-cyan-200 [&>ul]:mt-6 [&>ul]:list-['\2013\20'] [&>ul]:pl-5"
          dangerouslySetInnerHTML={{ __html: episode.content }}
        />
      </Container>
    </article>
  )
}
