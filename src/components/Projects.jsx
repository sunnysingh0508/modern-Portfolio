import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ArrowUpRight } from 'lucide-react'

const GithubIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)
import { useInView } from '../hooks/useInView'

const projects = [
  {
    id: 'finance-management',
    title: 'Financial Data & Invoice Management',
    subtitle: 'BRS Finjasee Pvt. Ltd. · Apr 2024 – Apr 2025',
    description:
      'Handled 500+ monthly transactions including data entry, invoicing, and payment posting, improving processing speed by 30%. Resolved 50+ monthly vendor billing discrepancies, reducing payment delays by 25%.',
    tags: ['Tally Accounting', 'MS Excel', 'Financial Reporting', 'Data Accuracy'],
    image: '/assets/project_caretaker.jpg',
    github: 'https://github.com',
    live: null,
    featured: true,
  },
  {
    id: 'hackathon-challenge',
    title: 'WEB-A-THON 2.0 (24h Hackathon Project)',
    subtitle: 'ARENA · Lovely Professional University · Feb 2026',
    description:
      'Participated in the competitive 24-hour WEB-A-THON 2.0 Hackathon organized by ARENA at LPU in collaboration with MentorX and HoverRobotix. Developed functional software prototypes combining modern web interfaces with rapid algorithmic problem-solving under tight deadlines.',
    tags: ['React.js', 'Python', 'JavaScript', 'Problem-Solving', 'Next.js'],
    image: '/assets/project_iot.jpg',
    github: 'https://github.com',
    live: null,
    featured: true,
  },
  {
    id: 'nextjs-web-platform',
    title: 'Next.js Modern Web Applications',
    subtitle: 'Frontend & Full Stack Architecture',
    description:
      'Engineered dynamic, highly responsive web platforms utilizing Next.js (App Router), React.js, and Tailwind CSS with clean component structures, SEO optimization, and smooth animations.',
    tags: ['Next.js', 'React.js', 'Tailwind CSS', 'TypeScript', 'Responsive Design'],
    image: '/assets/project_visualizer.jpg',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    id: 'education-delivery',
    title: 'Interactive Teaching & Classroom Framework',
    subtitle: 'Local School · Apr 2023 – Mar 2024',
    description:
      'Delivered targeted instruction and structured lesson plans that boosted student academic performance by 50% and increased classroom engagement by 70% using modern educational technology tools.',
    tags: ['Classroom Management', 'MS Office', 'Time Management', 'Targeted Instruction'],
    image: '/assets/project_line_fault.jpg',
    github: null,
    live: null,
    featured: false,
  },
]

export default function Projects() {
  const { ref, inView } = useInView(0.1)
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <section id="projects" className="py-28 bg-[#FAF8F5]" ref={ref}>
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
              Work
            </p>
            <h2
              className="font-display text-5xl md:text-6xl font-semibold text-[#141414] leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Selected{' '}
              <span className="italic">Projects</span>
            </h2>
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-[#6B6B6B] hover:text-[#141414] transition-colors group"
          >
            All projects on GitHub
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              id={`project-${project.id}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group relative rounded-2xl overflow-hidden border border-[#E2DDD7] cursor-pointer transition-all duration-400 ${
                project.featured ? 'col-span-1' : 'col-span-1'
              }`}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-[#F0EDE8]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Hover action buttons */}
                <AnimatePresence>
                  {hoveredId === project.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute bottom-4 left-4 right-4 flex gap-2"
                    >
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 text-[#141414] text-xs font-semibold hover:bg-white transition-colors"
                        >
                        <GithubIcon size={12} />
                          Code
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1D4ED8] text-white text-xs font-semibold hover:bg-[#1e40af] transition-colors"
                        >
                          <ExternalLink size={12} />
                          Live Demo
                        </a>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Content */}
              <div className="p-6 bg-white group-hover:bg-[#FAFAFA] transition-colors">
                <p className="text-xs text-[#6B6B6B] font-medium mb-1">{project.subtitle}</p>
                <h3 className="font-semibold text-[#141414] text-lg mb-2 group-hover:text-[#1D4ED8] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-xs font-medium bg-[#F0EDE8] text-[#6B6B6B]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
