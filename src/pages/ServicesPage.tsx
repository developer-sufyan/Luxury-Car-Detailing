import { useState } from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Check, Clock } from 'lucide-react'

const easeOut = [0.16, 1, 0.3, 1] as const

const allServices = [
  {
    id: 'entry',
    category: 'maintenance',
    title: 'Entry Level Detail',
    subtitle: 'Surface Decontamination & Hand Carnauba Seal',
    time: '4–6 Hours',
    image: '/service-entry.jpg',
    description: 'Designed for vehicles requiring a thorough refresh without multi-stage abrasive correction. Includes multi-bucket ph-neutral wash, ferrous iron dissolve, clay extraction, and Brazilian carnauba glaze.',
    deliverables: [
      'Two-bucket grit guard snow foam bath',
      'pH-neutral iron fall-out chemical decontamination',
      'Ultra-fine synthetic clay bar surface exfoliation',
      'Natural Brazilian carnauba gloss seal application',
      'Exterior glass polish & satin tire dressing',
    ],
  },
  {
    id: 'maintenance',
    category: 'maintenance',
    title: 'Periodic Maintenance Detail',
    subtitle: 'Ceramic Coating Health Check & Exterior Rejuvenation',
    time: '8–12 Hours',
    image: '/service-maintenance.jpg',
    description: 'An essential program for ceramic-coated or recently corrected vehicles. Decontaminates protective quartz layers, restores high-angle hydrophobic water beading, and cleans delicate trimwork.',
    deliverables: [
      'De-mineralization acid bath for water spot removal',
      'Hydrophobic ceramic booster silica spray infusion',
      'Wheel faces, barrels & caliper deep cleanse',
      'Door jambs, trunk hinges & fuel pocket detailing',
      'Exhaust tip stainless polish & carbon soot removal',
    ],
  },
  {
    id: 'full',
    category: 'paint',
    title: 'Signature Full Detail',
    subtitle: 'Comprehensive Interior Atelier & Single-Stage Correction',
    time: '20–24 Hours',
    image: '/service-full.png',
    description: 'A transformative program addressing both interior opulence and exterior clarity. Includes single-stage mechanical machine jeweling to remove light haze, combined with full cabin steam restoration.',
    deliverables: [
      'Single-stage machine polish (removes 65-75% micro-swirls)',
      'Full aniline leather extraction & matte conditioning',
      'Alcantara gentle steam brush & lint elimination',
      'High-pressure dry ice or steam engine bay detail',
      '12-month synthetic polymer paint sealant',
    ],
  },
  {
    id: 'paint-correction',
    category: 'paint',
    title: 'Multi-Stage Paint Correction',
    subtitle: '99% Defect Leveling & Optical Clarity Restoration',
    time: '35–45 Hours',
    image: '/why-us.png',
    description: 'The pinnacle of automotive paint restoration. Using digital ultrasonic depth gauges, we safely level orange peel, deep etchings, buffer trails, and sanding marks to reveal true liquid depth.',
    deliverables: [
      'Multi-point ultrasonic clearcoat thickness mapping',
      'Heavy-cut compound stage with wool & hybrid pads',
      'Secondary refinement polish for clarity restoration',
      'Ultra-fine jeweling finishing stage with foam pads',
      'Multi-spectrum CRI lamp inspection & audit report',
    ],
  },
  {
    id: 'ceramic-coating',
    category: 'coatings',
    title: '9H Quartz Ceramic Matrix',
    subtitle: 'Ultra-Dense Molecular Bond with 5 to 7 Year Warranty',
    time: 'Cured 48 Hours',
    image: '/cta-car.png',
    description: 'A liquid glass coating applied in our hermetic cleanroom that chemically crosslinks with factory clearcoat. Creates a sacrificial 9H hardness barrier with self-cleaning lotus-effect water repellency.',
    deliverables: [
      'Full surface isopropyl alcohol wipe-down prep',
      'Base layer 9H high-solids quartz coating',
      'Top hydrophobic fluoropolymer skin layer',
      'Infrared shortwave bake cycle at 65°C',
      'Official warranty certificate & digital car history log',
    ],
  },
  {
    id: 'interior-atelier',
    category: 'interior',
    title: 'Interior Atelier Restoration',
    subtitle: 'Fine Leather Preservation & Ozone Purification',
    time: '14–18 Hours',
    image: '/showreel-poster.png',
    description: 'An architectural interior restoration for Rolls-Royce, Bentley, Ferrari, and bespoke cockpits. We treat delicate hide, open-pore timber, carbon weaves, and soft Alcantara surfaces.',
    deliverables: [
      'pH-balanced Swiss hide cleaner & oil replenisher',
      'Precision steam extraction of carpets & headliner',
      'Matte UV anti-static protection on trim & carbon fiber',
      'Medical-grade ozone gas anti-microbial sterilization',
      'Matte steering wheel restoration (anti-shine treatment)',
    ],
  },
]

