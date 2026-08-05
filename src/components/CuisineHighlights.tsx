import { Truck, Umbrella, Popcorn } from 'lucide-react'

const cuisines = [
  { icon: Truck, title: 'Event Catering', description: 'Professional catering services for weddings, corporate events, private celebrations, and special occasions.' },
  { icon: Umbrella, title: 'Buffet & Dining Experience', description: 'Beautifully presented meals designed to impress your guests with exceptional taste and quality.' },
  { icon: Popcorn, title: 'Finger Foods & Small Bites', description: 'Delicious snacks and appetizers perfect for parties, gatherings, and social events.' },
]


const CuisineHighlights = () => (
  <section className="bg-brand-header px-6 py-20 lg:py-28">
    <div className="mx-auto max-w-3xl text-center">
      <span className="font-display text-sm uppercase tracking-[0.3em] text-brand-dark">
        Tasty food
      </span>
      <h2 className="mt-4 font-display text-4xl uppercase leading-[1.05] text-brand-dark md:text-5xl lg:text-6xl">
        Enjoy Exquisite Dishes Crafted for Every Occasion
      </h2>
    </div>

    <div className="mx-auto mt-16 grid max-w-[1600px] gap-8 md:grid-cols-3">
      {cuisines.map(({ icon: Icon, title, description }) => (
        <div key={title} className="bg-white p-10 text-center">
          <Icon className="mx-auto h-16 w-16 text-brand-accent" strokeWidth={1.25} />
          <h3 className="mt-6 font-display text-xl uppercase text-brand-dark">{title}</h3>
          <p className="mt-3 font-body text-gray-500">{description}</p>
        </div>
      ))}
    </div>
  </section>
)

export default CuisineHighlights