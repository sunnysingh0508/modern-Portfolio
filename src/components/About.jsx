import { motion } from 'framer-motion'
import { FileText, ArrowUpRight } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function About() {
  const { ref, inView } = useInView(0.2)

  return (
    <section id="about" className="py-28 bg-[#FAF8F5]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Section label + text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#1D4ED8] mb-4">
              About Me
            </p>
            <h2
              className="font-display text-5xl md:text-6xl font-semibold text-[#141414] leading-tight mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Driven by data,
              <br />
              <span className="italic">powered by code</span>
            </h2>
            <div className="space-y-4 text-[#6B6B6B] leading-relaxed text-base">
              <p>
                I am a B-Tech Computer Science student at Lovely Professional University (LPU), passionate about software engineering, web development, and data-driven systems.
              </p>
              <p>
                With hands-on experience as an <strong>Assistant Finance Manager</strong> at BRS Finjasee Pvt. Ltd., I managed over 500+ monthly financial transactions, streamlined invoice workflows, and resolved discrepancies with high precision.
              </p>
              <p>
                As an educator, I boosted student performance by 50% and classroom engagement by 70% through structured curriculum design and modern teaching methodologies.
              </p>
              
              {/* Education Badges */}
              <div className="pt-4 border-t border-[#E2DDD7] space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#141414]">Education</h4>
                <div className="flex flex-col gap-1.5 text-xs text-[#6B6B6B]">
                  <div className="flex justify-between items-center py-1 px-3 rounded-lg bg-[#F0EDE8]">
                    <span className="font-semibold text-[#141414]">B-Tech Computer Science — LPU</span>
                    <span className="text-[#1D4ED8] font-medium">2025–2029</span>
                  </div>
                  <div className="flex justify-between items-center py-1 px-3 rounded-lg bg-[#F0EDE8]">
                    <span className="font-semibold text-[#141414]">Intermediate (PCM) — IPS Aligarh</span>
                    <span className="text-[#6B6B6B]">2024</span>
                  </div>
                  <div className="flex justify-between items-center py-1 px-3 rounded-lg bg-[#F0EDE8]">
                    <span className="font-semibold text-[#141414]">High School (PCM) — Ketan Convent</span>
                    <span className="text-[#6B6B6B]">2022</span>
                  </div>
                </div>
                <div className="pt-2">
                  <a
                    href="/assets/sunny-singh-resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold px-3.5 py-2 rounded-lg bg-[#141414] text-white hover:bg-[#1D4ED8] transition-colors"
                  >
                    <FileText size={14} />
                    View Full Resume (PDF)
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Stats cards */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.12, delayChildren: 0.2 },
              },
            }}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { value: '500+', label: 'Monthly Transactions', color: '#1D4ED8' },
              { value: '50%', label: 'Student Performance Boost', color: '#059669' },
              { value: '24h', label: 'Hackathon Innovation', color: '#C8963C' },
              { value: 'ADCA', label: 'MS Office & Tally Certified', color: '#7C3AED' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="bg-[#F0EDE8] rounded-2xl p-6 flex flex-col gap-2 hover:shadow-md transition-shadow"
              >
                <span
                  className="text-4xl font-bold"
                  style={{ color: stat.color, fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {stat.value}
                </span>
                <span className="text-sm text-[#6B6B6B] font-medium">{stat.label}</span>
              </motion.div>
            ))}

            {/* Wide card */}
            <motion.div
              variants={fadeUp}
              className="col-span-2 bg-[#141414] rounded-2xl p-6 flex items-center gap-4"
            >
              <div className="w-2 h-10 rounded-full bg-[#1D4ED8] flex-shrink-0" />
              <div>
                <p className="text-white font-semibold text-sm">
                  Open to internships, software engineering & tech roles
                </p>
                <p className="text-white/50 text-xs mt-0.5">
                  React.js · Next.js · Python · Full Stack Development · Financial Tech
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
