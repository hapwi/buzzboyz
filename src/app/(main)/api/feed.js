import { Feed } from 'rss'

export default function handler(req, res) {
  const feed = new Feed({
    title: 'Their Side',
    description:
      'Conversations with the most tragically misunderstood people of our time.',
    id: 'https://buzzboyz.vercel.app/',
    link: 'https://buzzboyz.vercel.app/',
    language: 'en',
    image: 'http://example.com/image.png',
    favicon: 'http://example.com/favicon.ico',
    copyright: 'All rights reserved 2024, Their Side',
    updated: new Date(),
    generator: 'https://github.com/jpmonette/feed',
    feedLinks: {
      rss: 'https://buzzboyz.vercel.app/api/feed',
    },
    author: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      link: 'http://example.com/johndoe',
    },
  })

  // Add items to the feed
  const episodes = [
    {
      title: 'Bill Lumbergh',
      guid: '5',
      id: '5',
      pubDate: 'Thu, 24 Feb 2022 00:00:00 GMT',
      description:
        'He’s going to need you to go ahead and come in on Saturday, but there’s a lot more to the story than you think.',
      content: `<h2 id="topics">Topics</h2>
                <ul>
                <li>What are TPS reports exactly, and what’s the motivation for adding the cover sheet?</li>
                <li>How Bill preserves such a cool and calm demeanor, despite the extreme consequences Initech faces for not finishing their Y2K upgrades on time, and why it’s important to protect the staff from that stress</li>
                <li>Why suspenders and belts aren’t enough on their own, and should be used together</li>
                <li>The backstory behind how Bill purchased his Porsche 911</li>
                <li>The real reason he needed the red stapler for himself</li>
                </ul>
                <h2 id="sponsors">Sponsors</h2>
                <ul>
                <li><a href="#">Initech</a> — Pioneers of the TPS report, Initech is actively looking for job-seekers with people skills who can work with customers to gather specifications and deliver them to the software people.</li>
                <li><a href="#">Globex Corporation</a> — Just a friendly and innocent high-tech company, with a casual work environment and an office without walls. Anything you’ve heard about a “doomsday device” is pure conjecture and not based in fact.</li>
                </ul>
                <h2 id="links">Links</h2>
                <ul>
                <li>Bill Lumbergh’s <a href="#">Twitter profile</a></li>
                <li>Bill Lumbergh’s <a href="#">personal website</a></li>
                <li>“What’s happening?”, Bill’s new book on effective management <a href="#">on Amazon</a></li>
                </ul>`,
      enclosure: {
        url: 'https://buzzboyz.vercel.app/episode-005.mp3',
        type: 'audio/mpeg',
      },
    },
    // Add more episodes as needed
  ]

  episodes.forEach((episode) => {
    feed.addItem({
      title: episode.title,
      id: episode.id,
      link: `https://buzzboyz.vercel.app/episode-${episode.id}`,
      description: episode.description,
      content: episode.content,
      author: [
        {
          name: 'John Doe',
          email: 'johndoe@example.com',
          link: 'http://example.com/johndoe',
        },
      ],
      date: new Date(episode.pubDate),
      enclosure: episode.enclosure,
    })
  })

  res.setHeader('Content-Type', 'application/rss+xml')
  res.status(200).send(feed.rss2())
}
