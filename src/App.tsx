import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import heroImage from './assets/images/hero.png'
import logo from './assets/images/acers.png'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

function App() {
  useEffect(() => {
    const links: HTMLLinkElement[] = []

    const preload = (href: string) => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = href
      document.head.appendChild(link)
      links.push(link)
    }

    preload(heroImage)
    preload(logo)

    return () => {
      links.forEach((link) => {
        if (link.parentNode) {
          link.parentNode.removeChild(link)
        }
      })
    }
  }, [])

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <a
        href="https://wa.me/233578042175"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.45)] transition-transform duration-300 hover:scale-105 md:bottom-7 md:right-7"
        style={{ animation: 'whatsappPulse 2.5s ease-in-out infinite' }}
      >
        <FaWhatsapp size={26} />
      </a>
    </BrowserRouter>
  )
}

export default App