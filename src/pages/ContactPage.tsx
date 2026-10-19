import { useState } from 'react'
import { motion } from 'motion/react'
import { ArrowUpRight, CheckCircle2, MapPin, Phone, Mail, Clock, ShieldCheck, Truck } from 'lucide-react'

const easeOut = [0.16, 1, 0.3, 1] as const

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    category: 'Coupe / GT',
    service: 'Signature Full Detail',
    transport: 'no',
    notes: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulated submission
    setSubmitted(true)
  }

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
              Direct Concierge · Private Studio Reservation
            </span>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl text-white max-w-[900px] leading-[0.95] tracking-[-2px] mb-6"
              style={{ fontFamily: '"Instrument Serif", serif' }}
            >
              Initiate your commission.
            </h1>
            <p
              className="text-white/60 text-base md:text-lg max-w-[560px] font-light leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              We maintain single-digit vehicle volume each week to guarantee uncompromising artisanship. Provide your details below to schedule an intake consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content: Contact Info + Form */}
      <section className="py-20">
        <div className="max-w-[1120px] mx-auto w-full px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left: Atelier Concierge Details */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-white/40 text-xs uppercase tracking-widest block mb-4">
                  Studio Headquarters
                </span>
                <h2
                  className="text-3xl md:text-4xl text-white font-serif mb-6"
                  style={{ fontFamily: '"Instrument Serif", serif' }}
                >
                  Strictly by private appointment.
                </h2>
                <p className="text-white/50 text-sm font-light leading-relaxed mb-10">
                  Our cleanroom studio facility is equipped with biometric security access and climate-controlled bay isolation. Vehicles under our care remain protected from weather, dust, and unauthorized visibility.
                </p>

                <div className="flex flex-col gap-6 border-t border-white/10 pt-8">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                      <MapPin size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white text-xs uppercase tracking-wider font-medium">Atelier Location</p>
                      <p className="text-white/60 text-xs font-light mt-0.5">840 North Sycamore Avenue, Suite 100</p>
                      <p className="text-white/40 text-xs font-light">West Hollywood, CA 90038</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                      <Phone size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white text-xs uppercase tracking-wider font-medium">Concierge Direct</p>
                      <p className="text-white/60 text-xs font-light mt-0.5">+1 (800) 849-2910</p>
                      <p className="text-white/40 text-xs font-light">Direct phone or secure text</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                      <Mail size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white text-xs uppercase tracking-wider font-medium">Encrypted Inquiries</p>
                      <p className="text-white/60 text-xs font-light mt-0.5">concierge@luxuredetails.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                      <Clock size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white text-xs uppercase tracking-wider font-medium">Studio Intake Hours</p>
                      <p className="text-white/60 text-xs font-light mt-0.5">Monday – Friday: 08:00 – 19:00 PST</p>
                      <p className="text-white/40 text-xs font-light">Saturday: Closed-door intake by appointment</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Badges */}
              <div className="mt-12 pt-8 border-t border-white/10 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-white/50 text-xs">
                  <ShieldCheck size={16} className="text-white" />
                  <span>Comprehensive $5M Garagekeepers & Transit Liability Insurance</span>
                </div>
                <div className="flex items-center gap-2 text-white/50 text-xs">
                  <Truck size={16} className="text-white" />
                  <span>Air-ride enclosed private trailer dispatch available nationwide</span>
                </div>
              </div>
            </div>

            {/* Right: Booking Inquiry Form */}
            <div className="lg:col-span-7 bg-[hsl(0_0%_6%)] border border-white/10 rounded-sm p-8 md:p-10">
              {submitted ? (
                <motion.div
                  className="py-16 text-center flex flex-col items-center justify-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center mb-6">
                    <CheckCircle2 size={32} className="text-white" />
                  </div>
                  <h3
                    className="text-3xl text-white font-serif mb-2"
                    style={{ fontFamily: '"Instrument Serif", serif' }}
                  >
                    Commission Request Received
                  </h3>
                  <p className="text-white/60 text-sm font-light max-w-[420px] leading-relaxed mb-8">
                    Thank you, {formData.name || 'valued client'}. Our master artisan will review your vehicle specifications and reach out within 24 hours to confirm intake availability.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        vehicle: '',
                        category: 'Coupe / GT',
                        service: 'Signature Full Detail',
                        transport: 'no',
                        notes: '',
                      })
                    }}
                    className="border border-white/30 rounded-sm px-6 py-2 text-xs uppercase tracking-wider text-white hover:bg-white hover:text-black transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div>
                    <span className="text-white/40 text-[11px] uppercase tracking-widest block mb-2">
                      Step 01 · Client Details
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-white/70 text-xs block mb-1.5 font-light">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Lord Marcus Sterling"
                          className="w-full bg-black border border-white/15 rounded-sm px-4 py-2.5 text-white text-sm focus:border-white focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-white/70 text-xs block mb-1.5 font-light">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@domain.com"
                          className="w-full bg-black border border-white/15 rounded-sm px-4 py-2.5 text-white text-sm focus:border-white focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-white/70 text-xs block mb-1.5 font-light">
                      Direct Telephone / Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-black border border-white/15 rounded-sm px-4 py-2.5 text-white text-sm focus:border-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="border-t border-white/10 pt-6">
                    <span className="text-white/40 text-[11px] uppercase tracking-widest block mb-2">
                      Step 02 · Vehicle Profile
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="text-white/70 text-xs block mb-1.5 font-light">
                          Year, Make & Model *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.vehicle}
                          onChange={e => setFormData({ ...formData, vehicle: e.target.value })}
                          placeholder="e.g. 2023 Porsche 911 GT3 Touring"
                          className="w-full bg-black border border-white/15 rounded-sm px-4 py-2.5 text-white text-sm focus:border-white focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-white/70 text-xs block mb-1.5 font-light">
                          Vehicle Category
                        </label>
                        <select
                          value={formData.category}
                          onChange={e => setFormData({ ...formData, category: e.target.value })}
                          className="w-full bg-black border border-white/15 rounded-sm px-4 py-2.5 text-white text-sm focus:border-white focus:outline-none transition-colors"
                        >
                          <option value="Coupe / GT">Coupe / GT</option>
                          <option value="Executive Sedan">Executive Sedan</option>
                          <option value="Exotic / Hypercar">Exotic / Hypercar</option>
                          <option value="Full-Size SUV">Full-Size SUV</option>
                          <option value="Classic / Vintage">Classic / Historic Vintage</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-white/70 text-xs block mb-1.5 font-light">
                          Desired Service Program
                        </label>
                        <select
                          value={formData.service}
                          onChange={e => setFormData({ ...formData, service: e.target.value })}
                          className="w-full bg-black border border-white/15 rounded-sm px-4 py-2.5 text-white text-sm focus:border-white focus:outline-none transition-colors"
                        >
                          <option value="Entry Level Detail">Entry Level Detail ($750+)</option>
                          <option value="Maintenance Detail">Periodic Maintenance Detail ($950+)</option>
                          <option value="Signature Full Detail">Signature Full Detail ($1,950+)</option>
                          <option value="Paint Correction Mastery">Multi-Stage Paint Correction ($2,800+)</option>
                          <option value="Ceramic Quartz Matrix">9H Quartz Ceramic Matrix ($2,400+)</option>
                          <option value="Masterpiece Atelier Commission">Masterpiece Atelier Commission ($3,850+)</option>
                          <option value="Custom Bespoke Consultation">Bespoke Concours Consultation</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-white/70 text-xs block mb-1.5 font-light">
                          Enclosed Trailer Transport?
                        </label>
                        <select
                          value={formData.transport}
                          onChange={e => setFormData({ ...formData, transport: e.target.value })}
                          className="w-full bg-black border border-white/15 rounded-sm px-4 py-2.5 text-white text-sm focus:border-white focus:outline-none transition-colors"
                        >
                          <option value="no">Client will deliver to atelier</option>
                          <option value="local">Yes — Local enclosed pickup (&lt;30 miles)</option>
                          <option value="regional">Yes — Regional / Long-distance transport</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-6">
                    <label className="text-white/70 text-xs block mb-1.5 font-light">
                      Specific Areas of Concern or Requests
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={e => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. Swirl marks visible in direct sun on rear decklid, delicate aniline leather seats requiring nourishment..."
                      className="w-full bg-black border border-white/15 rounded-sm px-4 py-2.5 text-white text-sm focus:border-white focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <p className="text-white/40 text-[11px] font-light">
                    * All information submitted is held strictly confidential under our Client Discretion Agreement. We never photograph or share license plates or vehicle details without written sign-off.
                  </p>

                  <button
                    type="submit"
                    className="w-full mt-2 bg-white text-black font-medium text-xs uppercase tracking-widest py-3.5 rounded-sm hover:bg-white/85 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Transmit Commission Request
                    <ArrowUpRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
