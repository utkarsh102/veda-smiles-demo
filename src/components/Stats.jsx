import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: 1200, suffix: '+', label: 'Families Served',     desc: 'Across Ghaziabad & NCR' },
  { value: 15,   suffix: '+', label: 'Years of Practice',   desc: 'Rajnagar Extension' },
  { value: 98,   suffix: '%', label: 'Patient Satisfaction',desc: 'Based on 340+ reviews' },
  { value: 5000, suffix: '+', label: 'Smiles Restored',     desc: 'From check-ups to implants' },
]

function Counter({ value, suffix, started }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!started) return
    const obj = { val: 0 }
    gsap.to(obj, {
      val: value,
      duration: 2.2,
      ease: 'power2.out',
      onUpdate: () => setCount(Math.round(obj.val)),
    })
  }, [started, value])

  return (
    <span className="text-4xl md:text-5xl font-serif font-bold text-ivory">
      {count.toLocaleString('en-IN')}{suffix}
    </span>
  )
}

export default function Stats() {
  const [started, setStarted] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 70%',
        onEnter: () => setStarted(true),
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-bark relative overflow-hidden">
      {/* Background mandala */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-full max-w-2xl">
          {[...Array(12)].map((_, i) => (
            <g key={i} transform={`rotate(${i * 30} 200 200)`}>
              <ellipse cx="200" cy="55" rx="14" ry="50" fill="none" stroke="#E8941A" strokeWidth="2" />
            </g>
          ))}
          {[80, 120, 165].map(r => (
            <circle key={r} cx="200" cy="200" r={r} fill="none" stroke="#E8941A" strokeWidth="1.5" />
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-ivory mb-3">
            Numbers that <span className="text-saffron italic">speak for us</span>
          </h2>
          <p className="text-ivory/55 max-w-md mx-auto">
            Fifteen years of caring for Ghaziabad's families — here's what that looks like.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <Counter value={s.value} suffix={s.suffix} started={started} />
              <div className="text-saffron font-semibold mt-2 text-sm">{s.label}</div>
              <div className="text-ivory/45 text-xs mt-1">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