const processSteps = [
  { step: '01', title: 'Consultation & Paint Depth Audit', desc: 'Panel-by-panel ultrasonic clearcoat measurement and defect mapping under multi-spectrum LED lamps.' },
  { step: '02', title: 'Multi-Stage Decontamination', desc: 'Snow foam, ferrous iron dissolve, tar dissolution, and synthetic clay extraction without marring.' },
  { step: '03', title: 'Precision Mechanical Correction', desc: 'Rotary and dual-action jeweling with diminishing abrasives calibrated to your lacquer hardness.' },
  { step: '04', title: 'Hermetic Cleanroom Curing', desc: 'Ceramic matrices applied in positive-pressure cleanroom bays and baked under shortwave infrared.' },
  { step: '05', title: 'White Glove Handover', desc: 'Exhaustive 50-point audit, high-resolution documentation log, and closed trailer dispatch.' },
]

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'maintenance' | 'paint' | 'coatings' | 'interior'>('all')

  const filtered = activeTab === 'all'
    ? allServices
    : allServices.filter(s => s.category === activeTab)

  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-24">
      {/* Header */}
      <section className="border-b border-white/10 pb-20">
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
              Bespoke Portfolio · Detailing Programs
            </span>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl text-white max-w-[900px] leading-[0.95] tracking-[-2px] mb-6"
              style={{ fontFamily: '"Instrument Serif", serif' }}
            >
              Engineered for automotive connoisseurs.
            </h1>
            <p
              className="text-white/60 text-base md:text-lg max-w-[540px] font-light leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Every service is conducted in private climate-controlled bays with dedicated master artisans. Select a program below or commission a custom treatment.
            </p>
          </motion.div>

          {/* Filter tabs */}
          <div className="flex gap-2 flex-wrap mt-12 border-t border-white/10 pt-8">
            {[
              { id: 'all', label: 'All Programs' },
              { id: 'maintenance', label: 'Maintenance & Wash' },
              { id: 'paint', label: 'Paint Correction' },
              { id: 'coatings', label: 'Ceramic Quartz' },
              { id: 'interior', label: 'Interior Atelier' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-4 py-2 text-xs uppercase tracking-wider rounded-sm transition-all duration-300 ${activeTab === tab.id
                    ? 'bg-white text-black font-medium'
                    : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10'
                  }`}
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-[1120px] mx-auto w-full px-6">
          <div className="flex flex-col gap-20">
            {filtered.map((service, idx) => (
              <motion.div
                key={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center border-b border-white/10 pb-20 last:border-b-0 last:pb-0"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.05 }}
                viewport={{ once: true }}
              >
                {/* Visual */}
                <div className="lg:col-span-5 relative group overflow-hidden rounded-sm border border-white/10 aspect-[3/2]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-sm border border-white/10 flex items-center gap-1.5">
                    <Clock size={12} className="text-white/60" />
                    <span className="text-white/80 text-[11px] font-mono tracking-wider">{service.time}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <span className="text-white/40 text-[11px] uppercase tracking-widest block mb-2 font-mono">
                      Program 0{idx + 1}
                    </span>
                    <h2
                      className="text-3xl md:text-4xl text-white font-serif mb-1"
                      style={{ fontFamily: '"Instrument Serif", serif' }}
                    >
                      {service.title}
                    </h2>
                    <p className="text-white/60 text-xs uppercase tracking-wider mb-4 font-light">
                      {service.subtitle}
                    </p>
                    <p
                      className="text-white/60 text-sm font-light leading-relaxed mb-6"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {service.description}
                    </p>

                    {/* Deliverables checklist */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 mb-8">
                      {service.deliverables.map(del => (
                        <div key={del} className="flex items-start gap-2">
                          <Check size={14} className="text-white shrink-0 mt-0.5" />
                          <span className="text-white/70 text-xs font-light">{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 border border-white/30 rounded-sm px-5 py-2 text-xs text-white hover:bg-white hover:text-black transition-all duration-300"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                    >
                      Inquire About This Service
                      <ArrowUpRight size={14} />
                    </Link>
                    <Link
                      to="/pricing"
                      className="text-white/50 hover:text-white text-xs underline underline-offset-4 transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      View pricing matrix
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="py-28 border-b border-white/10">
        <div className="max-w-[1120px] mx-auto w-full px-6">
          <div className="mb-16">
            <span
              className="text-white/40 text-xs uppercase tracking-widest block mb-3"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              The Protocol
            </span>
            <h2
              className="text-4xl md:text-5xl text-white font-serif"
              style={{ fontFamily: '"Instrument Serif", serif' }}
            >
              Our 5-Stage Detailing Standard
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                className="bg-[hsl(0_0%_7%)] p-6 rounded-sm border border-white/5 flex flex-col justify-between"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div>
                  <span className="text-white/30 text-xs font-mono block mb-4">
                    Stage {step.step}
                  </span>
                  <h3 className="text-white text-sm font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/50 text-xs font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee banner */}
      <section className="pt-24">
        <div className="max-w-[1120px] mx-auto w-full px-6 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <h2
              className="text-4xl md:text-5xl text-white font-serif"
              style={{ fontFamily: '"Instrument Serif", serif' }}
            >
              Require a tailored treatment?
            </h2>
            <p
              className="text-white/60 text-sm md:text-base font-light mt-3 max-w-[480px]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              We cater to private collections, concours d'elegance preparation, and pre-auction aesthetic restoration.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border border-white/30 rounded-sm px-6 py-3 text-sm text-white hover:bg-white hover:text-black transition-all duration-300"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
          >
            Commission Custom Package
            <ArrowUpRight size={16} strokeWidth={2} />
          </Link>
        </div>
      </section>
    </div>
  )
}
