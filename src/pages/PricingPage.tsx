import { useState } from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Check, ChevronDown } from 'lucide-react'

const easeOut = [0.16, 1, 0.3, 1] as const

const vehicleClasses = [
  { id: 'coupe', name: 'Coupe / GT', example: 'Porsche 911, Ferrari Roma, Aston Vantage', multiplier: 1.0 },
  { id: 'sedan', name: 'Executive Sedan', example: 'Mercedes S-Class, BMW M5, Panamera', multiplier: 1.15 },
  { id: 'supercar', name: 'Exotic / Hypercar', example: 'McLaren 720S, Lamborghini Revuelto, GT3 RS', multiplier: 1.25 },
  { id: 'suv', name: 'Full-Size Luxury SUV', example: 'Range Rover SV, Cullinan, G63 AMG', multiplier: 1.35 },
]

const packages = [
  {
    name: 'Essential Concierge',
    tagline: 'Annual Preservation & Gloss Enhancement',
    basePrice: 750,
    time: '8–10 Hours',
    popular: false,
    features: [
      'Multi-stage grit guard snow foam bath',
      'Ferrous fallout & synthetic clay bar decontam',
      'Single-stage dual-action jeweling polish',
      '12-Month hydrophobic polymer paint sealant',
      'Wheel faces, calipers & tires dressed',
      'Full cabin vacuum, wipe & leather conditioning',
      'Crystal streak-free glass inside & out',
    ],
  },
  {
    name: 'Signature Restoration',
    tagline: 'Two-Stage Correction & 3-Year Ceramic Matrix',
    basePrice: 1950,
    time: '24–28 Hours',
    popular: true,
    features: [
      'Complete ultrasonic clearcoat depth audit',
      'Two-stage compound & polish (85-90% swirl removal)',
      '3-Year 9H quartz ceramic paint coating',
      'Wheels-off barrel & brake caliper ceramic shield',
      'Aniline leather steam extraction & matte revival',
      'Alcantara restoration & anti-lint treatment',
      'Dry-ice / precision steam engine bay dressing',
      'Formal warranty certificate & digital vehicle log',
    ],
  },
  {
    name: 'Masterpiece Atelier',
    tagline: 'Flawless Paint Leveling & 7-Year Graphene Armor',
    basePrice: 3850,
    time: '45+ Hours',
    popular: false,
    features: [
      'Multi-stage rotary leveling & micro-sanding (99% defect removal)',
      'Dual-layer 7-Year Graphene Ceramic matrix',
      'Full exterior optical glass hydrophobic coat',
      'Wheels-off ceramic coating (face, barrel & suspension arms)',
      'Full interior leather & carpet ceramic stain repellent',
      'Medical-grade ozone cabin sterilization',
      'Hermetic shortwave infrared baking cycle',
      'Complimentary enclosed trailer transport within 50 miles',
    ],
  },
]

const addOns = [
  { service: 'Wheels-Off Ceramic Caliper Treatment', time: '3 Hours', price: ' Rs 450', desc: 'Wheels removed, barrels steam cleaned, calipers and rims coated in high-temp ceramic.' },
  { service: 'Engine Bay Cryo / Steam Rejuvenation', time: '2.5 Hours', price: ' Rs 350', desc: 'Sensitive electronics masked, plastics & carbon fiber de-greased and dressed in factory matte.' },
  { service: 'Hydrophobic Glass Matrix (All Windows)', time: '2 Hours', price: ' Rs 275', desc: 'Water repellent rain coating ensuring zero wiper drag and unmatched clarity at high speeds.' },
  { service: 'Complete Leather & Textile Ceramic Shield', time: '4 Hours', price: ' Rs 550', desc: 'Microscopic breathable barrier preventing dye transfer, UV fading, and drink stains.' },
  { service: 'Convertible Fabric Nanotech Guard', time: '2 Hours', price: ' Rs 325', desc: 'Fabric soft-top deep cleaned, mildew neutralized, and impregnated with waterproof fluoropolymers.' },
]

const faqs = [
  {
    q: 'How long will my vehicle need to remain at the atelier?',
    a: 'Essential packages require 1 to 2 business days. Comprehensive ceramic commissions require 3 to 4 days to allow for paint correction, multi-layer coating application, and proper infrared curing.',
  },
  {
    q: 'Do you offer enclosed private vehicle transport?',
    a: 'Yes. We operate private single-car enclosed transport with low-clearance race ramps, ensuring your supercar or classic arrives without road spray, stone chips, or public exposure.',
  },
  {
    q: 'What is the difference between ceramic and graphene coatings?',
    a: 'Graphene incorporates a single-atom carbon lattice within the ceramic matrix, reducing surface temperature and significantly reducing water-spot etching while providing lower friction and greater chemical resistance.',
  },
  {
    q: 'Can you work on cars with existing Paint Protection Film (PPF)?',
    a: 'Absolutely. We specialize in PPF edge cleaning, light machine enhancement of self-healing films, and applying specialized ceramic coatings formulated specifically for aliphatic polyurethane PPF.',
  },
]

export default function PricingPage() {
  const [selectedClass, setSelectedClass] = useState(vehicleClasses[0])
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

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
              Investment Matrix · Commission Tiers
            </span>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl text-white max-w-[900px] leading-[0.95] tracking-[-2px] mb-6"
              style={{ fontFamily: '"Instrument Serif", serif' }}
            >
              Calibrated to collector-grade standards.
            </h1>
            <p
              className="text-white/60 text-base md:text-lg max-w-[560px] font-light leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Transparent investment structures reflecting single-technician dedication and zero compromise on materials. Select your vehicle class below to calculate accurate estimates.
            </p>
          </motion.div>

          {/* Vehicle Class Selector */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <span className="text-white/40 text-[11px] uppercase tracking-widest block mb-4">
              Select Vehicle Category
            </span>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {vehicleClasses.map(cls => (
                <button
                  key={cls.id}
                  onClick={() => setSelectedClass(cls)}
                  className={`p-4 rounded-sm border text-left transition-all duration-300 ${selectedClass.id === cls.id
                      ? 'border-white bg-white/10'
                      : 'border-white/10 bg-[hsl(0_0%_5%)] hover:border-white/30'
                    }`}
                >
                  <p className="text-white text-xs font-semibold uppercase tracking-wider mb-1">
                    {cls.name}
                  </p>
                  <p className="text-white/40 text-[11px] font-light truncate">
                    {cls.example}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-[1120px] mx-auto w-full px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, i) => {
              const estimatedPrice = Math.round(pkg.basePrice * selectedClass.multiplier)
              return (
                <motion.div
                  key={pkg.name}
                  className={`relative rounded-sm p-8 flex flex-col justify-between transition-all duration-300 ${pkg.popular
                      ? 'bg-[hsl(0_0%_9%)] border-2 border-white'
                      : 'bg-[hsl(0_0%_6%)] border border-white/10 hover:border-white/30'
                    }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-8 bg-white text-black px-3 py-0.5 text-[10px] uppercase tracking-widest font-bold rounded-xs">
                      Signature Commission
                    </div>
                  )}

                  <div>
                    <span className="text-white/40 text-xs font-mono block mb-2">{pkg.time}</span>
                    <h2
                      className="text-2xl md:text-3xl text-white font-serif mb-2"
                      style={{ fontFamily: '"Instrument Serif", serif' }}
                    >
                      {pkg.name}
                    </h2>
                    <p className="text-white/50 text-xs font-light mb-6 min-h-[32px]">
                      {pkg.tagline}
                    </p>

                    {/* Price display */}
                    <div className="mb-8 pb-6 border-b border-white/10">
                      <span className="text-white/40 text-xs uppercase tracking-wider block mb-1">
                        Est. for {selectedClass.name}
                      </span>
                      <div className="flex items-baseline gap-2">
                        <span
                          className="text-4xl md:text-5xl text-white font-serif"
                          style={{ fontFamily: '"Instrument Serif", serif' }}
                        >
                          Rs {estimatedPrice.toLocaleString()}
                        </span>
                        <span className="text-white/40 text-xs font-light">starting</span>
                      </div>
                    </div>

                    {/* Features list */}
                    <div className="flex flex-col gap-3 mb-8">
                      {pkg.features.map(f => (
                        <div key={f} className="flex items-start gap-2.5">
                          <Check size={14} className="text-white shrink-0 mt-0.5" />
                          <span className="text-white/70 text-xs font-light leading-relaxed">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className={`w-full py-3 text-center text-xs uppercase tracking-widest font-medium rounded-sm transition-all duration-300 block ${pkg.popular
                        ? 'bg-white text-black hover:bg-white/80'
                        : 'border border-white/30 text-white hover:bg-white hover:text-black'
                      }`}
                  >
                    Reserve Commission
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Ala Carte Add-Ons */}
      <section className="py-28 border-b border-white/10">
        <div className="max-w-[1120px] mx-auto w-full px-6">
          <div className="mb-14">
            <span
              className="text-white/40 text-xs uppercase tracking-widest block mb-3"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              À La Carte Treatments
            </span>
            <h2
              className="text-4xl md:text-5xl text-white font-serif"
              style={{ fontFamily: '"Instrument Serif", serif' }}
            >
              Specialized Enhancements
            </h2>
          </div>

          <div className="border-t border-white/10 divide-y divide-white/10">
            {addOns.map(addon => (
              <div
                key={addon.service}
                className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-white/[0.02] px-2 transition-colors"
              >
                <div className="max-w-[560px]">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-white text-base font-medium">{addon.service}</h3>
                    <span className="text-white/40 text-xs font-mono">{addon.time}</span>
                  </div>
                  <p className="text-white/50 text-xs font-light">{addon.desc}</p>
                </div>
                <div className="flex items-center gap-6 self-start md:self-auto">
                  <span
                    className="text-2xl text-white font-serif"
                    style={{ fontFamily: '"Instrument Serif", serif' }}
                  >
                    {addon.price}
                  </span>
                  <Link
                    to="/contact"
                    className="border border-white/20 px-3 py-1.5 text-xs text-white/80 hover:text-white hover:border-white rounded-sm transition-all"
                  >
                    Add to Request
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-28 border-b border-white/10">
        <div className="max-w-[1120px] mx-auto w-full px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span
                className="text-white/40 text-xs uppercase tracking-widest block mb-3"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Inquiries
              </span>
              <h2
                className="text-4xl md:text-5xl text-white font-serif mb-4"
                style={{ fontFamily: '"Instrument Serif", serif' }}
              >
                Frequently Addressed Inquiries
              </h2>
              <p className="text-white/50 text-sm font-light leading-relaxed">
                Have specific requirements regarding collector storage or rare paint formulations? Contact our concierge directly.
              </p>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-4">
              {faqs.map((faq, i) => {
                const isOpen = expandedFaq === i
                return (
                  <div
                    key={faq.q}
                    className="border border-white/10 rounded-sm overflow-hidden bg-[hsl(0_0%_6%)] transition-colors"
                  >
                    <button
                      onClick={() => setExpandedFaq(isOpen ? null : i)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4"
                    >
                      <span className="text-white text-sm font-medium pr-4">
                        {faq.q}
                      </span>
                      <ChevronDown
                        size={16}
                        className={`text-white/60 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                          }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 text-white/60 text-xs md:text-sm font-light leading-relaxed border-t border-white/5 pt-4">
                        {faq.a}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pt-24">
        <div className="max-w-[1120px] mx-auto w-full px-6 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <h2
              className="text-4xl md:text-5xl text-white font-serif"
              style={{ fontFamily: '"Instrument Serif", serif' }}
            >
              Request a Formal Studio Estimate
            </h2>
            <p
              className="text-white/60 text-sm md:text-base font-light mt-3 max-w-[480px]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Every formal proposal includes a detailed vehicle condition appraisal and customized scope of work.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border border-white/30 rounded-sm px-6 py-3 text-sm text-white hover:bg-white hover:text-black transition-all duration-300"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
          >
            Get a quote now
            <ArrowUpRight size={16} strokeWidth={2} />
          </Link>
        </div>
      </section>
    </div>
  )
}
