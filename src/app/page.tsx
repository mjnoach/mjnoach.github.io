'use client'

import { Mail, Phone } from 'lucide-react'

import Image from 'next/image'
import Link from 'next/link'

import BubblesBackground from '@/components/bubbles-background'
import { ButtonAnimation } from '@/components/button-animation'
import { ContactForm } from '@/components/contact-form'
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
      <section className="relative w-full flex min-h-screen flex-col p-24">
        <BubblesBackground />
        <ModeToggle className="absolute right-0 top-0 mr-10 mt-10" />
        <div className="container flex flex-col grow">
          <>
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
          </>
          <div className="flex grow flex-col items-center justify-evenly gap-16 md:flex-row md:justify-between md:gap-0">
            <ul
              className="space-y-5 font-heading text-3xl sm:text-5xl"
              ref={menuAnimationScope}
            >
              <li>
                <MenuHoverAnimation>
                  <Link href="#portfolio">Portfolio</Link>
                </MenuHoverAnimation>
              </li>
              <li>
                <MenuHoverAnimation>
                  <Link href="#about">About</Link>
                </MenuHoverAnimation>
              </li>
              <li>
                <MenuHoverAnimation>
                  <Link href="#contact">Contact</Link>
                </MenuHoverAnimation>
              </li>
            </ul>
            <Image
              className="dark:invert w-[300px] sm:w-[350px] md:w-[400px] lg:w-[500px] xl:w-[600px]"
              src="https://illustrations.popsy.co/white/app-launch.svg"
              alt="Illustration"
              width={0}
              height={0}
              priority
            />
          </div>
        </div>
      </section>
      <hr className="w-full" />

      <section id="portfolio" className="container p-24">
        <h2 className="mb-8 font-heading text-5xl font-medium">Portfolio</h2>
        <PortfolioCarousel />
      </section>
      <hr className="w-full" />

      <section id="about" className="container p-24">
        <h2 className="mb-8 font-heading text-5xl font-medium">About</h2>
        <div className="mx-auto flex flex-col gap-8 rounded-lg bg-background border p-4">
          <div className="p-4 text-justify text-lg space-y-8">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis
              massa sed elementum tempus egestas sed sed risus pretium. Vel quam
              elementum pulvinar etiam non. Laoreet sit amet cursus sit amet
              dictum sit amet. Viverra suspendisse potenti nullam ac tortor
              vitae purus faucibus ornare. Id diam vel quam elementum pulvinar
              etiam non quam. Ipsum suspendisse ultrices gravida dictum fusce.
              Amet nisl purus in mollis nunc. Magna sit amet purus gravida quis
              blandit turpis cursus. Proin libero nunc consequat interdum varius
              sit. Leo a diam sollicitudin tempor id eu. Lobortis scelerisque
              fermentum dui faucibus in. Egestas diam in arcu cursus euismod.
              Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare.
              Velit euismod in pellentesque massa. Placerat orci nulla
              pellentesque dignissim enim sit amet. Eros in cursus turpis massa.
              Neque convallis a cras semper auctor neque vitae tempus quam.
            </p>
            <p>
              Erat imperdiet sed euismod nisi porta. Laoreet suspendisse
              interdum consectetur libero. Amet mauris commodo quis imperdiet
              massa tincidunt nunc pulvinar sapien. A lacus vestibulum sed arcu
              non. Turpis massa tincidunt dui ut ornare lectus sit. Quis enim
              lobortis scelerisque fermentum dui. Condimentum vitae sapien
              pellentesque habitant morbi tristique. Ornare arcu odio ut sem.
              Aliquam faucibus purus in massa tempor nec feugiat nisl pretium.
              Id aliquet lectus proin nibh nisl condimentum id. Convallis tellus
              id interdum velit laoreet id donec ultrices tincidunt. Convallis a
              cras semper auctor. Sit amet mauris commodo quis imperdiet massa
              tincidunt. Vulputate ut pharetra sit amet aliquam id diam. Vitae
              justo eget magna fermentum iaculis eu.
            </p>
          </div>
          <div className="flex justify-end gap-5">
            <ButtonAnimation>
              <a
                href="https://github.com/mjnoach"
                target="_blank"
                rel="noreferrer"
              >
                <Image
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

      <section id="contact" className="container p-24">
        <h2 className="mb-8 font-heading text-5xl font-medium">Contact</h2>
        <div className="mx-auto flex flex-col gap-8 rounded-lg bg-background border p-4">
          <p className="font-heading text-2xl text-center p-8">
            Reach out to work on a project together!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-4">
            <Image
              // src="https://illustrations.popsy.co/white/shaking-hands.svg"
              // src="https://illustrations.popsy.co/white/romantic-dinner.svg"
              // src="https://illustrations.popsy.co/white/hitchhiking.svg"
              // src="https://illustrations.popsy.co/white/online-dating.svg"
              // src="https://illustrations.popsy.co/white/video-call.svg"
              // src="https://illustrations.popsy.co/white/telephone-call.svg"
              // src="https://illustrations.popsy.co/white/question-mark.svg"
              // src="https://illustrations.popsy.co/white/success.svg"
              // src="https://illustrations.popsy.co/white/man-riding-a-rocket.svg"
              // src="https://illustrations.popsy.co/white/communication.svg"
              // src="https://illustrations.popsy.co/white/freelancer.svg"
              src="https://illustrations.popsy.co/white/finance-growth.svg"
              className="dark:invert w-full -mt-20 -mb-14 md:-mb-28"
              alt="Illustration"
              width={400}
              height={37}
            />
            <ContactForm />
          </div>
          <div className="flex justify-end gap-5">
            <ButtonAnimation>
              <Button>
                <Mail className="h-5 w-5" />
              </Button>
            </ButtonAnimation>
            <ButtonAnimation>
              <Button>
                <Phone className="h-5 w-5" />
              </Button>
            </ButtonAnimation>
          </div>
        </div>
      </section>
    </main>
  )
}
