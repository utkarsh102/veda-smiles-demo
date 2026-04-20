import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Star, Users, Award, ArrowDown } from 'lucide-react'

const Mandala = ({ className }) => (
  <div className={`absolute pointer-events-none ${className}`}>
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {[...Array(8)].map((_, i) => (
        <g key={i} transform={`rotate(${i * 45} 100 100)`}>
          <ellipse cx="100" cy="28" rx="7" ry="22" fill="none" stroke="#E8941A" strokeWidth="0.8" opacity="0.5" />
        </g>
      ))}
      {[55, 72, 88].map(r => (
        <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="#E8941A" strokeWidth="0.6" opacity="0.3" />
      ))}
      <circle cx="100" cy="100" r="12" fill="none" stroke="#E8941A" strokeWidth="1.2" opacity="0.6" />
    </svg>
  </div>
)

const Leaf = ({ className, delay }) => (
  <div className={`absolute pointer-events-none opacity-25 ${className}`} style={{ animationDelay: delay }}>
    <svg viewBox="0 0 40 60" className="w-full h-full fill-saffron">
      <path d="M20 5 Q36 18 30 40 Q20 56 10 46 Q0 30 5 14 Q10 4 20 5Z" />
    </svg>
  </div>
)

export default function Hero() {
  const headingRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })
      tl.from('.hero-word',  { opacity: 0, y: 45, skewY: 4, stagger: 0.07, duration: 0.7, ease: 'power3.out' })
        .from('.hero-sub',   { opacity: 0, y: 20, duration: 0.5, ease: 'power2.out' }, '-=0.3')
        .from('.hero-cta',   { opacity: 0, y: 20, stagger: 0.1, duration: 0.5, ease: 'power2.out' }, '-=0.2')
        .from('.hero-badge', { opacity: 0, scale: 0.8, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)' }, '-=0.1')
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-ivory via-ivory/95 to-ivory/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/40 via-transparent to-ivory/70" />
      </div>

      {/* Mandala decorations */}
      <Mandala className="w-72 h-72 top-8 right-8 animate-spin-slow opacity-70" />
      <Mandala className="w-44 h-44 bottom-24 right-1/3 animate-spin-reverse opacity-50" />

      {/* Floating leaves */}
      <Leaf className="w-7 h-11 top-1/4 right-1/4 animate-float-slow"   delay="0s" />
      <Leaf className="w-5 h-8  top-2/5 right-1/3 animate-float-medium" delay="1.2s" />
      <Leaf className="w-9 h-14 bottom-1/3 right-1/5 animate-float-slow" delay="2s" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="max-w-2xl bg-ivory/70 backdrop-blur-sm rounded-3xl px-6 py-8 md:bg-transparent md:backdrop-blur-none md:p-0">

          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-saffron/10 border border-saffron/30 rounded-full px-4 py-1.5 mb-7">
            <span className="w-2 h-2 bg-saffron rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-saffron">Trusted by Ghaziabad families since 2008</span>
          </div>

          {/* Headline */}
          <h1 ref={headingRef} className="font-serif text-4xl md:text-6xl font-bold text-bark leading-tight mb-5">
            {['Your', "Family's", 'Smile,'].map((w, i) => (
              <span key={i} className="hero-word inline-block mr-3">{w}</span>
            ))}
            <br />
            {['Our', 'Lifelong', 'Care.'].map((w, i) => (
              <span key={i} className={`hero-word inline-block mr-3 ${i === 1 ? 'text-saffron italic' : ''}`}>{w}</span>
            ))}
          </h1>

          <p className="hero-sub text-bark2/80 text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
            Gentle, affordable dental care for every generation — from your child's first tooth to grandparents' implants.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="https://wa.me/919876543210?text=Hello%2C%20I'd%20like%20to%20book%20a%20free%20check-up."
              className="hero-cta btn-primary text-base px-7 py-3.5"
            >
              Book Free Check-up
            </a>
            <a href="#treatments" className="hero-cta btn-ghost text-base px-7 py-3.5">
              See Treatments
            </a>
          </div>

          {/* Social proof */}
          <div className="flex flex-wrap gap-3">
            <div className="hero-badge flex items-center gap-2.5 bg-white/85 backdrop-blur-sm border border-border rounded-2xl px-4 py-2.5 shadow-sm">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-saffron text-saffron" />)}
              </div>
              <div>
                <div className="text-sm font-bold text-bark">4.9 / 5 Rating</div>
                <div className="text-xs text-warmgray">340+ Google reviews</div>
              </div>
            </div>
            <div className="hero-badge flex items-center gap-2.5 bg-white/85 backdrop-blur-sm border border-border rounded-2xl px-4 py-2.5 shadow-sm">
              <Users className="w-7 h-7 text-saffron" />
              <div>
                <div className="text-sm font-bold text-bark">1,200+ Families</div>
                <div className="text-xs text-warmgray">Served &amp; counting</div>
              </div>
            </div>
            <div className="hero-badge flex items-center gap-2.5 bg-white/85 backdrop-blur-sm border border-border rounded-2xl px-4 py-2.5 shadow-sm">
              <Award className="w-7 h-7 text-moss" />
              <div>
                <div className="text-sm font-bold text-bark">BDS + MDS</div>
                <div className="text-xs text-warmgray">Qualified doctors</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce opacity-50">
        <span className="text-xs text-warmgray font-medium tracking-wide">Scroll</span>
        <ArrowDown className="w-4 h-4 text-warmgray" />
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full fill-ivory" preserveAspectRatio="none">
          <path d="M0,40 C240,60 480,20 720,40 C960,60 1200,20 1440,40 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  )
}
