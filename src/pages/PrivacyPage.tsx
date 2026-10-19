import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { EyeOff, ShieldCheck, Database, Key, ArrowUpRight } from 'lucide-react'

const easeOut = [0.16, 1, 0.3, 1] as const

const privacyPillars = [
  {
    icon: EyeOff,
    title: 'Zero Public Exposure Guarantee',
    body: 'We never photograph or film your vehicle with license plates, unique VIN markers, or identifying garage surroundings visible. Media publication across any digital platform occurs only with explicit written consent.',
  },
  {
    icon: Key,
    title: 'End-to-End Encrypted Records',
    body: 'Your service records, paint inspection depth logs, and coating warranty certificates are stored in an AES-256 encrypted digital repository. Only your designated master artisan has clearance to access these files.',
  },
  {
    icon: Database,
    title: 'Zero Data Brokerage or Sale',
    body: 'We do not sell, rent, monetize, or trade client data under any circumstance. Your relationship with LuxureDetails remains strictly confidential between you and the studio.',
  },
  {
    icon: ShieldCheck,
    title: 'Custom NDA Execution',
    body: 'For rare hypercars, pre-production automotive manufacturer prototypes, and high-profile collectors, our legal counsel will execute your personal Non-Disclosure Agreement prior to vehicle intake.',
  },
]

export default function PrivacyPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-24">
      {/* Header */}
      <section className="border-b border-white/10 pb-16">
        <div className="max-w-[1120px] mx-auto w-full px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            <span
              className="text-white/40 block mb-4"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '11px',
                fontWeight: 400,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
              }}
            >
              Client Discretion · Privacy Protocol
            </span>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl text-white max-w-[900px] leading-[0.95] tracking-[-2px] mb-6"
              style={{ fontFamily: '"Instrument Serif", serif' }}
            >
              Discretion is our foremost standard.
            </h1>
            <p
              className="text-white/60 text-base md:text-lg max-w-[560px] font-light leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Our clientele includes private collectors, family offices, and motorsport enthusiasts who require absolute anonymity. Learn how we safeguard your identity and vehicles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4 Pillars of Discretion */}
      <section className="py-20 border-b border-white/10">
        <div className="max-w-[1120px] mx-auto w-full px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {privacyPillars.map((pillar, i) => {
              const Icon = pillar.icon
              return (
                <motion.div
                  key={pillar.title}
                  className="bg-[hsl(0_0%_6%)] border border-white/10 rounded-sm p-8 hover:border-white/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center mb-6">
                    <Icon size={18} className="text-white" strokeWidth={1.5} />
                  </div>
                  <h2
                    className="text-xl text-white font-medium mb-3"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {pillar.title}
                  </h2>
                  <p className="text-white/50 text-sm font-light leading-relaxed">
                    {pillar.body}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Editorial Privacy Clauses */}
      <section className="py-24">
        <div className="max-w-[1120px] mx-auto w-full px-6">
          <div className="max-w-[760px] flex flex-col gap-14">
            <div>
              <span className="text-white/40 text-xs font-mono block mb-2">Section 01</span>
              <h2
                className="text-3xl text-white font-serif mb-4"
                style={{ fontFamily: '"Instrument Serif", serif' }}
              >
                Information Collected & Usage Purpose
              </h2>
              <p className="text-white/60 text-sm leading-relaxed font-light mb-3">
                We collect only information necessary to communicate during the commission lifecycle: full name, direct telephone number, email, vehicle year, make, and paint specifications.
              </p>
              <p className="text-white/50 text-sm leading-relaxed font-light">
                This data is used solely to coordinate pickup/delivery logistics, provide work progress photography via secure direct messages, and maintain coating warranty records.
              </p>
            </div>

            <div className="border-t border-white/10 pt-10">
              <span className="text-white/40 text-xs font-mono block mb-2">Section 02</span>
              <h2
                className="text-3xl text-white font-serif mb-4"
                style={{ fontFamily: '"Instrument Serif", serif' }}
              >
                Studio Closed-Circuit Surveillance Policy
              </h2>
              <p className="text-white/60 text-sm leading-relaxed font-light">
                Our cleanroom bays and transport docks are monitored 24/7 by continuous closed-circuit television (CCTV) for physical vehicle security. Footage is recorded to encrypted local servers with no public internet routing and is automatically purged on a rolling 30-day schedule.
              </p>
            </div>

            <div className="border-t border-white/10 pt-10">
              <span className="text-white/40 text-xs font-mono block mb-2">Section 03</span>
              <h2
                className="text-3xl text-white font-serif mb-4"
                style={{ fontFamily: '"Instrument Serif", serif' }}
              >
                Right to Data Deletion & Expungement
              </h2>
              <p className="text-white/60 text-sm leading-relaxed font-light mb-4">
                Upon completion of a commission and release of your vehicle, you may request the complete deletion of your contact records and digital audit logs, with the exception of required statutory tax records.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-xs text-white underline underline-offset-4 hover:opacity-70 transition-opacity"
              >
                Submit Data Deletion Request
                <ArrowUpRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
