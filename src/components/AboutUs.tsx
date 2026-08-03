import { Check } from 'lucide-react'
import chefImage from '../assets/images/ceo.png'

const qualities = [
  '15+ years of culinary experience',
  'Trained in classic French technique',
  'Passionate about locally-sourced ingredients',
  'Award-winning signature burger recipes',
]

const AboutUs = () => {
  return (
    <section className="bg-white px-6 py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1600px] gap-16 lg:grid-cols-[55%_1fr] lg:items-center lg:gap-16">
        {/* Image with floating name card */}
        <div className="relative">
          <img
            src={chefImage}
            alt="Head chef holding a tray of burgers"
            className="aspect-[4/5] w-full object-cover object-top md:aspect-[3/4]"
          />
          <div className="absolute -bottom-6 left-6 bg-brand-dark px-6 py-4 lg:-bottom-8 lg:left-10 lg:px-8 lg:py-5">
            <p className="font-display text-xl uppercase text-white lg:text-2xl">Kobinah Essah</p>
            <p className="mt-1 font-body text-sm uppercase tracking-wide text-white/60">
              Our CEO
            </p>
          </div>
        </div>

        {/* Text content */}
        <div>
          <span className="font-display text-lg uppercase tracking-[0.3em] text-brand-accent md:text-xl">
            Gourmet burgers
          </span>
          <h2 className="mt-4 font-display text-4xl uppercase leading-[1.05] text-brand-dark md:text-5xl lg:text-6xl">
            Delicious burgers made from the freshest ingredients
          </h2>
          <p className="mt-6 max-w-lg font-body text-lg text-gray-600 md:text-xl">
            Nibh venenatis cras sed felis eget velit aliquet sagittis. Faucibus purus in massa
            tempor nec feugiat nisl pretium fusce.
          </p>

          <ul className="mt-8 space-y-4">
            {qualities.map((quality) => (
              <li key={quality} className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent/10">
                  <Check size={14} className="text-brand-accent" />
                </span>
                <span className="font-body text-lg text-gray-700">{quality}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AboutUs