import brewImage from '../assets/images/prepare.png'

const categories = ['Catering Experiences', 'Local & Continental Dishes']

const FoodShowcase = () => {
  return (
    <section className="overflow-hidden bg-brand-dark px-6 py-20 lg:py-28">
      <div className="relative mx-auto grid max-w-[1600px] gap-16 lg:grid-cols-[45%_1fr] lg:items-center lg:gap-20">
        <div className="absolute left-[48%] top-1/3 hidden h-4 w-4 -translate-x-1/2 rounded-full bg-white lg:block" />
        <div className="relative">
          <img
            src={brewImage}
            alt="Barista pouring coffee"
            loading="lazy"
            className="ml-[6%] aspect-[652/766] w-[94%] object-cover"
          />
        </div>
        <div className="pl-[6%] pr-[6%] lg:pl-0 lg:pr-0">
          <span className="font-display text-lg uppercase tracking-[0.3em] text-white/80 md:text-xl">
            Food made for you
          </span>
          <h2 className="mt-10 max-w-2xl font-display text-5xl uppercase leading-[1.05] text-white md:text-6xl lg:text-7xl">
            Every Taste is Worth Remembering
          </h2>
          <p className="mt-8 max-w-lg font-body text-lg text-gray-400 md:text-xl">
           Experience carefully crafted meals made with fresh ingredients, rich flavors, and a passion for exceptional dining.
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
        </div>
      </div>
    </section>
  )
}

export default FoodShowcase
