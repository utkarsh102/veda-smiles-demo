import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Zap, Sparkles, Wind, Frown, AlertCircle, Baby, ShieldAlert, Smile, CheckCircle2, MessageCircle } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const concerns = [
  {
    id: 'pain',
    icon: Zap,
    label: 'Tooth Pain',
    emoji: '⚡',
    treatment: 'Root Canal Treatment (RCT)',
    description: 'Persistent tooth pain usually means the nerve inside is infected or damaged. Our pain-free single-sitting RCT removes the infection and seals the tooth permanently — no more pain, no extraction.',
    steps: ['Diagnosis & digital X-Ray', 'Nerve removal under local anaesthesia', 'Canal cleaning & shaping', 'Sealing & crown placement'],
    time: '1–2 sittings',
    price: 'From ₹3,500',
    color: 'terracotta',
  },
  {
    id: 'yellow',
    icon: Sparkles,
    label: 'Yellow Teeth',
    emoji: '✨',
    treatment: 'Professional Teeth Whitening',
    description: 'Staining from chai, coffee, and food darkens teeth over time. Our clinical whitening lifts stains up to 8 shades in a single 90-minute session — safe, effective, long-lasting results.',
    steps: ['Current shade assessment', 'Gum protection barrier', 'Professional whitening gel application', 'LED light activation & rinse'],
    time: '90 minutes',
    price: '₹3,999',
    color: 'saffron',
  },
  {
    id: 'crooked',
    icon: Smile,
    label: 'Crooked Teeth',
    emoji: '😬',
    treatment: 'Braces or Clear Aligners',
    description: 'Misaligned teeth affect your confidence and bite. Metal braces, ceramic, or invisible aligners — we design a personalised plan for your teeth, age, and budget.',
    steps: ['3D scan & digital treatment plan', 'Custom brace or aligner fitting', 'Monthly progress adjustments', 'Retainer after completion'],
    time: '12–18 months',
    price: 'From ₹25,000',
    color: 'moss',
  },
  {
    id: 'missing',
    icon: AlertCircle,
    label: 'Missing Teeth',
    emoji: '🦷',
    treatment: 'Dental Implants',
    description: 'Missing teeth affect chewing, speech, and jaw bone health. Implants are the gold standard — a titanium root topped with a porcelain crown that looks and works just like a real tooth.',
    steps: ['Bone density assessment', 'Implant post placement', 'Healing & osseointegration (2–3 months)', 'Custom crown attachment'],
    time: '3–4 months',
    price: 'From ₹18,000',
    color: 'turmeric',
  },
  {
    id: 'gums',
    icon: ShieldAlert,
    label: 'Bleeding Gums',
    emoji: '🩸',
    treatment: 'Gum (Periodontal) Treatment',
    description: 'Bleeding gums are an early sign of gum disease. Caught early, it\'s highly treatable. We do deep cleaning, scaling, and root planing to restore healthy gums before bone loss sets in.',
    steps: ['Gum pocket depth measurement', 'Scaling & root planing', 'Antibiotic therapy if required', 'Maintenance & follow-up schedule'],
    time: '2–3 sittings',
    price: 'From ₹1,500',
    color: 'terracotta',
  },
  {
    id: 'breath',
    icon: Wind,
    label: 'Bad Breath',
    emoji: '💨',
    treatment: 'Halitosis Evaluation & Treatment',
    description: 'Chronic bad breath usually has a dental root cause — cavities, gum disease, or bacterial coating on the tongue. We find and fix the actual source, not just mask it.',
    steps: ['Oral cause identification', 'Deep scaling & cleaning', 'Cavity or gum treatment if needed', 'Home care & hygiene guidance'],
    time: '1–2 sittings',
    price: 'From ₹799',
    color: 'moss',
  },
  {
    id: 'sensitive',
    icon: Frown,
    label: 'Sensitivity',
    emoji: '🧊',
    treatment: 'Desensitisation Treatment',
    description: 'Sharp pain on cold, hot, or sweet food means exposed dentine or receding gums. We apply fluoride varnishes and bonding agents to seal the exposed surfaces and stop the sensitivity.',
    steps: ['Cause identification (enamel/gum)', 'Professional fluoride varnish application', 'Bonding agent for exposed dentine', 'Take-home sensitivity kit'],
    time: '1 sitting',
    price: 'From ₹1,200',
    color: 'saffron',
  },
  {
    id: 'child',
    icon: Baby,
    label: "Child's First Visit",
    emoji: '👶',
    treatment: 'Paediatric Dental Check-up',
    description: "The first dental visit sets a lifelong attitude toward oral health. We make it gentle, fun, and drill-free — just a friendly look around, a clean, and a sticker. No fear, no tears.",
    steps: ['Friendly meet & greet (no pressure)', 'Gentle tooth examination', 'Cleaning if child is comfortable', 'Fluoride & take-home toothbrush'],
    time: '30 minutes',
    price: '₹299',
    color: 'moss',
  },
]

