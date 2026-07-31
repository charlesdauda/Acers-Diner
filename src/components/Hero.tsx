import { ArrowRight } from 'lucide-react'
import heroImage from '../assets/images/hero.png'

const Hero = () => {
  return (
    <section id="hero" className="relative h-[90vh] min-h-[650px] w-full overflow-hidden bg-brand-dark">
      <div
        className="absolute inset-0 bg-cover bg-center animate-kenburns"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <span className="font-display text-sm uppercase tracking-[0.3em] text-white/80 mb-4">
          Coffee
        </span>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase text-white leading-[1.05] max-w-4xl">
          Life is too
          <br />
          short for bad coffee
        </h1>
        <p className="font-body text-gray-300 mt-6 max-w-md text-base sm:text-lg">
          Dicta sunt explicabo. Nemo enim ipsam voluptatem quia.
        </p>
        <a
          href="#menu"
          className="mt-8 inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent/90 transition-colors text-white font-display uppercase text-sm tracking-wide px-8 py-4"
        >
          View menu
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  )
}

export default Hero