import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowUpRight, Eye, EyeOff, ShieldCheck, AlertCircle } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const easeOut = [0.16, 1, 0.3, 1] as const

export default function SignupPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  // const [vehicle, setVehicle] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [agreeTerms, setAgreeTerms] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const { signup } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (password !== confirmPassword) {
      setError('Password and confirmation key do not match.')
      return
    }

    if (!agreeTerms) {
      setError('You must agree to the Terms of Service & Client Discretion Protocol.')
      return
    }

    setLoading(true)

    setTimeout(() => {
      const result = signup({
        name,
        email,
        password,
        // vehicle,
      })
      setLoading(false)

      if (result.success) {
        navigate('/')
      } else {
        setError(result.error || 'Failed to create atelier account.')
      }
    }, 400)
  }

  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center pt-24 pb-16">
      <div className="max-w-[1120px] mx-auto w-full px-6 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full rounded-sm overflow-hidden border border-white/10 bg-[hsl(0_0%_5%)] shadow-2xl">
          {/* Left Column: Cinematic Visual */}
          <div className="lg:col-span-6 relative hidden lg:flex flex-col justify-between p-12 overflow-hidden bg-black border-r border-white/10 min-h-[680px]">
            {/* Background image */}
            <img
              src="/service-maintenance.jpg"
              alt="Master craftsman applying ceramic protection"
              className="absolute inset-0 w-full h-full object-cover object-center grayscale contrast-125 opacity-70"
            />

            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60" />

            {/* Top brand */}
            <div className="relative z-10">
              <Link
                to="/"
                className="text-white text-sm font-medium tracking-wide hover:opacity-80 transition-opacity"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                LuxureDetails
              </Link>
              <span className="text-white/40 text-[10px] uppercase tracking-widest block mt-1 font-mono">
                Atelier Registry Enrollment
              </span>
            </div>

            {/* Bottom Quote & Trust */}
            <div className="relative z-10">
              <span className="text-white/40 text-xs font-mono uppercase tracking-widest block mb-3">
                The Registry Protocol
              </span>
              <blockquote
                className="text-2xl xl:text-3xl text-white font-serif italic leading-snug mb-6"
                style={{ fontFamily: '"Instrument Serif", serif' }}
              >
                "Every automobile under our care receives an indelible chronicle of preservation."
              </blockquote>
              <div className="flex items-center gap-2 text-white/50 text-xs pt-4 border-t border-white/10">
                <ShieldCheck size={14} className="text-white" />
                <span>Zero Public Visibility Guarantee · Complete Client Anonymity</span>
              </div>
            </div>
          </div>

          {/* Right Column: Registration Form */}
          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeOut }}
              className="max-w-[420px] w-full mx-auto"
            >
              {/* Header */}
              <div className="mb-6">
                <span
                  className="text-white/40 block mb-2"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '11px',
                    fontWeight: 400,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                  }}
                >
                  Private Registry · Onboarding
                </span>
                <h1
                  className="text-4xl md:text-5xl text-white font-serif leading-none mb-3"
                  style={{ fontFamily: '"Instrument Serif", serif' }}
                >
                  Create an Account.
                </h1>
                <p className="text-white/60 text-xs md:text-sm font-light leading-relaxed">
                  Enroll to manage your vehicle's paint audits, schedule private bay commissions, and access certified coating warranties.
                </p>
              </div>

              {/* Error notice */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-5 p-3 rounded-sm border border-red-500/30 bg-red-500/10 text-red-200 text-xs flex items-start gap-2.5"
                >
                  <AlertCircle size={15} className="shrink-0 mt-0.5 text-red-400" />
                  <span>{error}</span>
                </motion.div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="text-white/70 text-xs block mb-1 font-light">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="e.g. Sebastian Sterling"
                    className="w-full bg-black border border-white/15 rounded-sm px-4 py-2 text-white text-sm focus:border-white focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-white/70 text-xs block mb-1 font-light">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="name@domain.com"
                    className="w-full bg-black border border-white/15 rounded-sm px-4 py-2 text-white text-sm focus:border-white focus:outline-none transition-colors"
                  />
                </div>

                {/* <div>
                  <label className="text-white/70 text-xs block mb-1 font-light">
                    Primary Vehicle of Interest (Optional)
                  </label>
                  <input
                    type="text"
                    value={vehicle}
                    onChange={e => setVehicle(e.target.value)}
                    placeholder="e.g. 2024 Aston Martin DB12"
                    className="w-full bg-black border border-white/15 rounded-sm px-4 py-2 text-white text-sm focus:border-white focus:outline-none transition-colors"
                  />
                </div> */}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-white/70 text-xs block mb-1 font-light">
                      Password *
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full bg-black border border-white/15 rounded-sm px-3.5 py-2 pr-9 text-white text-sm focus:border-white focus:outline-none transition-colors"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                        aria-label="Toggle password visibility"
                      >
                        {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="text-white/70 text-xs block mb-1 font-light">
                      Confirm Password *
                    </label>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={confirmPassword}
                      onChange={e => setConfirmPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full bg-black border border-white/15 rounded-sm px-3.5 py-2 text-white text-sm focus:border-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Consent checkbox */}
                <div className="flex items-start gap-2 mt-1">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreeTerms}
                    onChange={e => setAgreeTerms(e.target.checked)}
                    className="accent-white bg-black border-white/20 rounded-xs w-3.5 h-3.5 mt-0.5 cursor-pointer"
                  />
                  <label htmlFor="terms" className="text-white/50 text-xs font-light leading-snug cursor-pointer select-none">
                    I agree to the{' '}
                    <Link to="/terms" className="text-white underline underline-offset-2">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="text-white underline underline-offset-2">
                      Client Discretion Protocol
                    </Link>
                    .
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-2 bg-white text-black font-medium text-xs uppercase tracking-widest py-3 rounded-sm hover:bg-white/85 transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {loading ? 'Registering...' : 'Sign up'}
                  {!loading && <ArrowUpRight size={15} />}
                </button>
              </form>

              {/* Switch to Login */}
              <div className="mt-6 text-center pt-4 border-t border-white/10">
                <p className="text-white/50 text-xs font-light">
                  Already registered with the atelier?{' '}
                  <Link
                    to="/login"
                    className="text-white underline underline-offset-4 hover:opacity-70 transition-opacity font-medium ml-1"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
