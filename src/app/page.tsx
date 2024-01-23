'use client'

import { Mail, Phone } from 'lucide-react'

import { useWindowSize } from '@uidotdev/usehooks'
import Image from 'next/image'
import Link from 'next/link'

import {
  ButtonHover,
  MenuHover,
  useSlideInAnimation,
} from '@/components/animation'
import { ContactForm } from '@/components/contact-form'
import { ModeToggle } from '@/components/mode-toggle'
import { PortfolioCarousel } from '@/components/portfolio-carousel'
import { Button } from '@/components/ui/button'
import { useParallax } from '@/lib/hooks'
import { getBreakpointWidth } from '@/lib/utils'
import { LazyMotion, domAnimation, m, useScroll } from 'framer-motion'
import { useRef } from 'react'

export default function Home() {
  const slideInAnimation = useSlideInAnimation()
  const size = useWindowSize()
  const menuContainerRef = useRef(null)
  const menuRef = useRef(null)
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: scrollRef })
  const parallaxProgress = useParallax(scrollYProgress, [
    // @ts-ignore
    menuContainerRef.current?.clientHeight -
      // @ts-ignore
      menuRef.current?.clientHeight * 0.6,
    0,
  ])

  const parallaxStyle =
    // enable paralllax only on tablet and desktop
    Number(size.width) >= getBreakpointWidth('md')
      ? { y: parallaxProgress }
      : {}

  return (
    <main>
      <section className="relative w-full flex min-h-screen flex-col">
        {/* <BubblesBackground /> */}
        <ModeToggle className="absolute right-0 top-0 mr-10 mt-10" />
        <div className="md:container flex flex-col grow gap-12 md:gap-24 pt-24 px-12 pb-12 md:p-24">
          <div>
            <h1>Andrzej Sienkiewicz</h1>
            <Image
              className="my-10"
              src="/itx.svg"
              alt="Logo"
              width={180}
              height={113.44}
              priority
            />
          </div>
          <div
            ref={menuContainerRef}
            className="relative flex grow flex-col items-center gap-12 justify-evenly md:flex-row md:justify-between md:items-start"
          >
            <LazyMotion features={domAnimation}>
              <m.div ref={menuRef} style={parallaxStyle}>
                <ul className="space-y-5" ref={slideInAnimation}>
                  <li>
                    <MenuHover>
                      <Link href="#portfolio">
                        <h3>Portfolio</h3>
                      </Link>
                    </MenuHover>
                  </li>
                  <li>
                    <MenuHover>
                      <Link href="#about">
                        <h3>About</h3>
                      </Link>
                    </MenuHover>
                  </li>
                  <li>
                    <MenuHover>
                      <Link href="#contact">
                        <h3>Contact</h3>
                      </Link>
                    </MenuHover>
                  </li>
                </ul>
              </m.div>
            </LazyMotion>
            <LazyMotion features={domAnimation}>
              <m.div
                className="self-end"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  className="dark:invert h-full w-full max-w-2xl"
                  src="https://illustrations.popsy.co/white/app-launch.svg"
                  alt="Illustration"
                  width={0}
                  height={0}
                  priority
                />
              </m.div>
            </LazyMotion>
          </div>
        </div>
      </section>
      <hr ref={scrollRef} className="w-full" />

      <section id="portfolio" className="container py-8 md:py-12 lg:py-24">
        <h2 className="mb-8">Portfolio</h2>
        <PortfolioCarousel />
      </section>
      <hr className="w-full" />

      <section id="about" className="container py-8 md:py-12 lg:py-24">
        <h2 className="mb-8">About</h2>
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
            <ButtonHover>
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
            </ButtonHover>
            <ButtonHover>
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
            </ButtonHover>
          </div>
        </div>
      </section>
      <hr className="w-full" />

      <section id="contact" className="container py-8 md:py-12 lg:py-24">
        <h2 className="mb-8">Contact</h2>
        <div className="mx-auto flex flex-col gap-8 rounded-lg bg-background border p-4">
          <h4 className="text-center p-8">
            Reach out and let&apos;s work on a project together!
          </h4>
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
            <ButtonHover>
              <Button>
                <Mail className="h-5 w-5" />
              </Button>
            </ButtonHover>
            <ButtonHover>
              <Button>
                <Phone className="h-5 w-5" />
              </Button>
            </ButtonHover>
          </div>
        </div>
      </section>
    </main>
  )
}
