import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import ServicesPage from './pages/ServicesPage'
import PricingPage from './pages/PricingPage'
import ContactPage from './pages/ContactPage'
import TermsPage from './pages/TermsPage'
import PrivacyPage from './pages/PrivacyPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'

function NotFound() {
  return (
    <div className="bg-black text-white min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-32">
      <span className="text-white/40 text-xs font-mono uppercase tracking-widest mb-3">
        Error 404
      </span>
      <h1
        className="text-5xl md:text-7xl text-white font-serif mb-4"
        style={{ fontFamily: '"Instrument Serif", serif' }}
      >
        Destination Not Found
      </h1>
      <p className="text-white/60 text-sm font-light max-w-[420px] mb-8 leading-relaxed">
        The chamber or page you requested does not exist or has been relocated to our private archives.
      </p>
      <Link
        to="/"
        className="border border-white/30 rounded-sm px-6 py-2.5 text-xs uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all duration-300"
      >
        Return to Atelier
      </Link>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        {/* Film grain texture overlay across all pages */}
        <div className="grain" />

        {/* Smooth scroll to top on every route change */}
        <ScrollToTop />

        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signin" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/register" element={<SignupPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
