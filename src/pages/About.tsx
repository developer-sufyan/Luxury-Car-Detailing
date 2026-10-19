import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ShieldCheck, Sparkles, Compass, Award } from 'lucide-react'

const easeOut = [0.16, 1, 0.3, 1] as const

const stats = [
  { value: '40+', label: 'Hours Per Commission', detail: 'Meticulous single-vehicle attention' },
  { value: '99.8%', label: 'Defect Eradication', detail: 'Swirl and hologram removal' },
  { value: '100%', label: 'Cleanroom Controlled', detail: 'Filtered dust-free bays' },
  { value: '7-Year', label: 'Ceramic Guarantee', detail: 'Molecular warranty backing' },
]

const pillars = [
  {
    number: '01',
    icon: Compass,
    title: 'Micro-Ultrasonic Profiling',
    body: 'Before a single pad touches paintwork, every panel undergoes multi-point ultrasonic depth mapping. We calculate clearcoat tolerances down to individual microns to preserve factory integrity while eliminating flaws.',
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'Multi-Stage Jewel Polishing',
    body: 'We eschew silicone-filled glaze work and quick fixes. Using diminishing abrasive compounds and custom-jeweling pads, we level clearcoat defects mechanically to produce liquid, mirror-level optical depth.',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Hermetic Curing Bays',
    body: 'Our studio operates under positive pressure cleanroom filtration. Ceramic and graphene matrices cure in zero-particulate environments with calibrated shortwave infrared heat lamps.',
  },
  {
    number: '04',
    icon: Award,
    title: 'White Glove Concierge Delivery',
    body: 'Every commission concludes with an exhaustive multi-spectrum lighting audit, photographic log, and enclosed vehicle transport directly to your private garage or collection facility.',
  },
]

export default function About() {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-24">
      {/* Hero section */}
      <section className="border-b border-white/10 pb-20">
        <div className="max-w-[1120px] mx-auto w-full px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="mb-8"
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
              The Atelier · Heritage & Craftsmanship
            </span>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl text-white max-w-[900px] leading-[0.95] tracking-[-2px]"
              style={{ fontFamily: '"Instrument Serif", serif' }}
            >
              Obsession with perfection. Defined by restraint.
            </h1>
          </motion.div>

          <motion.p
            className="text-base md:text-xl text-white/60 max-w-[620px] leading-relaxed font-light"
            style={{ fontFamily: 'Inter, sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
          >
            LuxureDetails was founded on a solitary conviction: that exceptional automobiles deserve a standard of restorative craftsmanship comparable to horology and fine art conservation.
          </motion.p>
        </div>
      </section>

      {/* Editorial Stats */}
      <section className="py-20 border-b border-white/10">
        <div className="max-w-[1120px] mx-auto w-full px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="flex flex-col border-l border-white/10 pl-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <span
                  className="text-4xl md:text-6xl text-white font-serif"
                  style={{ fontFamily: '"Instrument Serif", serif' }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-white text-xs uppercase tracking-wider font-medium mt-2"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {stat.label}
                </span>
                <span
                  className="text-white/40 text-xs font-light mt-1"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {stat.detail}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative & Visual */}
      <section className="py-28 border-b border-white/10">
        <div className="max-w-[1120px] mx-auto w-full px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span
                className="text-white/40 text-xs uppercase tracking-widest"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Our Philosophy
              </span>
              <h2
                className="text-4xl md:text-5xl text-white leading-tight font-serif"
                style={{ fontFamily: '"Instrument Serif", serif' }}
              >
                We do not wash cars. We resurrect paint finishes.
              </h2>
              <p
                className="text-white/60 text-sm md:text-base leading-relaxed font-light"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Every factory clearcoat has its own tensile character, elasticity, and density. Whether servicing soft Italian lacquers, resilient German ceramic clears, or rare British coachwork paints, our master artisans calibrate polish grades, pad densities, and machine oscillations to each unique surface.
              </p>
              <p
                className="text-white/40 text-sm leading-relaxed font-light"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                We treat single-digit client volume per week to maintain absolute focus. Your vehicle is never passed between junior hands; every stage is documented, measured, and signed off under high-CRI inspection lamps.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-white/10">
                <img
                  src="/about-us.png"
                  alt="Precision detailing atelier"
                  className="w-full h-full object-contain grayscale contrast-125 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p
                    className="text-white/80 text-xs tracking-widest uppercase font-mono"
                  >
                    Studio Bay 01 · Micro-Inspection Station
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Pillars */}
      <section className="py-28 border-b border-white/10">
        <div className="max-w-[1120px] mx-auto w-full px-6">
          <div className="mb-16">
            <span
              className="text-white/40 text-xs uppercase tracking-widest block mb-3"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Methodology
            </span>
            <h2
              className="text-4xl md:text-5xl text-white font-serif"
              style={{ fontFamily: '"Instrument Serif", serif' }}
            >
              The Four Tenets of Our Craft
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <motion.div
                  key={pillar.title}
                  className="bg-[hsl(0_0%_7%)] p-8 rounded-sm border border-white/5 hover:border-white/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                      <Icon size={18} className="text-white" strokeWidth={1.5} />
                    </div>
                    <span
                      className="text-white/30 text-xs font-mono"
                    >
                      {pillar.number}
                    </span>
                  </div>
                  <h3
                    className="text-white text-lg font-medium mb-3"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    className="text-white/50 text-sm font-light leading-relaxed"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {pillar.body}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="py-28 border-b border-white/10">
        <div className="max-w-[1120px] mx-auto w-full px-6 text-center flex flex-col items-center">
          <span
            className="text-white/40 text-xs uppercase tracking-widest mb-6"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            The Artisan's Creed
          </span>
          <blockquote
            className="text-3xl md:text-5xl lg:text-6xl text-white font-serif italic max-w-[820px] leading-snug"
            style={{ fontFamily: '"Instrument Serif", serif' }}
          >
            "True luxury leaves no trace of the effort spent, only an unmistakable aura of timeless perfection."
          </blockquote>
          <div className="mt-8">
            <p className="text-white text-sm font-medium">Julian Vance</p>
            <p className="text-white/40 text-xs uppercase tracking-wider font-light mt-1">Founder & Master Conservator</p>
          </div>
        </div>
      </section>

      {/* Page bottom CTA */}
      <section className="pt-24">
        <div className="max-w-[1120px] mx-auto w-full px-6 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <h2
              className="text-4xl md:text-5xl text-white font-serif"
              style={{ fontFamily: '"Instrument Serif", serif' }}
            >
              Entrust your vehicle to masters.
            </h2>
            <p
              className="text-white/60 text-sm md:text-base font-light mt-3 max-w-[460px]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Private consultation reservations are strictly limited to ensure our uncompromised level of craft.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border border-white/30 rounded-sm px-6 py-3 text-sm text-white hover:bg-white hover:text-black transition-all duration-300"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
          >
            Reserve Private Consultation
            <ArrowUpRight size={16} strokeWidth={2} />
          </Link>
        </div>
      </section>
    </div>
  )
}
