import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    document.querySelectorAll('section[id]').forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E2DDD7] shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-2">
          <span
            className="font-display text-2xl font-semibold text-[#141414] tracking-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            SS
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] group-hover:scale-125 transition-transform" />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-px after:bg-[#1D4ED8] after:transition-all after:duration-300 ${
                  activeSection === item.href.slice(1)
                    ? 'text-[#1D4ED8] after:w-full'
                    : 'text-[#6B6B6B] hover:text-[#141414] after:w-0 hover:after:w-full'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/assets/sunny-singh-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold px-4 py-2 rounded-full bg-[#141414] text-white hover:bg-[#1D4ED8] transition-colors duration-300"
          >
            Resume ↗
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-toggle"
          className="md:hidden p-2 text-[#141414]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E2DDD7] px-6 pb-6"
          >
            <ul className="flex flex-col gap-4 pt-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-base font-medium text-[#141414] hover:text-[#1D4ED8] transition-colors py-1"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/assets/sunny-singh-resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-semibold px-4 py-2 rounded-full bg-[#141414] text-white"
                >
                  Resume ↗
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
