import { ArrowRight } from 'lucide-react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import feed1 from '../assets/images/burger.png'
import feed2 from '../assets/images/chick.png'
import feed3 from '../assets/images/yam.png'
import feed4 from '../assets/images/waakye.png'
import feed5 from '../assets/images/chip.png'
import feed6 from '../assets/images/food.png'

const feedImages = [feed1, feed2, feed3, feed4, feed5, feed6]

const FollowUs = () => {
  return (
    <section className="bg-brand-dark py-20 lg:py-28">
      <div className="mx-10 max-w-[1600px] px-6">
        <span className="block font-display text-lg uppercase tracking-[0.3em] text-white/80 md:text-xl">
          @Acers Diner
        </span>

        {/* Heading, paragraph and link share a row so they align to the same top edge */}
        <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <h2 className="font-display text-5xl uppercase leading-[1.05] text-white md:text-6xl lg:text-7xl">
            Follow us
          </h2>

          <p className="max-w-2xl font-body text-lg text-gray-400 md:text-xl">
           Discover delicious meals, behind-the-scenes moments, and unforgettable 
           catering experiences. Follow us for a taste of Acer's Diner.
          </p>

          <a
            href="https://www.tiktok.com/@acers_diner?_r=1&_t=ZS-98c6RvtcQBZ"
            className="inline-flex shrink-0 items-center gap-2 font-display text-sm uppercase tracking-wide text-white transition-colors hover:text-brand-accent"
          >
            Follow us
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <div className="mx-10 mt-16 max-w-[1780px] px-6">
        <div className="lg:hidden">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            loop
            autoplay={{
              delay: 2200,
              disableOnInteraction: false,
            }}
            grabCursor
            className="overflow-hidden"
          >
            {feedImages.map((src, i) => (
              <SwiperSlide key={i}>
                <img
                  src={src}
                  alt="Follow us on Instagram"
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden gap-[37px] lg:grid lg:grid-cols-6">
          {feedImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Follow us on Instagram"
              loading="lazy"
              className="aspect-square w-full object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FollowUs