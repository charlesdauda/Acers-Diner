import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/pagination'

import avatar1 from '../assets/images/avt1.png'
import avatar2 from '../assets/images/avt2.png'
import avatar3 from '../assets/images/avt3.png'
import avatar4 from '../assets/images/avt4.png'

const testimonials = [
  { avatar: avatar1, name: 'Ama Serwaa Mensah', role: 'Client', quote: "Acer's Diner made our wedding celebration truly unforgettable. The food was delicious, beautifully presented, and the service was exceptional. Our guests are still talking about the amazing experience." },
  { avatar: avatar2, name: 'Abena Owusu', role: 'Client', quote: "From the first consultation to the final meal, Acer's Diner delivered beyond our expectations. Chef Kobinnah and his team brought creativity, professionalism, and incredible flavors to our event."},
  { avatar: avatar3, name: 'Kofi Asare', role: 'Client', quote: "I have worked with many catering services, but Acer's Diner stands out. Their attention to detail, quality of food, and commitment to customer satisfaction are outstanding." },
  { avatar: avatar4, name: 'Esi Boateng', role: 'Client', quote:"The meals were absolutely amazing! Acer's Diner brought elegance and great taste to our celebration. Every dish was prepared with passion, and the entire experience was memorable." },
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
              <img src={t.avatar} alt={t.name} loading="lazy" className="h-full w-full rounded-full object-cover" />
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