import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import fries from '../assets/images/brew.png'
import wine from '../assets/images/brew.png'
import steak from '../assets/images/brew.png'
import hotdog from '../assets/images/brew.png'

const categories = [
  { title: 'Appetizers', image: fries, items: ['Commodo elit', 'Consectetur', 'Tristique Nulla'] },
  { title: 'Aperitif', image: wine, items: ['Commodo elit', 'Consectetur', 'Tristique Nulla'] },
  { title: 'Steaks', image: steak, items: ['Commodo elit', 'Consectetur', 'Tristique Nulla'] },
  { title: 'Sandwiches', image: hotdog, items: ['Commodo elit', 'Consectetur', 'Tristique Nulla'] },
]

const WhatWeDo = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1600px] px-6">
        {/* Intro quote */}
        <div className="mx-auto max-w-5xl text-center">
          <span className="font-display text-sm uppercase tracking-[0.3em] text-[#0C0F26]">
            What we do
          </span>

          <h2 className="mt-6 font-display text-3xl uppercase leading-tight text-[#0C0F26] sm:text-4xl md:text-5xl lg:text-6xl">
            Indian, Italian, American and Thai dishes,{' '}
            <span className="text-brand-accent">made with love</span>, care, attention to detail
            and creativity.
          </h2>

          <div className="mt-10">
            <p className="font-display text-base uppercase tracking-wide text-[#0C0F26]">
              Piter Bowman
            </p>
            <p className="mt-1 font-body text-gray-400">Executive Chef</p>
          </div>
        </div>

        {/* Category grid */}
        <div className="mt-20">
          <div className="lg:hidden">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              loop
              grabCursor
              autoplay={{
                delay: 2200,
                disableOnInteraction: false,
              }}
              className="overflow-hidden"
            >
              {categories.map(({ title, image, items }) => (
                <SwiperSlide key={title}>
                  <div>
                    <div className="aspect-[375/420] w-full overflow-hidden">
                      <img src={image} alt={title} className="h-full w-full object-cover" />
                    </div>

                    <h3 className="mt-8 font-display text-xl uppercase text-[#0C0F26]">{title}</h3>

                    <ul className="mt-6 space-y-3">
                      {items.map((item) => (
                        <li key={item} className="flex items-center gap-3 font-body text-gray-500">
                          <span className="h-2 w-2 shrink-0 rounded-full bg-brand-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="hidden grid-cols-1 gap-x-[37px] gap-y-16 sm:grid-cols-2 lg:grid lg:grid-cols-4">
            {categories.map(({ title, image, items }) => (
              <div key={title}>
                <div className="aspect-[375/420] w-full overflow-hidden">
                  <img src={image} alt={title} className="h-full w-full object-cover" />
                </div>

                <h3 className="mt-8 font-display text-xl uppercase text-[#0C0F26]">{title}</h3>

                <ul className="mt-6 space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-3 font-body text-gray-500">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-brand-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo