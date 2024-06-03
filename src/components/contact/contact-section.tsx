import Image from 'next/image'

import { ContactForm } from './contact-form'

import { contactSectionImage } from '@/images'

export const ContactSection = () => (
  <section id="contact" className="container">
    <h2 className="mb-8">Contact</h2>
    <div className="mx-auto flex flex-col rounded-lg border bg-background pt-0 md:gap-8 md:px-8 md:pb-8">
      <h4 className="p-8 text-center">
        Reach out and let&apos;s work on a project together!
      </h4>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Image
          src={contactSectionImage}
          className="pointer-events-none -mb-20 -mt-14 select-none dark:invert sm:-mb-28 sm:-mt-16 md:-mt-10 lg:-mb-20 lg:-mt-14 xl:-mb-28 xl:-mt-24"
          alt="Illustration"
        />
        <div className="p-8 md:p-0">
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
)
