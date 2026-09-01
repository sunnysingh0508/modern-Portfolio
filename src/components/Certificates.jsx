import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Award, ExternalLink, X, ZoomIn } from 'lucide-react'

const certificates = [
  {
    id: 'adca',
    title: 'Advanced Diploma in Computer Applications (ADCA)',
    issuer: 'National Institute of Computer Education · ADCA/2024/SS-8914',
    date: '2024',
    badge: 'Certified Diploma',
    description: 'Comprehensive 1-year professional diploma covering MS Office suite (Word, Excel, PowerPoint), Tally Accounting Software, financial data management, and computer applications.',
    image: '/assets/certificate_adca.jpg',
    color: '#1D4ED8',
    verifiedUrl: null,
    verifyLabel: null,
    featured: false,
  },
  {
    id: 'time-mgmt',
    title: 'Effective Time Management (MOOC)',
    issuer: 'Tech Veda · Certificate No: TV/OCT25/ETM/A1243',
    date: '29 Oct 2025',
    badge: 'Proctored Exam Passed',
    description: 'Demonstrated excellence in completing the 5 hours of MOOC on Effective Time Management, passing a comprehensive proctored examination covering workflow optimization, dedication to continuous learning, and personal development.',
    image: '/assets/sunny_techveda_cert.jpg',
    color: '#059669',
    verifiedUrl: 'https://www.techveda.in/',
    verifyLabel: 'Verify at Tech Veda',
    featured: true,
  },
  {
    id: 'ai-intro',
    title: 'Introduction to Artificial Intelligence (AI)',
    issuer: 'IBM · Coursera (Verify: ZEO89IH0GW4D)',
    date: '04 Feb 2026',
    badge: 'IBM Certified',
    description: 'Online course authorized by IBM and offered through Coursera. Completed by Sunny Singh covering core artificial intelligence paradigms, neural networks, machine learning models, and AI-driven automation.',
    image: '/assets/certificate_ibm_ai.png',
    color: '#0F62FE',
    verifiedUrl: 'https://coursera.org/verify/ZEO89IH0GW4D',
    verifyLabel: 'Verify on Coursera (IBM)',
    featured: false,
  },
  {
    id: 'web-dev-intro',
    title: 'Introduction to HTML, CSS, & JavaScript',
    issuer: 'IBM · Coursera (Verify: MXVIIOA9CL8I)',
    date: '05 Feb 2026',
    badge: 'IBM Certified',
    description: 'Online course authorized by IBM and offered through Coursera. Completed by Sunny Singh with hands-on training in responsive web design, semantic HTML5, modern CSS3 layout architecture, and ES6+ JavaScript.',
    image: '/assets/certificate_ibm_webdev.png',
    color: '#0F62FE',
    verifiedUrl: 'https://coursera.org/verify/MXVIIOA9CL8I',
    verifyLabel: 'Verify on Coursera (IBM)',
    featured: false,
  },
  {
    id: 'hackathon',
    title: 'WEB-A-THON 2.0 (University-Level Hackathon)',
    issuer: 'Student Organisation ARENA · Lovely Professional University Punjab',
    date: '13–14 Feb 2026',
    badge: 'Outstanding Performance',
    description: 'Awarded for participating in "WEB-A-THON 2.0" University-Level Hackathon organized by ARENA at LPU Punjab, exhibiting outstanding performance in design, development, and strategic thinking.',
    image: '/assets/certificate_webathon_official.png',
    color: '#2563EB',
    verifiedUrl: null,
    verifyLabel: null,
    featured: true,
  },
  {
    id: 'prompt-builder',
    title: 'PROMPT BUILDER 2026 (Technical Innovation Challenge)',
    issuer: 'LYNQUP Private Limited & School of AI / InnovXus, LPU',
    date: '20 Feb 2026',
    badge: 'AI Innovation Challenge',
    description: 'Participated in PROMPT BUILDER 2026 under ASTITWA, organized by School of AI & Emerging Technologies and InnovXus at LPU. Demonstrated applied knowledge in AI concepts, structured problem-solving, and prompt-based solution development.',
    image: '/assets/certificate_prompt_builder.png',
    color: '#6D28D9',
    verifiedUrl: null,
    verifyLabel: null,
    featured: true,
  },
  {
    id: 'times-foundation',
    title: 'Community Development Project',
    issuer: 'Times Foundation & The Times of India (in collab with LPU)',
    date: 'Certified Completion',
    badge: 'Social Impact Award',
    description: 'Actively contributed to community-focused initiatives, demonstrating leadership, social responsibility, and dedication to sustainable community development with Times Foundation & Lovely Professional University.',
    image: '/assets/certificate_times_foundation.png',
    color: '#DC2626',
    verifiedUrl: 'https://verification.givemycertificate.com/v/c25c11f5-3c09-499e-ac43-26fe545f3318',
    verifyLabel: 'Verify at GiveMyCertificate',
    featured: false,
  },
]

