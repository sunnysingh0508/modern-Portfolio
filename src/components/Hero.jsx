import { motion } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#FAF8F5]"
    >
      {/* Background decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#141414 1px, transparent 1px), linear-gradient(90deg, #141414 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Soft blob accents */}
      <div className="absolute top-24 right-0 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[120px] opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-100 rounded-full blur-[100px] opacity-20 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <div className="order-2 lg:order-1">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm font-semibold tracking-[0.2em] uppercase text-[#1D4ED8] mb-4"
          >
            B.Tech CSE · Web Developer & Finance Assistant
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display text-6xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] text-[#141414] mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Sunny
            <br />
            <span className="italic text-[#1D4ED8]">Singh</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[#6B6B6B] text-lg leading-relaxed max-w-md mb-8"
          >
            Computer Science student at Lovely Professional University. Skilled in React.js, Next.js, Python, data accuracy, and delivering high-impact web and financial solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <a
              href="#projects"
              id="hero-view-work-btn"
              className="px-6 py-3 rounded-full bg-[#141414] text-white font-semibold text-sm hover:bg-[#1D4ED8] transition-colors duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              id="hero-contact-btn"
              className="px-6 py-3 rounded-full border border-[#E2DDD7] text-[#141414] font-semibold text-sm hover:border-[#141414] transition-colors duration-300"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center gap-5"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-github-link"
              className="text-[#6B6B6B] hover:text-[#141414] transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sunny-singh0506"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-linkedin-link"
              className="text-[#6B6B6B] hover:text-[#141414] transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href="mailto:sunnykashyap1608@gmail.com"
              id="hero-email-link"
              className="text-[#6B6B6B] hover:text-[#141414] transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <span className="w-16 h-px bg-[#E2DDD7]" />
            <span
              className="text-sm text-[#6B6B6B]"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              available for opportunities
            </span>
          </motion.div>
        </div>

        {/* Right: Portrait / Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Decorative frames & background glows */}
            <div className="absolute -top-4 -right-4 w-full h-full rounded-3xl border-2 border-[#1D4ED8]/30" />
            <div className="absolute -bottom-4 -left-4 w-full h-full rounded-3xl bg-blue-500/5 -z-10" />
            
            {/* Standing Portrait Container */}
            <div className="relative w-80 h-[420px] sm:w-96 sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl bg-[#1E293B] border border-[#E2DDD7]">
              <img
                src="/assets/sunny_portrait.jpg"
                alt="Sunny Singh - B.Tech CSE Student & Developer"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
              {/* Subtle elegant gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-[#6B6B6B] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} className="text-[#6B6B6B]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
