import chef from '../assets/images/kas.png'

const features = [
  { number: '01', title: 'Small Gatherings' },
  { number: '02', title: 'Large Events' },
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
              loading="lazy"
              className="aspect-[653/806] w-full object-cover"
            />
          </div>

          <div>
            <span className="font-display text-sm uppercase tracking-[0.3em] text-[#0C0F26]">
              Catering Packages
            </span>

            <h2 className="mt-6 font-display text-4xl uppercase leading-tight text-[#0C0F26] md:text-5xl lg:text-6xl">
              Choose Your Perfect Package, Catering Made Simple
            </h2>

            <p className="mt-8 max-w-xl font-body text-gray-500">
             From private celebrations to large events, our flexible 
             catering options are designed to deliver amazing food, professional service, 
             and unforgettable experiences for every occasion.
            </p>

            <div className="mt-8 divide-y divide-gray-200">
              {features.map(({ number, title }) => (
                <div key={number} className="flex items-center gap-4 py-5">
                  <span className="font-display text-lg text-brand-accent">{number}.</span>
                  <span className="font-display text-lg uppercase text-[#0C0F26]">{title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SandwichesFeature