import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/pagination'

import avatar1 from '../assets/images/brew.png'
import avatar2 from '../assets/images/brew.png'
import avatar3 from '../assets/images/brew.png'
import avatar4 from '../assets/images/brew.png'

const testimonials = [
  { avatar: avatar1, name: 'Crystal Rich', role: 'Client', quote: 'Hac habitasse platea dictumst quisque sagittis purus sit amet. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Semper risus in hendrerit gravida.' },
  { avatar: avatar2, name: 'Daniel Cole', role: 'Client', quote: 'Nibh venenatis cras sed felis eget velit aliquet sagittis. Faucibus purus in massa tempor nec feugiat nisl pretium fusce aliquam id diam.' },
  { avatar: avatar3, name: 'Amara Whitfield', role: 'Client', quote: 'Adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud.' },
  { avatar: avatar4, name: 'Marcus Bellweather', role: 'Client', quote: 'Dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur.' },
]

const Testimonials = () => {
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)

  return (
    <section className="relative bg-white px-6 py-20 lg:py-28">
      <button ref={prevRef} aria-label="Previous testimonial" className="absolute left-6 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center border border-gray-200 text-gray-700 transition-colors hover:border-brand-accent hover:text-brand-accent md:flex lg:left-16">
        <ArrowLeft size={18} />
      </button>
      <button ref={nextRef} aria-label="Next testimonial" className="absolute right-6 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center border border-gray-200 text-gray-700 transition-colors hover:border-brand-accent hover:text-brand-accent md:flex lg:right-16">
        <ArrowRight size={18} />
      </button>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true, el: '.testimonial-pagination' }}
        onBeforeInit={(swiper) => {
          const nav = swiper.params.navigation
          if (nav && typeof nav === 'object') {
            nav.prevEl = prevRef.current
            nav.nextEl = nextRef.current
          }
        }}
        className="mx-auto max-w-2xl text-center"
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.name}>
            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gray-100">
              <img src={t.avatar} alt={t.name} className="h-full w-full rounded-full object-cover" />
            </div>
            <p className="mt-10 font-body text-xl text-gray-800 md:text-2xl">{t.quote}</p>
            <Quote className="mx-auto mt-8 h-8 w-8 fill-brand-accent text-brand-accent" />
            <p className="mt-6 font-display text-lg uppercase text-brand-dark">{t.name}</p>
            <p className="mt-1 font-body text-gray-400">{t.role}</p>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="testimonial-pagination mt-8 flex justify-center gap-2" />
    </section>
  )
}

export default Testimonials