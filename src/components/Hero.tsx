import { ArrowRight } from 'lucide-react'
import heroImage from '../assets/images/hero.png'

const Hero = () => {
  return (
    <section id="hero" className="relative h-[90vh] min-h-[650px] w-full overflow-hidden bg-brand-dark">
      <div
        className="absolute inset-0 bg-cover bg-center animate-kenburns"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <span className="mb-4 font-display text-sm uppercase tracking-[0.3em] text-white/80">
          Event Catering
        </span>
        <h1 className="max-w-4xl font-display text-4xl uppercase leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Crafted for
          <br />
          unforgettable moments
        </h1>
        <p className="mt-6 max-w-md text-base text-gray-200 sm:text-lg">
          From intimate gatherings to grand celebrations, we create memorable food experiences with elegance and flavor.
        </p>
        <a
          href="#menu"
          className="mt-8 inline-flex items-center gap-2 bg-brand-accent px-8 py-4 font-display text-sm uppercase tracking-wide text-white transition-colors hover:bg-brand-accent/90"
        >
          Book a tasting
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  )
}

export default Hero