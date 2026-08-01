import { FaTiktok, FaInstagram, FaFacebookF } from 'react-icons/fa'
import logo from '../assets/images/acers.png'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Contact', href: '#' },
]

const socialLinks = [
  { icon: FaTiktok, href: '#', label: 'Tiktok' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaFacebookF, href: '#', label: 'Facebook' },
]

const Footer = () => {
  return (
    <footer className="bg-brand-dark border-t border-white/10">
      <div className="mx-auto w-full max-w-6xl px-6 pt-10 pb-6 lg:pt-12 lg:pb-7">
        <div className="flex flex-col items-center text-center">
          <img src={logo} alt="EasyEat" className="h-auto w-28 sm:w-32" />

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
            {socialLinks.map(({ icon: Icon, href, label }) => (
              
              <a
                key={label}
                href={href}
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
            <span className="text-white/80 text-lg">AncoraThemes</span> © {new Date().getFullYear()}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer