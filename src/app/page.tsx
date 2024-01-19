import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="container relative min-h-screen place-items-center p-24">
        <div className="flex flex-col">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Andrzej Sienkiewicz
          </h1>
          <Image
            className="relative my-10"
            src="/itx.png"
            alt="Logo"
            width={180}
            height={37}
            priority
          />
        </div>
        <div className="flex justify-between items-center">
          <ul className="text-2xl space-y-4 mt-32">
            <li>
              <a href="#about">→ About</a>
            </li>
            <li>
              <a href="#portfolio">→ Portfolio</a>
            </li>
            <li>
              <a href="#contact">→ Contact</a>
            </li>
          </ul>
          <Image
            className="relative invert"
            src="https://illustrations.popsy.co/white/app-launch.svg"
            alt="Illustration"
            width={320}
            height={37}
            priority
          />
        </div>
      </section>

      <section
        id="about"
        className="container relative min-h-screen place-items-center p-24"
      >
        <h2 className="font-heading text-5xl font-medium mb-6">About</h2>
        <div className="grid max-w-[800px] items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]"></div>
      </section>

      <section
        id="portfolio"
        className="container relative min-h-screen place-items-center p-24"
      >
        <h2 className="font-heading text-5xl font-medium mb-6">Portfolio</h2>
        <Carousel
          className="mx-auto max-w-md"
          opts={{
            align: 'center',
            loop: true,
          }}
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      <section
        id="contact"
        className="container relative min-h-screen place-items-center p-24"
      >
        <h2 className="font-heading text-5xl font-medium mb-6">Contact</h2>
        <div className="grid max-w-[800px] items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]"></div>
      </section>
    </main>
  )
}
