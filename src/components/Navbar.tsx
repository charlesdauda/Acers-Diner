import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../assets/images/acers.png'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative z-50 bg-brand-dark sticky top-0">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-3 items-center h-20 lg:h-24">
          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                end
                className="relative group font-display text-base uppercase tracking-wide text-white py-1"
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={`absolute left-0 -bottom-0.5 h-[2px] w-full bg-white origin-left transition-transform duration-300 ease-out ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div aria-hidden className="hidden lg:block" />
          <div className="justify-self-end hidden lg:block">
            <Link
              to="/contacts"
              className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent/90 transition-colors text-white font-display text-sm uppercase tracking-wide px-8 py-4"
            >
              Get in touch
            </Link>
          </div>

          <Link to="/" className="justify-self-start lg:hidden">
            <img src={logo} alt="Easyeat" className="h-20 w-auto object-contain" />
          </Link>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="justify-self-end lg:hidden text-white"
            aria-label="Open menu"
          >
            <Menu size={32} />
          </button>
        </div>

        <Link
          to="/"
          className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center"
        >
          <img src={logo} alt="Easyeat" className="h-16 w-auto object-contain" />
        </Link>
      </div>
      <div
        className={`fixed inset-0 z-50 bg-brand-dark transition-transform duration-500 ease-in-out lg:hidden ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <img src={logo} alt="Easyeat" className="h-10 w-auto object-contain" />
          </Link>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <span className="font-body text-sm">Close</span>
            <X size={22} />
          </button>
        </div>

        <nav className="flex flex-col gap-6 px-6 mt-12">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              end
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center justify-between font-display text-2xl uppercase tracking-wide transition-colors ${
                  isActive ? 'text-white' : 'text-white/40 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar;