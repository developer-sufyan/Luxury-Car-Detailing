import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { Shield, Lock, ArrowUpRight } from 'lucide-react'

const easeOut = [0.16, 1, 0.3, 1] as const

const sections = [
  {
    id: 'scope',
    number: '01',
    title: 'Scope of Commission & Estimates',
    content: `All commissions undertaken by LuxureDetails ("the Atelier") are executed in accordance with the customized Scope of Work documented upon intake. Written estimates are calibrated to initial paint depth assessments; should deep sub-surface defects, prior re-spray delamination, or thin factory clearcoat require modified treatments, the client will be consulted prior to proceeding.`,
  },
  {
    id: 'intake',
    number: '02',
    title: 'Pre-Intake Condition Audit & Inspection Log',
    content: `Before mechanical work begins, every vehicle undergoes a digital 50-point condition audit including multi-spectrum photographic logs and ultrasonic clearcoat thickness measurements across all metal and composite panels. Any pre-existing stone chips, clearcoat crows-feet, curb rash, or interior tears are cataloged in our encrypted client repository.`,
  },
  {
    id: 'custody',
    number: '03',
    title: 'Bailment, Security & Liability Insurance',
    content: `During the period your vehicle remains in our custody, it is housed within our biometric, climate-controlled cleanroom studio bays under 24/7 high-definition security surveillance. LuxureDetails maintains a comprehensive $5,000,000 Garagekeepers Legal Liability and Transit Insurance policy. Vehicles are operated exclusively by senior master conservators strictly for positioning and transport loading.`,
  },
  {
    id: 'deposit',
    number: '04',
    title: 'Reservation Deposits & Cancellation Protocol',
    content: `To guarantee single-technician reservation and dedicated studio bay scheduling, commissions require a 25% non-refundable deposit upon date reservation. Rescheduling requests made at least 5 business days in advance of intake will transfer the deposit in full to the new reservation window.`,
  },
  {
    id: 'warranty',
    number: '05',
    title: 'Ceramic Coating Warranty & Aftercare Conditions',
    content: `Our 9H Ceramic Quartz and Graphene matrices are backed by formal 3-year, 5-year, or 7-year warranties against premature degradation, severe oxidation, and loss of hydrophobic contact angle. Warranty validity is conditioned upon adherence to recommended touchless or two-bucket ph-neutral wash methods, and an annual maintenance inspection conducted at our atelier.`,
  },
  {
    id: 'release',
    number: '06',
    title: 'Vehicle Release, Storage & Handover',
    content: `Upon completion of work, the client or authorized agent will be invited for an inspection audit under high-CRI studio lighting. Settlement in full is required prior to vehicle release or transport dispatch. Vehicles remaining in our secure facility beyond 48 hours post-completion without prior arrangement will incur a secure storage fee of $150 per calendar day.`,
  },
  {
    id: 'cookies',
    number: '07',
    title: 'Cookie & Telemetry Policy',
    content: `Our digital interface employs essential session cookies strictly necessary for navigation stability, route performance, and security verification. We do not engage in third-party ad tracking, pixel surveillance, or cross-site data harvesting. Any preferences saved within your browser session are local and temporary.`,
  },
]

export default function TermsPage() {
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
              Legal Stipulations · Custody & Protocols
            </span>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl text-white max-w-[900px] leading-[0.95] tracking-[-2px] mb-6"
              style={{ fontFamily: '"Instrument Serif", serif' }}
            >
              Terms of Service & Custody.
            </h1>
            <p
              className="text-white/60 text-base md:text-lg max-w-[560px] font-light leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Documenting the rigorous standards, client assurances, and vehicle custody protocols that govern every LuxureDetails commission.
            </p>
            <div className="flex items-center gap-6 mt-8 text-white/40 text-xs font-mono">
              <span>Effective Date: January 1, {new Date().getFullYear()}</span>
              <span>·</span>
              <span>Version: 4.2 Atelier Standard</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Table of Contents & Clauses */}
      <section className="py-20">
        <div className="max-w-[1120px] mx-auto w-full px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left Sidebar Table of Contents */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 bg-[hsl(0_0%_5%)] border border-white/10 rounded-sm p-6">
                <span className="text-white text-xs font-semibold uppercase tracking-wider block mb-4">
                  Clauses Overview
                </span>
                <nav className="flex flex-col gap-2.5">
                  {sections.map(s => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="text-white/50 hover:text-white text-xs font-light transition-colors flex items-center justify-between group py-1"
                    >
                      <span className="truncate group-hover:translate-x-1 transition-transform">
                        {s.number}. {s.title}
                      </span>
                    </a>
                  ))}
                </nav>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2 text-white/70 text-xs mb-2">
                    <Shield size={14} className="text-white" />
                    <span>$5M Garagekeepers Policy</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70 text-xs">
                    <Lock size={14} className="text-white" />
                    <span>Biometric Secure Cleanrooms</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Content Sections */}
            <div className="lg:col-span-8 flex flex-col gap-12">
              {sections.map(section => (
                <div
                  key={section.id}
                  id={section.id}
                  className="border-b border-white/10 pb-12 last:border-b-0"
                >
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="text-white/30 text-sm font-mono">{section.number}</span>
                    <h2
                      className="text-2xl md:text-3xl text-white font-serif"
                      style={{ fontFamily: '"Instrument Serif", serif' }}
                    >
                      {section.title}
                    </h2>
                  </div>
                  <p
                    className="text-white/60 text-sm md:text-base font-light leading-relaxed pl-8 border-l border-white/10"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {section.content}
                  </p>
                </div>
              ))}

              <div className="bg-[hsl(0_0%_6%)] border border-white/10 rounded-sm p-8 mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-white text-base font-medium mb-1">Require Specific Custody Agreements?</h3>
                  <p className="text-white/50 text-xs font-light">We routinely execute custom Non-Disclosure Agreements (NDAs) for pre-release prototypes and private museum collections.</p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 border border-white/30 px-5 py-2 rounded-sm text-xs text-white hover:bg-white hover:text-black transition-all shrink-0"
                >
                  Contact Legal Liaison
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
