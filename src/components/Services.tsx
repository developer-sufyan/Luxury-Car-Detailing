import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

const services = [
  {
    image: '/service-entry.jpg',
    title: 'Entry level detail',
    body: 'Treat your luxury car to a thorough hand wash and wax application.',
  },
  {
    image: '/service-maintenance.jpg',
    title: 'Maintenance detail',
    body: 'Ensure your car\'s longevity with a periodic exterior protection treatment.',
  },
  {
    image: '/service-full.png',
    title: 'Full detail',
    body: 'Pamper your vehicle with a complete treatment, leaving no detail overlooked.',
  },
]

function Services() {
  return (
    <section id="services" className="bg-black pt-32 pb-24">
      <div className="max-w-[1120px] mx-auto w-full px-6">
        {/* Top label */}
        <div className="border-t border-white/10 pt-6 mb-8">
          <span
            className="text-white/40"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '11px',
              fontWeight: 400,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
            }}
          >
            Luxury car detailing
          </span>
        </div>

        {/* Section header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.h2
            className="text-4xl md:text-5xl text-white"
            style={{ fontFamily: '"Instrument Serif", serif' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Love in Every Detail
          </motion.h2>
          <motion.p
            className="text-white/60 text-base leading-relaxed max-w-[340px]"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Immerse yourself in luxury with our bespoke detailing packages tailored to your car's unique needs.
          </motion.p>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-[hsl(0_0%_7%)] rounded-sm overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              viewport={{ once: true }}
            >
              {/* Card image */}
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* Card content */}
              <div className="p-5 flex flex-col gap-2">
                <h3
                  className="text-white"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    fontWeight: 600,
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-white/50"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    fontWeight: 300,
                    lineHeight: 1.6,
                  }}
                >
                  {service.body}
                </p>
                <Link
                  to="/services"
                  className="text-white group-hover:underline mt-1 inline-block"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    fontWeight: 500,
                  }}
                >
                  Learn more →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
