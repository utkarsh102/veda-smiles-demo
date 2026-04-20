import { useState, useEffect } from 'react'
import { Phone, Menu, X } from 'lucide-react'

const ToothIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
    <path d="M12 2C9.5 2 7.5 4 7 6.5c-.3 1.5-.2 3 .5 4.5L9 15h6l1.5-4c.7-1.5.8-3 .5-4.5C16.5 4 14.5 2 12 2z"/>
    <path d="M9 15l-1 5.5c-.2.8.4 1.5 1.2 1.5.6 0 1.1-.4 1.2-1L11 17h2l.6 4c.1.6.7 1 1.2 1 .8 0 1.4-.7 1.2-1.5L15 15H9z"/>
  </svg>
)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-ivory/95 backdrop-blur-md shadow-md shadow-saffron/10' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-saffron rounded-full flex items-center justify-center shadow-sm">
              <ToothIcon />
            </div>
            <div>
              <div className="font-serif font-bold text-bark text-lg leading-none">Veda Smile</div>
              <div className="text-warmgray text-xs tracking-wide">Dental Clinic · Ghaziabad</div>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {[['Home','#home'],['Treatments','#treatments'],['About','#about'],['Pricing','#pricing']].map(([label, href]) => (
              <a key={label} href={href} className="text-bark2 hover:text-saffron transition-colors text-sm font-semibold">
                {label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+919876543210" className="flex items-center gap-1.5 text-sm text-bark2 hover:text-saffron transition-colors font-medium">
              <Phone className="w-4 h-4" />
              +91 98765 43210
            </a>
            <a
              href="https://wa.me/919876543210?text=Hello%2C%20I%27d%20like%20to%20book%20an%20appointment."
              className="btn-primary text-sm"
            >
              Book on WhatsApp
            </a>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden text-bark p-1" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-ivory/98 backdrop-blur-md border-t border-border px-6 py-4 space-y-1">
          {[['Home','#home'],['Treatments','#treatments'],['About','#about'],['Pricing','#pricing']].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="block text-bark2 hover:text-saffron py-2.5 font-semibold border-b border-border/50 last:border-0"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="https://wa.me/919876543210"
            className="btn-primary block text-center mt-4"
          >
            Book on WhatsApp
          </a>
        </div>
      )}
    </nav>
  )
}
