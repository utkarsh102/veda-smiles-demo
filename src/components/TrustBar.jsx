const signals = [
  '✓ BDS / MDS Qualified Doctors',
  '✓ Digital X-Ray & OPG',
  '✓ Pain-Free Anaesthesia',
  '✓ ISO Certified Sterilisation',
  '✓ Child-Friendly Environment',
  '✓ EMI Options Available',
  '✓ 15+ Years of Practice',
  '✓ Same-Day Appointments',
  '✓ WhatsApp Booking',
  '✓ Single-Sitting Root Canal',
]

export default function TrustBar() {
  return (
    <div className="bg-saffron py-3 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...signals, ...signals].map((s, i) => (
          <span key={i} className="inline-flex items-center gap-3 mx-5 text-white text-sm font-semibold">
            {s}
            <span className="text-white/30 text-lg">|</span>
          </span>
        ))}
      </div>
    </div>
  )
}
