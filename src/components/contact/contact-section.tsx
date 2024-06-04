import Image from 'next/image'

import { ContactForm } from './contact-form'

import { contactSectionImage } from '@/images'

export const ContactSection = () => (
  <section id="contact" className="container">
    <h2 className="section-title">Contact</h2>
    <div className="frame-border mx-auto flex flex-col bg-background p-8">
      <h4 className="mb-16 text-center">
        Reach out and let&apos;s work on a project together!
      </h4>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Image
          src={contactSectionImage}
          className="pointer-events-none -mb-20 -mt-14 select-none dark:invert sm:-mb-28 sm:-mt-16 md:-mt-10 lg:-mb-20 lg:-mt-14 xl:-mb-28 xl:-mt-24"
          alt="Illustration"
        />
        <ContactForm />
      </div>
    </div>
  </section>
)
