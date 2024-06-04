'use client'

import { useRef } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { AboutSection } from '@/components/about/about-section'
import { MenuHover, useMenuSlideIn } from '@/components/animation'
import { ContactSection } from '@/components/contact/contact-section'
import { ModeToggle } from '@/components/mode-toggle'
import { PortfolioSection } from '@/components/portfolio/portfolio-section'

import { useParallax, useWindowSize } from '@/hooks'
import { itxLogo, topSectionImage } from '@/images'
import { getBreakpointWidth } from '@/utils'
import { LazyMotion, domAnimation, m, useScroll } from 'framer-motion'

export default function Home() {
  const slideInAnimation = useMenuSlideIn()
  const size = useWindowSize()
  const menuContainerRef = useRef(null)
  const menuRef = useRef(null)
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: scrollRef })
  const parallaxProgress = useParallax(scrollYProgress, [
    // @ts-ignore
    menuContainerRef.current?.clientHeight -
      // @ts-ignore
      menuRef.current?.clientHeight * 1.2,
    0,
  ])

  const parallaxStyle =
    // enable paralllax only on tablet and desktop
    size.width >= getBreakpointWidth('md') ? { y: parallaxProgress } : {}

  return (
    <main className="flex flex-col gap-24 lg:gap-32">
      <section className="relative flex min-h-screen w-full flex-col">
        {/* <LazyMotion features={domAnimation}>
          <BackgroundBubbles />
        </LazyMotion> */}
        <ModeToggle className="absolute right-0 top-0 mr-10 mt-10" />
        <div className="flex grow flex-col gap-12 px-12 pb-12 pt-24 md:container md:gap-0 md:p-24">
          <div>
            <h1>Andrzej Sienkiewicz</h1>
            <Image
              className="pointer-events-none my-10 max-w-48 select-none"
              src={itxLogo}
              priority
              alt="Logo"
            />
          </div>
          <div
            ref={menuContainerRef}
            className="relative flex grow select-none flex-col items-center justify-evenly gap-12 md:flex-row md:items-start md:justify-between"
          >
            <LazyMotion features={domAnimation}>
              <m.div className="md:mt-24" ref={menuRef} style={parallaxStyle}>
                <ul className="space-y-5" ref={slideInAnimation}>
                  <li>
                    <MenuHover>
                      <Link href="#about">
                        <h3>About</h3>
                      </Link>
                    </MenuHover>
                  </li>
                  <li>
                    <MenuHover>
                      <Link href="#portfolio">
                        <h3>Portfolio</h3>
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
              {/* <div className="self-end h-full w-full max-w-2xl">
                <Spinner3D />
              </div> */}
              <m.div
                className="mx-auto h-full w-full max-w-md self-end lg:mx-0 lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  className="pointer-events-none dark:invert"
                  src={topSectionImage}
                  alt="Illustration"
                  priority
                />
              </m.div>
            </LazyMotion>
          </div>
        </div>
        <hr ref={scrollRef} className="w-full" />
      </section>

      <AboutSection />
      {/* <hr className="w-full" /> */}
      <PortfolioSection />
      {/* <hr className="w-full" /> */}
      <ContactSection />
    </main>
  )
}
