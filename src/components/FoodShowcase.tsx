import { ArrowRight } from 'lucide-react'
import brewImage from '../assets/images/brew.png'

const categories = ['Drinks', 'Coffee Blends']

const FoodShowcase = () => {
  return (
    <section className="overflow-hidden bg-brand-dark px-6 py-20 lg:py-28">
      <div className="relative mx-auto grid max-w-[1600px] gap-16 lg:grid-cols-[45%_1fr] lg:items-center lg:gap-20">
        {/* Decorative dot in the gap between columns */}
        <div className="absolute left-[48%] top-1/3 hidden h-4 w-4 -translate-x-1/2 rounded-full bg-white lg:block" />

        {/* Image + overlapping caption card */}
        <div className="relative">
          <img
            src={brewImage}
            alt="Barista pouring coffee"
            className="aspect-[652/766] w-full object-cover"
          />
        </div>

        {/* Text content */}
        <div>
          <span className="font-display text-lg uppercase tracking-[0.3em] text-white/80 md:text-xl">
            Coffee for you
          </span>
          <h2 className="mt-10 max-w-2xl font-display text-5xl uppercase leading-[1.05] text-white md:text-6xl lg:text-7xl">
            We brew delicious & aromatic coffee
          </h2>
          <p className="mt-8 max-w-lg font-body text-lg text-gray-400 md:text-xl">
            Quam pellentesque nec nam aliquam sem. Neque convallis a cras semper. Posuere urna nec
            tincidun.
          </p>

          <div className="mt-10 border-t border-white/10">
            {categories.map((category, index) => (
              <div
                key={category}
                className="flex items-center gap-3 border-b border-white/10 py-5 font-display text-2xl uppercase tracking-wide md:text-3xl"
              >
                <span className="text-white">{String(index + 1).padStart(2, '0')}.</span>
                <span className="text-white/40">{category}</span>
              </div>
            ))}
          </div>
          <a          
            href="#about"
            className="mt-10 inline-flex items-center gap-2 bg-brand-accent px-8 py-5 font-display text-sm uppercase tracking-wide text-white transition-colors hover:bg-brand-accent/90"
          >
            About us
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default FoodShowcase