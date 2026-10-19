import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowUpRight, Eye, EyeOff, ShieldCheck, AlertCircle } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const easeOut = [0.16, 1, 0.3, 1] as const

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    setTimeout(() => {
      const result = login(email, password)
      setLoading(false)

      if (result.success) {
        navigate('/')
      } else {
        setError(result.error || 'Failed to authenticate credentials.')
      }
    }, 400)
  }

  // const handleFillDemo = () => {
  //   setEmail('client@luxuredetails.com')
  //   setPassword('luxury123')
  //   setError(null)
  // }

  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center pt-24 pb-16">
      <div className="max-w-[1120px] mx-auto w-full px-6 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full rounded-sm overflow-hidden border border-white/10 bg-[hsl(0_0%_5%)] shadow-2xl">
          {/* Left Column: Cinematic Visual */}
          <div className="lg:col-span-6 relative hidden lg:flex flex-col justify-between p-12 overflow-hidden bg-black border-r border-white/10 min-h-[640px]">
            {/* Background image */}
            <img
              src="/hero-car.png"
              alt="Luxury sports car in dark studio"
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
                Private Client Portal
              </span>
            </div>

            {/* Bottom Quote & Trust */}
            <div className="relative z-10">
              <span className="text-white/40 text-xs font-mono uppercase tracking-widest block mb-3">
                The Atelier Standard
              </span>
              <blockquote
                className="text-2xl xl:text-3xl text-white font-serif italic leading-snug mb-6"
                style={{ fontFamily: '"Instrument Serif", serif' }}
              >
                "True craftsmanship is silent. It speaks only through enduring optical perfection."
              </blockquote>
              <div className="flex items-center gap-2 text-white/50 text-xs pt-4 border-t border-white/10">
                <ShieldCheck size={14} className="text-white" />
                <span>AES-256 Encrypted Client Registry & Private History</span>
              </div>
            </div>
          </div>

          {/* Right Column: Authentication Form */}
          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeOut }}
              className="max-w-[420px] w-full mx-auto"
            >
              {/* Header */}
              <div className="mb-8">
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
                  Atelier Access · Client Registry
                </span>
                <h1
                  className="text-4xl md:text-5xl text-white font-serif leading-none mb-3"
                  style={{ fontFamily: '"Instrument Serif", serif' }}
                >
                  Sign In.
                </h1>
                <p className="text-white/60 text-xs md:text-sm font-light leading-relaxed">
                  Enter your credentials to view your active commissions, coating warranty certificates, and private bay reservations.
                </p>
              </div>

              {/* Error notice */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-3 rounded-sm border border-red-500/30 bg-red-500/10 text-red-200 text-xs flex items-start gap-2.5"
                >
                  <AlertCircle size={15} className="shrink-0 mt-0.5 text-red-400" />
                  <span>{error}</span>
                </motion.div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="text-white/70 text-xs block mb-1.5 font-light">
                    Registered Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="name@domain.com"
                    className="w-full bg-black border border-white/15 rounded-sm px-4 py-2.5 text-white text-sm focus:border-white focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-white/70 text-xs font-light">
                      Security Key / Password
                    </label>
                    <a
                      href="#"
                      onClick={e => {
                        e.preventDefault()
                        alert('To reset your credentials, please contact the atelier concierge at concierge@luxuredetails.com.')
                      }}
                      className="text-white/40 hover:text-white text-[11px] font-light transition-colors"
                    >
                      Forgot key?
                    </a>
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full bg-black border border-white/15 rounded-sm px-4 py-2.5 pr-10 text-white text-sm focus:border-white focus:outline-none transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                      aria-label="Toggle password visibility"
                    >
                      {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                  </div>
                </div>

                {/* Remember me */}
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    onChange={e => setRememberMe(e.target.checked)}
                    className="accent-white bg-black border-white/20 rounded-xs w-3.5 h-3.5 cursor-pointer"
                  />
                  <label htmlFor="remember" className="text-white/50 text-xs font-light cursor-pointer select-none">
                    Remember this device for 30 days
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-2 bg-white text-black font-medium text-xs uppercase tracking-widest py-3 rounded-sm hover:bg-white/85 transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {loading ? 'Authenticating...' : 'Sign in'}
                  {!loading && <ArrowUpRight size={15} />}
                </button>
              </form>

              {/* Demo Helper Button */}
              {/* <div className="mt-6 pt-5 border-t border-white/10 flex flex-col items-center gap-2">
                <span className="text-white/40 text-[11px] font-mono">
                  Testing with demo credentials?
                </span>
                <button
                  type="button"
                  onClick={handleFillDemo}
                  className="text-xs text-white/70 hover:text-white underline underline-offset-4 font-mono transition-colors"
                >
                  Click to populate client@luxuredetails.com
                </button>
              </div> */}

              {/* Switch to Signup */}
              <div className="mt-6 text-center">
                <p className="text-white/50 text-xs font-light">
                  Do not possess an atelier account?{' '}
                  <Link
                    to="/signup"
                    className="text-white underline underline-offset-4 hover:opacity-70 transition-opacity font-medium ml-1"
                  >
                    Register
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
