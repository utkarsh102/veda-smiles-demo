import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GraduationCap, Award, MapPin, Clock } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const credentials = [
  { icon: GraduationCap, text: 'BDS — Manipal University, 2008' },
  { icon: GraduationCap, text: 'MDS (Orthodontics) — KGMU Lucknow, 2011' },
  { icon: Award,         text: 'Member, Indian Dental Association (IDA)' },
  { icon: Award,         text: 'Certified Invisalign Provider' },
  { icon: MapPin,        text: 'Practising in Rajnagar Extension, Ghaziabad' },
  { icon: Clock,         text: '15+ years of clinical experience' },
]

export default function DoctorProfile() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ['.doc-image', '.doc-content'],
        { opacity: 0, x: (i) => (i === 0 ? -40 : 40) },
        { opacity: 1, x: 0, duration: 0.7, stagger: 0.12, ease: 'power2.out',
          scrollTrigger: { trigger: ref.current, start: 'top 70%' } }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={ref} className="py-20 bg-petal relative overflow-hidden">
      {/* Spinning mandala corner decoration */}
      <div className="absolute -top-24 -left-24 w-72 h-72 opacity-10 animate-spin-slow pointer-events-none">
        <svg viewBox="0 0 200 200">
          {[...Array(8)].map((_, i) => (
            <g key={i} transform={`rotate(${i * 45} 100 100)`}>
              <ellipse cx="100" cy="22" rx="9" ry="28" fill="none" stroke="#E8941A" strokeWidth="1.5" />
            </g>
          ))}
          <circle cx="100" cy="100" r="62" fill="none" stroke="#E8941A" strokeWidth="1" />
          <circle cx="100" cy="100" r="82" fill="none" stroke="#E8941A" strokeWidth="0.5" />
        </svg>
      </div>
      <div className="absolute -bottom-20 -right-20 w-56 h-56 opacity-8 animate-spin-reverse pointer-events-none">
        <svg viewBox="0 0 200 200">
          {[...Array(6)].map((_, i) => (
            <g key={i} transform={`rotate(${i * 60} 100 100)`}>
              <ellipse cx="100" cy="18" rx="8" ry="24" fill="none" stroke="#E8941A" strokeWidth="1.2" />
            </g>
          ))}
          <circle cx="100" cy="100" r="70" fill="none" stroke="#E8941A" strokeWidth="0.8" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Photo */}
          <div className="doc-image relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-bark/15 aspect-[4/5] max-w-sm mx-auto">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80"
                alt="Dr. Priya Sharma"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bark/55 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-white font-serif text-2xl font-bold">Dr. Priya Sharma</div>
                <div className="text-saffron font-semibold text-sm">BDS, MDS (Orthodontics)</div>
              </div>
            </div>
            {/* Floating experience badge */}
            <div className="absolute -bottom-3 -right-3 md:right-0 bg-saffron text-white rounded-2xl px-4 py-3 shadow-lg text-center">
              <div className="text-2xl font-bold font-serif leading-none">15+</div>
              <div className="text-xs font-semibold mt-0.5 opacity-90">Yrs Experience</div>
            </div>
          </div>

          {/* Content */}
          <div className="doc-content">
            <span className="section-tag">Meet Your Doctor</span>
            <h2 className="section-heading">
              Science meets <span className="text-saffron italic">warmth</span>
            </h2>

            <blockquote className="text-bark2/80 text-lg italic border-l-4 border-saffron pl-5 mb-7 leading-relaxed">
              "I believe every patient deserves a dentist who listens first, drills second. We're not just fixing teeth — we're building lifelong oral health for your whole family."
            </blockquote>

            <div className="space-y-3 mb-7">
              {credentials.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <div className="w-7 h-7 bg-saffron/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-3.5 h-3.5 text-saffron" />
                  </div>
                  <span className="text-sm text-bark2 pt-1">{text}</span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/919876543210?text=Hello%20Dr.%20Sharma%2C%20I'd%20like%20to%20book%20a%20consultation."
              className="btn-primary"
            >
              Talk to Dr. Sharma
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
