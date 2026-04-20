import { Phone, MapPin, Clock, MessageCircle, Instagram, Facebook } from 'lucide-react'

const ToothIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
    <path d="M12 2C9.5 2 7.5 4 7 6.5c-.3 1.5-.2 3 .5 4.5L9 15h6l1.5-4c.7-1.5.8-3 .5-4.5C16.5 4 14.5 2 12 2z"/>
    <path d="M9 15l-1 5.5c-.2.8.4 1.5 1.2 1.5.6 0 1.1-.4 1.2-1L11 17h2l.6 4c.1.6.7 1 1.2 1 .8 0 1.4-.7 1.2-1.5L15 15H9z"/>
  </svg>
)

const treatments = ['Dental Check-up', 'Teeth Whitening', 'Braces & Aligners', 'Root Canal', 'Dental Implants', 'Paediatric Dentistry']
const quickLinks  = ['About Us', 'Pricing', 'Book Appointment', 'Emergency Dental', 'Patient Reviews']

export default function Footer() {
  return (
    <footer className="bg-bark text-ivory/80 font-sans">

      {/* CTA Banner */}
      <div className="bg-saffron">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-5">
          <div>
            <h3 className="font-serif text-2xl font-bold text-white">Ready for a healthier smile?</h3>
            <p className="text-white/80 text-sm mt-1">Book your free first check-up today — no payment needed.</p>
          </div>
          <a
            href="https://wa.me/919876543210?text=Hello%2C%20I'd%20like%20to%20book%20a%20free%20dental%20check-up."
            className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-saffron font-bold px-6 py-3 rounded-xl hover:shadow-lg transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            Book on WhatsApp
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-saffron rounded-full flex items-center justify-center">
                <ToothIcon />
              </div>
              <div>
                <div className="font-serif font-bold text-ivory text-lg leading-none">Veda Smile</div>
                <div className="text-ivory/40 text-xs tracking-wide">Dental Clinic</div>
              </div>
            </div>
            <p className="text-ivory/55 text-sm leading-relaxed mb-5">
              Gentle, trusted dental care for every generation. Your family's smile is our lifelong mission.
            </p>
            <div className="flex gap-2.5">
              {[
                { Icon: Instagram, href: '#' },
                { Icon: Facebook,  href: '#' },
                { Icon: MessageCircle, href: 'https://wa.me/919876543210' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-8 h-8 bg-ivory/10 hover:bg-saffron rounded-lg flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="font-semibold text-ivory mb-4 text-sm tracking-wide">Treatments</h4>
            <ul className="space-y-2">
              {treatments.map(item => (
                <li key={item}>
                  <a href="#treatments" className="text-ivory/55 hover:text-saffron text-sm transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-ivory mb-4 text-sm tracking-wide">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(item => (
                <li key={item}>
                  <a href="#" className="text-ivory/55 hover:text-saffron text-sm transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-ivory mb-4 text-sm tracking-wide">Find Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5 text-sm text-ivory/55">
                <MapPin className="w-4 h-4 text-saffron flex-shrink-0 mt-0.5" />
                <span>Shop 12, Main Market, Rajnagar Extension, Ghaziabad, UP 201017</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-ivory/55">
                <Phone className="w-4 h-4 text-saffron flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-saffron transition-colors">+91 98765 43210</a>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-ivory/55">
                <Clock className="w-4 h-4 text-saffron flex-shrink-0 mt-0.5" />
                <div>
                  <div>Mon–Sat: 9:00 AM – 8:00 PM</div>
                  <div>Sunday: 10:00 AM – 2:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-ivory/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-ivory/35">
          <div>© 2025 Veda Smile Dental Clinic. All rights reserved.</div>
          <div>Website by <span className="text-saffron font-medium">WebAI Agency</span></div>
        </div>
      </div>
    </footer>
  )
}
