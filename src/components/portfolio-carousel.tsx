'use client'

import React from 'react'

import Image from 'next/image'

import { Card, CardContent } from './ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'

import { strapiProjectImage } from '@/images'
import { LazyMotion, domAnimation, m } from 'framer-motion'

export function PortfolioCarousel({}: React.HTMLAttributes<HTMLElement>) {
  // const plugin = React.useRef(
  //   Autoplay({ delay: 4000, stopOnInteraction: true })
  // )

  return (
    <div className="w-full items-center justify-center p-10">
      <Carousel
        // plugins={[plugin.current]}
        opts={{
          align: 'center',
          loop: true,
        }}
      >
        <CarouselContent>
          {Array.from(['Strapi', 'Dating App', '3']).map((value, index) => (
            <CarouselItem key={index}>
              <LazyMotion features={domAnimation}>
                <m.div
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <div className="p-1">
                    <Card className="overflow-hidden">
                      <m.div
                        whileHover={{ scale: 1.05 }}
                        transition={{
                          type: 'spring',
                          stiffness: 400,
                          damping: 17,
                        }}
                      >
                        <CardContent className="relative flex h-[300px] cursor-pointer items-center justify-center rounded-lg p-6">
                          <Image
                            src={strapiProjectImage}
                            alt={'Strapi'}
                            fill
                            className="object-cover object-left-top"
                          />
                          <h4 className="z-10 bg-white text-black">{value}</h4>
                        </CardContent>
                      </m.div>
                    </Card>
                  </div>
                </m.div>
              </LazyMotion>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
