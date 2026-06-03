import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BookingBar from './components/BookingBar'
import Fleet from './components/Fleet'
import WhyUs from './components/WhyUs'
import HowItWorks from './components/HowItWorks'
import Destinations from './components/Destinations'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <BookingBar />
      <Fleet />
      <WhyUs />
      <HowItWorks />
      <Destinations />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