const colorMap = {
  saffron:    { ring: 'ring-saffron',    bg: 'bg-saffron/10',    text: 'text-saffron',    btn: 'bg-saffron hover:bg-turmeric',    dot: 'bg-saffron',    panelBorder: 'border-saffron/25' },
  turmeric:   { ring: 'ring-turmeric',   bg: 'bg-turmeric/10',   text: 'text-turmeric',   btn: 'bg-turmeric hover:bg-saffron',    dot: 'bg-turmeric',   panelBorder: 'border-turmeric/25' },
  moss:       { ring: 'ring-moss',       bg: 'bg-moss/10',       text: 'text-moss',       btn: 'bg-moss hover:bg-moss/80',        dot: 'bg-moss',       panelBorder: 'border-moss/25' },
  terracotta: { ring: 'ring-terracotta', bg: 'bg-terracotta/10', text: 'text-terracotta', btn: 'bg-terracotta hover:bg-terracotta/80', dot: 'bg-terracotta', panelBorder: 'border-terracotta/25' },
}

export default function SmileAssessment() {
  const [selected, setSelected] = useState(null)
  const panelRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.concern-card',
        { opacity: 0, scale: 0.88 },
        { opacity: 1, scale: 1, stagger: 0.07, duration: 0.5, ease: 'back.out(1.4)',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (!selected || !panelRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(panelRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
      )
    })
    return () => ctx.revert()
  }, [selected])

  const concern = concerns.find(c => c.id === selected)
  const colors = concern ? colorMap[concern.color] : null

  return (
    <section ref={sectionRef} className="py-20 bg-cream relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <span className="section-tag">Quick Assessment</span>
          <h2 className="section-heading">
            What's Bothering <span className="text-saffron italic">Your Smile?</span>
          </h2>
          <p className="text-warmgray max-w-xl mx-auto">
            Tap your concern and we'll show you exactly what's happening and how we treat it.
          </p>
        </div>

        {/* Concern grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {concerns.map((c) => {
            const isSelected = selected === c.id
            const cm = colorMap[c.color]
            return (
              <button
                key={c.id}
                className={`concern-card relative flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all duration-200 text-center cursor-pointer
                  ${isSelected
                    ? `ring-2 ${cm.ring} ${cm.bg} border-transparent shadow-md`
                    : 'border-border bg-ivory hover:border-saffron/40 hover:bg-saffron/5 hover:-translate-y-0.5'
                  }`}
                onClick={() => setSelected(isSelected ? null : c.id)}
              >
                <span className="text-2xl leading-none">{c.emoji}</span>
                <span className="text-sm font-semibold text-bark leading-tight">{c.label}</span>
                {isSelected && (
                  <CheckCircle2 className="absolute top-2 right-2 w-4 h-4 text-saffron" />
                )}
              </button>
            )
          })}
        </div>

        {/* Prompt */}
        {!concern && (
          <p className="text-center text-warmgray text-sm">
            👆 Tap a concern above to see the full treatment plan
          </p>
        )}

        {/* Detail panel */}
        {concern && colors && (
          <div
            ref={panelRef}
            className={`${colors.bg} border ${colors.panelBorder} rounded-3xl p-6 md:p-8`}
          >
            <div className="grid md:grid-cols-2 gap-8">

              {/* Left: overview */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-4xl">{concern.emoji}</span>
                  <div>
                    <div className="text-xs font-semibold tracking-widest text-warmgray uppercase mb-0.5">Recommended Treatment</div>
                    <h3 className={`font-serif text-2xl font-bold ${colors.text}`}>{concern.treatment}</h3>
                  </div>
                </div>

                <p className="text-bark2 leading-relaxed mb-6 text-sm md:text-base">{concern.description}</p>

                <div className="flex gap-8 mb-6">
                  <div>
                    <div className="text-xs text-warmgray uppercase tracking-widest mb-1">Duration</div>
                    <div className="font-semibold text-bark">{concern.time}</div>
                  </div>
                  <div>
                    <div className="text-xs text-warmgray uppercase tracking-widest mb-1">Starting from</div>
                    <div className={`font-bold text-xl ${colors.text}`}>{concern.price}</div>
                  </div>
                </div>

                <a
                  href={`https://wa.me/919876543210?text=Hello%2C%20I%27m%20concerned%20about%20${encodeURIComponent(concern.label)}%20and%20would%20like%20a%20consultation.`}
                  className={`inline-flex items-center gap-2 ${colors.btn} text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-md`}
                >
                  <MessageCircle className="w-4 h-4" />
                  Book Free Consultation
                </a>
              </div>

              {/* Right: steps */}
              <div>
                <div className="text-xs font-semibold tracking-widest text-warmgray uppercase mb-5">Treatment Steps</div>
                <div className="space-y-4">
                  {concern.steps.map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`w-7 h-7 rounded-full ${colors.dot} text-white text-xs font-bold flex items-center justify-center flex-shrink-0`}>
                        {i + 1}
                      </div>
                      <div className="text-bark2 text-sm pt-1 leading-relaxed">{step}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-white/60 rounded-xl border border-white/80">
                  <p className="text-xs text-warmgray">
                    💬 <strong className="text-bark">Free first consultation.</strong> No pressure, no surprise charges.
                    Walk in or WhatsApp us to book your slot.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
