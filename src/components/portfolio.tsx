'use client'

import React from 'react'

import Image from 'next/image'

import imgStrapi from '../../public/strapi-plugin-cron.png'
import imgVideoEditor from '../../public/video-editor.png'
import { GithubButton } from './buttons/github'

export function Portfolio({}: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className="flex flex-col gap-24">
      <div className="mx-auto flex flex-col gap-8 rounded-lg border bg-background">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:px-8">
          <div>
            <h4 className="p-8 text-center">Video Editor & Export Tool</h4>
            <div className="space-y-8 p-8 text-justify text-lg md:px-0">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Turpis massa sed elementum tempus egestas sed sed risus pretium.
                Vel quam elementum pulvinar etiam non. Laoreet sit amet cursus
                sit amet dictum sit amet. Viverra suspendisse potenti nullam ac
                tortor vitae purus faucibus ornare. Id diam vel quam elementum
                pulvinar etiam non quam. Ipsum suspendisse ultrices gravida
                dictum fusce. Amet nisl purus in mollis nunc.
              </p>
              <div className="flex justify-start">
                <GithubButton href="https://github.com/mjnoach" />
              </div>
            </div>
          </div>
          <Image
            src={imgVideoEditor}
            className="row-start-1 select-none rounded-lg md:col-start-2 md:mt-8 md:border"
            alt="Illustration"
          />
        </div>
      </div>

      <div className="mx-auto flex flex-col gap-8 rounded-lg border bg-background">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:px-8">
          <Image
            src={imgStrapi}
            className="select-none rounded-lg md:mt-8 md:border"
            alt="Illustration"
          />
          <div>
            <h4 className="p-8 text-center">Strapi Cron Plugin</h4>
            <div className="space-y-8 p-8 text-justify text-lg md:px-0">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Turpis massa sed elementum tempus egestas sed sed risus pretium.
                Vel quam elementum pulvinar etiam non. Laoreet sit amet cursus
                sit amet dictum sit amet. Viverra suspendisse potenti nullam ac
                tortor vitae purus faucibus ornare. Id diam vel quam elementum
                pulvinar etiam non quam. Ipsum suspendisse ultrices gravida
                dictum fusce. Amet nisl purus in mollis nunc.
              </p>
              <div className="flex justify-end">
                <GithubButton href="https://github.com/mjnoach" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
