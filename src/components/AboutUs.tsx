import { Check } from 'lucide-react'
import chefImage from '../assets/images/ceo.png'

const qualities = [
  '15+ Years of Culinary Passion',
  'Passion for Quality Ingredients',
  'Professional Chef & Entrepreneur',
]

const AboutUs = () => {
  return (
    <section className="bg-white px-6 py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[46%_1fr] lg:items-center lg:gap-16">
        <div className="relative mx-auto w-full max-w-[520px] lg:mx-0">
          <div className="overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.12)]">
            <img
              src={chefImage}
              alt="Head chef holding a tray of burgers"
              className="h-[420px] w-full object-cover object-[center_18%] md:h-[500px] lg:h-[540px]"
            />
          </div>
          <div className="absolute -bottom-5 right-5 rounded-lg bg-brand-dark px-5 py-3 shadow-[0_14px_30px_rgba(0,0,0,0.28)] lg:-bottom-7 lg:right-8 lg:px-7 lg:py-4">
            <p className="font-display text-lg uppercase text-white lg:text-2xl">Kobinah Essah</p>
            <p className="mt-1 font-body text-[10px] uppercase tracking-[0.2em] text-white/60 lg:text-xs">
              Our CEO
            </p>
          </div>
        </div>

        {/* Text content */}
        <div>
          <span className="font-display text-lg uppercase tracking-[0.3em] text-brand-accent md:text-xl">
            About Acer's Diner
          </span>
          <h2 className="mt-4 font-display text-4xl uppercase leading-[1.05] text-brand-dark md:text-5xl lg:text-6xl">
            Where Passion, Flavor, and Excellence Meet
          </h2>
          <p className="mt-6 max-w-lg font-body text-lg text-gray-600 md:text-xl">
            Acer's Diner was founded by Chef Kobinnah Essah, a passionate chef dedicated to creating exceptional food experiences.
            With a love for cooking, he combines creativity, skill, and attention to detail in every dish.
            Beyond the kitchen, he is an entrepreneur and food content creator sharing his culinary journey.
            His passion for quality ingredients and authentic flavors drives the Acer's Diner experience.
            With years of hands-on culinary experience, he creates memorable meals for every occasion.
            Every dish reflects his commitment to excellence, innovation, and customer satisfaction.
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