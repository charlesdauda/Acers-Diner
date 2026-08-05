import { useState, type ChangeEvent, type FocusEvent, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import contactImage from '../assets/images/los.png'

interface ContactPageProps {
  imageUrl?: string
  imageAlt?: string
}

interface FormState {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

const ContactPage = ({
  imageUrl = contactImage,
  imageAlt = 'Food truck',
}: ContactPageProps) => {
  const [form, setForm] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange =
    (field: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }))
    }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    window.setTimeout(() => setSubmitted(false), 3000)
  }

  const focusLine = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = 'var(--color-brand-accent)'
  }

  const blurLine = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = 'var(--color-brand-dark)'
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="flex min-h-screen flex-col md:flex-row">
        <div className="relative hidden h-72 w-full md:block md:h-auto md:w-1/2 sm:h-96">
          <img src={imageUrl} alt={imageAlt} className="h-full w-full object-cover" />
        </div>

        <div className="flex w-full items-center md:w-1/2">
          <div className="w-full px-6 py-14 sm:px-12 md:px-16 md:py-0 md:pr-28 lg:px-20 lg:pr-32">
            <p className="mb-4 font-display text-sm uppercase tracking-[0.35em] text-brand-dark">
              Contact Us
            </p>
            <h1 className="mb-10 font-display text-4xl uppercase leading-[0.95] text-brand-dark sm:text-5xl lg:text-[3.4rem]">
              Have Questions?
              <br />
              Get In Touch!
            </h1>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Name"
                  value={form.firstName}
                  onChange={handleChange('firstName')}
                  onFocus={focusLine}
                  onBlur={blurLine}
                  className="w-full border-b border-[#DDDDDD] bg-transparent py-2.5 text-brand-dark outline-none transition-colors"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={handleChange('lastName')}
                  onFocus={focusLine}
                  onBlur={blurLine}
                  className="w-full border-b border-[#DDDDDD] bg-transparent py-2.5 text-brand-dark outline-none transition-colors"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange('email')}
                  onFocus={focusLine}
                  onBlur={blurLine}
                  className="w-full border-b border-[#DDDDDD] bg-transparent py-2.5 text-brand-dark outline-none transition-colors"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={handleChange('phone')}
                  onFocus={focusLine}
                  onBlur={blurLine}
                  className="w-full border-b border-[#DDDDDD] bg-transparent py-2.5 text-brand-dark outline-none transition-colors"
                />
              </div>

              <textarea
                placeholder="Message"
                value={form.message}
                onChange={handleChange('message')}
                onFocus={focusLine}
                onBlur={blurLine}
                rows={1}
                className="w-full resize-none border-b border-[#DDDDDD] bg-transparent py-2.5 text-brand-dark outline-none transition-colors"
              />

              <button
                type="submit"
                className="inline-flex items-center gap-3 bg-brand-accent px-8 py-4 font-display uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
              >
                <Send size={18} />
                {submitted ? 'Message Sent!' : 'Get In Touch'}
              </button>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ContactPage