import { useEffect, useRef, useState } from 'react'
import { Truck, Umbrella, Popcorn } from 'lucide-react'

const cuisines = [
  { icon: Truck, title: 'Modern Food Trucks', description: 'Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore.' },
  { icon: Umbrella, title: 'Coffee and Drinks', description: 'Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore.' },
  { icon: Popcorn, title: 'Snacks & Street Food', description: 'Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore.' },
]

const stats = [
  { target: 98, label: 'Dishes' },
  { target: 65, label: 'Visitors' },
  { target: 10, label: 'Restaurants' },
  { target: 15, label: 'Chefs' },
]

const useCountUp = (target: number, duration = 1500) => {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const startTime = performance.now()
          const tick = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1)
            setCount(Math.floor(progress * target))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return { count, ref }
}

const StatItem = ({ target, label }: { target: number; label: string }) => {
  const { count, ref } = useCountUp(target)
  return (
    <div ref={ref} className="relative flex h-32 items-center justify-center md:h-40 lg:h-48">
      <p className="absolute font-display text-6xl text-white/30 md:text-7xl lg:text-8xl">{count}</p>
      <p className="relative font-display text-lg uppercase tracking-wide text-brand-dark">{label}</p>
    </div>
  )
}

const CuisineHighlights = () => (
  <section className="bg-brand-header px-6 py-20 lg:py-28">
    <div className="mx-auto max-w-3xl text-center">
      <span className="font-display text-sm uppercase tracking-[0.3em] text-brand-dark">
        Tasty food
      </span>
      <h2 className="mt-4 font-display text-4xl uppercase leading-[1.05] text-brand-dark md:text-5xl lg:text-6xl">
        Enjoy exquisite dishes from a variety of cuisines
      </h2>
    </div>

    <div className="mx-auto mt-16 grid max-w-[1600px] gap-8 md:grid-cols-3">
      {cuisines.map(({ icon: Icon, title, description }) => (
        <div key={title} className="bg-white p-10 text-center">
          <Icon className="mx-auto h-16 w-16 text-brand-accent" strokeWidth={1.25} />
          <h3 className="mt-6 font-display text-xl uppercase text-brand-dark">{title}</h3>
          <p className="mt-3 font-body text-gray-500">{description}</p>
        </div>
      ))}
    </div>

    <div className="mx-auto mt-24 grid max-w-[1600px] grid-cols-2 divide-x divide-brand-dark/10 lg:grid-cols-4">
      {stats.map((stat) => (
        <StatItem key={stat.label} target={stat.target} label={stat.label} />
      ))}
    </div>
  </section>
)

export default CuisineHighlights