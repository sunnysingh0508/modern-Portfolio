import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, MapPin } from 'lucide-react'

const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const LinkedinIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)
import { useInView } from '../hooks/useInView'

export default function Contact() {
  const { ref, inView } = useInView(0.15)
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, send to a backend or email service
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-28 bg-[#141414]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: CTA text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#1D4ED8] mb-4">
              Let's Talk
            </p>
            <h2
              className="font-display text-5xl md:text-6xl font-semibold text-white leading-tight mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Got an idea?
              <br />
              <span className="italic text-[#3B82F6]">Let's build it</span>
            </h2>
            <p className="text-white/60 leading-relaxed mb-10 text-base">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of something great. Drop me a message!
            </p>

            {/* Contact links */}
            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  label: 'sunnykashyap1608@gmail.com',
                  href: 'mailto:sunnykashyap1608@gmail.com',
                },
                {
                  icon: LinkedinIcon,
                  label: 'linkedin.com/in/sunny-singh0506',
                  href: 'https://www.linkedin.com/in/sunny-singh0506',
                },
                {
                  icon: GithubIcon,
                  label: 'github.com',
                  href: 'https://github.com',
                },
                {
                  icon: MapPin,
                  label: 'Aligarh, Uttar Pradesh, India',
                  href: null,
                },
              ].map(({ icon: Icon, label, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-white/60" />
                  </div>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white text-sm transition-colors"
                    >
                      {label}
                    </a>
                  ) : (
                    <span className="text-white/60 text-sm">{label}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-10 flex flex-col items-center justify-center text-center gap-4 h-full min-h-[400px]">
                <div className="w-14 h-14 rounded-full bg-[#1D4ED8] flex items-center justify-center mb-2">
                  <Send size={22} className="text-white" />
                </div>
                <h3 className="text-white text-xl font-semibold">Message Sent!</h3>
                <p className="text-white/50 text-sm max-w-xs">
                  Thanks for reaching out. I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                id="contact-form"
                className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-5"
              >
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-medium text-white/50 mb-2 tracking-wide">
                    YOUR NAME
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#1D4ED8] transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-medium text-white/50 mb-2 tracking-wide">
                    EMAIL ADDRESS
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#1D4ED8] transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-medium text-white/50 mb-2 tracking-wide">
                    MESSAGE
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#1D4ED8] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  id="contact-submit-btn"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#1D4ED8] text-white font-semibold text-sm hover:bg-[#1e40af] transition-colors duration-300"
                >
                  Send Message
                  <Send size={15} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
