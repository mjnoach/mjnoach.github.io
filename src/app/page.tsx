import Image from 'next/image'

import { MenuAnimation } from '@/components/menu-animation'
import { PortfolioCarousel } from '@/components/portfolio-carousel'

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
        <div className="flex items-center justify-between">
          <ul className="mt-32 space-y-5 text-2xl">
            <li>
              <MenuAnimation>
                <a href="#about">About</a>
              </MenuAnimation>
            </li>
            <li>
              <MenuAnimation>
                <a href="#portfolio">Portfolio</a>
              </MenuAnimation>
            </li>
            <li>
              <MenuAnimation>
                <a href="#contact">Contact</a>
              </MenuAnimation>
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
      <hr className="w-full" />

      <section
        id="about"
        className="container relative min-h-screen place-items-center p-24"
      >
        <h2 className="mb-8 font-heading text-5xl font-medium">About</h2>
        <div className="grid max-w-[800px] items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]"></div>
      </section>
      <hr className="w-full" />

      <section
        id="portfolio"
        className="container relative min-h-screen place-items-center p-24"
      >
        <h2 className="mb-8 font-heading text-5xl font-medium">Portfolio</h2>
        <PortfolioCarousel />
      </section>
      <hr className="w-full" />

      <section
        id="contact"
        className="container relative min-h-screen place-items-center p-24"
      >
        <h2 className="mb-8 font-heading text-5xl font-medium">Contact</h2>
        <div className="grid max-w-[800px] items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]"></div>
      </section>
    </main>
  )
}
