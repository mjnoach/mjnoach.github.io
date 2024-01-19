import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="container relative min-h-screen w-full place-items-center p-24">
        <h1 className='font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl'>
          Andrzej Sienkiewicz
        </h1>
        <Image
          className="relative"
          src="/itx.svg"
          alt="Logo"
          width={180}
          height={37}
          priority
        />
        <ul className='text-2xl space-y-4 mt-10'>
          <li>
            <a href="#about">→ About</a>
          </li>
          <li>
            <a href="#portfolio">→ Portfolio</a>
          </li>
          <li>
            <a href="#contact">→ Contact</a>
          </li>
        </ul>
      </section>

      <section id="about" className="container relative min-h-screen w-full place-items-center p-24">
        <h1 className='font-heading text-5xl font-medium'>
          About
        </h1>
        <div className='grid max-w-[800px] mt-6 items-start gap-10 rounded-lg border border-[#1D2830] p-10 md:grid-cols-[1fr_200px]'></div>
      </section>

      <section id="portfolio" className="container relative min-h-screen w-full place-items-center p-24">
        <h1 className='font-heading text-5xl font-medium'>
          Portfolio
        </h1>
        <div className='grid max-w-[800px] mt-6 items-start gap-10 rounded-lg border border-[#1D2830] p-10 md:grid-cols-[1fr_200px]'></div>
      </section>

      <section id="contact" className="container relative min-h-screen w-full place-items-center p-24">
        <h1 className='font-heading text-5xl font-medium'>
          Contact
        </h1>
        <div className='grid max-w-[800px] mt-6 items-start gap-10 rounded-lg border border-[#1D2830] p-10 md:grid-cols-[1fr_200px]'></div>
      </section>

      <hr className="w-full border-[#1D2830]"></hr>

      <footer>
        <div className='container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0'>
          <Image
            className="relative"
            src="/itx.svg"
            alt="Logo"
            width={35}
            height={35}
          />
          <span className=''>
            © 2024 Andrzej Sienkiewicz
          </span>
        </div>
      </footer>
    </main>
  )
}
