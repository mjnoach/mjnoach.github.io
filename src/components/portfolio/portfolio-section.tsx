import Image, { StaticImageData } from 'next/image'

import { ExternalLinkButton } from '../buttons/external-link'
import { GithubButton } from '../buttons/github'

import {
  placeholderImg,
  strapiProjectImage,
  swiperAppImg,
  videoExportProjectImg,
} from '@/images'
import { cn } from '@/utils'

const entries: EntryProps[] = [
  {
    title: 'Video Trim & Export Tool',
    description: `The Video Trim & Export Tool is a browser-based web application that
        allows users to upload a video, trim it to the desired length, and
        export it as MP4, MP3, or GIF. Featuring a clean, modern interface, this
        tool is built with React and leverages ffmpeg.wasm for client-side
        processing. This ensures quick and secure handling of video files
        without the need for server-side operations.`,
    image: { src: videoExportProjectImg },
    links: {
      github: 'https://github.com/mjnoach/video-export',
      external: 'https://video-export.vercel.app',
    },
    tags: ['React', 'Node', 'FFmpeg'],
  },
  {
    title: 'Strapi Cron Plugin',
    description: `The Strapi Cron Plugin is an open-source addition to the Strapi CMS,
        designed to simplify the creation, testing, and monitoring of server
        jobs directly from the CMS dashboard. Built with Node and React,
        this plugin adheres to the Strapi Design System guidelines, ensuring
        seamless integration and a consistent user experience. By providing an
        intuitive interface, it enhances the functionality of Strapi, improving
        user workflows and the utility of the CMS.`,
    image: { src: strapiProjectImage },
    links: {
      github: 'https://github.com/innovato/strapi-plugin-cron',
      external: 'https://www.npmjs.com/package/@innovato/strapi-plugin-cron',
    },
    tags: ['React', 'Node', 'Strapi CMS'],
  },
  {
    title: 'Swiper App',
    isPlaceholder: true,
    description: `Update coming soon...`,
    image: { src: swiperAppImg },
    links: {
      github: 'https://github.com/mjnoach/swiper-app',
      external: '',
    },
    tags: ['Golang', 'React Native', 'Expo'],
  },
  {
    title: 'Shareboard',
    isPlaceholder: true,
    description: `Update coming soon...`,
    image: { src: placeholderImg, style: 'object-center' },
    links: {
      github: 'https://github.com/mjnoach/shareboard',
      external: '',
    },
    tags: ['PHP', 'HTML/CSS'],
  },
]

export const PortfolioSection = () => (
  <section id="portfolio" className="container">
    <h2 className="section-heading">Portfolio</h2>
    <div className="flex flex-col gap-20 lg:gap-24">
      {entries.map((item, index) =>
        !(index % 2) ? (
          <EntryEven
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            links={item.links}
            tags={item.tags}
            isPlaceholder={item.isPlaceholder}
          />
        ) : (
          <EntryOdd
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            links={item.links}
            tags={item.tags}
            isPlaceholder={item.isPlaceholder}
          />
        )
      )}
    </div>
  </section>
)

type EntryProps = {
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

const EntryEven = (props: EntryProps) => {
  return (
    <div className="frame-border">
      <div className="portfolio-entry-container">
        <div>
          <Image
            src={props.image.src}
            className={cn('portfolio-entry-image', props.image.style)}
            alt={props.title}
          />
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
}

const EntryOdd = (props: EntryProps) => {
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
        <div className="row-start-1 md:col-start-2">
          <Image
            src={props.image.src}
            className={cn('portfolio-entry-image', props.image.style)}
            alt={props.title}
          />
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
    <div className={cn('flex gap-2', props.style)}>
      {props.tags.map((tag, index) => (
        <span
          key={index}
          // className="me-2 inline-flex items-center rounded bg-blue-100 px-2 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300"
          className="/bg-gray-100 /text-gray-800 /dark:bg-gray-700 /dark:text-gray-300 frame-border /mr-2 /mt-2 inline-flex items-center rounded !border-2 px-2 py-1 text-sm font-medium"
        >
          {tag}
        </span>
      ))}
    </div>
  )
}
