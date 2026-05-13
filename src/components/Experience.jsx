import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'

const entries = [
  {
    type: 'work',
    role: 'Software Development Intern',
    company: 'ZIRA Group',
    location: 'Sarajevo, Bosnia & Herzegovina',
    period: 'Feb 2026 – Apr 2026',
    bullets: [
      'Built full-stack features for a roguelike game platform (Angular + Spring Boot + PostgreSQL)',
      'Developed management interfaces (CRUD, charts), inventory systems, and level rendering',
      'Authored and maintained test cases as part of a structured QA workflow; collaborated via Git with branching, merge conflict resolution, and code reviews',
    ],
  },
  {
    type: 'work',
    role: 'Software Engineer Intern',
    company: 'GMV GmbH',
    location: 'Darmstadt, Germany',
    period: 'Jul 2025 – Dec 2025',
    bullets: [
      'Worked on Mission Control Systems (SCOS 2000) supporting ESA/ESOC missions: Cryosat, Galileo, Sentinel, Biomass',
      'Containerised S2K components with Docker and built GitLab CI/CD pipelines for automated deployments',
      'Java programming and testing of satellite mission UI software',
    ],
  },
  {
    type: 'award',
    role: 'Scholarship Holder',
    company: 'Zoran Djindjic Internship Programme of German Business',
    location: '',
    period: 'Jun 2025 – Present',
    bullets: [
      'One of up to 65 annual recipients from the Western Balkans for this prestigious German business scholarship programme',
    ],
  },
  {
    type: 'award',
    role: 'Scholarship Holder',
    company: 'Jericho Foundation',
    location: '',
    period: 'Oct 2022 – Present',
    bullets: [
      'Holistic scholarship programme providing financial support, seminars, emotional support, and in-country & US internship opportunities to students in Bosnia & Herzegovina',
      'Completed multiple certificates across areas including leadership, peacebuilding, business skills, and professional development',
      'Recurring invited speaker at Jericho Foundation events, including evenings of philanthropy co-organised with USAID and the Tuzla Community Foundation',
    ],
  },
  {
    type: 'edu',
    role: 'B.Sc. Software Engineering',
    company: 'Faculty of Information Technologies, University of Mostar',
    location: 'Mostar, Bosnia & Herzegovina',
    period: 'Oct 2022 – Present (4th year)',
    bullets: [],
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-surface/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="font-mono text-accent text-sm tracking-widest uppercase mb-2">02. Experience</p>
          <h2 className="font-mono font-bold text-3xl md:text-4xl text-text">Work Experience</h2>
          <div className="mt-3 w-12 h-0.5 bg-accent" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-5 top-2 bottom-2 w-px bg-border hidden md:block" />

          <div className="space-y-10">
            {entries.map((entry, i) => (
              <motion.div key={i} variants={item} className="flex gap-6 md:gap-10">
                {/* Dot */}
                <div className="hidden md:flex flex-col items-center shrink-0">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border z-10 ${
                      entry.type === 'edu'
                        ? 'border-violet bg-violet/10 text-violet'
                        : 'border-accent bg-accent/10 text-accent'
                    }`}
                  >
                    {entry.type === 'edu' ? <GraduationCap size={16} /> : <Briefcase size={16} />}
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 bg-surface border border-border rounded-xl p-6 hover:border-accent/40 transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="font-mono font-semibold text-text text-base">{entry.role}</h3>
                      <p className="text-accent text-sm font-medium mt-0.5">{entry.company}</p>
                      {entry.location && (
                        <p className="text-muted text-xs mt-0.5">{entry.location}</p>
                      )}
                    </div>
                    <span className="font-mono text-xs text-muted shrink-0 mt-1">{entry.period}</span>
                  </div>
                  {entry.bullets.length > 0 && (
                    <ul className="space-y-2 mt-3">
                      {entry.bullets.map((b, j) => (
                        <li key={j} className="flex gap-2 text-sm text-muted leading-relaxed">
                          <span className="text-accent mt-1.5 shrink-0">▹</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
