'use client'

import React from 'react'

import Image from 'next/image'

import imgStrapi from '../../public/strapi-plugin-cron.png'
import imgVideoEditor from '../../public/video-editor.png'
import { ExternalLinkButton } from './buttons/external-link'
import { GithubButton } from './buttons/github'

export function Portfolio({}: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className="flex flex-col gap-24">
      <div className="rounded-lg border">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:px-8 md:pb-8">
          <div>
            <h4 className="p-8 text-center">Video Trim & Export Tool</h4>
            <div className="space-y-8 p-8 text-justify text-lg md:p-0 md:px-0 lg:pt-8">
              <p>
                The Video Trim & Export Tool is a browser-based web application
                that allows users to upload a video, trim it to the desired
                length, and export it as MP4, MP3, or GIF. Featuring a clean,
                modern interface, this tool is built with React.js and leverages
                ffmpeg.wasm for client-side processing. This ensures quick and
                secure handling of video files without the need for server-side
                operations.
              </p>
              <div className="flex justify-start gap-2">
                <ExternalLinkButton href="https://vid-export.vercel.app" />
                {/* <GithubButton href="https://github.com/mjnoach/video-editor" /> */}
              </div>
            </div>
          </div>
          <div className="row-start-1 md:col-start-2">
            <h4 className="hidden p-8 text-center md:invisible md:block lg:hidden">
              Video Trim & Export Tool
            </h4>
            <Image
              src={imgVideoEditor}
              className="select-none rounded-lg md:border lg:mt-8"
              alt="Illustration"
            />
          </div>
        </div>
      </div>

      <div className="rounded-lg border">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:px-8 md:pb-8">
          <div>
            <h4 className="hidden p-8 text-center md:invisible md:block lg:hidden">
              Strapi Cron Plugin
            </h4>
            <Image
              src={imgStrapi}
              className="select-none rounded-lg md:border lg:mt-8"
              alt="Illustration"
            />
          </div>
          <div>
            <h4 className="p-8 text-center">Strapi Cron Plugin</h4>
            <div className="space-y-8 p-8 text-justify text-lg md:p-0 md:px-0 lg:pt-8">
              <p>
                The Strapi Cron Plugin is an open-source addition to the Strapi
                CMS, designed to simplify the creation, testing, and monitoring
                of server jobs directly from the CMS dashboard. Built with
                Node.js and React.js, this plugin adheres to the Strapi Design
                System guidelines, ensuring seamless integration and a
                consistent user experience. By providing an intuitive interface,
                it enhances the functionality of Strapi, improving user
                workflows and the utility of the CMS.
              </p>
              <div className="flex justify-end gap-2">
                <GithubButton href="https://github.com/innovato/strapi-plugin-cron" />
                <ExternalLinkButton href="https://www.npmjs.com/package/@innovato/strapi-plugin-cron" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
