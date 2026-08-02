import { ArrowRight } from 'lucide-react'
import chef from '../assets/images/brew.png'

const features = [
  { number: '01', title: 'Delicious Sandwiches' },
  { number: '02', title: 'Hot Snacks' },
]

const SandwichesFeature = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1600px] px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Image with overlapping accent box */}
          <div className="relative">
            <img
              src={chef}
              alt="Chef preparing sandwiches in a food truck"
              className="aspect-[653/806] w-full object-cover"
            />

            <div className="absolute -right-[6%] bottom-4 w-[62%] bg-[#FFB936] p-6 shadow-lg shadow-black/10 lg:-right-[10%] lg:bottom-6 lg:w-[60%] lg:p-10">
              <p className="font-display text-xl uppercase leading-snug text-[#0C0F26] md:text-2xl lg:text-3xl">
                We cook hot sandwiches for you
              </p>
            </div>
          </div>

          {/* Text content */}
          <div>
            <span className="font-display text-sm uppercase tracking-[0.3em] text-[#0C0F26]">
              Snacks for you
            </span>

            <h2 className="mt-6 font-display text-4xl uppercase leading-tight text-[#0C0F26] md:text-5xl lg:text-6xl">
              The best sandwiches for a healthy lunch
            </h2>

            <p className="mt-8 max-w-xl font-body text-gray-500">
              Commodo elit at imperdiet dui accumsan sit amet nulla facilisi. Idorta nibh
              venenatis cras sed felis eget velit aliquet retium quam.
            </p>

            <div className="mt-8 divide-y divide-gray-200">
              {features.map(({ number, title }) => (
                <div key={number} className="flex items-center gap-4 py-5">
                  <span className="font-display text-lg text-brand-accent">{number}.</span>
                  <span className="font-display text-lg uppercase text-[#0C0F26]">{title}</span>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="mt-10 inline-flex items-center gap-3 bg-brand-accent px-8 py-4 font-display text-sm uppercase tracking-wide text-white transition-opacity hover:opacity-90"
            >
              About us
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SandwichesFeature