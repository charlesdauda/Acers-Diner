import { Eye, Sprout, HandHeart } from 'lucide-react'
import bgImage from '../assets/images/hero.png'

const values = [
  {
    icon: Eye,
    title: 'Our Vision',
    description:
      "To become a trusted catering brand known for exceptional cuisine, outstanding service, and unforgettable food experiences across Ghana.",
  },
  {
    icon: Sprout,
    title: 'Our Mission',
    description:
      "We are committed to preparing delicious meals with quality ingredients, delivering professional catering services, and creating experiences that exceed our clients' expectations.",
  },
  {
    icon: HandHeart,
    title: 'Our Commitment',
    description:
      "From preparation to presentation, we put care, passion, and attention to detail into every dish, ensuring every guest enjoys a remarkable dining experience.",
  },
]

const OurValues = () => (
  <section className="relative overflow-hidden bg-brand-dark">
    <img
      src={bgImage}
      alt="Inside the kitchen"
      className="absolute inset-0 h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-black/60" />

    <div className="relative mx-auto flex max-w-[1600px] justify-end px-6 py-20 lg:min-h-[800px] lg:items-center lg:py-28">
      <div className="w-full lg:max-w-xl">
        <h2 className="mt-6 font-display text-4xl uppercase leading-tight text-white md:text-5xl lg:text-6xl">
         Bringing Exceptional Flavors to Every Client
        </h2>

        <p className="mt-6 max-w-lg font-body text-lg text-white/80">
          At Acer's Diner, we believe great food has the power to bring people together.
        </p>

        <div className="mt-10 space-y-6">
          {values.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex gap-4 bg-white p-6">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-accent">
                <Icon size={24} className="text-white" />
              </span>
              <div>
                <h3 className="font-display text-lg uppercase text-brand-dark">{title}</h3>
                <p className="mt-2 font-body text-gray-600">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default OurValues