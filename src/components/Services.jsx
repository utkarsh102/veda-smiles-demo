import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Search, Sparkles, Smile, Zap, ShieldCheck, Baby } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: Search,
    title: 'Dental Check-up',
    desc: 'Full oral examination, professional cleaning & X-rays. Catch problems early, save big later.',
    price: '₹299',
    duration: '45 min',
    badge: 'First Visit Offer',
    color: 'saffron',
  },
  {
    icon: Sparkles,
    title: 'Teeth Whitening',
    desc: 'Professional in-clinic whitening. Get visibly whiter teeth up to 8 shades in a single session.',
    price: '₹3,999',
    duration: '90 min',
    badge: 'Most Popular',
    color: 'turmeric',
  },
  {
    icon: Smile,
    title: 'Braces & Aligners',
    desc: 'Metal braces, ceramic, or invisible aligners — we straighten every smile at every budget.',
    price: 'From ₹25,000',
    duration: '12–18 months',
    badge: 'EMI Available',
    color: 'moss',
  },
  {
    icon: Zap,
    title: 'Root Canal (RCT)',
    desc: 'Modern painless RCT. Save your natural tooth — single-sitting available with same-day relief.',
    price: 'From ₹3,500',
    duration: '1–2 sittings',
    badge: 'Pain-Free',
    color: 'terracotta',
  },
  {
    icon: ShieldCheck,
    title: 'Dental Implants',
    desc: 'Permanent tooth replacement that looks, feels, and functions exactly like a natural tooth.',
    price: 'From ₹18,000',
    duration: '3–4 months',
    badge: 'Lifetime Warranty',
    color: 'saffron',
  },
  {
    icon: Baby,
    title: 'Paediatric Dentistry',
    desc: "Gentle, fun dental care for little ones. We make children love their dentist visits.",
    price: '₹299',
    duration: '30 min',
    badge: 'Kids Friendly',
    color: 'moss',
  },
]

const colorMap = {
  saffron:    { bg: 'bg-saffron/10',    text: 'text-saffron',    border: 'border-saffron/20',    badge: 'bg-saffron text-white' },
  turmeric:   { bg: 'bg-turmeric/10',   text: 'text-turmeric',   border: 'border-turmeric/20',   badge: 'bg-turmeric text-white' },
  moss:       { bg: 'bg-moss/10',       text: 'text-moss',       border: 'border-moss/20',       badge: 'bg-moss text-white' },
  terracotta: { bg: 'bg-terracotta/10', text: 'text-terracotta', border: 'border-terracotta/20', badge: 'bg-terracotta text-white' },
}

export default function Services() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.service-card',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="treatments" ref={sectionRef} className="py-20 bg-ivory relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <span className="section-tag">Our Treatments</span>
          <h2 className="section-heading">
            Care for Every <span className="text-saffron italic">Smile</span>
          </h2>
          <p className="text-warmgray max-w-xl mx-auto">
            From your child's first tooth to full smile makeovers — comprehensive dental care under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const c = colorMap[s.color]
            const Icon = s.icon
            return (
              <div
                key={s.title}
                className={`service-card group relative bg-cream rounded-2xl p-6 border ${c.border} hover:shadow-xl hover:shadow-saffron/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-default`}
              >
                {/* Decorative triangle corner */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-8">
                  <svg viewBox="0 0 80 80" className={`w-full h-full ${c.text} fill-current opacity-10`}>
                    <path d="M80 0 L0 80 L80 80 Z" />
                  </svg>
                </div>

                <div className={`w-12 h-12 ${c.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${c.text}`} />
                </div>

                <div className="flex items-start justify-between mb-2 gap-2">
                  <h3 className="font-serif text-xl font-semibold text-bark">{s.title}</h3>
                  <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full whitespace-nowrap flex-shrink-0 ${c.badge}`}>
                    {s.badge}
                  </span>
                </div>

                <p className="text-warmgray text-sm leading-relaxed mb-4">{s.desc}</p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <div className={`font-bold text-lg ${c.text}`}>{s.price}</div>
                    <div className="text-xs text-warmgray">{s.duration}</div>
                  </div>
                  <a
                    href={`https://wa.me/919876543210?text=Hello%2C%20I'd%20like%20to%20book%20for%20${encodeURIComponent(s.title)}.`}
                    className={`text-xs font-bold ${c.text} hover:underline transition-all`}
                  >
                    Book Now →
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 55" className="w-full fill-cream" preserveAspectRatio="none">
          <path d="M0,20 C360,55 720,0 1080,30 C1200,40 1320,15 1440,28 L1440,55 L0,55 Z" />
        </svg>
      </div>
    </section>
  )
}
