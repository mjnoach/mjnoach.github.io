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
        tool is built with React.js and leverages ffmpeg.wasm for client-side
        processing. This ensures quick and secure handling of video files
        without the need for server-side operations.`,
    imageSrc: videoExportProjectImg,
    links: {
      github: 'https://github.com/mjnoach/video-export',
      external: 'https://video-export.vercel.app',
    },
  },
  {
    title: 'Strapi Cron Plugin',
    description: `The Strapi Cron Plugin is an open-source addition to the Strapi CMS,
        designed to simplify the creation, testing, and monitoring of server
        jobs directly from the CMS dashboard. Built with Node.js and React.js,
        this plugin adheres to the Strapi Design System guidelines, ensuring
        seamless integration and a consistent user experience. By providing an
        intuitive interface, it enhances the functionality of Strapi, improving
        user workflows and the utility of the CMS.`,
    imageSrc: strapiProjectImage,
    links: {
      github: 'https://github.com/innovato/strapi-plugin-cron',
      external: 'https://www.npmjs.com/package/@innovato/strapi-plugin-cron',
    },
  },
  {
    title: 'Swiper App',
    placeholder: true,
    description: `Update coming soon...`,
    imageSrc: swiperAppImg,
    links: {
      github: 'https://github.com/mjnoach/swiper-app',
      external: '',
    },
  },
  {
    title: 'Shareboard',
    placeholder: true,
    description: `Update coming soon...`,
    imageSrc: placeholderImg,
    links: {
      github: 'https://github.com/mjnoach/shareboard',
      external: '',
    },
  },
]

export const PortfolioSection = () => (
  <section id="portfolio" className="container">
    <h2 className="mb-8">Portfolio</h2>
    <div className="flex flex-col gap-24">
      {entries.map((item, index) =>
        index % 2 ? (
          <EntryEven
            key={index}
            title={item.title}
            description={item.description}
            imageSrc={item.imageSrc}
            links={item.links}
            placeholder={item.placeholder}
          />
        ) : (
          <EntryOdd
            key={index}
            title={item.title}
            description={item.description}
            imageSrc={item.imageSrc}
            links={item.links}
            placeholder={item.placeholder}
          />
        )
      )}
    </div>
  </section>
)

type EntryProps = {
  title: string
  description: string
  imageSrc: string | StaticImageData
  links: {
    github: string
    external: string
  }
  placeholder?: boolean
}

const EntryOdd = (props: EntryProps) => {
  return (
    <div className="rounded-lg border">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:px-8 md:pb-8">
        <div className="flex flex-col">
          <h4 className="p-8 text-center">{props.title}</h4>
          <div className="flex grow flex-col justify-between space-y-8 p-8 text-justify text-lg md:p-0 md:px-0 lg:pt-8">
            <p className={props.placeholder ? 'text-center' : ''}>
              {props.description}
            </p>
            <div className="flex justify-start gap-2">
              {props.links.github && <GithubButton href={props.links.github} />}
              {props.links.external && (
                <ExternalLinkButton href={props.links.external} />
              )}
            </div>
          </div>
        </div>
        <div className="row-start-1 md:col-start-2">
          <h4 className="hidden p-8 text-center md:invisible md:block lg:hidden">
            {props.title}
          </h4>
          <Image
            src={props.imageSrc}
            className={cn('select-none rounded-lg md:border lg:mt-8')}
            alt={props.title}
          />
        </div>
      </div>
    </div>
  )
}

const EntryEven = (props: EntryProps) => {
  return (
    <div className="rounded-lg border">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:px-8 md:pb-8">
        <div>
          <h4 className="hidden p-8 text-center md:invisible md:block lg:hidden">
            {props.title}
          </h4>
          <Image
            src={props.imageSrc}
            className={cn('select-none rounded-lg md:border lg:mt-8')}
            alt={props.title}
          />
        </div>
        <div className="flex flex-col">
          <h4 className="p-8 text-center">{props.title}</h4>
          <div className="flex grow flex-col justify-between space-y-8 p-8 text-justify text-lg md:p-0 md:px-0 lg:pt-8">
            <p className={props.placeholder ? 'text-center' : ''}>
              {props.description}
            </p>
            <div className="flex justify-end gap-2">
              {props.links.github && <GithubButton href={props.links.github} />}
              {props.links.external && (
                <ExternalLinkButton href={props.links.external} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
