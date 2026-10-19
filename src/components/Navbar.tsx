import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { LogOut, User as UserIcon } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Terms ', href: '/terms' },
  { label: 'Privacy', href: '/privacy' }
]

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const { currentUser, logout, isAuthenticated } = useAuth()

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md py-5 border-b border-white/5">
        <div className="max-w-[1120px] mx-auto w-full px-6 flex items-center justify-between">
          {/* Brand */}
          <Link
            to="/"
            className="text-white text-sm font-medium tracking-wide hover:opacity-80 transition-opacity"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 500 }}
            onClick={() => setMobileOpen(false)}
          >
            LuxureDetails
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`transition-colors relative py-1 ${isActive ? 'text-white' : 'text-white/60 hover:text-white'
                    }`}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-white"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Right desktop controls */}
          <div className="hidden md:flex items-center gap-5">
            {isAuthenticated && currentUser ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-sm px-3 py-1.5">
                  <UserIcon size={13} className="text-white/70" />
                  <span className="text-white text-xs font-light max-w-[120px] truncate">
                    {currentUser.name.split(' ')[0]}
                  </span>
                </div>
                <button
                  onClick={logout}
                  className="text-white/50 hover:text-white transition-colors p-1"
                  title="Sign out of registry"
                  aria-label="Sign out"
                >
                  <LogOut size={15} />
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className={`transition-colors py-1 ${location.pathname === '/login' || location.pathname === '/signup'
                  ? 'text-white underline underline-offset-4'
                  : 'text-white/60 hover:text-white'
                  }`}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                Sign in
              </Link>
            )}

            {/* Desktop CTA */}
            <Link
              to="/contact"
              className="border border-white/30 rounded-sm px-5 py-2 text-sm text-white hover:bg-white hover:text-black transition-all duration-300"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
            >
              Get a quote
            </Link>
          </div>

          {/* Hamburger button */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-1 text-white focus:outline-none"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            id="nav-hamburger"
          >
            <motion.span
              className="block w-5 h-[1.5px] bg-white origin-center"
              animate={mobileOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-5 h-[1.5px] bg-white"
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-5 h-[1.5px] bg-white origin-center"
              animate={mobileOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-black flex flex-col items-center justify-center gap-7 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/"
              className="text-white text-3xl font-serif mb-2"
              style={{ fontFamily: '"Instrument Serif", serif' }}
              onClick={() => setMobileOpen(false)}
            >
              LuxureDetails
            </Link>

            {isAuthenticated && currentUser && (
              <p className="text-white/40 text-xs font-mono mb-2">
                Signed in as {currentUser.name}
              </p>
            )}

            {navLinks.map((link, i) => {
              const isActive = location.pathname === link.href
              return (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  <Link
                    to={link.href}
                    className={`text-xl transition-colors ${isActive ? 'text-white underline underline-offset-8' : 'text-white/70 hover:text-white'
                      }`}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 500,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                    }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              )
            })}

            {/* Auth link in mobile menu */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              {isAuthenticated ? (
                <button
                  onClick={() => {
                    logout()
                    setMobileOpen(false)
                  }}
                  className="text-lg text-white/60 hover:text-white uppercase tracking-wider font-medium"
                >
                  Sign Out
                </button>
              ) : (
                <Link
                  to="/login"
                  className="text-lg text-white/60 hover:text-white uppercase tracking-wider font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  Sign In / Register
                </Link>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.36, duration: 0.3 }}
            >
              <Link
                to="/contact"
                className="mt-2 inline-block border border-white/30 rounded-sm px-8 py-3 text-sm text-white hover:bg-white hover:text-black transition-all duration-300"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                onClick={() => setMobileOpen(false)}
              >
                Get a quote
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
