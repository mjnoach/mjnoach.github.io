import { useState } from 'react'

import Image, { StaticImageData } from 'next/image'

import { ExternalLinkButton } from '../buttons/external-link'
import { GithubButton } from '../buttons/github'

import { images } from '@/images'
import { cn } from '@/utils'

const entries: EntryData[] = [
  {
    title: 'Video Trim & Export Tool',
    description: `
      Video Trim & Export Tool is a browser-based web application that
      allows users to upload a video, trim it to the desired length, and
      export it as MP4, MP3, or GIF. Featuring a clean, modern interface, this
      tool is built with React and leverages ffmpeg.wasm for client-side
      processing. This ensures quick and secure handling of video files
      without the need for server-side operations.`,
    image: { src: images['video-export'] },
    links: {
      github: 'https://github.com/mjnoach/video-export',
      external: 'https://video-export.vercel.app',
    },
    tags: ['React', 'Node', 'FFmpeg'],
  },
  {
    title: 'Strapi Cron Plugin',
    description: `
      Strapi Cron Plugin is an open-source addition to the Strapi CMS,
      designed to simplify the creation, testing, and monitoring of server
      jobs directly from the CMS dashboard. Built with Node and React,
      this plugin adheres to the Strapi Design System guidelines, ensuring
      seamless integration and a consistent user experience. By providing an
      intuitive interface, it enhances the functionality of Strapi, improving
      user workflows and the utility of the CMS.`,
    image: { src: images['strapi-plugin-cron'] },
    links: {
      github: 'https://github.com/innovato/strapi-plugin-cron',
      external: 'https://www.npmjs.com/package/@innovato/strapi-plugin-cron',
    },
    tags: ['React', 'Node', 'Strapi CMS'],
  },
  {
    title: 'Swiper App',
    description: `
      Swiper App is a demo application in which a user can create a profile and swipe through other users' profiles to find a match.
      The frontend is build with React Native using the Expo framework.
      The Backend service features a Golang API and a MariaDB SQL database.
      `,
    image: { src: images['swiper-app'] },
    links: {
      github: 'https://github.com/mjnoach/swiper-app',
      external: 'https://swiper-app-client.vercel.app',
    },
    tags: ['Golang', 'SQL', 'React Native', 'Expo'],
  },
  // {
  //   title: 'Shareboard',
  //   isPlaceholder: true,
  //   description: `Update coming soon...`,
  //   image: { src: images["placeholder"], style: 'object-center' },
  //   links: {
  //     github: 'https://github.com/mjnoach/shareboard',
  //     external: '',
  //   },
  //   tags: ['PHP', 'HTML/CSS'],
  // },
]

export const PortfolioSection = () => (
  <section id="portfolio" className="section-container">
    <h2 className="section-heading">Portfolio</h2>
    <div className="flex flex-col gap-20 lg:gap-24">
      {entries.map((item, index) => (
        <Entry
          key={index}
          title={item.title}
          description={item.description}
          image={item.image}
          links={item.links}
          tags={item.tags}
          isPlaceholder={item.isPlaceholder}
          entryIndex={index}
        />
      ))}
    </div>
  </section>
)

type EntryData = {
  title: string
  description: string
  image: {
    src: string | StaticImageData
    style?: string
  }
  links: {
    github: string
    external: string
  }
  tags?: string[]
  isPlaceholder?: boolean
}

type EntryProps = EntryData & {
  entryIndex: number
}

const Entry = (props: EntryProps) => {
  const [loaded, setLoaded] = useState(false)
  const isEven = props.entryIndex % 2 === 0

  if (isEven)
    return (
      <div className="frame-border">
        <div className="portfolio-entry-container">
          <div className="relative h-fit">
            <Image
              src={props.image.src}
              className={cn('portfolio-entry-image', props.image.style)}
              alt={props.title}
              onLoad={(event) => {
                setLoaded(true)
              }}
            />
            {!loaded && (
              <div className="portfolio-entry-image absolute top-0 -z-10 h-full w-full animate-pulse bg-gray-100/10"></div>
            )}
          </div>
          <div className="flex flex-col">
            <h4 className="portfolio-entry-title">{props.title}</h4>
            <div className="portfolio-entry-content">
              <p className={props.isPlaceholder ? 'text-center' : ''}>
                {props.description}
              </p>
              <div className="mt-8 flex flex-col gap-4">
                <Tags tags={props.tags} style="self-end" />
                <div className="buttons-row self-end">
                  {props.links.github && (
                    <GithubButton href={props.links.github} />
                  )}
                  {props.links.external && (
                    <ExternalLinkButton href={props.links.external} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

  return (
    <div className="frame-border">
      <div className="portfolio-entry-container">
        <div className="flex flex-col">
          <h4 className="portfolio-entry-title">{props.title}</h4>
          <div className="portfolio-entry-content">
            <p className={props.isPlaceholder ? 'text-center' : ''}>
              {props.description}
            </p>
            <div className="mt-8 flex flex-col gap-4">
              <Tags tags={props.tags} style="self-start" />
              <div className="buttons-row self-start">
                {props.links.github && (
                  <GithubButton href={props.links.github} />
                )}
                {props.links.external && (
                  <ExternalLinkButton href={props.links.external} />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="relative row-start-1 h-fit md:col-start-2">
          <Image
            src={props.image.src}
            className={cn('portfolio-entry-image', props.image.style)}
            alt={props.title}
            onLoad={(event) => {
              setLoaded(true)
            }}
          />
          {!loaded && (
            <div className="portfolio-entry-image absolute top-0 -z-10 h-full w-full animate-pulse bg-gray-100/10"></div>
          )}
        </div>
      </div>
    </div>
  )
}

type TagsProps = {
  tags: string[] | undefined
  style?: string
}

const Tags = (props: TagsProps) => {
  if (!props.tags) return null

  return (
    <div className={cn('flex flex-wrap gap-2', props.style)}>
      {props.tags.map((tag, index) => (
        <span
          key={index}
          // className="me-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
          // className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 mr-2 mt-2"
          className="frame-border inline-flex items-center whitespace-nowrap rounded !border-2 px-2 py-1 text-sm font-medium"
        >
          {tag}
        </span>
      ))}
    </div>
  )
}
