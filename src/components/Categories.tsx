import { ArrowRight } from 'lucide-react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import burgers from '../assets/images/brew.png'
import hotdogs from '../assets/images/brew.png'
import meatFish from '../assets/images/brew.png'
import pizza from '../assets/images/brew.png'

const categories = [
  { title: 'Burgers & Panini', image: burgers, href: '#' },
  { title: 'Hot Dogs & Snacks', image: hotdogs, href: '#' },
  { title: 'Meat & Fish', image: meatFish, href: '#' },
  { title: 'Pizzas & Pastas', image: pizza, href: '#' },
]

const Categories = () => {
  return (
    <>
      <section className="lg:hidden">
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
          {categories.map(({ title, image, href }) => (
            <SwiperSlide key={title}>
              <a href={href} className="group relative block h-[420px] overflow-hidden sm:h-[480px]">
                <img
                  src={image}
                  alt={title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-transparent" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                <div className="relative flex h-full flex-col justify-between p-8">
                  <h3 className="font-display text-2xl uppercase leading-tight text-white md:text-3xl">
                    {title}
                  </h3>

                  <span className="inline-flex w-fit items-center gap-2 font-display text-sm uppercase tracking-wide text-white transition-colors group-hover:text-brand-accent">
                    View all
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="hidden grid-cols-1 sm:grid-cols-2 lg:grid lg:grid-cols-4">
        {categories.map(({ title, image, href }) => (
          <a
            key={title}
            href={href}
            className="group relative block h-[420px] overflow-hidden sm:h-[480px] lg:h-[600px]"
          >
            <img
              src={image}
              alt={title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            <div className="relative flex h-full flex-col justify-between p-8 lg:p-10">
              <h3 className="font-display text-2xl uppercase leading-tight text-white md:text-3xl">
                {title}
              </h3>

              <span className="inline-flex w-fit items-center gap-2 font-display text-sm uppercase tracking-wide text-white transition-colors group-hover:text-brand-accent">
                View all
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </div>
          </a>
        ))}
      </section>
    </>
  )
}

export default Categories