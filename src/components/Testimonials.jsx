import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star, Quote } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    name: 'Sunita Agarwal',
    area: 'Rajnagar Ext., Ghaziabad',
    text: 'My kids were terrified of the dentist. After one visit to Dr. Priya, they actually asked me when they can go again! The clinic is so warm and the doctor is incredibly patient with children.',
    rating: 5,
    treatment: 'Paediatric Dentistry',
    avatar: 'SA',
    avatarBg: 'bg-saffron',
  },
  {
    name: 'Rajesh Kumar',
    area: 'Indirapuram, Ghaziabad',
    text: 'Got my root canal done here — completely painless. I was dreading it for months but it was over in one sitting. Professional staff, transparent pricing, warm atmosphere. Highly recommend.',
    rating: 5,
    treatment: 'Root Canal (RCT)',
    avatar: 'RK',
    avatarBg: 'bg-moss',
  },
  {
    name: 'Pooja Mehta',
    area: 'Vaishali, Ghaziabad',
    text: 'The whitening result was beyond my expectations — 8 shades whiter in 90 minutes! The doctor explained everything before starting. Felt very safe and well cared for throughout.',
    rating: 5,
    treatment: 'Teeth Whitening',
    avatar: 'PM',
    avatarBg: 'bg-turmeric',
  },
]

export default function Testimonials() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.testi-card',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 0.6, ease: 'power2.out',
          scrollTrigger: { trigger: ref.current, start: 'top 70%' } }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="py-20 bg-ivory relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <span className="section-tag">Patient Stories</span>
          <h2 className="section-heading">
            Words from our <span className="text-saffron italic">patients</span>
          </h2>
          <p className="text-warmgray">Real stories from families who trust us with their smiles.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="testi-card bg-cream rounded-2xl p-6 border border-border hover:shadow-lg hover:shadow-saffron/10 hover:-translate-y-1 transition-all duration-300 relative"
            >
              <Quote className="w-8 h-8 text-saffron/15 absolute top-4 right-4" />

              <div className="flex gap-0.5 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-saffron text-saffron" />
                ))}
              </div>

              <span className="inline-block text-xs bg-saffron/10 text-saffron font-bold px-2.5 py-0.5 rounded-full mb-3">
                {t.treatment}
              </span>

              <p className="text-bark2 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>

              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${t.avatarBg} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-bark text-sm">{t.name}</div>
                  <div className="text-xs text-warmgray">{t.area}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google rating strip */}
        <div className="flex justify-center mt-10">
          <div className="inline-flex items-center gap-3 bg-white border border-border rounded-full px-6 py-3 shadow-sm">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-saffron text-saffron" />)}
            </div>
            <span className="font-semibold text-bark text-sm">4.9 on Google</span>
            <span className="text-warmgray text-sm">· 340+ reviews</span>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 50" className="w-full fill-cream" preserveAspectRatio="none">
          <path d="M0,25 C480,50 960,0 1440,25 L1440,50 L0,50 Z" />
        </svg>
      </div>
    </section>
  )
}
