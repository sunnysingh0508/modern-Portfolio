import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const skillGroups = [
  {
    category: 'Frontend & Web Development',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Next.js (App Router)', 'Tailwind CSS', 'Responsive Web Design'],
    color: '#1D4ED8',
  },
  {
    category: 'Programming & Technologies',
    skills: ['C / C++', 'DBMS', 'Python', 'TypeScript', 'JavaScript', 'Artificial Intelligence (AI)', 'SQL', 'Problem-Solving', 'Algorithms'],
    color: '#059669',
  },
  {
    category: 'Databases, Cloud & Tools',
    skills: ['MongoDB', 'Vercel', 'Render', 'Git & GitHub', 'VS Code', 'Tally Accounting Software', 'MS Office (Word, Excel, PPT)', 'Financial Reporting', 'Data Entry & Documentation'],
    color: '#C8963C',
  },
  {
    category: 'Management & Professional',
    skills: ['Classroom Management', 'Time Management', 'Event Coordination', 'Targeted Teaching', 'Team Collaboration'],
    color: '#7C3AED',
  },
]

const languages = [
  { lang: 'English', level: 'Moderate' },
  { lang: 'Hindi', level: 'Proficient' },
  { lang: 'Urdu', level: 'Advanced' },
]

export default function Skills() {
  const { ref, inView } = useInView(0.15)

  return (
    <section id="skills" className="py-28 bg-[#F0EDE8]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#1D4ED8] mb-3">
            Expertise
          </p>
          <h2
            className="font-display text-5xl md:text-6xl font-semibold text-[#141414] leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Skills &{' '}
            <span className="italic">Technologies</span>
          </h2>
        </motion.div>

        {/* Skill groups */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#E2DDD7] hover:border-[#141414]/20 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: group.color }}
                />
                <h3 className="font-semibold text-[#141414] text-sm tracking-wide uppercase">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-sm font-medium bg-[#F0EDE8] text-[#141414] hover:text-white transition-all duration-200 cursor-default"
                    style={{
                      '--hover-bg': group.color,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = group.color
                      e.currentTarget.style.color = 'white'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = ''
                      e.currentTarget.style.color = ''
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 bg-[#FAF8F5] rounded-2xl p-6 border border-[#E2DDD7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#141414]" />
            <h3 className="font-semibold text-[#141414] text-sm tracking-wide uppercase">
              Languages Known
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {languages.map((l) => (
              <div
                key={l.lang}
                className="px-4 py-2 rounded-xl bg-[#F0EDE8] flex items-center gap-2 text-sm"
              >
                <span className="font-bold text-[#141414]">{l.lang}</span>
                <span className="text-xs text-[#1D4ED8] font-semibold bg-white/80 px-2 py-0.5 rounded-md">
                  {l.level}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
