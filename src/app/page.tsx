'use client'

import { Mail, Phone } from 'lucide-react'

import Image from 'next/image'
import Link from 'next/link'

import { ButtonAnimation } from '@/components/button-animation'
import {
  MenuHoverAnimation,
  useMenuAnimation,
} from '@/components/menu-animation'
import { ModeToggle } from '@/components/mode-toggle'
import { PortfolioCarousel } from '@/components/portfolio-carousel'
import { Button } from '@/components/ui/button'

export default function Home() {
  const menuAnimationScope = useMenuAnimation()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="container min-h-screen p-24">
        <div className="flex flex-col">
          <div className="absolute right-0 top-0 mr-10 mt-10">
            <ModeToggle />
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Andrzej Sienkiewicz
          </h1>
          <Image
            className="my-10"
            src="/itx.svg"
            alt="Logo"
            width={180}
            height={113.44}
            priority
          />
        </div>
        <div className="flex items-center justify-between">
          <ul
            className="mt-32 space-y-5 font-heading text-2xl"
            ref={menuAnimationScope}
          >
            <li>
              <MenuHoverAnimation>
                <Link href="#about">About</Link>
              </MenuHoverAnimation>
            </li>
            <li>
              <MenuHoverAnimation>
                <Link href="#portfolio">Portfolio</Link>
              </MenuHoverAnimation>
            </li>
            <li>
              <MenuHoverAnimation>
                <Link href="#contact">Contact</Link>
              </MenuHoverAnimation>
            </li>
          </ul>
          <Image
            className="dark:invert"
            src="https://illustrations.popsy.co/white/app-launch.svg"
            alt="Illustration"
            width={320}
            height={37}
            priority
          />
        </div>
      </section>
      <hr className="w-full" />

      <section id="about" className="container p-24">
        <h2 className="mb-8 font-heading text-5xl font-medium">About</h2>
        <div className="flex max-w-[800px] flex-col gap-8 rounded-lg border p-4">
          <p className="p-4 text-justify text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="flex justify-end gap-5">
            <ButtonAnimation>
              <a
                href="https://github.com/mjnoach"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="relative"
                  src="/github.svg"
                  alt="Logo"
                  width={40}
                  height={40}
                  priority
                />
              </a>
            </ButtonAnimation>
            <ButtonAnimation>
              <a
                href="https://www.linkedin.com/in/andrzej-sienkiewicz/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="relative"
                  src="/linkedin.svg"
                  alt="Logo"
                  width={40}
                  height={40}
                  priority
                />
              </a>
            </ButtonAnimation>
          </div>
        </div>
      </section>
      <hr className="w-full" />

      <section id="portfolio" className="container p-24">
        <h2 className="mb-8 font-heading text-5xl font-medium">Portfolio</h2>
        <PortfolioCarousel />
      </section>
      <hr className="w-full" />

      <section id="contact" className="container min-h-screen p-24">
        <h2 className="mb-8 font-heading text-5xl font-medium">Contact</h2>
        <div className="max-w-[800px] gap-10 rounded-lg border p-4">
          <div className="h-[200px]" />
          <div className="flex justify-end gap-5">
            <ButtonAnimation>
              <Button>
                <Mail className="h-4 w-4" />
              </Button>
            </ButtonAnimation>
            <ButtonAnimation>
              <Button>
                <Phone className="h-4 w-4" />
              </Button>
            </ButtonAnimation>
          </div>
        </div>
      </section>
    </main>
  )
}
