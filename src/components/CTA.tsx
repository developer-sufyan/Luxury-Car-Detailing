import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden min-h-[500px] flex items-end pb-20">
      {/* Background image */}
      <img
        src="/cta-car.png"
        alt="Luxury car"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent" />

      {/* Content */}
      <div className="max-w-[1120px] mx-auto w-full px-6 relative z-20">
        <div className="max-w-[520px]">
          <motion.h2
            className="text-4xl md:text-5xl text-white"
            style={{ fontFamily: '"Instrument Serif", serif' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Book your luxury car detailing today
          </motion.h2>
          <motion.p
            className="text-white/60 text-base leading-relaxed mt-4"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
          >
            Click the link below. Fill out the details and we'll get back to you in less than 24 hours.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-8 border border-white/30 rounded-sm px-5 py-2 text-sm text-white hover:bg-white hover:text-black transition-all duration-300"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
            >
              Get a quote now
              <ArrowUpRight size={16} strokeWidth={2} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTA
