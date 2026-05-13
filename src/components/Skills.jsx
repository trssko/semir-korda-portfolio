import { motion } from 'framer-motion'

const groups = [
  {
    label: 'Frontend',
    color: '#4f9eff',
    skills: ['JavaScript', 'TypeScript', 'Angular', 'HTML', 'CSS', 'Tailwind'],
  },
  {
    label: 'Backend',
    color: '#7c3aed',
    skills: ['Spring Boot', 'C#', 'ASP.NET Core'],
  },
  {
    label: 'Databases',
    color: '#22c55e',
    skills: ['PostgreSQL', 'SQLite'],
  },
  {
    label: 'DevOps & Tools',
    color: '#f59e0b',
    skills: ['Docker', 'GitLab CI/CD', 'Git', 'Kubernetes'],
  },
  {
    label: 'Other',
    color: '#64748b',
    skills: ['Java', 'Python', 'C++'],
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <p className="font-mono text-accent text-sm tracking-widest uppercase mb-2">03. Skills</p>
        <h2 className="font-mono font-bold text-3xl md:text-4xl text-text">Tech Stack</h2>
        <div className="mt-3 w-12 h-0.5 bg-accent" />
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-10"
      >
        {groups.map((group) => (
          <motion.div key={group.label} variants={item}>
            <p
              className="font-mono text-xs tracking-widest uppercase mb-4"
              style={{ color: group.color }}
            >
              {group.label}
            </p>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-lg font-mono text-sm border border-border text-text bg-surface cursor-default transition-all duration-200"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = group.color + '60'
                    e.currentTarget.style.color = group.color
                    e.currentTarget.style.boxShadow = `0 0 16px ${group.color}20`
                    e.currentTarget.style.transform = 'scale(1.05)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = ''
                    e.currentTarget.style.color = ''
                    e.currentTarget.style.boxShadow = ''
                    e.currentTarget.style.transform = ''
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
