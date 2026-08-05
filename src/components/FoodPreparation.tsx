import baristaImage from '../assets/images/banks.png'
import prepImage from '../assets/images/spag.png'

const FoodPreparation = () => {
  return (
    <section className="bg-brand-dark px-6 py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1600px] gap-8 lg:grid-cols-2 lg:items-start lg:gap-4">
        <div>
          <div className="pl-[6%]">
            <span className="font-display text-lg uppercase tracking-[0.3em] text-white/80 md:text-xl">
             The Acer Experience
            </span>
            <h2 className="mt-10 max-w-2xl font-display text-4xl uppercase leading-[1.05] text-white md:text-5xl lg:text-6xl">
             Prepared with Passion and Excellence
            </h2>
          </div>

          <img
            src={prepImage}
            alt="Hand reaching for cups on a wooden board"
            className="mx-auto mt-[116px] aspect-[733/680] w-[88%] object-cover"
          />
        </div>

        <div>
          <img
            src={baristaImage}
            alt="Barista pouring coffee"
            className="hidden aspect-[773/736] w-[88%] object-cover lg:mx-auto lg:block"
          />
          <p className="mt-8 max-w-lg font-body text-lg text-gray-400 md:mt-12 md:text-xl lg:mt-16">
          From the first bite to the final presentation, Acer's Diner delivers carefully 
          prepared cuisine designed to elevate your special events. We believe great food 
          begins with quality ingredients and ends with a memorable experience.
          </p>
        </div>
      </div>
    </section>
  )
}

export default FoodPreparation