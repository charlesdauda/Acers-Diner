import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

import openIcon from '../assets/images/open.png'
import addressIcon from '../assets/images/loc.png'
import contactIcon from '../assets/images/contact.png'

type InfoItem = {
  icon: string
  title: string
  lines: string[]
  link?: { label: string; href: string }
}

const infoItems: InfoItem[] = [
  {
    icon: openIcon,
    title: 'Open Hours',
    lines: ['Mon-Fri: 9 AM – 6 PM', 'Saturday: 9 AM – 4 PM',],
  },
  {
    icon: addressIcon,
    title: 'Address',
    lines: ['Weija Tatop'],
    link: { label: 'View on Maps', href: 'https://maps.app.goo.gl/owAQmU3vsYXW3qkt6' },
  },
  {
    icon: contactIcon,
    title: 'Get in Touch',
    lines: ['Telephone: +(233) 556 7890', 'derrickessah11@gmail.com'],
  },
]

const InfoCard = ({ item }: { item: InfoItem }) => (
  <div className="flex flex-col items-center text-center">
    <div
      className="h-40 w-40 bg-white transition-colors duration-300 hover:bg-brand-accent"
      style={{
        WebkitMaskImage: `url(${item.icon})`,
        maskImage: `url(${item.icon})`,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
      }}
    />

    <h3 className="mt-6 font-display text-xl md:text-2xl uppercase tracking-wide text-white">
      {item.title}
    </h3>

    <div className="mt-3 space-y-1 font-body text-base md:text-lg text-gray-400">
      {item.lines.map((line) => (
        <p key={line}>{line}</p>
      ))}
    </div>

    {item.link && (
      <a
        href={item.link.href}
        className="mt-3 font-body text-base text-gray-300 no-underline transition-colors hover:text-brand-accent"
      >
        {item.link.label}
      </a>
    )}
  </div>
)

const QuickInfo = () => {
  return (
    <section className="bg-brand-dark px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <span className="font-display text-base md:text-lg uppercase tracking-[0.3em] text-white/80">
         Fresh Flavors
        </span>
        <h2 className="mt-4 font-display text-5xl md:text-6xl uppercase text-white">
         Welcome to Acer's Diner
        </h2>
      </div>

      <div className="mx-auto mt-16 hidden max-w-5xl grid-cols-3 gap-40 md:grid">
        {infoItems.map((item) => (
          <InfoCard key={item.title} item={item} />
        ))}
      </div>

      <div className="mt-16 md:hidden">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          onSwiper={(swiper) => {
            swiper.autoplay?.start()
          }}
        >
          {infoItems.map((item) => (
            <SwiperSlide key={item.title}>
              <InfoCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default QuickInfo