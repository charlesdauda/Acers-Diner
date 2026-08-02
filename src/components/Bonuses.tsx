import { Check } from 'lucide-react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const plans = [
  {
    name: 'Standard Bonus',
    price: '$50.00',
    featured: false,
    features: ['Adipiscing elit sed dolor.', 'Eusmod tempor incididunt.', 'Labore et dolore magna.'],
  },
  {
    name: 'Double Bonus',
    price: '$60.00',
    featured: true,
    features: ['Adipiscing elit sed dolor.', 'Eusmod tempor incididunt.', 'Labore et dolore magna.'],
  },
  {
    name: 'Super Bonus',
    price: '$80.00',
    featured: false,
    features: ['Adipiscing elit sed dolor.', 'Eusmod tempor incididunt.', 'Labore et dolore magna.'],
  },
]

const Bonuses = () => {
  return (
    <section className="bg-[#FFB936] py-20 lg:py-28">
      <div className="mx-auto max-w-[1600px] px-6">
        <div className="text-center">
          <span className="font-display text-sm uppercase tracking-[0.3em] text-[#0C0F26]">
            Restaurant certificates
          </span>

          <h2 className="mt-6 font-display text-4xl uppercase text-[#0C0F26] md:text-5xl lg:text-6xl">
            Bonuses for our clients
          </h2>

          <p className="mx-auto mt-8 max-w-2xl font-body text-[#0C0F26]/80">
            Commodo elit at imperdiet dui accumsan sit amet nulla facilisi. Id porta nibh
            venenatis cras sed felis eget velit aliquet. Pretium quam vulput.
          </p>
        </div>

        <div className="mt-16">
          <div className="lg:hidden">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={16}
              slidesPerView={1}
              loop
              grabCursor
              autoplay={{
                delay: 2200,
                disableOnInteraction: false,
              }}
              className="overflow-hidden"
            >
              {plans.map(({ name, price, featured, features }) => (
                <SwiperSlide key={name}>
                  <div className="bg-white px-8 py-10 text-center">
                    <h3 className="font-display text-lg uppercase text-[#0C0F26]">{name}</h3>

                    <p
                      className={`mt-8 font-display text-4xl ${
                        featured ? 'text-brand-accent' : 'text-[#0C0F26]'
                      }`}
                    >
                      {price}
                    </p>

                    <p className="mt-5 font-body text-sm text-[#0C0F26]/80">Per / Month</p>

                    <ul className="mt-8 space-y-4">
                      {features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center justify-center gap-3 font-body text-sm text-[#0C0F26]"
                        >
                          {feature}
                          <Check size={14} className="shrink-0 text-brand-accent" />
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#"
                      className={`mt-8 inline-flex w-[170px] items-center justify-center py-4 font-display text-sm uppercase tracking-wide transition-opacity hover:opacity-90 ${
                        featured ? 'bg-[#0C0F26] text-white' : 'bg-brand-accent text-white'
                      }`}
                    >
                      Get now
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="hidden gap-[37px] lg:grid lg:grid-cols-3">
            {plans.map(({ name, price, featured, features }) => (
              <div key={name} className="bg-white px-8 py-12 text-center lg:px-10 lg:py-16">
                <h3 className="font-display text-lg uppercase text-[#0C0F26]">{name}</h3>

                <p
                  className={`mt-8 font-display text-5xl ${
                    featured ? 'text-brand-accent' : 'text-[#0C0F26]'
                  }`}
                >
                  {price}
                </p>

                <p className="mt-6 font-body text-[#0C0F26]/80">Per / Month</p>

                <ul className="mt-10 space-y-5">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center justify-center gap-3 font-body text-[#0C0F26]"
                    >
                      {feature}
                      <Check size={16} className="shrink-0 text-brand-accent" />
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className={`mt-10 inline-flex w-[180px] items-center justify-center py-5 font-display text-sm uppercase tracking-wide transition-opacity hover:opacity-90 ${
                    featured ? 'bg-[#0C0F26] text-white' : 'bg-brand-accent text-white'
                  }`}
                >
                  Get now
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Bonuses