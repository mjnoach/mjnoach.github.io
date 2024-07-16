import Image from 'next/image'

import { ContactForm } from './contact-form'

import { images } from '@/images'

export const ContactSection = () => (
  <section id="contact" className="section-container">
    <h2 className="section-heading">Contact</h2>
    <div className="frame-border mx-auto flex flex-col bg-background p-4 sm:p-8">
      <h4 className="mb-16 text-center">
        Reach out and let&apos;s work on a project together!
      </h4>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Image
          src={images['finance-growth']}
          className="pointer-events-none -my-20 -mb-16 select-none dark:invert md:-mt-10 lg:-mb-24 lg:-mt-16 xl:-mb-28 xl:-mt-24"
          alt="Illustration"
        />
        <ContactForm />
      </div>
    </div>
  </section>
)
