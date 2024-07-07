import { cache } from 'react'
import { notFound } from 'next/navigation'
import { getAllEpisodes } from '@/lib/episodes'
import EpisodeClient from './EpisodeClient'

const getEpisode = cache(async (id) => {
  let allEpisodes = await getAllEpisodes()
  let episode = allEpisodes.find((episode) => episode.id.toString() === id)

  if (!episode) {
    notFound()
  }

  return episode
})

export async function generateMetadata({ params }) {
  let episode = await getEpisode(params.episode)

  return {
    title: episode.title,
  }
}

export default async function Episode({ params }) {
  let episode = await getEpisode(params.episode)

  return <EpisodeClient episode={episode} />
}
