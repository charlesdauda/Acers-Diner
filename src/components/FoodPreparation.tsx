import baristaImage from '../assets/images/banks.png'
import prepImage from '../assets/images/spag.png'

const FoodPreparation = () => {
  return (
    <section className="bg-brand-dark px-6 py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1600px] gap-8 lg:grid-cols-2 lg:items-start lg:gap-4">
        <div>
          <div className="pl-[6%]">
            <span className="font-display text-lg uppercase tracking-[0.3em] text-white/80 md:text-xl">
              Food preparation
            </span>
            <h2 className="mt-10 max-w-2xl font-display text-4xl uppercase leading-[1.05] text-white md:text-5xl lg:text-6xl">
              Our food is prepared with the finest ingredients
            </h2>
          </div>

          <img
            src={prepImage}
            alt="Hand reaching for cups on a wooden board"
            className="mx-auto mt-[116px] aspect-[733/680] w-[88%] object-cover"
          />
        </div>

        {/* Right column: image + paragraph + read more */}
        <div>
          <img
            src={baristaImage}
            alt="Barista pouring coffee"
            className="hidden aspect-[773/736] w-[88%] object-cover lg:mx-auto lg:block"
          />
          <p className="mt-8 max-w-lg font-body text-lg text-gray-400 md:mt-12 md:text-xl lg:mt-16">
            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud. Wiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim.
          </p>
          <a
            href="#"
            className="mt-8 inline-block border-b border-white pb-1 font-display text-sm uppercase tracking-wide text-white transition-colors hover:border-brand-accent hover:text-brand-accent"
          >
            Read more
          </a>
        </div>
      </div>
    </section>
  )
}

export default FoodPreparation