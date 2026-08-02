import { ArrowRight } from 'lucide-react'
import chefImage from '../assets/images/brew.png'

const highlights = [
  { label: 'Ethnic Restaurant', active: true },
  { label: 'Exotic Cuisine', active: false },
  { label: 'Indian Dishes', active: false },
]

const CuisineSpotlight = () => (
  <section className="bg-white px-6 py-20 lg:py-28">
    <div className="mx-auto grid max-w-[1600px] gap-16 lg:grid-cols-[45%_1fr] lg:items-center lg:gap-20">
      <img
        src={chefImage}
        alt="Chef preparing an Indian dish"
        className="aspect-[792/909] w-full object-cover"
      />

      <div>
        <span className="font-display text-lg uppercase tracking-[0.3em] text-brand-dark md:text-xl">
          Indian spices
        </span>
        <h2 className="mt-6 font-display text-4xl uppercase leading-[1.05] text-brand-dark md:text-5xl lg:text-6xl">
          Taste the richness of Indian culture with our dishes
        </h2>
        <p className="mt-8 max-w-lg font-body text-lg text-gray-600 md:text-xl">
          Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
          aut fugit, sed quia.
        </p>

        <ul className="mt-10 space-y-5">
          {highlights.map(({ label, active }) => (
            <li key={label} className="flex items-center gap-3">
              <span
                className={`h-2.5 w-2.5 rounded-full ${
                  active ? 'bg-brand-accent' : 'border border-gray-300'
                }`}
              />
              <span
                className={`font-display uppercase tracking-wide ${
                  active ? 'text-brand-dark' : 'text-gray-400'
                }`}
              >
                {label}
              </span>
            </li>
          ))}
        </ul>

        <a
          href="/about"
          className="mt-10 inline-flex items-center gap-2 bg-brand-accent px-8 py-5 font-display text-sm uppercase tracking-wide text-white transition-colors hover:bg-brand-accent/90"
        >
          About us
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  </section>
)

export default CuisineSpotlight