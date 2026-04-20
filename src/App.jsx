import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Services from './components/Services'
import SmileAssessment from './components/SmileAssessment'
import Stats from './components/Stats'
import DoctorProfile from './components/DoctorProfile'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

export default function App() {
  return (
    <main className="bg-ivory text-bark font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <SmileAssessment />
      <Stats />
      <DoctorProfile />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  )
}
