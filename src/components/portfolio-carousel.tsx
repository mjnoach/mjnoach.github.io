'use client'

import Autoplay from 'embla-carousel-autoplay'
import { motion } from 'framer-motion'

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
        {Array.from(['Strapi', 'Dating App', '3']).map((value, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
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
                    <span className="text-4xl font-semibold">{value}</span>
                  </CardContent>
                </motion.div>
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
