import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const easeOut = [0.16, 1, 0.3, 1] as const

function Hero() {
  return (
    <section id="hero" className="min-h-screen relative overflow-hidden flex flex-col bg-black">
      <div className="max-w-[1120px] mx-auto w-full px-6">
        <div className="flex flex-col items-center justify-center text-center pt-40 md:pt-48 lg:pt-52 pb-12 gap-6">
          {/* H1 */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl text-white max-w-[700px]"
            style={{
              fontFamily: '"Instrument Serif", serif',
              lineHeight: 0.95,
              letterSpacing: '-2px',
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easeOut }}
          >
            Luxury car detailing
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-base md:text-lg text-white/60 max-w-[440px] leading-relaxed"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 300,
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: easeOut }}
          >
            Experience the prestige of a professionally detailed car, radiating elegance and refinement at every turn.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: easeOut }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-white hover:opacity-70 transition-opacity"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: 500,
              }}
            >
              Let's connect
              <ArrowUpRight size={16} strokeWidth={2} />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Hero image — full width */}
      <motion.div
        className="relative w-full mt-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.5, ease: 'easeOut' }}
      >
        <img
          src="/hero-car.png"
          alt="Luxury car in cinematic studio lighting"
          className="w-full h-auto object-cover"
        />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent z-10" />
      </motion.div>
    </section>
  )
}

export default Hero
