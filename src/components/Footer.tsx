import { FaTiktok, FaWhatsapp } from 'react-icons/fa'
import { Mail } from 'lucide-react'
import logo from '../assets/images/acers.png'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const socialLinks = [
  { icon: FaTiktok, href: 'https://www.tiktok.com/@acers_diner?_r=1&_t=ZS-98c6RvtcQBZ', label: 'TikTok', target: '_blank' },
  { icon: FaWhatsapp, href: 'https://wa.me/233578042175', label: 'WhatsApp', target: '_blank' },
  { icon: Mail, href: 'mailto:derrickessah11@gmail.com', label: 'Email', target: '_self' },
]

const Footer = () => {
  return (
    <footer className="bg-brand-dark border-t border-white/10">
      <div className="mx-auto w-full max-w-6xl px-6 pt-10 pb-6 lg:pt-12 lg:pb-7">
        <div className="flex flex-col items-center text-center">
          <img src={logo} alt="EasyEat" className="h-auto w-34 sm:w-32" />

          <nav className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:gap-x-8">
            {navLinks.map(({ label, href }) => (
              <a 
                key={label}
                href={href}
                className="font-display text-xs uppercase tracking-wide text-white transition-colors hover:text-brand-accent sm:text-sm"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="mt-8 flex gap-3 sm:mt-9">
            {socialLinks.map(({ icon: Icon, href, label, target }) => (
              <a
                key={label}
                href={href}
                target={target}
                rel={target === '_blank' ? 'noreferrer' : undefined}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center border border-white/20 text-white transition-colors hover:border-brand-accent hover:bg-brand-accent sm:h-10 sm:w-10"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-4 text-center font-body text-xs text-gray-500 sm:mt-9 sm:pt-5 sm:text-sm">
          <p className='text-lg'>
            <span className="text-white/80 text-lg">Acer's Diner</span> © {new Date().getFullYear()}. All Rights Reserved.
          </p>
          <p className="mt-2 text-sm text-gray-400 sm:text-base">
            Developed by{' '}
            <a
              href="https://github.com/charlesdauda"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-brand-accent transition-colors hover:text-brand-header"
            >
              codewithcharles
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer