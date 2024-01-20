'use client'

import Image from 'next/image'

import {
  MenuHoverAnimation,
  useMenuAnimation,
} from '@/components/menu-animation'
import { ModeToggle } from '@/components/mode-toggle'
import { PortfolioCarousel } from '@/components/portfolio-carousel'

export default function Home() {
  const menuAnimationScope = useMenuAnimation()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="container relative min-h-screen place-items-center p-24">
        <div className="flex flex-col">
          <div className="absolute right-0 top-0 mr-10 mt-10">
            <ModeToggle />
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Andrzej Sienkiewicz
          </h1>
          <Image
            className="relative my-10"
            src="/itx.svg"
            alt="Logo"
            width={180}
            height={113.44}
            priority
          />
        </div>
        <div className="flex items-center justify-between">
          <ul className="mt-32 space-y-5 text-2xl" ref={menuAnimationScope}>
            <li>
              <MenuHoverAnimation>
                <a href="#about">About</a>
              </MenuHoverAnimation>
            </li>
            <li>
              <MenuHoverAnimation>
                <a href="#portfolio">Portfolio</a>
              </MenuHoverAnimation>
            </li>
            <li>
              <MenuHoverAnimation>
                <a href="#contact">Contact</a>
              </MenuHoverAnimation>
            </li>
          </ul>
          <Image
            className="relative dark:invert"
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
