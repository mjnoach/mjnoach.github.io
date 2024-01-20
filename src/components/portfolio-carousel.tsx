'use client'

import Autoplay from 'embla-carousel-autoplay'

import React from 'react'

import { Card, CardContent } from './ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'

export function PortfolioCarousel({
  className,
}: React.HTMLAttributes<HTMLElement>) {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  return (
    <Carousel
      className="mx-auto"
      plugins={[plugin.current]}
      opts={{
        align: 'center',
        loop: true,
      }}
    >
      <CarouselContent>
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex h-[300px] items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
