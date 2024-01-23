'use client'

import Autoplay from 'embla-carousel-autoplay'

import { LazyMotion, domAnimation, m } from 'framer-motion'
import React from 'react'

import { Card, CardContent } from './ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'

export function PortfolioCarousel({}: React.HTMLAttributes<HTMLElement>) {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  return (
    <div className="w-full justify-center p-10 items-center">
      <Carousel
        plugins={[plugin.current]}
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
                        <CardContent
                          className="flex h-[300px] cursor-pointer items-center justify-center rounded-lg bg-cover p-6"
                          style={{
                            backgroundImage:
                              value === 'Strapi'
                                ? "url('/strapi-plugin-cron.png')"
                                : '',
                          }}
                        >
                          <h4>{value}</h4>
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
