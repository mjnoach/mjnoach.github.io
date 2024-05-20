'use client'

import { useRef } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { MenuHover, useMenuSlideIn } from '@/components/animation'
import { GithubButton } from '@/components/buttons/github'
import { LinkedinButton } from '@/components/buttons/linkedin'
import { ContactForm } from '@/components/contact-form'
import { ModeToggle } from '@/components/mode-toggle'
import { Portfolio } from '@/components/portfolio'

import { useParallax, useWindowSize } from '@/lib/hooks'
import { getBreakpointWidth } from '@/lib/utils'

import imgAppLaunch from '../../public/app-launch.svg'
import imgFinanceGrowth from '../../public/finance-growth.svg'
import imgLogo from '../../public/itx.svg'

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
    <main className="flex flex-col gap-8 md:gap-12 lg:gap-32">
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
              src={imgLogo}
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
                  src={imgAppLaunch}
                  alt="Illustration"
                  priority
                />
              </m.div>
            </LazyMotion>
          </div>
        </div>
        <hr ref={scrollRef} className="w-full" />
      </section>

      <section id="about" className="container">
        <h2 className="mb-8">About</h2>
        <div className="rounded-lg border">
          <div className="space-y-8 p-8 text-justify text-lg">
            <p>
              I specialize in providing top-tier IT services and consulting,
              tailored to meet the unique needs of businesses. With extensive
              expertise in full stack development, my primary technology stack
              includes TypeScript, React.js, and Node.js, though I have
              experience with a broad range of technologies and programming
              languages, such as PHP, SQL, Docker, Kubernetes, GraphQL, and
              Ruby. My professional background encompasses both independent
              contracting and full-time roles, collaborating with international
              teams on remote and on-site projects.
            </p>
            <p>
              My services focus on delivering comprehensive IT solutions, from
              building and maintaining customer-facing and internal web
              applications to extending functionalities of existing systems.
              Additionally, I have experience in improving software release
              processes, enhancing SEO metrics, and developing open-source
              projects, showcasing a commitment to innovation and community
              contributions.
            </p>
            <p>
              I am dedicated to providing efficient, reliable, and scalable
              solutions that drive business success. By leveraging my expertise
              and logical approach, I help businesses navigate the complexities
              of technology, ensuring seamless integration and optimal
              performance. My continuous learning ethos ensures I stay ahead of
              industry trends, delivering cutting-edge solutions and strategic
              IT consulting to my clients.
            </p>
            <div className="flex justify-end gap-2">
              <GithubButton href="https://github.com/mjnoach" />
              <LinkedinButton />
            </div>
          </div>
        </div>
      </section>
      {/* <hr className="w-full" /> */}

      <section id="portfolio" className="container">
        <h2 className="mb-8">Portfolio</h2>
        <Portfolio />
      </section>
      {/* <hr className="w-full" /> */}

      <section id="contact" className="container">
        <h2 className="mb-8">Contact</h2>
        <div className="mx-auto flex flex-col rounded-lg border bg-background pt-0 md:gap-8 md:px-8 md:pb-8">
          <h4 className="p-8 text-center">
            Reach out and let&apos;s work on a project together!
          </h4>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Image
              src={imgFinanceGrowth}
              className="pointer-events-none -mb-20 -mt-14 select-none dark:invert sm:-mb-28 sm:-mt-16 md:-mt-10 lg:-mb-20 lg:-mt-14 xl:-mb-28 xl:-mt-24"
              alt="Illustration"
            />
            <div className="p-8 md:p-0">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
