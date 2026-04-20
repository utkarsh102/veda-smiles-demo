import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check, Star } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const plans = [
  {
    name: 'Check-up Package',
    price: '₹999',
    period: 'one-time',
    desc: 'Perfect for a first visit or annual dental health review.',
    features: [
      'Full oral examination',
      'Professional cleaning (scaling)',
      'Digital X-Ray (if needed)',
      'Cavity detection report',
      'Personalised treatment plan',
      'Fluoride application',
    ],
    cta: 'Book Check-up',
    popular: false,
    borderClass: 'border-border',
    ctaClass: 'btn-ghost w-full justify-center',
  },
  {
    name: 'Smile Makeover',
    price: '₹5,999',
    period: 'complete',
    desc: 'Transform your smile in one comprehensive session.',
    features: [
      'Everything in Check-up',
      'Professional teeth whitening',
      'Smile design consultation',
      'Minor cosmetic bonding (1 tooth)',
      'Priority same-day slot',
      '30-day follow-up included',
    ],
    cta: 'Book Makeover',
    popular: true,
    borderClass: 'border-saffron',
    ctaClass: 'btn-primary w-full justify-center',
  },
  {
    name: 'Family Care Plan',
    price: '₹2,499',
    period: 'per month',
    desc: 'Unlimited routine care for your entire family.',
    features: [
      'Unlimited check-ups (family of 4)',
      'Free cleanings every 6 months',
      '20% off all treatments',
      'Emergency slot guarantee',
      'WhatsApp direct line',
      'Annual dental health report',
    ],
    cta: 'Start Family Plan',
    popular: false,
    borderClass: 'border-moss/40',
    ctaClass: 'w-full justify-center inline-flex items-center bg-moss text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-moss/85 transition-all',
  },
]

export default function Pricing() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.price-card',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 0.6, ease: 'power2.out',
          scrollTrigger: { trigger: ref.current, start: 'top 70%' } }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="pricing" ref={ref} className="py-20 bg-cream relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <span className="section-tag">Transparent Pricing</span>
          <h2 className="section-heading">
            No hidden costs. <span className="text-saffron italic">Ever.</span>
          </h2>
          <p className="text-warmgray max-w-xl mx-auto">
            We believe in honest, upfront pricing — because dental care should never be a surprise.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-center">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`price-card relative bg-ivory rounded-2xl border-2 ${p.borderClass} p-6 transition-all duration-300
                ${p.popular ? 'shadow-2xl shadow-saffron/20 md:scale-105' : 'hover:shadow-md hover:shadow-saffron/10'}`}
            >
              {p.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-saffron text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                    <Star className="w-3 h-3 fill-white" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-4">
                <h3 className="font-serif text-xl font-bold text-bark">{p.name}</h3>
                <p className="text-warmgray text-sm mt-1">{p.desc}</p>
              </div>

              <div className="mb-6">
                <span className="font-serif text-4xl font-bold text-bark">{p.price}</span>
                <span className="text-warmgray text-sm ml-2">/ {p.period}</span>
              </div>

              <ul className="space-y-2.5 mb-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-bark2">
                    <Check className="w-4 h-4 text-saffron flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/919876543210?text=Hello%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(p.name)}.`}
                className={p.ctaClass}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-warmgray text-sm mt-8">
          All prices inclusive of GST. EMI available via card.{' '}
          <a href="https://wa.me/919876543210" className="text-saffron hover:underline font-medium">
            Ask us for custom packages →
          </a>
        </p>
      </div>
    </section>
  )
}
