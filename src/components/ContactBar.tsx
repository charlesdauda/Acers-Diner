import { Phone, Mail, MapPin } from 'lucide-react'

const contactItems = [
  { icon: Phone, label: 'Phone No:', value: '+233 578 042 175' },
  { icon: Mail, label: 'Email Address:', value:'derrickessah11@gmail.com' },
  { icon: MapPin, label: 'Location:', value: 'Weija Tatop opposite Zulu Gardens' },
]

const ContactBar = () => (
  <section className="bg-brand-header px-6 py-16 lg:py-20">
    <div className="mx-auto flex max-w-[1600px] flex-col gap-10 sm:flex-row sm:flex-wrap sm:justify-between lg:gap-6">
      {contactItems.map(({ icon: Icon, label, value }) => (
        <div key={label} className="flex items-start gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-dark">
            <Icon size={22} className="text-white" />
          </span>
          <div>
            <p className="font-display text-lg uppercase tracking-wide text-brand-dark">{label}</p>
            <p className="mt-1 font-body text-brand-dark/70">{value}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default ContactBar