export default function Certificates() {
  const { ref, inView } = useInView(0.15)
  const [selectedCert, setSelectedCert] = useState(null)

  return (
    <section id="certificates" className="py-28 bg-[#F0EDE8]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#1D4ED8] mb-3">
              Achievements & Credentials
            </p>
            <h2
              className="font-display text-5xl md:text-6xl font-semibold text-[#141414] leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Certificates &{' '}
              <span className="italic">Accreditations</span>
            </h2>
          </div>
          <p className="text-sm text-[#6B6B6B] max-w-sm">
            Click on any certificate card to view full certificate details and official verification links.
          </p>
        </motion.div>

        {/* Certificates grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              id={`cert-${cert.id}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              onClick={() => setSelectedCert(cert)}
              className="group bg-[#FAF8F5] rounded-2xl overflow-hidden border border-[#E2DDD7] hover:border-[#1D4ED8]/40 hover:shadow-xl transition-all duration-400 hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
            >
              {/* Certificate image preview */}
              <div className="relative h-48 overflow-hidden bg-[#111827] flex items-center justify-center">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-[#141414] text-xs font-bold shadow-md">
                    <ZoomIn size={14} /> Preview Certificate
                  </span>
                </div>
                <div
                  className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center shadow-md"
                  style={{ backgroundColor: cert.color }}
                >
                  <Award size={15} className="text-white" />
                </div>
                {cert.badge && (
                  <span
                    className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-white text-[11px] font-bold shadow-md"
                    style={{ backgroundColor: cert.color }}
                  >
                    {cert.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-[#141414] text-base leading-tight group-hover:text-[#1D4ED8] transition-colors">
                      {cert.title}
                    </h3>
                  </div>
                  <p className="text-xs font-semibold mb-2" style={{ color: cert.color }}>
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-[#6B6B6B] leading-relaxed line-clamp-3 mb-4">
                    {cert.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[#E2DDD7] text-xs">
                  <span className="text-[#6B6B6B] font-medium">Issued: {cert.date}</span>
                  <span className="font-bold text-[#1D4ED8] group-hover:underline flex items-center gap-1">
                    View <ExternalLink size={12} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal / Lightbox for viewing certificate in full resolution */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl border border-white/20 flex flex-col max-h-[92vh]"
            >
              {/* Modal Header */}
              <div className="p-4 px-6 bg-[#FAF8F5] border-b border-[#E2DDD7] flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-[#141414] text-base">{selectedCert.title}</h3>
                  <p className="text-xs text-[#6B6B6B]">{selectedCert.issuer}</p>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-full hover:bg-[#E2DDD7] text-[#141414] transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Certificate Image */}
              <div className="p-4 bg-[#0F172A] overflow-auto flex items-center justify-center">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-h-[65vh] w-auto object-contain rounded-lg shadow-lg"
                />
              </div>

              {/* Modal Footer Info */}
              <div className="p-4 px-6 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div className="text-[#6B6B6B]">
                  <strong>Awarded to:</strong> Sunny Singh · <strong>Status:</strong> {selectedCert.date}
                </div>
                {selectedCert.verifiedUrl && (
                  <a
                    href={selectedCert.verifiedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full text-white font-semibold flex items-center gap-1.5 hover:opacity-90 transition-opacity shadow-sm"
                    style={{ backgroundColor: selectedCert.color }}
                  >
                    {selectedCert.verifyLabel || 'Verify Credential'} <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
