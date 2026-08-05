import chefImage from '../assets/images/brew.png'

const highlights = [
  { label: 'Buffet Services', active: true },
  { label: 'Local Dishes', active: true },
  { label: 'Event Catering', active: true },
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
         Custom Event Menus
        </span>
        <h2 className="mt-6 font-display text-4xl uppercase leading-[1.05] text-brand-dark md:text-5xl lg:text-6xl">
         Personalized food options designed to match your occasion and preferences.
        </h2>
        <p className="mt-8 max-w-lg font-body text-lg text-gray-600 md:text-xl">
         Experience a variety of delicious meals prepared with,
          creativity, and passion. From traditional Ghanaian favorites to 
          continental dishes, Acer's Diner brings exceptional flavors to every celebration.
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
      </div>
    </div>
  </section>
)

export default CuisineSpotlight