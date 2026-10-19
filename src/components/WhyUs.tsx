import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { Crosshair, Star, ShieldCheck, ArrowUpRight } from 'lucide-react'

const features = [
  {
    icon: Crosshair,
    title: 'Precise work',
    body: 'We uphold the highest standards of professionalism when servicing your vehicles.',
  },
  {
    icon: Star,
    title: 'Premium Products and Services',
    body: "Ensure your car's longevity with a periodic exterior protection treatment.",
  },
  {
    icon: ShieldCheck,
    title: 'High-Level Security and Privacy',
    body: 'We understand the importance of privacy and security for our clients.',
  },
]

function WhyUs() {
  return (
    <section id="about" className="bg-black py-32">
      <div className="max-w-[1120px] mx-auto w-full px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column — heading + image */}
          <div className="flex flex-col gap-8">
            <motion.h2
              className="text-4xl md:text-5xl text-white max-w-[420px]"
              style={{ fontFamily: '"Instrument Serif", serif' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              We will take good care of your car
            </motion.h2>
            <motion.div
              className="rounded-sm overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src="/cta-car.png"
                alt="Professional car detailing"
                className="w-full h-[30rem] object-contain rounded-sm"
              />
            </motion.div>
          </div>

          {/* Right column — features */}
          <div className="flex flex-col gap-10">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-white" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3
                      className="text-white"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '14px',
                        fontWeight: 600,
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-white/50 leading-relaxed"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '13px',
                        fontWeight: 300,
                      }}
                    >
                      {feature.body}
                    </p>
                  </div>
                </motion.div>
              )
            })}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-white hover:opacity-60 transition-opacity mt-2"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: 500,
                }}
              >
                Get a quote now
                <ArrowUpRight size={16} strokeWidth={2} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
