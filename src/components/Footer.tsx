import React from 'react'
import { Link } from 'react-router-dom'

const footerLinks = {
  website: [
    { label: 'Services', href: '/services' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About', href: '/about' },
  ],
  contact: [
    { label: 'Get a quote', href: '/contact' },
    { label: 'Contact form', href: '/contact' },
    { label: 'Email us', href: 'mailto:concierge@luxuredetails.com' },
  ],
  social: [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'YouTube', href: 'https://youtube.com' },
    { label: 'X (Twitter)', href: 'https://x.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
  ],
}

const labelStyle: React.CSSProperties = {
  fontFamily: 'Inter, sans-serif',
  fontSize: '11px',
  fontWeight: 400,
  textTransform: 'uppercase',
  letterSpacing: '0.12em',
}

const linkStyle: React.CSSProperties = {
  fontFamily: 'Inter, sans-serif',
  fontSize: '13px',
  fontWeight: 300,
}

function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-16">
      <div className="max-w-[1120px] mx-auto w-full px-6">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="text-white hover:opacity-80 transition-opacity"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: 500,
              }}
            >
              LuxureDetails
            </Link>
            <p
              className="text-white/40 mt-3 max-w-[220px]"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '12px',
                fontWeight: 300,
                lineHeight: 1.6,
              }}
            >
              Experience the prestige of a professionally detailed car, radiating elegance and refinement at every turn.
            </p>
          </div>

          {/* Website */}
          <div>
            <span className="text-white/40 block mb-4" style={labelStyle}>
              Website
            </span>
            <div className="flex flex-col gap-3">
              {footerLinks.website.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-white/60 hover:text-white transition-colors"
                  style={linkStyle}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <span className="text-white/40 block mb-4" style={labelStyle}>
              Contact
            </span>
            <div className="flex flex-col gap-3">
              {footerLinks.contact.map((link) => {
                if (link.href.startsWith('mailto:')) {
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-white/60 hover:text-white transition-colors"
                      style={linkStyle}
                    >
                      {link.label}
                    </a>
                  )
                }
                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-white/60 hover:text-white transition-colors"
                    style={linkStyle}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Social Media */}
          <div>
            <span className="text-white/40 block mb-4" style={labelStyle}>
              Social Media
            </span>
            <div className="flex flex-col gap-3">
              {footerLinks.social.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                  style={linkStyle}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <span
            className="text-white/30"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '12px',
            }}
          >
            LuxureDetails © {new Date().getFullYear()} by Mohammad Sufyan with ❤️
          </span>
          <div className="flex gap-4 flex-wrap">
            <Link
              to="/terms"
              className="text-white/30 hover:text-white/60 transition-colors"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '12px',
              }}
            >
              Terms of service
            </Link>
            <span className="text-white/20">·</span>
            <Link
              to="/privacy"
              className="text-white/30 hover:text-white/60 transition-colors"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '12px',
              }}
            >
              Privacy policy
            </Link>
            <span className="text-white/20">·</span>
            <Link
              to="/terms#cookies"
              className="text-white/30 hover:text-white/60 transition-colors"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '12px',
              }}
            >
              Cookie policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
