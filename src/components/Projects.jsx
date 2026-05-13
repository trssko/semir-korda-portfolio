import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from './icons'
import { useLanguage } from '../context/LanguageContext'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Projects() {
  const { t } = useLanguage()
  const { projects } = t

  return (
    <section id="projects" className="py-24 px-6 bg-surface/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="font-mono text-accent text-sm tracking-widest uppercase mb-2">{projects.label}</p>
          <h2 className="font-mono font-bold text-3xl md:text-4xl text-text">{projects.heading}</h2>
          <div className="mt-3 w-12 h-0.5 bg-accent" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* TODO: Add more projects here as you build them */}
          {projects.items.map((project) => (
            <motion.div
              key={project.title}
              variants={card}
              className="group bg-surface border border-border rounded-xl p-6 flex flex-col hover:border-accent/40 hover:shadow-[0_0_30px_color-mix(in_srgb,var(--color-accent)_8%,transparent)] transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-mono font-semibold text-text text-base leading-snug pr-4">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3 shrink-0">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub repo for ${project.title}`}
                      className="text-muted hover:text-accent transition-colors"
                    >
                      <GithubIcon size={18} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Live demo for ${project.title}`}
                      className="text-muted hover:text-accent transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-muted text-sm leading-relaxed flex-1 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 font-mono text-xs rounded-md border border-border text-accent bg-accent/5">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
